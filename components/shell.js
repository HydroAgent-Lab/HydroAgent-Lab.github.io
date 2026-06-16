"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
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
  const topNav = content.ui.nav;
  const footerGroups = content.ui.footerGroups;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
    setExpandedId(null);
  }, []);

  const toggleAccordion = useCallback((id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setExpandedId(null);
  }, []);

  return (
    <div className={`page-shell lang-${lang}`} id="top">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <Link className="nav-logo-pill" href={localizeHref(lang, "/")}>
            <img src="/assets/hydroagent-mark.svg" alt="" aria-hidden="true" />
          </Link>
          <div className="nav-links-pill">
            {topNav.map((item) => {
              if (item.children) {
                const childPaths = item.children.filter((c) => c.path).map((c) => normalizePath(localizeHref(lang, c.path)));
                const isActive = childPaths.includes(normalizedPathname);
                return (
                  <div key={item.id} className="nav-dropdown-wrap">
                    <span className={`nav-item-parent${isActive ? " active" : ""}`}>
                      {item.label}
                      <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <div className="nav-dropdown">
                      {item.children.map((child) => {
                        if (!child.path) {
                          return (
                            <span key={child.id} className="nav-dropdown-item disabled">
                              {child.label}
                            </span>
                          );
                        }
                        const childHref = localizeHref(lang, child.path);
                        const childActive = normalizedPathname === normalizePath(childHref);
                        return (
                          <Link key={child.id} href={childHref} className={`nav-dropdown-item${childActive ? " active" : ""}`}>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              const href = localizeHref(lang, item.path);
              const isActive = normalizedPathname === normalizePath(href);
              return (
                <Link key={item.id} href={href} className={isActive ? "active" : ""}>
                  {item.label}
                </Link>
              );
            })}
            <Link className="header-lang" href={switchHref}>
              {content.ui.switchLabel}
            </Link>
          </div>
        </nav>
        <button
          className={`nav-hamburger${drawerOpen ? " open" : ""}`}
          onClick={toggleDrawer}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && <div className="nav-overlay" onClick={closeDrawer} />}
      <aside className={`nav-drawer${drawerOpen ? " open" : ""}`}>
        {topNav.map((item) => {
          if (item.children) {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="drawer-group">
                <button
                  className={`drawer-parent${isExpanded ? " expanded" : ""}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  {item.label}
                  <svg className="drawer-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isExpanded && (
                  <div className="drawer-children">
                    {item.children.map((child) => {
                      if (!child.path) {
                        return (
                          <span key={child.id} className="drawer-item disabled">
                            {child.label}
                          </span>
                        );
                      }
                      const childHref = localizeHref(lang, child.path);
                      const childActive = normalizedPathname === normalizePath(childHref);
                      return (
                        <Link key={child.id} href={childHref} className={`drawer-item${childActive ? " active" : ""}`} onClick={closeDrawer}>
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          const href = localizeHref(lang, item.path);
          const isActive = normalizedPathname === normalizePath(href);
          return (
            <Link key={item.id} href={href} className={`drawer-item top-level${isActive ? " active" : ""}`} onClick={closeDrawer}>
              {item.label}
            </Link>
          );
        })}
        <Link className="drawer-item drawer-lang" href={switchHref} onClick={closeDrawer}>
          {content.ui.switchLabel}
        </Link>
      </aside>
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
              {group.items.map((item) => (
                <Link key={item.path} href={localizeHref(lang, item.path)}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="footer-meta">
          <p>{content.ui.footerMetaOne}</p>
          <p>{content.ui.footerMetaTwo}</p>
        </div>
      </footer>
      <a className="back-to-top" href="#top" aria-label={lang === "zh" ? "\u56de\u5230\u9876\u90e8" : "Back to top"}>
        ↑
      </a>
    </div>
  );
}
