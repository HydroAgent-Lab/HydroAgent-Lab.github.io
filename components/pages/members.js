import Link from "next/link";
import { PageLead } from "@/components/page-lead";
import { SiteShell } from "@/components/shell";
import { membersContent } from "@/content/pages/members";
import { hydroAgentTeamMembers } from "@/content/team-members";
import { localizeHref } from "@/content/site";

export function MembersPageContent({ lang = "en" }) {
  const c = membersContent[lang] || membersContent.en;

  return (
    <SiteShell lang={lang}>
      <main className="main-content team-about-page">
        <section className="members-hero">
          <div
            className="members-hero-backdrop"
            role="img"
            aria-label={c.mapAlt}
          />
          <div className="members-hero-scrim" aria-hidden="true" />
          <PageLead
            eyebrow={c.lead.eyebrow}
            title={c.lead.title}
            text={c.lead.text}
            facts={c.lead.facts}
          />
        </section>

        <section className="team-about-members" id="members">
          <div className="team-about-frame">
            <p className="eyebrow">{c.roster.eyebrow}</p>
            <h2>{c.roster.title}</h2>
            <p className="team-about-section-copy">{c.roster.text}</p>
            <div className="team-about-member-row" aria-label={c.roster.title}>
              {hydroAgentTeamMembers.map((member) => {
                const isZh = lang === "zh";
                const name = isZh && member.nameZh ? member.nameZh : member.name;
                const affiliation =
                  isZh && member.affiliationZh ? member.affiliationZh : member.affiliation;
                const focus = isZh && member.focusZh ? member.focusZh : member.focus;
                return (
                <article
                  className="team-about-member-card"
                  key={`${member.name}-${member.email || member.affiliation}`}
                >
                  <div
                    className="team-about-member-avatar"
                    aria-hidden={member.photo ? undefined : "true"}
                  >
                    {member.photo ? (
                      <img src={member.photo} alt={name} loading="lazy" />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <h3>
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                    <span>{focus}</span>
                  </h3>
                  <p>{affiliation}</p>
                  {member.email || member.orcid || member.linkedin ? (
                    <div className="team-about-member-links">
                      {member.email ? (
                        <a href={`mailto:${member.email}`}>{c.roster.emailLabel}</a>
                      ) : null}
                      {member.orcid ? (
                        <a href={member.orcid} target="_blank" rel="noreferrer">
                          ORCID
                        </a>
                      ) : null}
                      {member.linkedin ? (
                        <a href={member.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
                );
              })}
              <Link
                className="team-about-member-card team-about-join-card"
                href={localizeHref(lang, "/careers")}
              >
                <strong>{lang === "zh" ? "欢迎加入我们" : "Welcome to join us"}</strong>
                <span className="team-about-join-link">
                  {lang === "zh" ? "加入我们" : "Join us"}
                  <span aria-hidden="true"> →</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
