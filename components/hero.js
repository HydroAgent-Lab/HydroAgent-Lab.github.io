import Link from "next/link";
import { localizeHref } from "@/content/site";

export function Hero({ lang = "en", content }) {
  const hero = content.home.hero;

  return (
    <section className="hero brand-hero">
      {/* Fullscreen background image — content weighted to the right */}
      <img
        className="hero-video-bg"
        src="/assets/webui_light.jpeg"
        alt=""
        aria-hidden="true"
      />

      {/* Mobile-only: cropped banner focusing on the four function cards */}
      <div className="hero-cards-crop" aria-hidden="true" />

      {/* Left-side gradient scrim for text readability */}
      <div className="brand-hero-scrim" aria-hidden="true" />

      {/* Text overlay — sits above the video */}
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          Hydro<span>Agent</span>
        </h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <p className="hero-text">{hero.text}</p>
        <div className="hero-actions">
          <Link className="primary-action" href={localizeHref(lang, hero.primaryPath)}>
            {hero.primary} <span className="action-arrow">→</span>
          </Link>
          <Link className="secondary-action" href={hero.secondaryPath}>
            {hero.secondary} <span className="action-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Video tag — bottom-right, below the video area */}
      {hero.videoTag && (
        <p className="hero-video-tag">{hero.videoTag}</p>
      )}
    </section>
  );
}
