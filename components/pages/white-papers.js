import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

function getWhitePaperFollowSocial(content, lang) {
  const socials = content.ui.social || [];
  if (lang === "zh") {
    return socials.find((s) => s.label.includes("微信")) || socials[0];
  }
  return socials.find((s) => s.label === "LinkedIn") || socials[0];
}

function renderStatusText(text, followLabel, followSocial) {
  if (!followSocial || !text.includes(followLabel)) {
    return text;
  }

  const [before, after] = text.split(followLabel);
  return (
    <>
      {before}
      <a className="white-paper-status-social-link" href={followSocial.href} target="_blank" rel="noreferrer">
        {followLabel}
      </a>
      {after}
    </>
  );
}

export function WhitePapersPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const c = content.whitePapers;
  const followLabel = lang === "zh" ? "关注我们" : "Follow us";
  const followSocial = getWhitePaperFollowSocial(content, lang);

  return (
    <SiteShell lang={lang}>
      <main className="main-content white-papers-page">
        <PageLead
          eyebrow={c.lead.eyebrow}
          title={c.lead.title}
          text={c.lead.text}
          facts={c.lead.facts}
        />

        <section className="content-section">
          <SectionHeader
            eyebrow={c.cadenceSection.eyebrow}
            title={c.cadenceSection.title}
          />
          <div className="three-up-grid">
            {c.cadenceSection.items.map((item) => (
              <article className="info-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="contact-callout">
            <strong>{c.status.title}</strong>
            <p>{renderStatusText(c.status.text, followLabel, followSocial)}</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
