export const capabilitiesContent = {
  en: {
    lead: {
      eyebrow: "Capabilities",
      title: "Find what is available today.",
      text:
        "A searchable directory of current product functions, services, and collaboration modes. As the portfolio grows, this becomes the quickest way to check fit.",
      facts: [
        { label: "Scope", value: "Products, workflow systems, services, and research collaboration" },
        { label: "Use", value: "Search by task, stage, product, or adoption need" },
        { label: "Status", value: "Current capabilities, with room for future modules" }
      ]
    },
    directoryEyebrow: "Capability Directory",
    directoryTitle: "Search by the work you need to support.",
    searchLabel: "Search capabilities",
    searchPlaceholder: "Try forecast review, release package, pilot, replay...",
    filterLabel: "Capability categories",
    allLabel: "All",
    emptyText: "No matching capability yet. Try another keyword or contact the team.",
    categories: [
      { id: "forecasting", label: "Forecasting" },
      { id: "workflow", label: "Workflow" },
      { id: "review", label: "Review" },
      { id: "adoption", label: "Adoption" },
      { id: "research", label: "Research" }
    ],
    items: [
      {
        category: "forecasting",
        categoryLabel: "Forecasting",
        stage: "Before forecast",
        status: "Available",
        title: "Scenario preparation",
        summary:
          "Assemble rainfall, basin state, upstream context, analog events, and known operational constraints before interpretation starts.",
        tags: ["HydroAgent-FF", "rainfall", "basin state", "scenario"]
      },
      {
        category: "workflow",
        categoryLabel: "Workflow",
        stage: "Before forecast",
        status: "Available",
        title: "Prior judgment capture",
        summary:
          "Turn forecaster expectations, thresholds, watchpoints, and assumptions into reusable structured artifacts.",
        tags: ["expert judgment", "templates", "watchpoints", "assumptions"]
      },
      {
        category: "review",
        categoryLabel: "Review",
        stage: "During update",
        status: "Available",
        title: "Model run review",
        summary:
          "Review model mismatch, surface uncertainty drivers, record correction hypotheses, and keep the evidence chain visible.",
        tags: ["model review", "uncertainty", "correction", "diagnostics"]
      },
      {
        category: "forecasting",
        categoryLabel: "Forecasting",
        stage: "During update",
        status: "Available",
        title: "Rolling forecast comparison",
        summary:
          "Compare forecast versions across update cycles so teams can see what changed, why it changed, and what still needs attention.",
        tags: ["rolling forecast", "versions", "deltas", "updates"]
      },
      {
        category: "review",
        categoryLabel: "Review",
        stage: "Release gate",
        status: "Available",
        title: "Release package assembly",
        summary:
          "Prepare bulletin language, confidence notes, unresolved watchpoints, and approval context for final human release authority.",
        tags: ["bulletin", "approval", "handoff", "release"]
      },
      {
        category: "workflow",
        categoryLabel: "Workflow",
        stage: "After event",
        status: "Available",
        title: "Post-event replay",
        summary:
          "Preserve scenario context, decisions, revisions, and release artifacts for training, review, and institutional learning.",
        tags: ["replay", "training", "audit", "post-event"]
      },
      {
        category: "adoption",
        categoryLabel: "Adoption",
        stage: "Pilot",
        status: "Available",
        title: "Operational pilot design",
        summary:
          "Scope a pilot around a real workflow, define review gates, decide success criteria, and map integration constraints.",
        tags: ["pilot", "deployment", "integration", "evaluation"]
      },
      {
        category: "adoption",
        categoryLabel: "Adoption",
        stage: "Briefing",
        status: "Available",
        title: "Technical briefing",
        summary:
          "Support stakeholder alignment with product walkthroughs, system framing, use-case mapping, and adoption discussion.",
        tags: ["briefing", "stakeholders", "product walkthrough", "fit"]
      },
      {
        category: "research",
        categoryLabel: "Research",
        stage: "Collaboration",
        status: "Available",
        title: "Research collaboration",
        summary:
          "Frame studies around hydrologic workflow intelligence, judgment formalization, replayability, and operational evaluation.",
        tags: ["research", "evaluation", "judgment", "workflow intelligence"]
      }
    ]
  },
  zh: {
    lead: {
      eyebrow: "能力目录",
      title: "查看目前可以支持什么。",
      text:
        "这里汇总当前可用的产品功能、服务方式与合作入口。功能变多后，客户可以按任务、阶段或需求快速查找。",
      facts: [
        { label: "范围", value: "产品、工作流系统、服务与研究合作" },
        { label: "用途", value: "按任务、阶段、产品或采用需求检索" },
        { label: "状态", value: "当前能力目录，可持续扩展" }
      ]
    },
    directoryEyebrow: "能力检索",
    directoryTitle: "按你需要支持的工作来查找。",
    searchLabel: "搜索能力",
    searchPlaceholder: "试试：预报审核、发布包、试点、复盘...",
    filterLabel: "能力分类",
    allLabel: "全部",
    emptyText: "暂时没有匹配能力。可以换一个关键词，或直接联系团队。",
    categories: [
      { id: "forecasting", label: "预报" },
      { id: "workflow", label: "工作流" },
      { id: "review", label: "审核" },
      { id: "adoption", label: "采用" },
      { id: "research", label: "研究" }
    ],
    items: [
      {
        category: "forecasting",
        categoryLabel: "预报",
        stage: "预报前",
        status: "可用",
        title: "情景准备",
        summary:
          "在解释开始前整理降雨、流域状态、上游背景、历史类比事件与本地业务约束。",
        tags: ["HydroAgent-FF", "降雨", "流域状态", "情景"]
      },
      {
        category: "workflow",
        categoryLabel: "工作流",
        stage: "预报前",
        status: "可用",
        title: "先验判断沉淀",
        summary:
          "把预报员的预期、阈值、关注点与假设转化为可复用的结构化材料。",
        tags: ["专家判断", "模板", "关注点", "假设"]
      },
      {
        category: "review",
        categoryLabel: "审核",
        stage: "更新中",
        status: "可用",
        title: "模型结果复核",
        summary:
          "复核模型偏差，显式呈现不确定性来源，记录修正假设，并保留证据链。",
        tags: ["模型审核", "不确定性", "修正", "诊断"]
      },
      {
        category: "forecasting",
        categoryLabel: "预报",
        stage: "更新中",
        status: "可用",
        title: "滚动预报版本比较",
        summary:
          "比较多轮更新之间的版本差异，让团队看到哪里变了、为什么变、还需要关注什么。",
        tags: ["滚动预报", "版本", "差异", "更新"]
      },
      {
        category: "review",
        categoryLabel: "审核",
        stage: "发布关口",
        status: "可用",
        title: "发布包整理",
        summary:
          "整理公告文本、置信说明、未解决关注点与审批上下文，交给最终人工发布。",
        tags: ["公告", "审批", "交接", "发布"]
      },
      {
        category: "workflow",
        categoryLabel: "工作流",
        stage: "事件后",
        status: "可用",
        title: "事后回放复盘",
        summary:
          "保留情景背景、决策、修订与发布材料，用于训练、复核与机构知识沉淀。",
        tags: ["回放", "训练", "审计", "复盘"]
      },
      {
        category: "adoption",
        categoryLabel: "采用",
        stage: "试点",
        status: "可用",
        title: "业务试点设计",
        summary:
          "围绕真实业务流程定义试点范围、审核关口、成功标准与集成约束。",
        tags: ["试点", "部署", "集成", "评估"]
      },
      {
        category: "adoption",
        categoryLabel: "采用",
        stage: "简报",
        status: "可用",
        title: "技术简报",
        summary:
          "通过产品走查、系统框架、场景匹配与采用讨论，支持机构内部对齐。",
        tags: ["简报", "利益相关方", "产品走查", "匹配"]
      },
      {
        category: "research",
        categoryLabel: "研究",
        stage: "合作",
        status: "可用",
        title: "研究合作",
        summary:
          "围绕水文工作流智能、判断形式化、可回放性与业务评价设计研究合作。",
        tags: ["研究", "评价", "判断", "工作流智能"]
      }
    ]
  }
};
