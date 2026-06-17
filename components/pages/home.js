import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent, localizeHref } from "@/content/site";

export function HomePageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.home;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <Hero lang={lang} content={content} />

        <section className="content-section">
          <SectionHeader
            eyebrow={page.whatSection.eyebrow}
            title={page.whatSection.title}
          />
          <div className="capability-grid">
            {page.whatSection.items.map((item) => (
              <article className="capability-card" key={item.slice(0, 24)}>
                <span className="capability-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.flagshipSection.eyebrow}
            title={page.flagshipSection.title}
          />
          <p className="section-text">{page.flagshipSection.text}</p>
          <a className="primary-action" href={localizeHref(lang, page.flagshipSection.ctaPath)}>
            {page.flagshipSection.cta} <span className="action-arrow">→</span>
          </a>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.trustSection.eyebrow}
            title={page.trustSection.title}
          />
          <div className="capability-grid">
            {page.trustSection.items.map((item) => (
              <article className="capability-card" key={item.slice(0, 24)}>
                <span className="capability-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.whoSection.eyebrow}
            title={page.whoSection.title}
          />
          <div className="three-up-grid">
            {page.whoSection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
