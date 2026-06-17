import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { whitePapersContent } from "@/content/pages/white-papers";

export function WhitePapersPageContent({ lang = "en" }) {
  const c = whitePapersContent[lang] || whitePapersContent.en;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <PageLead
          eyebrow={c.lead.eyebrow}
          title={c.lead.title}
          text={c.lead.text}
          facts={c.lead.facts}
        />

        <section className="content-section">
          <SectionHeader
            eyebrow={c.cadenceSection.eyebrow}
            title={c.cadenceSection.title}
          />
          <div className="three-up-grid">
            {c.cadenceSection.items.map((item) => (
              <article className="info-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="contact-callout">
            <strong>{c.status.title}</strong>
            <p>{c.status.text}</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
