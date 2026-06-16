import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function RunsPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.runs;

  return (
    <SiteShell lang={lang}>
      <main className="main-content runs-page">
        <section className="runs-hero">
          <div className="runs-frame">
            <p className="eyebrow">{page.hero.eyebrow}</p>
            <h1>{page.hero.title}</h1>
            <p>{page.hero.text}</p>
            <div className="runs-refresh">{page.hero.refreshed}</div>
          </div>
        </section>

        <section className="runs-log">
          <div className="runs-frame">
            <div className="runs-toolbar">
              <p>{page.hero.note}</p>
              <div className="runs-filter-row" aria-label="Run categories">
                {page.filters.map((filter) => (
                  <span key={filter}>{filter}</span>
                ))}
              </div>
            </div>
            <div className="runs-list">
              {page.items.map((item, index) => (
                <article className="run-row" key={`${item.title}-${index}`}>
                  <span className="run-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="run-main">
                    <div className="run-kicker">
                      <span>{item.category}</span>
                      <span>{item.status}</span>
                      <span>{item.date}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <div className="run-tags">
                      {item.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>
                  <div className="run-meta">
                    <span>{item.model}</span>
                    <strong>{item.basin}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
