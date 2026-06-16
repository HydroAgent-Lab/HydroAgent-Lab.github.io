import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";
import { whitePapersContent } from "@/content/pages/white-papers";

export function WhitePapersPageContent({ lang = "en" }) {
  const c = whitePapersContent[lang] || whitePapersContent.en;

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
