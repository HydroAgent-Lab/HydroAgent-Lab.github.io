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

        <section className="content-section research-presentation-section">
          <SectionHeader
            eyebrow={page.presentationSection.eyebrow}
            title={page.presentationSection.title}
            text={page.presentationSection.text}
          />
          <div className="research-presentation-panel">
            {page.presentationSection.details.map((item) => (
              <article className="research-detail-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
          <a className="primary-action research-download" href={page.presentationSection.href}>
            {page.presentationSection.cta}
          </a>
        </section>

        <section className="content-section research-results-section">
          <SectionHeader
            eyebrow={page.resultsSection.eyebrow}
            title={page.resultsSection.title}
          />
          <div className="research-result-grid">
            {page.resultsSection.items.map((item) => (
              <article className="research-result-card" key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section research-takeaways-section">
          <div className="about-milestone-head">
            <p className="eyebrow">{page.takeawaysSection.eyebrow}</p>
            <h2>{page.takeawaysSection.title}</h2>
          </div>
          <div className="about-milestone-list">
            {page.takeawaysSection.items.map((item, index) => (
              <article className="about-milestone-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section thesis-section">
          <div className="thesis-card">
            <p className="eyebrow">{page.thesisSection.eyebrow}</p>
            <h2>{page.thesisSection.title}</h2>
          </div>
          <div className="thesis-claims">
            {page.thesisSection.claims.map((claim) => (
              <article className="argument-row" key={claim}>
                <span className="argument-bullet" />
                <p>{claim}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.themesSection.eyebrow}
            title={page.themesSection.title}
            text={page.themesSection.text}
          />
          <div className="three-up-grid">
            {page.themesSection.items.map((theme) => (
              <article className="info-card" key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.evaluationSection.eyebrow}
            title={page.evaluationSection.title}
          />
          <div className="surface-grid">
            {page.evaluationSection.items.map((item) => (
              <article className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section narrative-panel">
          <SectionHeader
            eyebrow={page.narrativeSection.eyebrow}
            title={page.narrativeSection.title}
          />
          <p className="longform-text">{page.narrativeSection.text}</p>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
