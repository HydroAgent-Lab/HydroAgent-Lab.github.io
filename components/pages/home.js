import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/shell";
import { getSiteContent } from "@/content/site";

function ArchitectureWorld({ content }) {
  const platform = content.platform;
  const layers = platform.architectureSection.layers;

  return (
    <section className="architecture-world" id="architecture">
      <div className="architecture-sticky-header">
        <p className="architecture-label">HydroAgent Intelligence Architecture</p>
        <p className="architecture-world-line">{platform.architectureSection.title}</p>
      </div>

      <div className="architecture-scene">
        <div className="architecture-core" aria-hidden="true">
          <span className="core-ring ring-one" />
          <span className="core-ring ring-two" />
          <span className="core-ring ring-three" />
          <span className="core-center">H</span>
        </div>
        <div className="architecture-layer-list">
          {layers.map((layer, index) => (
            <article className="architecture-world-card" key={layer.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandManifesto({ lang }) {
  const copy =
    lang === "zh"
      ? {
          eyebrow: "\u5b9a\u4f4d",
          title: ["\u4e0d\u662f\u53c8\u4e00\u4e2a\u6c34\u6587\u5de5\u5177\uff0c", "\u800c\u662f\u4e00\u5957\u51b3\u7b56\u64cd\u4f5c\u5c42\u3002"],
          text: ["HydroAgent-Lab \u628a\u6a21\u578b\u3001\u6570\u636e\u3001\u4e13\u5bb6\u5224\u65ad\u4e0e\u884c\u52a8\u6d41\u7a0b\u7ec4\u7ec7\u8fdb\u540c\u4e00\u4e2a\u754c\u9762\u3002", "\u7528\u6237\u770b\u5230\u7684\u4e0d\u662f\u6280\u672f\u5806\u6808\uff0c\u800c\u662f\u4e00\u6761\u66f4\u6e05\u6670\u7684\u51b3\u7b56\u94fe\u3002"]
        }
      : {
          eyebrow: "Positioning",
          title: ["Not another hydrology tool.", "An intelligence layer for water decisions."],
          text: ["HydroAgent-Lab brings models, data, expert judgment, and operational action into one interface.", "The user does not see a technology stack. They see a clearer decision chain."]
        };

  return (
    <section className="brand-manifesto">
      <p className="eyebrow">{copy.eyebrow}</p>
      <div className="manifesto-grid">
        <h2>{copy.title.map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}</h2>
        <p>{copy.text.map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}</p>
      </div>
    </section>
  );
}

function AgentThinking({ content }) {
  const section = content.home.thinkingSection;
  const lines = Array.isArray(section.title) ? section.title : [section.title];

  return (
    <section className="agent-thinking">
      <div className="agent-thinking-head">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{lines.map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}</h2>
        <p>{section.text}</p>
      </div>
      <div className="agent-thinking-steps">
        {section.items.map((item, index) => (
          <article className="agent-thinking-step" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HumanCenteredAgent({ content }) {
  const section = content.home.humanSection;

  return (
    <section className="human-agent">
      <div className="human-agent-copy">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.text}</p>
      </div>
      <div className="hydrograph-panel" aria-hidden="true">
        <img src="/assets/hydroagent-mark.svg" alt="" />
        <svg viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path d="M0,235 C150,230 230,225 320,215 C400,206 440,120 520,80 C580,52 640,55 700,120 C760,184 820,210 920,224 C1020,238 1120,239 1200,235" />
        </svg>
      </div>
    </section>
  );
}

function BusinessMap({ content, lang }) {
  const { highlightsSection } = content.home;
  const items = highlightsSection.items;
  const label = lang === "zh" ? "\u4ea7\u54c1\u7ebf" : "Product Lines";

  return (
    <section className="business-map" id="business">
      <div className="business-heading-line">
        <p className="eyebrow">{label}</p>
        <h2>{highlightsSection.title}</h2>
      </div>
      <div className="business-line-list">
        {items.map((item, index) => (
          <article className="business-line" key={`${item.title}-${index}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function splitFirstSentence(str) {
  const match = str.match(/^(.+?[。．.，])\s*(.*)/s);
  if (!match) return [str];
  return match[2] ? [match[1], match[2]] : [match[1]];
}

function ProofStatement({ lang }) {
  const copy =
    lang === "zh"
      ? {
          eyebrow: "\u539f\u5219",
          title: "\u7cfb\u7edf\u5904\u7406\u590d\u6742\u6027\uff0c\u7528\u6237\u638c\u63e1\u5224\u65ad\u94fe\u8def\u3002",
          points: ["\u6e05\u6670\u7684\u6001\u52bf", "\u53ef\u89e3\u91ca\u7684\u5224\u65ad", "\u53ef\u6267\u884c\u7684\u4e0b\u4e00\u6b65"]
        }
      : {
          eyebrow: "Principle",
          title: "Complexity stays inside the system. The decision chain stays clear to the user.",
          points: ["Clear situation awareness", "Explainable judgment", "Actionable next step"]
        };

  const lines = splitFirstSentence(copy.title);

  return (
    <section className="proof-statement">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2>{lines.map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}</h2>
      <div className="proof-line">
        {copy.points.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </section>
  );
}

export function HomePageContent({ lang = "en" }) {
  const content = getSiteContent(lang);

  return (
    <SiteShell lang={lang}>
      <main className="main-content">
        <Hero lang={lang} content={content} />
        <BrandManifesto lang={lang} />
        <AgentThinking content={content} />
        <HumanCenteredAgent content={content} />
        <ArchitectureWorld content={content} />
        <BusinessMap content={content} lang={lang} />
        <ProofStatement lang={lang} />
        <CtaBand lang={lang} content={content} />
      </main>
    </SiteShell>
  );
}
