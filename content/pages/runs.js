export const runsContent = {
  en: {
    hero: {
      eyebrow: "Evidence Runs",
      title: "A public log for cases, modules, and evaluation threads.",
      text:
        "This page follows the HydroCraft-style evidence pattern: short, scan-friendly entries that show what has been tested, what artifact exists, and what still needs validation.",
      refreshed: "curated 2026-06-15",
      note:
        "Current entries are curated from the EGU26 deck and active HydroAgent-Lab product work. Automated run ingestion will be added when the product pipeline is public."
    },
    filters: ["All", "Forecast case", "Validation", "Agent workflow", "Product module"],
    items: [
      {
        title: "South Yamhill River flood case",
        category: "Forecast case",
        model: "XAJ + DDS",
        basin: "South Yamhill River",
        date: "2022-03 event",
        status: "EGU26 deck",
        metrics: ["scenario judgment", "bulletin workflow", "human-in-the-loop"],
        text:
          "End-to-end flood forecasting demonstration from scenario framing through model review and release packaging."
      },
      {
        title: "14-event similar-case validation",
        category: "Validation",
        model: "HydroAgent Step 1",
        basin: "South Yamhill River",
        date: "EGU26 analysis",
        status: "Evidence available",
        metrics: ["10/14 peak within 5%", "11/14 volume within 5%", "spread narrowed"],
        text:
          "Similar-case retrieval and judgment narrowing are evaluated against historical validation events."
      },
      {
        title: "Parameter scheme selection",
        category: "Validation",
        model: "Step 0 library",
        basin: "South Yamhill River",
        date: "EGU26 analysis",
        status: "Evidence available",
        metrics: ["14/14 peak in range", "13/14 volume in range", "parameter set selection"],
        text:
          "Parameter schemes are selected from a precomputed library before forecast simulation and review."
      },
      {
        title: "Five LLM comparison",
        category: "Agent workflow",
        model: "5 LLMs x 5 folds",
        basin: "Workflow benchmark",
        date: "EGU26 analysis",
        status: "Comparative result",
        metrics: ["60-85% hit-rate band", "cost varies", "no single model dominates"],
        text:
          "The benchmark compares agent behavior across models and shows why workflow design matters more than model branding alone."
      },
      {
        title: "Scenario workspace",
        category: "Product module",
        model: "HydroAgent-FF",
        basin: "Partner-configurable",
        date: "active build",
        status: "In product design",
        metrics: ["inputs", "basin context", "analogs"],
        text:
          "A workspace for assembling event background, rainfall inputs, basin state, upstream conditions, and comparable history."
      },
      {
        title: "Release package",
        category: "Product module",
        model: "HydroAgent-FF",
        basin: "Partner-configurable",
        date: "active build",
        status: "In product design",
        metrics: ["bulletin draft", "approval context", "replay record"],
        text:
          "A structured handoff surface that keeps final human release authority explicit while preserving the evidence chain."
      }
    ]
  },
  zh: {
    hero: {
      eyebrow: "证据运行记录",
      title: "面向案例、模块与评估线索的公开记录。",
      text:
        "这个页面采用类似 HydroCraft 的证据流风格：用短而密集、便于扫描的条目说明我们测试过什么、已有何种材料、哪些仍需要验证。",
      refreshed: "curated 2026-06-15",
      note:
        "当前条目来自 EGU26 汇报与 HydroAgent-Lab 正在推进的产品工作。自动运行记录会在产品管线公开后接入。"
    },
    filters: ["全部", "预报案例", "验证", "智能体工作流", "产品模块"],
    items: [
      {
        title: "South Yamhill River 洪水案例",
        category: "预报案例",
        model: "XAJ + DDS",
        basin: "South Yamhill River",
        date: "2022-03 event",
        status: "EGU26 deck",
        metrics: ["情景判断", "公告工作流", "human-in-the-loop"],
        text:
          "从情景构建、模型复核到发布打包的端到端洪水预报演示。"
      },
      {
        title: "14 个相似案例验证",
        category: "验证",
        model: "HydroAgent Step 1",
        basin: "South Yamhill River",
        date: "EGU26 analysis",
        status: "已有证据",
        metrics: ["峰值 10/14 在 5% 内", "洪量 11/14 在 5% 内", "范围收窄"],
        text:
          "对相似案例检索和专家判断收窄机制进行历史事件验证。"
      },
      {
        title: "参数方案选择",
        category: "验证",
        model: "Step 0 library",
        basin: "South Yamhill River",
        date: "EGU26 analysis",
        status: "已有证据",
        metrics: ["峰值 14/14 入范围", "洪量 13/14 入范围", "参数集选择"],
        text:
          "先从预计算方案库中选择参数方案，再进入模拟、复核与解释。"
      },
      {
        title: "五个 LLM 对比",
        category: "智能体工作流",
        model: "5 LLMs x 5 folds",
        basin: "Workflow benchmark",
        date: "EGU26 analysis",
        status: "对比结果",
        metrics: ["60-85% 命中率区间", "成本差异明显", "没有单一模型胜出"],
        text:
          "对比不同模型下的智能体表现，说明工作流设计比模型品牌本身更关键。"
      },
      {
        title: "情景工作区",
        category: "产品模块",
        model: "HydroAgent-FF",
        basin: "可按合作方配置",
        date: "active build",
        status: "产品设计中",
        metrics: ["输入", "流域背景", "相似历史"],
        text:
          "用于组织事件背景、降雨输入、流域状态、上游条件与类比历史的工作区。"
      },
      {
        title: "发布包",
        category: "产品模块",
        model: "HydroAgent-FF",
        basin: "可按合作方配置",
        date: "active build",
        status: "产品设计中",
        metrics: ["公告草稿", "审批背景", "复盘记录"],
        text:
          "保持最终人工发布权清晰，同时保存发布背后的证据链。"
      }
    ]
  }
};
