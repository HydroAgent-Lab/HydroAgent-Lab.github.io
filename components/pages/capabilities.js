import { CtaBand } from "@/components/cta-band";
import { CapabilityDirectory } from "@/components/capability-directory";
import { PageLead } from "@/components/page-lead";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

export function CapabilitiesPageContent({ lang = "en" }) {
  const content = getSiteContent(lang);
  const page = content.capabilities;

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <PageLead
          eyebrow={page.lead.eyebrow}
          title={page.lead.title}
          text={page.lead.text}
          facts={page.lead.facts}
        />
        <CapabilityDirectory content={content} />
        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
