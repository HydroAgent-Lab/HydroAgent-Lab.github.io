import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

function getResearchFollowSocial(content, lang) {
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
      <a className="research-status-social-link" href={followSocial.href} target="_blank" rel="noreferrer">
        {followLabel}
      </a>
      {after}
    </>
  );
}

export function ResearchPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.research;
  const followLabel = lang === "zh" ? "关注我们" : "Follow us";
  const followSocial = getResearchFollowSocial(content, lang);

  return (
    <SiteShell lang={lang}>
      <main className="main-content research-page">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />

        <section className="content-section">
          <div className="research-motivation-layout">
            <div className="research-motivation-copy">
              <SectionHeader
                eyebrow={page.motivationSection.eyebrow}
                title={page.motivationSection.title}
              />
              {page.motivationSection.paragraphs.map((p) => (
                <p className="section-text" key={p.slice(0, 24)}>
                  {p}
                </p>
              ))}
            </div>
            <div className="contact-callout research-status-card">
              <strong>{page.status.title}</strong>
              <p>{renderStatusText(page.status.text, followLabel, followSocial)}</p>
            </div>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
