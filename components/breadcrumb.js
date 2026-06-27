"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getSiteContent,
  localizeHref,
  normalizePath,
  stripLangPrefix
} from "@/content/site";

/**
 * Breadcrumb — shows "Home > Section > Page" for 2nd/3rd level pages.
 * Hidden on the home page (/ and /zh).
 */
export function Breadcrumb({ lang = "en" }) {
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname || "/");
  const basePath = stripLangPrefix(normalizedPathname);

  // Don't show on home page
  if (basePath === "/") return null;

  const content = getSiteContent(lang);
  const topNav = content.ui.nav;
  const homeLabel = lang === "zh" ? "首页" : "Home";

  // Find matching nav item and its parent group
  const crumbs = [{ label: homeLabel, href: localizeHref(lang, "/") }];

  for (const item of topNav) {
    if (item.children) {
      for (const child of item.children) {
        if (child.path && normalizePath(child.path) === basePath) {
          // Parent group (not linkable — it's a dropdown label)
          crumbs.push({ label: item.label });
          // Current page
          crumbs.push({ label: child.label });
          return <BreadcrumbUI crumbs={crumbs} />;
        }
      }
    } else if (item.path && normalizePath(item.path) === basePath) {
      crumbs.push({ label: item.label });
      return <BreadcrumbUI crumbs={crumbs} />;
    }
  }

  // Fallback: if path not found in nav, don't render
  return null;
}

function BreadcrumbUI({ crumbs }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="breadcrumb-item">
              {i > 0 && <span className="breadcrumb-sep" aria-hidden="true">&gt;</span>}
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className={isLast ? "breadcrumb-current" : "breadcrumb-text"}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
