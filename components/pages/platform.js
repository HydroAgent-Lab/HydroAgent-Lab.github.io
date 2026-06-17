import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function PlatformPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.platform;

  return (
    <SiteShell lang={lang}>
      <main className="main-content platform-page">
        <section className="platform-hero">
          <div className="platform-hero-backdrop" aria-hidden="true" />
          <div className="platform-hero-scrim" aria-hidden="true" />
          <PageLead
            eyebrow={page.lead.eyebrow}
            title={page.lead.title}
            text={page.lead.text}
            facts={page.lead.facts}
          />

          <section className="content-section platform-hero-value">
            <SectionHeader
              eyebrow={page.valueSection.eyebrow}
              title={page.valueSection.title}
            />
            {page.valueSection.paragraphs.map((p) => (
              <p className="section-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </section>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.signalsSection.eyebrow}
            title={page.signalsSection.title}
          />
          <ol className="editorial-list">
            {page.signalsSection.items.map((item, i) => (
              <li className="editorial-row" key={item.slice(0, 24)}>
                <span className="editorial-index">{`0${i + 1}`}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.pilotSection.eyebrow}
            title={page.pilotSection.title}
          />
          <dl className="split-list">
            {page.pilotSection.items.map((item) => (
              <div className="split-row" key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
          <div className="contact-callout platform-positioning-callout">
            <strong>{page.positioning.title}</strong>
            <p>{page.positioning.text}</p>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
