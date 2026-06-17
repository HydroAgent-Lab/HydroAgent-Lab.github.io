import { PageLead } from "@/components/page-lead";
import { SiteShell } from "@/components/shell";
import { membersContent } from "@/content/pages/members";
import { hydroAgentTeamMembers } from "@/content/team-members";

export function MembersPageContent({ lang = "en" }) {
  const c = membersContent[lang] || membersContent.en;

  return (
    <SiteShell lang={lang}>
      <main className="main-content team-about-page">
        <PageLead
          eyebrow={c.lead.eyebrow}
          title={c.lead.title}
          text={c.lead.text}
          facts={c.lead.facts}
        />

        <section className="content-section members-map-section">
          <figure className="members-map">
            <img src="/assets/team-global-map.webp" alt={c.mapAlt} loading="lazy" />
          </figure>
        </section>

        <section className="team-about-members" id="members">
          <div className="team-about-frame">
            <p className="eyebrow">{c.roster.eyebrow}</p>
            <h2>{c.roster.title}</h2>
            <p className="team-about-section-copy">{c.roster.text}</p>
            <div className="team-about-member-row" aria-label={c.roster.title}>
              {hydroAgentTeamMembers.map((member) => (
                <article
                  className="team-about-member-card"
                  key={`${member.name}-${member.email || member.affiliation}`}
                >
                  <div className="team-about-member-avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <h3>
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noreferrer">
                        {member.name}
                      </a>
                    ) : (
                      member.name
                    )}
                    <span>{member.focus}</span>
                  </h3>
                  <p>{member.affiliation}</p>
                  {member.email || member.linkedin ? (
                    <div className="team-about-member-links">
                      {member.email ? (
                        <a href={`mailto:${member.email}`}>{c.roster.emailLabel}</a>
                      ) : null}
                      {member.linkedin ? (
                        <a href={member.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="team-roster-summary">
              <p>{c.roster.disciplineLine}</p>
              <p>{c.roster.countryLine}</p>
              <span>{c.roster.supportBadge}</span>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
