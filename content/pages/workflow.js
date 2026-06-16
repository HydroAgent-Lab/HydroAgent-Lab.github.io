export const workflowContent = {
  en: {
    lead: {
      eyebrow: "Workflow",
      title: "Five steps from scenario setup to release.",
      text:
        "Each step leaves an artifact the team can review, update, or replay.",
      facts: [
        { label: "Coverage", value: "Scenario framing through release gate" },
        { label: "Operating mode", value: "Rolling forecast with traceable updates" },
        { label: "Final authority", value: "Human release decision" }
      ]
    },
    stepsSection: {
      eyebrow: "Operating Chain",
      title: "Each stage has a distinct purpose, owner, and output.",
      text:
        "Each stage supports repeatable forecast operations, from scenario framing through final release.",
      items: [
        {
          id: "01",
          name: "Scenario preparation",
          summary:
            "Assemble rainfall, basin state, analogs, and quality checks before interpretation starts.",
          owner: "Analyst + system",
          output: "Scenario brief"
        },
        {
          id: "02",
          name: "Prior judgment",
          summary: "Turn tacit forecaster expectations into explicit assumptions and watchpoints.",
          owner: "Analyst",
          output: "Judgment package"
        },
        {
          id: "03",
          name: "Process correction",
          summary: "Review model mismatch, document hypotheses, and preserve evidence behind revisions.",
          owner: "Analyst + model review",
          output: "Correction record"
        },
        {
          id: "04",
          name: "Rolling forecast",
          summary: "Update the forecast over time while keeping version deltas and rationale legible.",
          owner: "System + analyst",
          output: "Versioned forecast set"
        },
        {
          id: "05",
          name: "Release gate",
          summary: "Package risk framing, bulletin text, and approval context for final issuance.",
          owner: "Lead forecaster",
          output: "Release bulletin"
        }
      ]
    },
    artifactsSection: {
      eyebrow: "Artifacts",
      title: "Each stage produces a concrete artifact.",
      items: [
        {
          title: "Before forecast updates",
          text: "Scenario briefs, input validation, basin context, and analog references."
        },
        {
          title: "During revision cycles",
          text: "Correction logs, forecast deltas, watchpoints, and evidence notes."
        },
        {
          title: "At release time",
          text: "Bulletin language, approval context, and post-event replay records."
        }
      ]
    },
    handoffSection: {
      eyebrow: "Critical Handoff",
      title: "The release gate remains explicit because final responsibility remains explicit.",
      text:
        "HydroAgent-Lab helps the team prepare a release decision. It does not erase the final human checkpoint.",
      points: [
        "Release framing stays visible next to the underlying forecast context.",
        "Approvers see revision history, confidence notes, and unresolved watchpoints in one place.",
        "Issued outputs remain connected to the reasoning and evidence behind them."
      ]
    }
  },
  zh: {
    lead: {
      eyebrow: "工作流",
      title: "从情景准备到发布关口的五步流程。",
      text:
        "每一步都留下可审核、可更新、可复盘的产物。",
      facts: [
        { label: "覆盖范围", value: "从情景构建到发布关口" },
        { label: "运行方式", value: "滚动预报与可追溯更新" },
        { label: "最终责任", value: "人工发布决策" }
      ]
    },
    stepsSection: {
      eyebrow: "操作链路",
      title: "每一步都有清楚的目的、责任方与输出物。",
      text:
        "从情景构建到最终发布，每个阶段都服务于可重复执行的预报业务流程。",
      items: [
        {
          id: "01",
          name: "情景准备",
          summary: "在解释模型之前，先整合降雨、流域状态、类比事件与数据质量检查。",
          owner: "分析师 + 系统",
          output: "情景简报"
        },
        {
          id: "02",
          name: "先验判断",
          summary: "把预报员隐性的经验变成显性的假设、关注点与初始判断。",
          owner: "分析师",
          output: "判断包"
        },
        {
          id: "03",
          name: "过程修正",
          summary: "审视模型偏差，记录修正假设，并保留背后的证据链。",
          owner: "分析师 + 模型复核",
          output: "修正记录"
        },
        {
          id: "04",
          name: "滚动预报",
          summary: "在连续更新中保留版本差异、原因解释与业务影响。",
          owner: "系统 + 分析师",
          output: "版本化预报集"
        },
        {
          id: "05",
          name: "发布关口",
          summary: "把风险表达、公告文本与审批背景打包，交给最终发布人确认。",
          owner: "主值班预报员",
          output: "正式发布公告"
        }
      ]
    },
    artifactsSection: {
      eyebrow: "阶段产物",
      title: "每个阶段都产出明确材料。",
      items: [
        {
          title: "更新前",
          text: "情景简报、输入检查、流域背景与类比参考。"
        },
        {
          title: "修订中",
          text: "修正日志、版本差异、关注点与证据说明。"
        },
        {
          title: "发布时",
          text: "公告文本、审批背景与事后复盘记录。"
        }
      ]
    },
    handoffSection: {
      eyebrow: "关键交接",
      title: "发布关口必须显式存在，因为最终责任必须显式存在。",
      text:
        "HydroAgent-Lab 帮助团队准备发布决策，但不会抹掉最后的人类审核节点。",
      points: [
        "发布表达与其预报背景始终并排可见。",
        "审批人可以同时看到修订历史、置信说明与未解决关注点。",
        "最终发布内容始终连接到它背后的判断与证据。"
      ]
    }
  }
};
