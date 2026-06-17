import { PageLead } from "@/components/page-lead";
import { SiteShell } from "@/components/shell";
import { eventsContent } from "@/content/pages/events";

export function EventsPageContent({ lang = "en" }) {
  const c = eventsContent[lang] || eventsContent.en;

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
          <div className="event-list">
            {c.items.map((item) => (
              <article className="event-card" key={item.title}>
                <div className="event-card-media" aria-hidden="true">
                  <span>{item.photo}</span>
                </div>
                <div className="event-card-body">
                  <h3>{item.title}</h3>
                  <p className="event-card-meta">{item.meta}</p>
                  <p>{item.text}</p>
                  {item.links && item.links.length ? (
                    <div className="event-card-links">
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
