import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";
import { eventsContent } from "@/content/pages/events";

export function EventsPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const c = eventsContent[lang] || eventsContent.en;

  return (
    <SiteShell lang={lang}>
      <main className="main-content events-page">
        {/* A — Hero */}
        <PageLead
          eyebrow={c.lead.eyebrow}
          title={c.lead.title}
          text={c.lead.text}
          facts={c.lead.facts}
        />

        {/* B — Event list (zigzag) */}
        <section className="content-section">
          <SectionHeader
            eyebrow={lang === "zh" ? "活动记录" : "Timeline"}
            title={lang === "zh" ? "我们去过哪里" : "Where we have been"}
          />
          <div className="event-zigzag">
            {c.items.map((item, i) => (
              <article className={`event-row${i % 2 === 1 ? " event-row-reverse" : ""}`} key={item.title}>
                <div className="event-row-media">
                  {item.photos ? (
                    <img src={item.photos[0].src} alt={item.photos[0].alt} />
                  ) : (
                    <div className="event-row-placeholder">
                      <span>{item.photo}</span>
                    </div>
                  )}
                </div>
                <div className="event-row-body">
                  <p className="event-row-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.links && item.links.length > 0 && (
                    <div className="event-row-links">
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          {link.label} <span className="action-arrow">→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* C — CTA */}
        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
