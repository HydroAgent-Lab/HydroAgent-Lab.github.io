import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";
import { membersContent } from "@/content/pages/members";

export function MembersPageContent({ lang = "en" }) {
  const c = membersContent[lang] || membersContent.en;

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
