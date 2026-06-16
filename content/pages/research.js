export const researchContent = {
  en: {
    lead: {
      eyebrow: "Research",
      title: "From research prototype to flood forecasting frontline.",
      text:
        "We test whether LLM agents can support frontline flood forecasting without weakening scientific accountability.",
      facts: [
        { label: "EGU 2026", value: "Session HS3.5 oral presentation" },
        { label: "Case", value: "South Yamhill River, March 2022" },
        { label: "Status", value: "Presentation deck available; manuscript under submission" }
      ]
    },
    presentationSection: {
      eyebrow: "EGU General Assembly 2026",
      title: "Is it ready to apply Large Language Models to frontline hydro practice?",
      text:
        "Taking the flood forecasting agent as an example, this presentation frames HydroAgent as a skill-driven, human-in-the-loop workflow rather than a chatbot or single-step tool caller.",
      details: [
        { label: "Presenter", value: "Baoying Shan \u00b7 Politecnico di Milano, on behalf of HydroAgent Lab" },
        { label: "Session", value: "HS3.5 \u00b7 Oral \u00b7 Tue 05 May \u00b7 11:00-11:10 CEST \u00b7 Room C" },
        { label: "Deck", value: "EGU26_pre_v1.pdf" }
      ],
      cta: "Download presentation deck",
      href: "/assets/EGU26_pre_v1.pdf"
    },
    resultsSection: {
      eyebrow: "Evidence From the Deck",
      title: "The current evidence is specific enough to discuss, and still early enough to test with partners.",
      items: [
        {
          label: "01",
          title: "End-to-end flood case",
          text: "The demonstration uses the March 2022 South Yamhill River event with XAJ, DDS optimization, and a staged HydroAgent workflow from scenario judgment to bulletin."
        },
        {
          label: "02",
          title: "14 validation events",
          text: "Step 1 narrows similar-case spread; hit rates within 5% tolerance reach 10/14 for peak flow and 11/14 for flood volume."
        },
        {
          label: "03",
          title: "Scheme selection",
          text: "After selecting parameter sets from the Step 0 library, simulated peak falls inside the Step 1 range for 14/14 events and volume for 13/14."
        },
        {
          label: "04",
          title: "5-fold \u00d7 5 LLM comparison",
          text: "No single SOTA LLM dominates. Hit rates stay in a 60-85% band, while cost varies substantially across models."
        }
      ]
    },
    takeawaysSection: {
      eyebrow: "Take-home",
      title: "Three things worth remembering.",
      items: [
        "LLMs are not here to replace hydrological models; they scale expert judgment around those models.",
        "The key is not only prompting. Structured skills make agents reliable, auditable, and reproducible.",
        "It is not fully ready yet, but it is ready enough to be worth building together."
      ]
    },
    thesisSection: {
      eyebrow: "Core Thesis",
      title: "Flood forecasting is an institutional practice, not only a modeling problem.",
      claims: [
        "Tacit forecasting expertise can be externalized into structured artifacts.",
        "Replayability and reviewability belong in the system design, not in a post hoc notebook.",
        "Human release authority can remain central while the workflow becomes more legible and scalable."
      ]
    },
    themesSection: {
      eyebrow: "Research Areas",
      title: "Three research angles give the work a coherent frame.",
      text: "These research areas define the contribution, the method, and the evaluation path.",
      items: [
        {
          title: "Judgment formalization",
          text: "How prior assumptions, watchpoints, and revision logic become reusable reasoning records."
        },
        {
          title: "Operational coordination",
          text: "How models, analysts, and institutional review can be composed into one executable chain."
        },
        {
          title: "Replay and learning",
          text: "How issued forecasts can be inspected later for training, analysis, and organizational memory."
        }
      ]
    },
    evaluationSection: {
      eyebrow: "Evaluation",
      title: "Evaluation extends beyond forecast accuracy alone.",
      items: [
        {
          title: "Process clarity",
          text: "Did the system make assumptions, revisions, and release rationale more explicit?"
        },
        {
          title: "Operational usability",
          text: "Did the workflow reduce fragmentation during repeated forecast updates?"
        },
        {
          title: "Replay value",
          text: "Can the team reconstruct what changed, why it changed, and what was issued?"
        }
      ]
    },
    narrativeSection: {
      eyebrow: "Narrative",
      title: "The work is undersold when it is described as only a calibration agent.",
      text:
        "Its center of gravity is the explicit organization of a forecasting workflow: scenario framing, expert priors, correction logic, rolling updates, and release readiness."
    }
  },
  zh: {
    lead: {
      eyebrow: "研究",
      title: "从研究原型走向洪水预报一线。",
      text:
        "我们测试 LLM 智能体能否支持一线洪水预报，同时保留科学责任。",
      facts: [
        { label: "EGU 2026", value: "HS3.5 口头报告" },
        { label: "案例", value: "South Yamhill River，2022 年 3 月" },
        { label: "状态", value: "汇报 PDF 已提供；manuscript under submission" }
      ]
    },
    presentationSection: {
      eyebrow: "EGU General Assembly 2026",
      title: "Is it ready to apply Large Language Models to frontline hydro practice?",
      text:
        "以洪水预报智能体为例，这个报告把 HydroAgent 定位为 skill-driven、human-in-the-loop 的工作流系统，而不是聊天机器人或单步工具调用。",
      details: [
        { label: "汇报人", value: "Baoying Shan \u00b7 Politecnico di Milano，代表 HydroAgent Lab" },
        { label: "场次", value: "HS3.5 \u00b7 Oral \u00b7 Tue 05 May \u00b7 11:00-11:10 CEST \u00b7 Room C" },
        { label: "文件", value: "EGU26_pre_v1.pdf" }
      ],
      cta: "下载汇报 PDF",
      href: "/assets/EGU26_pre_v1.pdf"
    },
    resultsSection: {
      eyebrow: "汇报中的具体证据",
      title: "当前结果已经具体到可以讨论，也仍然早到需要真实伙伴共同测试。",
      items: [
        {
          label: "01",
          title: "端到端洪水案例",
          text: "演示使用 2022 年 3 月 South Yamhill River 事件，结合 XAJ、水文模型、DDS 优化与从情景判断到公告发布的分阶段 HydroAgent 工作流。"
        },
        {
          label: "02",
          title: "14 个验证事件",
          text: "Step 1 缩窄相似洪水样本的范围；在 5% 容差内，峰值流量命中 10/14，洪量命中 11/14。"
        },
        {
          label: "03",
          title: "方案选择",
          text: "从 Step 0 方案库选择参数集后，模拟峰值落入 Step 1 范围的事件为 14/14，洪量为 13/14。"
        },
        {
          label: "04",
          title: "5 折 \u00d7 5 个 LLM 对比",
          text: "没有单一 SOTA LLM 明显胜出。命中率大致处于 60-85% 区间，但不同模型的成本差异很大。"
        }
      ]
    },
    takeawaysSection: {
      eyebrow: "Take-home",
      title: "三个最值得记住的结论。",
      items: [
        "LLM 不是用来替代水文模型，而是围绕模型扩展专家判断。",
        "关键不只是提示词。结构化 skills 才能让 agent 更可靠、可审核、可复现。",
        "它还没有完全 ready，但已经足够值得和真实业务伙伴一起继续建设。"
      ]
    },
    thesisSection: {
      eyebrow: "核心命题",
      title: "洪水预报是机构化业务，不只是建模问题。",
      claims: [
        "隐性的预报经验可以被外化为结构化工件。",
        "可复盘与可审核应当是系统设计的一部分，而不是事后补充。",
        "在保留人工发布权的前提下，工作流依然可以更清晰、更可扩展。"
      ]
    },
    themesSection: {
      eyebrow: "研究方向",
      title: "三个研究角度足以把整项工作讲清楚。",
      text:
        "这些研究方向共同定义了贡献点、方法路径与验证方式。",
      items: [
        {
          title: "判断形式化",
          text: "研究如何把先验、关注点与修正逻辑变成可复用的推理记录。"
        },
        {
          title: "业务协同",
          text: "研究如何把模型、分析师与机构审核组织进同一条可执行链路。"
        },
        {
          title: "回放与学习",
          text: "研究如何让已发布的预报可被事后检查、训练与沉淀。"
        }
      ]
    },
    evaluationSection: {
      eyebrow: "验证思路",
      title: "验证不应只看精度，也要看流程是否更清晰、更可用。",
      items: [
        {
          title: "流程清晰度",
          text: "系统是否让假设、修订与发布理由更显性。"
        },
        {
          title: "业务可用性",
          text: "在多轮滚动更新中，系统是否减少了流程碎片化。"
        },
        {
          title: "复盘价值",
          text: "团队是否能够重建当时发生了什么、为什么改、最终发了什么。"
        }
      ]
    },
    narrativeSection: {
      eyebrow: "叙事方式",
      title: "如果只把它讲成校准 Agent，这项工作会被明显低估。",
      text:
        "它真正的重心在于把情景构建、专家先验、修正逻辑、滚动更新与发布准备组织成一条清晰的预报工作流。"
    }
  }
};
