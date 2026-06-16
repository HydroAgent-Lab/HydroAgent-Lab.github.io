import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";
import { eventsContent } from "@/content/pages/events";

export function EventsPageContent({ lang = "en" }) {
  const c = eventsContent[lang] || eventsContent.en;

  return (
    <SiteShell lang={lang}>
      <main className="page-content">
        <section className="section">
          <p className="section-eyebrow">{c.lead.eyebrow}</p>
          <h1>{c.lead.title}</h1>
          <p>{c.lead.text}</p>
        </section>
      </main>
    </SiteShell>
  );
}
