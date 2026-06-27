import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function ContactPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.contact;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">

        {/* A. Hero Contact — split layout like page-lead */}
        <section className="content-section contact-hero-section">
          <div className="contact-hero">
            <div className="contact-hero-left">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
            </div>
            <div className="contact-hero-right">
              <p className="contact-hero-text">{page.hero.text}</p>
              <a
                className="contact-email-btn"
                href={`mailto:${page.hero.email}`}
              >
                {page.hero.emailCta} <span className="action-arrow">→</span>
              </a>
              <span className="contact-response-note">{page.hero.response}</span>
              <div className="contact-channels">
                {page.hero.channels.map((ch) => (
                  <div className="contact-channel" key={ch.label}>
                    <span className="contact-channel-label">{ch.label}</span>
                    {ch.href ? (
                      <a href={ch.href} target="_blank" rel="noopener noreferrer">{ch.value}</a>
                    ) : (
                      <strong>{ch.value}</strong>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* B. Inquiry Types — split-row format */}
        <section className="content-section contact-inquiry-section">
          <SectionHeader
            eyebrow={page.inquirySection.eyebrow}
            title={page.inquirySection.title}
          />
          <dl className="contact-inquiry-list">
            {page.inquirySection.items.map((item) => (
              <div className="contact-inquiry-row" key={item.title}>
                <span className="contact-inquiry-icon" style={item.iconSize ? { width: item.iconSize, height: item.iconSize } : undefined}>
                  {item.icon.startsWith("img:") ? (
                    <img src={item.icon.slice(4)} alt="" style={item.iconSize ? { width: item.iconSize, height: item.iconSize } : undefined} />
                  ) : (
                    item.icon
                  )}
                </span>
                <div className="contact-inquiry-content">
                  <dt>{item.title}</dt>
                  <dd>{item.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* C. How It Works — scroll-card style */}
        <section className="content-section home-bottom-band">
          <SectionHeader
            eyebrow={page.stepsSection.eyebrow}
            title={page.stepsSection.title}
          />
          <div className="scroll-strip">
            {page.stepsSection.items.map((step) => (
              <article className="scroll-card" key={step.id}>
                <h3><span className="step-number">{step.id}</span>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* D. CTA Callout — using cta-band style */}
        <section className="cta-band">
          <div className="cta-copy">
            <h2>{page.ctaCallout.title}</h2>
            <p>{page.ctaCallout.text}</p>
          </div>
          <div className="cta-actions">
            <a
              className="contact-cta-btn"
              href={`mailto:${page.ctaCallout.email}`}
            >
              {page.ctaCallout.cta} <span className="action-arrow">→</span>
            </a>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
