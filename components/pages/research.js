import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function ResearchPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.research;

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
            eyebrow={page.motivationSection.eyebrow}
            title={page.motivationSection.title}
          />
          {page.motivationSection.paragraphs.map((p) => (
            <p className="section-text" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
          <div className="contact-callout">
            <strong>{page.status.title}</strong>
            <p>{page.status.text}</p>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
