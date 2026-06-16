import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function WorkflowPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.workflow;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />

        <section className="content-section workflow-section">
          <SectionHeader
            eyebrow={page.stepsSection.eyebrow}
            title={page.stepsSection.title}
            text={page.stepsSection.text}
          />
          <div className="workflow-rail workflow-timeline">
            {page.stepsSection.items.map((step) => (
              <article className="workflow-step" key={step.id}>
                <div className="workflow-step-index">{step.id}</div>
                <div className="workflow-step-body">
                  <h3>{step.name}</h3>
                  <p>{step.summary}</p>
                  <div className="workflow-meta">
                    <span>{step.owner}</span>
                    <strong>{step.output}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.artifactsSection.eyebrow}
            title={page.artifactsSection.title}
          />
          <div className="three-up-grid">
            {page.artifactsSection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section handoff-section">
          <div className="handoff-copy">
            <p className="eyebrow">{page.handoffSection.eyebrow}</p>
            <h2>{page.handoffSection.title}</h2>
            <p className="section-text">{page.handoffSection.text}</p>
          </div>
          <div className="handoff-points">
            {page.handoffSection.points.map((point) => (
              <article className="argument-row" key={point}>
                <span className="argument-bullet" />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
