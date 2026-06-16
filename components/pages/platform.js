import { CtaBand } from "@/components/cta-band";
import { PageLead } from "@/components/page-lead";
import { SectionHeader } from "@/components/section-header";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

function PlatformArchitectureDiagram({ layers }) {
  return (
    <div className="platform-architecture-diagram" aria-label="HydroAgent architecture diagram">
      <div className="diagram-flow">
        <span>Inputs</span>
        <span>Review</span>
        <span>Delivery</span>
      </div>
      <div className="diagram-layers">
        {layers.map((layer, index) => (
          <article className={`diagram-layer diagram-layer-${index + 1}`} key={layer.title}>
            <span>{`0${index + 1}`}</span>
            <h3>{layer.title}</h3>
            <p>{layer.text}</p>
          </article>
        ))}
      </div>
      <div className="diagram-dashboard" aria-hidden="true">
        <div className="dashboard-topline" />
        <div className="dashboard-map">
          <span />
          <span />
          <span />
        </div>
        <div className="dashboard-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function PlatformPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.platform;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />

        <section className="content-section">
          <SectionHeader
            eyebrow={page.offeringsSection.eyebrow}
            title={page.offeringsSection.title}
          />
          <div className="three-up-grid">
            {page.offeringsSection.items.map((item, index) => (
              <article className={`info-card offering-card offering-card-${index + 1}`} key={item.title}>
                <span className="offering-type">{index === 0 ? "Product" : index === 1 ? "System" : "Service"}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section platform-architecture">
          <SectionHeader
            eyebrow={page.architectureSection.eyebrow}
            title={page.architectureSection.title}
            text={page.architectureSection.text}
          />
          <PlatformArchitectureDiagram layers={page.architectureSection.layers} />
          <div className="architecture-stack">
            {page.architectureSection.layers.map((layer, index) => (
              <article key={layer.title} className="architecture-layer">
                <span>{`0${index + 1}`}</span>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.principlesSection.eyebrow}
            title={page.principlesSection.title}
          />
          <div className="three-up-grid">
            {page.principlesSection.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section platform-surfaces">
          <SectionHeader
            eyebrow={page.surfacesSection.eyebrow}
            title={page.surfacesSection.title}
          />
          <div className="surface-grid">
            {page.surfacesSection.items.map((item) => (
              <article className="surface-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeader
            eyebrow={page.capabilitiesSection.eyebrow}
            title={page.capabilitiesSection.title}
            text={page.capabilitiesSection.text}
          />
          <div className="capability-grid">
            {page.capabilitiesSection.items.map((item) => (
              <article className="capability-card" key={item}>
                <span className="capability-dot" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
