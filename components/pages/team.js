import { CtaBand } from "@/components/cta-band";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function TeamPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.team;
  const memberCards = page.peopleSection.members;
  const metricItems = page.lead.facts;
  const missionItems = [
    ...page.operatingSection.items,
    ...page.principlesSection.items
  ].slice(0, 4);
  const timelineItems = page.prioritiesSection.items;

  return (
    <SiteShell lang={lang}>
      <main className="main-content team-about-page">
        <section className="team-about-hero">
          <div className="team-about-frame team-about-hero-grid">
            <div className="team-about-hero-copy">
              <p className="eyebrow">{page.lead.eyebrow}</p>
              <h1>{page.lead.title}</h1>
              <p>{page.lead.text}</p>
            </div>
          </div>
        </section>

        <section className="team-about-mission">
          <div className="team-about-frame">
            <p className="eyebrow">{page.missionSection.eyebrow}</p>
            <h2>{page.missionSection.title}</h2>
            <div className="team-about-manifest-grid">
              <p>{page.missionSection.text}</p>
              {missionItems.map((item) => (
                <p key={item.title}>
                  <strong>{item.title}</strong>
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="team-about-values" id="workstreams">
          <div className="team-about-frame team-about-values-layout">
            <aside className="team-about-values-quote">
              <p className="eyebrow">{page.workstreamsSection.eyebrow}</p>
              <h2>{page.workstreamsSection.title}</h2>
              <blockquote>{page.workstreamsSection.text}</blockquote>
            </aside>
            <div className="team-about-values-main">
              <p>{page.operatingSection.text}</p>
              <div className="team-about-values-grid">
                {page.workstreamsSection.items.map((item) => (
                  <article key={item.title}>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="team-about-members" id="members">
          <div className="team-about-frame">
            <p className="eyebrow">{page.peopleSection.eyebrow}</p>
            <h2>{page.peopleSection.title}</h2>
            <p className="team-about-section-copy">{page.peopleSection.text}</p>
            <div className="team-about-member-row" aria-label={page.peopleSection.title}>
              {memberCards.map((member) => (
                <article className="team-about-member-card" key={`${member.name}-${member.email || member.affiliation}`}>
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
                  {(member.email || member.linkedin) ? (
                    <div className="team-about-member-links">
                      {member.email ? (
                        <a href={`mailto:${member.email}`}>{page.peopleSection.emailLabel}</a>
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
              <p>{page.peopleSection.disciplineLine}</p>
              <p>{page.peopleSection.countryLine}</p>
              <span>{page.peopleSection.supportBadge}</span>
            </div>
          </div>
        </section>

        <section className="team-about-timeline" id="priorities">
          <div className="team-about-frame">
            <p className="eyebrow">{page.prioritiesSection.eyebrow}</p>
            <h2>{page.prioritiesSection.title}</h2>
            <div className="team-about-timeline-list">
              {timelineItems.map((item) => (
                <article key={item.title}>
                  <span>{item.phase}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="team-about-metrics" id="signals">
          <div className="team-about-frame">
            <p className="eyebrow">{page.signalsSection.eyebrow}</p>
            <div className="team-about-metrics-grid">
              {metricItems.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
              <article>
                <strong>{page.peopleSection.members.length}</strong>
                <span>{page.peopleSection.title}</span>
              </article>
            </div>
            <div className="team-about-signal-list">
              {page.signalsSection.items.map((item) => (
                <p key={item.label}>
                  <strong>{item.value}</strong>
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
