import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function ContactPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.contact;

  return (
    <SiteShell lang={lang}>
      <main className="main-content contact-page">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />

        <section className="content-section contact-primary-section">
          <div className="contact-primary-card">
            <p className="eyebrow">{page.primarySection.eyebrow}</p>
            <h2>{page.primarySection.title}</h2>
            <p className="section-text">{page.primarySection.summary}</p>
          </div>
          <div className="contact-details-grid">
            <article className="contact-detail-card">
              <span>{page.primarySection.emailLabel}</span>
              <strong>{page.primarySection.email}</strong>
            </article>
            <article className="contact-detail-card">
              <span>{page.primarySection.responseLabel}</span>
              <strong>{page.primarySection.response}</strong>
            </article>
            <article className="contact-detail-card">
              <span>{page.primarySection.formatLabel}</span>
              <strong>{page.primarySection.format}</strong>
            </article>
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.inquirySection.eyebrow}
            title={page.inquirySection.title}
          />
          <div className="three-up-grid">
            {page.inquirySection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.stepsSection.eyebrow}
            title={page.stepsSection.title}
          />
          <div className="contact-steps">
            {page.stepsSection.items.map((step) => (
              <article className="step-card" key={step.id}>
                <span>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="contact-callout">
            <strong>{page.callout.title}</strong>
            <p>{page.callout.text}</p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
