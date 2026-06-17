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
      <main className="main-content">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />

        <section className="content-section">
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

        <section className="content-section">
          <SectionHeader
            eyebrow={page.signalsSection.eyebrow}
            title={page.signalsSection.title}
          />
          <div className="capability-grid">
            {page.signalsSection.items.map((item) => (
              <article className="capability-card" key={item.slice(0, 24)}>
                <span className="capability-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.pilotSection.eyebrow}
            title={page.pilotSection.title}
          />
          <div className="three-up-grid">
            {page.pilotSection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="contact-callout">
            <strong>{page.positioning.title}</strong>
            <p>{page.positioning.text}</p>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
