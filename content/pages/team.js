import { hydroAgentTeamMembers } from "../team-members";

export const teamContent = {
  en: {
    lead: {
      eyebrow: "About HydroAgent-Lab",
      title: "The people behind HydroAgent-Lab.",
      text:
        "HydroAgent-Lab brings together students, frontline hydrologists, AI researchers, software builders, and mentors across Italy, Germany, the United States, and China.",
      facts: [
        { label: "Team size", value: "Around 20 to 30 contributors" },
        { label: "Geography", value: "Italy, Germany, the US, and China" },
        { label: "Support", value: "Interest-driven effort with no funding support" }
      ]
    },
    missionSection: {
      eyebrow: "About Us",
      title: "An interest-driven lab for frontline hydro practice.",
      text:
        "This is an interest-driven effort by people who want AI to become useful in real forecasting work. Members come from universities, engineering practice, hydrological operations, and AI product development.",
      navItems: [
        { label: "Members", href: "#members" },
        { label: "Workstreams", href: "#workstreams" },
        { label: "Signals", href: "#signals" }
      ]
    },
    peopleSection: {
      eyebrow: "Team Members",
      title: "HydroAgent Lab",
      text:
        "The list below includes named contributors currently associated with the HydroAgent-Lab effort. Member order is not hierarchical.",
      disciplineLine: "Frontline hydrologists \u00b7 AI specialists \u00b7 Early-career researchers \u00b7 Scientific software developers",
      countryLine: "Italy \u00b7 Germany \u00b7 United States \u00b7 China",
      supportBadge: "Community-driven \u00b7 Volunteer-led \u00b7 Seeking funding support",
      emailLabel: "Email",
      focusLabel: "Focus",
      affiliationLabel: "Affiliation",
      linksLabel: "Public links",
      pendingLinksLabel: "Scholar / LinkedIn pending",
      members: hydroAgentTeamMembers
    },
    operatingSection: {
      eyebrow: "How We Work",
      title: "The team is organized around decisions, not around isolated technical functions.",
      text:
        "Each workstream connects a domain question to a product surface, a review workflow, and a deployment path.",
      items: [
        {
          title: "Hydrologic intelligence",
          text: "Model behavior, basin context, forecast uncertainty, and operational interpretation."
        },
        {
          title: "AI product systems",
          text: "Agentic interfaces, workflow automation, review surfaces, and decision support."
        },
        {
          title: "Operational translation",
          text: "Pilot design, stakeholder alignment, release discipline, and institutional adoption."
        }
      ]
    },
    workstreamsSection: {
      eyebrow: "Team Structure",
      title: "Instead of a large hierarchy, we organize around the work that must be accountable.",
      text:
        "For an early technical company, credibility comes from clear ownership: who understands the domain, who builds the system, who protects the workflow, and who turns collaboration into adoption.",
      items: [
        {
          label: "Domain",
          title: "Hydrologic science and forecasting judgment",
          text:
            "Frames basin behavior, model evidence, event context, uncertainty, and the expert reasoning that should remain visible in every workflow."
        },
        {
          label: "Product",
          title: "AI product and agentic workflow engineering",
          text:
            "Builds the operating surfaces, agent orchestration, review interfaces, and capability directory that make HydroAgent usable beyond a demo."
        },
        {
          label: "Delivery",
          title: "Pilots, institutional fit, and operational translation",
          text:
            "Shapes pilots, briefings, stakeholder alignment, release discipline, and the path from research prototype to deployable system."
        },
        {
          label: "Research",
          title: "Evaluation, replayability, and research collaboration",
          text:
            "Turns real workflows into reviewable evidence, evaluation questions, reusable artifacts, and publishable research directions."
        }
      ]
    },
    signalsSection: {
      eyebrow: "Signals and Figures",
      title: "What partners should understand about the team today.",
      text:
        "We avoid inflated company metrics. The useful signals at this stage are focus, accountability, and whether the team can connect scientific credibility with operational product work.",
      items: [
        {
          label: "01",
          value: "Product plus research",
          text: "HydroAgent-Lab is designed to support both deployable product work and research-grade evaluation."
        },
        {
          label: "02",
          value: "Human release authority",
          text: "The system is built around reviewable decisions, not automated replacement of forecasters."
        },
        {
          label: "03",
          value: "Workflow-first design",
          text: "Capabilities are organized by operational tasks: scenario preparation, model review, release packaging, and replay."
        },
        {
          label: "04",
          value: "Partner-led adoption",
          text: "The strongest deployments will come from teams that bring local basins, release practices, and evaluation needs."
        }
      ]
    },
    prioritiesSection: {
      eyebrow: "Current Priorities",
      title: "What we are building toward next.",
      items: [
        {
          phase: "Now",
          title: "HydroAgent-FF and flood forecasting workflows",
          text:
            "Continue shaping the flagship flood product around scenario setup, rolling updates, model review, and release readiness."
        },
        {
          phase: "Next",
          title: "Capability directory and product modules",
          text:
            "Expand the public capability map so partners can quickly understand what is available and what is emerging."
        },
        {
          phase: "With partners",
          title: "Pilots, validation, and research translation",
          text:
            "Work with domain teams to evaluate fit, preserve expert judgment, and produce evidence that supports adoption."
        }
      ]
    },
    principlesSection: {
      eyebrow: "Team Principles",
      title: "Small team, clear responsibility, serious operational standards.",
      items: [
        {
          title: "Product before demo",
          text: "We prioritize systems that can be evaluated, operated, and improved in real workflows."
        },
        {
          title: "Domain judgment stays visible",
          text: "Hydrologic expertise is treated as part of the system, not as a note outside the interface."
        },
        {
          title: "Partnership matters",
          text: "The strongest work happens with teams that bring local basins, processes, and operational constraints."
        }
      ]
    }
  },
  zh: {
    lead: {
      eyebrow: "关于 HydroAgent-Lab",
      title: "先认识 HydroAgent-Lab 背后的团队。",
      text:
        "HydroAgent-Lab 由来自意大利、德国、美国和中国的学生、一线水文工作者、AI 研究者、软件开发者与导师组成。",
      facts: [
        { label: "团队规模", value: "约 20 到 30 位贡献者" },
        { label: "地域分布", value: "意大利、德国、美国与中国" },
        { label: "支持方式", value: "兴趣驱动，目前无经费支持" }
      ]
    },
    missionSection: {
      eyebrow: "关于我们",
      title: "一个面向一线水文实践的兴趣驱动实验室。",
      text:
        "这不是传统经费项目，而是一群关心 AI 能否进入一线水文业务的人共同推动的协作。成员来自高校、工程与水文业务一线，也包括 AI 产品和智能体系统方向的年轻开发者。",
      navItems: [
        { label: "团队成员", href: "#members" },
        { label: "工作线", href: "#workstreams" },
        { label: "可信信号", href: "#signals" }
      ]
    },
    peopleSection: {
      eyebrow: "团队成员",
      title: "HydroAgent Lab",
      text:
        "以下为当前参与 HydroAgent-Lab 工作的已列名成员。排名不分先后。",
      disciplineLine: "一线水文工作者 \u00b7 AI 专家 \u00b7 青年研究者 \u00b7 科学软件开发者",
      countryLine: "意大利 \u00b7 德国 \u00b7 美国 \u00b7 中国",
      supportBadge: "社区驱动 \u00b7 志愿协作 \u00b7 正在寻求经费支持",
      emailLabel: "邮箱",
      focusLabel: "方向",
      affiliationLabel: "机构",
      linksLabel: "公开链接",
      pendingLinksLabel: "Scholar / LinkedIn 待补充",
      members: hydroAgentTeamMembers
    },
    operatingSection: {
      eyebrow: "工作方式",
      title: "团队围绕决策组织，而不是围绕孤立技术职能组织。",
      text:
        "每条工作线都把领域问题连接到产品界面、审核流程与可落地的试点路径。",
      items: [
        {
          title: "水文智能",
          text: "关注模型行为、流域背景、预报不确定性与业务解释。"
        },
        {
          title: "AI 产品系统",
          text: "构建智能体界面、流程自动化、审核界面与决策支持能力。"
        },
        {
          title: "业务转化",
          text: "支持试点设计、相关方沟通、发布纪律与机构采用。"
        }
      ]
    },
    workstreamsSection: {
      eyebrow: "团队结构",
      title: "相比复杂层级，我们更关注哪些工作必须有人负责。",
      text:
        "对于早期技术公司，可信度来自清楚的责任：谁理解领域，谁建设系统，谁保护业务流程，谁把合作转化为采用。",
      items: [
        {
          label: "领域",
          title: "水文科学与预报判断",
          text:
            "负责流域行为、模型证据、事件情境、不确定性，以及每个工作流中应当保持可见的专家推理。"
        },
        {
          label: "产品",
          title: "AI 产品与智能体工作流工程",
          text:
            "建设操作界面、智能体编排、审核界面与能力目录，让 HydroAgent 不停留在演示层面。"
        },
        {
          label: "交付",
          title: "试点、机构匹配与业务转化",
          text:
            "设计试点、技术简报、相关方对齐、发布纪律，以及从研究原型走向可部署系统的路径。"
        },
        {
          label: "研究",
          title: "评价、回放能力与研究合作",
          text:
            "把真实工作流转化为可审核证据、评价问题、可复用材料与可发表的研究方向。"
        }
      ]
    },
    signalsSection: {
      eyebrow: "可信信号",
      title: "合作伙伴现在应该理解团队的哪些特点。",
      text:
        "我们不堆砌夸大的公司数字。当前阶段真正有用的信号，是专注度、责任边界，以及能否把科学可信度和业务产品连接起来。",
      items: [
        {
          label: "01",
          value: "产品与研究并行",
          text: "HydroAgent-Lab 同时面向可部署产品与研究级评价。"
        },
        {
          label: "02",
          value: "人工发布责任保留",
          text: "系统围绕可审核决策构建，而不是自动替代预报员。"
        },
        {
          label: "03",
          value: "工作流优先",
          text: "能力围绕真实任务组织：情景准备、模型复核、发布打包与事后回放。"
        },
        {
          label: "04",
          value: "伙伴驱动采用",
          text: "最有价值的部署来自带来本地流域、发布流程与评价需求的合作团队。"
        }
      ]
    },
    prioritiesSection: {
      eyebrow: "当前重点",
      title: "我们下一步重点建设什么。",
      items: [
        {
          phase: "现在",
          title: "HydroAgent-FF 与洪水预报工作流",
          text:
            "继续围绕情景设置、滚动更新、模型复核与发布准备打磨旗舰洪水产品。"
        },
        {
          phase: "下一步",
          title: "能力目录与产品模块",
          text:
            "扩展公开能力图谱，让合作方快速了解目前可用能力和正在形成的模块。"
        },
        {
          phase: "与伙伴共建",
          title: "试点、验证与研究转化",
          text:
            "与领域团队一起评价适配度、保留专家判断，并形成支持采用的证据。"
        }
      ]
    },
    principlesSection: {
      eyebrow: "团队原则",
      title: "团队可以精干，但责任、标准和交付必须清楚。",
      items: [
        {
          title: "产品先于演示",
          text: "优先建设能被评估、被运行、被持续改进的真实系统。"
        },
        {
          title: "领域判断保持可见",
          text: "水文专家判断是系统的一部分，而不是界面之外的补充说明。"
        },
        {
          title: "重视合作场景",
          text: "最有价值的工作来自真实流域、真实流程与真实业务约束。"
        }
      ]
    }
  }
};
