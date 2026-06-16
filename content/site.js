// Re-export helpers
export { normalizePath, localizeHref, stripLangPrefix, getLanguageSwitchHref } from "./helpers";

// Re-export team members
export { hydroAgentTeamMembers } from "./team-members";

// Assemble siteContent from sub-modules
import { navContent } from "./nav";
import { homeContent } from "./pages/home";
import { platformContent } from "./pages/platform";
import { capabilitiesContent } from "./pages/capabilities";
import { workflowContent } from "./pages/workflow";
import { researchContent } from "./pages/research";
import { runsContent } from "./pages/runs";
import { teamContent } from "./pages/team";
import { careersContent } from "./pages/careers";
import { contactContent } from "./pages/contact";

export const siteContent = {
  en: {
    ui: navContent.en,
    home: homeContent.en,
    platform: platformContent.en,
    capabilities: capabilitiesContent.en,
    workflow: workflowContent.en,
    research: researchContent.en,
    runs: runsContent.en,
    team: teamContent.en,
    careers: careersContent.en,
    contact: contactContent.en
  },
  zh: {
    ui: navContent.zh,
    home: homeContent.zh,
    platform: platformContent.zh,
    capabilities: capabilitiesContent.zh,
    workflow: workflowContent.zh,
    research: researchContent.zh,
    runs: runsContent.zh,
    team: teamContent.zh,
    careers: careersContent.zh,
    contact: contactContent.zh
  }
};

export function getSiteContent(lang = "en") {
  return siteContent[lang] || siteContent.en;
}
