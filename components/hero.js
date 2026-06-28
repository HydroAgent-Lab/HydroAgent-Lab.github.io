import Link from "next/link";
import { localizeHref } from "@/content/site";

export function Hero({ lang = "en", content }) {
  const hero = content.home.hero;

  return (
    <section className="hero brand-hero">
      {/* Left-side gradient scrim for text readability */}
      <div className="brand-hero-scrim" aria-hidden="true" />

      {/* Stage = the image + text GROUP. Anchoring them together (not each to a
          different hero edge) keeps their relative position constant on any
          screen: image upper-right, text lower-left, fixed gap. */}
      <div className="hero-stage">
        {/* Background/product image — content weighted to the right */}
        <img
          className="hero-video-bg"
          src="/assets/Webui.png"
          alt=""
          aria-hidden="true"
        />

        {/* Text overlay — part of the same group as the image */}
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
      </div>

      {/* Video tag — bottom-right, below the video area */}
      {hero.videoTag && (
        <p className="hero-video-tag">{hero.videoTag}</p>
      )}
    </section>
  );
}
