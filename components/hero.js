import Link from "next/link";
import { localizeHref } from "@/content/site";

export function Hero({ lang = "en", content }) {
  const hero = content.home.hero;

  return (
    <section className="hero brand-hero">
      {/* Fullscreen background video — content weighted to the right */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />

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
        {hero.videoTag && (
          <p className="hero-video-tag">{hero.videoTag}</p>
        )}
      </div>
    </section>
  );
}
