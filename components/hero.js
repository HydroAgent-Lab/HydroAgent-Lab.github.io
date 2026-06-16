import Link from "next/link";
import { localizeHref } from "@/content/site";

export function Hero({ lang = "en", content }) {
  const hero = content.home.hero;

  return (
    <section className="hero brand-hero">
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />
      <div className="brand-hero-scrim" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.title === "HydroAgent" ? (
            <>
              Hydro<span>Agent</span>
            </>
          ) : (
            hero.title
          )}
        </h1>
        <p className="hero-text">{hero.text}</p>
        <div className="hero-actions">
          <Link className="primary-action" href={localizeHref(lang, hero.primaryPath)}>
            {hero.primary} <span className="action-arrow">→</span>
          </Link>
          <Link className="secondary-action" href={localizeHref(lang, hero.secondaryPath)}>
            {hero.secondary} <span className="action-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
