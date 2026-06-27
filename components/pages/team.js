import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function TeamPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.team;

  return (
    <SiteShell lang={lang}>
      <main className="main-content team-page">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
        />

        <section className="content-section">
          <SectionHeader
            eyebrow={page.questionSection.eyebrow}
            title={page.questionSection.title}
            text={page.questionSection.text}
          />
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.credibilitySection.eyebrow}
            title={page.credibilitySection.title}
          />
          <div className="signals-grid">
            {page.credibilitySection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="contact-callout">
            <strong>{page.transparency.title}</strong>
            <p>{page.transparency.text}</p>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
