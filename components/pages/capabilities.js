import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function CapabilitiesPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.capabilities;

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
            eyebrow={page.collaborationSection.eyebrow}
            title={page.collaborationSection.title}
          />
          <div className="three-up-grid">
            {page.collaborationSection.items.map((item, index) => (
              <article className="info-card" key={item.title}>
                <span className="offering-type">{`0${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.tasksSection.eyebrow}
            title={page.tasksSection.title}
            text={page.tasksSection.text}
          />
          <div className="capability-grid">
            {page.tasksSection.items.map((item) => (
              <article className="capability-card" key={item.slice(0, 24)}>
                <span className="capability-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
