"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLanguageSwitchHref,
  getSiteContent,
  localizeHref,
  normalizePath
} from "@/content/site";

export function SiteShell({ children, lang = "en" }) {
  const pathname = usePathname();
  const content = getSiteContent(lang);
  const switchHref = getLanguageSwitchHref(pathname || "/", lang);
  const normalizedPathname = normalizePath(pathname || "/");
  const primaryPaths = ["/platform", "/capabilities", "/research", "/team", "/contact"];
  const primaryNav = content.ui.nav.filter((item) => primaryPaths.includes(item.path));
  const footerGroups =
    lang === "zh"
      ? [
          { title: "平台产品", paths: ["/platform", "/capabilities", "/workflow", "/runs"] },
          { title: "技术资源", paths: ["/research"] },
          { title: "关于我们", paths: ["/team", "/careers", "/contact"] }
        ]
      : [
          { title: "Platform", paths: ["/platform", "/capabilities", "/workflow", "/runs"] },
          { title: "Resources", paths: ["/research"] },
          { title: "Company", paths: ["/team", "/careers", "/contact"] }
        ];
  const navByPath = new Map(content.ui.nav.map((item) => [item.path, item]));

  return (
    <div className={`page-shell lang-${lang}`} id="top">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <Link className="nav-logo-pill" href={localizeHref(lang, "/")}>
            <img src="/assets/hydroagent-mark.svg" alt="" aria-hidden="true" />
          </Link>
          <div className="nav-links-pill">
            {primaryNav.map((item) => {
              const href = localizeHref(lang, item.path);
              const isActive = normalizedPathname === normalizePath(href);
              return (
                <Link key={item.path} href={href} className={isActive ? "active" : ""}>
                  {item.label}
                </Link>
              );
            })}
            <Link className="header-lang" href={switchHref}>
              {content.ui.switchLabel}
            </Link>
          </div>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-brand">
          <span className="footer-brand-mark">
            <img src="/assets/hydroagent-mark.svg" alt="" aria-hidden="true" />
          </span>
          <strong>HydroAgent-Lab</strong>
          <p>{content.ui.footerTitle}</p>
        </div>
        <nav className="footer-nav footer-nav-grouped" aria-label="Footer">
          {footerGroups.map((group) => (
            <div className="footer-nav-column" key={group.title}>
              <strong>{group.title}</strong>
              {group.paths.map((path) => {
                const item = navByPath.get(path);
                if (!item) return null;
                return (
                  <Link key={path} href={localizeHref(lang, item.path)}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="footer-meta">
          <p>{content.ui.footerMetaOne}</p>
          <p>{content.ui.footerMetaTwo}</p>
        </div>
      </footer>
      <a className="back-to-top" href="#top" aria-label={lang === "zh" ? "回到顶部" : "Back to top"}>
        ↑
      </a>
    </div>
  );
}
