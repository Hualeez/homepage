// ══════════════════════════════════════════════════════════
//  data.js  —  个人信息配置文件
//  所有需要维护的内容都在这里，不需要碰 index.html
// ══════════════════════════════════════════════════════════

const SITE = {

  // ── 基本信息 ──────────────────────────────────────────
  name:     { zh: "蔡逸晨",  en: "Yichen Cai" },
  badge:    { zh: "浙江大学 · 计算机学院",      en: "Zhejiang University · CCST" },
  subtitle: { zh: "Yichen Cai",                en: "PhD Student in AI & HCI Researcher" },

  bio: {
    zh: `你好，我是蔡逸晨，现于浙江大学攻读人工智能博士研究生，师从 <a href="https://person.zju.edu.cn/sly/623051.html">孙凌云</a> 教授。本科毕业于浙江大学竺可桢学院图灵班（人工智能）。研究聚焦于大语言模型、智能体与人机交互，致力于将 LLM 与创意设计工作流深度整合，探索 AI 如何在概念设计阶段为设计师提供更有温度、更具参与感的协同体验。研究成果发表于 JMD, JED, CHI, ACL 等顶级会议和期刊。`,
    en: `Hi, I'm Yichen Cai, a Ph.D. student in Artificial Intelligence at Zhejiang University, advised by Prof.&nbsp;<a href="https://person.zju.edu.cn/sly/623051.html">Lingyun Sun</a>. Graduated from Turing Class, Chu Kochen Honors College (AI). My research sits at the intersection of agentic systems, large language models, industrial design, and HCI. I focus on deeply integrating LLMs into creative design workflows, making AI an engaging collaborator during conceptual design. Work published in venues like JMD, JED, CHI, and ACL.`,
  },

  interests: [
    { zh: "智能体",  en: "Agent" },
    { zh: "大语言模型",  en: "Large Language Models" },
    { zh: "人机交互",    en: "Human-Computer Interaction" },
    { zh: "设计",    en: "Design" },
  ],

  // ── 教育背景 ───────────────────────────────────────────
  education: [
    {
      school: { zh: "浙江大学计算机学院",             en: "Zhejiang University, CCST" },
      degree: { zh: "人工智能 博士 2024—至今", en: "Ph.D. Artificial Intelligence · 2024–present" },
    },
    {
      school: { zh: "浙大竺可桢学院图灵班",  en: "Turing Class, Chu Kochen College" },
      degree: { zh: "人工智能 学士 2020—2024", en: "B.E. Artificial Intelligence · 2020–2024" },
    },
  ],

  advisor: {
    name: { zh: "孙凌云 教授", en: "Prof. Lingyun Sun" },
    url:  "https://person.zju.edu.cn/sly/623051.html",
    dept: { zh: "浙江大学计算机学院", en: "College of CS, ZJU" },
  },

  // ── 联系方式 ───────────────────────────────────────────
  contact: {
    email:  "yichencai@zju.edu.cn",
    github: { label: "github.com/Hualeez",    url: "https://github.com/Hualeez" },
    orcid:  { label: "0009-0005-5422-8064",   url: "https://orcid.org/0009-0005-5422-8064" },
  },

  // ── 最新动态 ──────────────────────────────────
  news: [
    {
      date: "2026.05",
      content: {
        zh: "论文 ThinkPersona 与 IEvoAgent 被 ACL 2026 主会录用，其中 IEvoAgent 获选 Oral！🎇",
        en: "Two papers, ThinkPersona and IEvoAgent, were accepted to the ACL 2026 Main Conference — IEvoAgent selected for Oral presentation! 🎇"
      }
    },
    {
      date: "2026.02",
      content: {
        zh: "论文 Seeing Eye to Eye 被人机交互顶会 ACM CHI 2026 录用！",
        en: "Our paper Seeing Eye to Eye has been accepted to ACM CHI 2026!"
      }
    }
  ],

  // ── 论文 ───────────────────────────────────────────────
  // 新增论文：在数组末尾复制一个对象并填写即可
  papers: [
    {
      title:   "IEvoAgent: Evolving Conversational Agent based on User Implicit Feedback",
      authors: ["Yichen Cai", "Jiayang Li", "Junyuan Qiu", "Jingya Guo", "Weitao You", "Changyuan Yang", "Lingyun Sun"],
      me:      "Yichen Cai",
      venue:   "ACL 2026 Main Conference (Oral)",
      abstract: {
        zh: "针对现有对话智能体依赖显式反馈、难以适应用户偏好动态变化的局限，提出 IEvoAgent 框架，通过挖掘用户后续行为中蕴含的隐式反馈信号实现智能体的自进化。基于 21 万轮真实对话数据揭示了「响应类型—隐式反馈」的结构化依赖规律，并构建两阶段优化机制：离线阶段以 KTO 算法进行偏好对齐，在线推理阶段通过动态反馈分布矩阵估算预期奖励，驱动系统提示词的实时迭代与策略演化。实验表明该方法在多个基准上显著优于开源基线，有效提升多轮对话的动态对齐能力与响应质量。",
        en: "Addresses the limitation of conversational agents that rely on explicit feedback and struggle to adapt to evolving user preferences. IEvoAgent achieves self-evolution by mining implicit feedback signals from users' subsequent behaviors. Based on 210K rounds of real dialogue data, it reveals structured 'response-type to implicit-feedback' dependencies and builds a two-stage optimization mechanism: offline KTO-based preference alignment, and online estimation of expected rewards via a dynamic feedback distribution matrix to iteratively evolve the system prompt. Experiments show significant gains over open-source baselines in dynamic alignment and response quality.",
      },
      links: [{ label: "GitHub",         icon: "⌥",   url: "https://github.com/Hualeez/IEvoAgent" },],
      image: "components/papers/papers_fig/paper.6.1.png",
    },
    {
      title:   "ThinkPersona: Thinking with Persona Graphs for Faithful Individualized Role-Playing",
      authors: ["Yichen Cai", "Pei Chen", "Jiayang Li", "Jingya Guo", "Zejian Li", "Changyuan Yang", "Lingyun Sun"],
      me:      "Yichen Cai",
      venue:   "ACL 2026 Main Conference",
      abstract: {
        zh: "针对角色扮演语言模型回复不忠实、前后冲突的问题，构建基于真实访谈数据微调的采访者智能体以生成上下文相关提问，并利用 1201 个视频资料构建人物背景知识图谱，驱动被访者智能体通过图谱查询实现忠实问答。基于此生成的 23401 组「问题—推理—回答」三元组数据集进一步微调出高保真角色扮演模型，有效提升了角色一致性。",
        en: "Tackles unfaithful and self-contradictory responses in role-playing language models. ThinkPersona fine-tunes an interviewer agent on real interview data to generate context-relevant questions, and builds persona background knowledge graphs from 1,201 video sources, driving an interviewee agent to answer faithfully via graph queries. The resulting dataset of 23,401 'question-reasoning-answer' triplets is used to fine-tune a high-fidelity role-playing model, substantially improving persona consistency.",
      },
      links: [{ label: "GitHub",         icon: "⌥",   url: "https://github.com/Hualeez/ThinkPersona" },],
      image: "components/papers/papers_fig/paper.5.1.png",
    },
    {
      title:   "Seeing Eye to Eye: Enabling Cognitive Alignment Through Shared First-Person Perspective in Human-AI Collaboration",
      authors: ["Yichen Cai", "Zhuyu Teng", "Pei Chen", "Yichen Cai", "Ruoqing Lu", "Zhaoqu Jiang", "Jiayang Li", "Weitao You", "Lingyun Sun"],
      me:      "Yichen Cai",
      venue:   "ACM CHI 2026",
      abstract: {
        zh: "为解决人机协作中的认知对齐难题，构建基于共享第一人称视角的双向感知系统，使 AI 具备「所见即用户所见」的能力；通过研发受认知科学启发的动态多模态智能体记忆系统，支持视野内物体图像与描述的实时检索以增强 VLM 协作力，并结合端到端实时处理流水线实现持续动态的认知对齐，从而达成更自然高效的人机合作。",
        en: "Addresses cognitive alignment in human-AI collaboration with a bidirectional perception system built on a shared first-person perspective, giving AI a 'see what the user sees' capability. A cognitive-science-inspired dynamic multimodal agent memory enables real-time retrieval of in-view object images and descriptions to boost VLM collaboration, while an end-to-end real-time pipeline sustains continuous cognitive alignment for more natural and efficient human-AI cooperation.",
      },
      links: [{ zh: "论文", en: "Paper", icon: "📄", url:"https://dl.acm.org/doi/10.1145/3772318.3791059"},],
      image: "components/papers/papers_fig/paper.4.1.png",
    },
    {
      title:   "An LLM-based Multi-Agent System to Assist Early Stage Product Design and Evaluation",
      authors: ["Pei Chen", "Yichen Cai", "et al."],
      me:      "Yichen Cai",
      venue:   "Journal of Engineering Design, 2026",
      abstract: {
        zh: "基于 AutoGen 多智能体架构构建产品概念设计辅助系统，实现智能体间的自主协作与工具调用，助力设计师快速发散思维并验证方案可达性。该成果获 2024 年中国高校计算机大赛智能交互创新赛全国二等奖。",
        en: "Builds a product conceptual design assistance system on the AutoGen multi-agent architecture, enabling autonomous agent collaboration and tool invocation to help designers rapidly diverge ideas and verify feasibility. The work won a National 2nd Prize at the 2024 China Collegiate Computing Contest.",
      },
      links: [{ zh: "论文", en: "Paper", icon: "📄", url:"https://www.tandfonline.com/doi/full/10.1080/09544828.2026.2616583"},],
      image: "components/papers/papers_fig/paper.3.1.png",
    },
    {
      title:   "StepIdeator: Utilizing Mixed Representations to Support Step-By-Step Design With Generative Artificial Intelligence",
      authors: ["Jiayi Yao", "Pei Chen", "Zhuoshu Li", "Yichen Cai", "Yexinrui Wu", "Weitao You", "Lingyun Sun"],
      me:      "Yichen Cai",
      venue:   "ASME Journal of Mechanical Design, 2025",
      abstract: {
        zh: "提出 StepIdeator——一个由生成式 AI 驱动的分步设计工具，支持混合设计表征（文本、图像、草图、3D 模型）的无缝转换与细化。比较研究（N=16）验证了其在改善创意外化与增强设计创造力方面的有效性，同时显著提升了设计师的自信感与参与感。",
        en: "Presents StepIdeator, a generative-AI-powered step-by-step design tool that facilitates seamless transitions between mixed representations (text, image, sketch, 3D). A comparative study (N=16) confirms its effectiveness in improving idea externalization and enhancing creativity, while boosting designer confidence and sense of ownership.",
      },
      links: [
        { zh: "论文", en: "Paper", icon: "📄", url: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/147/7/071703/1210394/StepIdeator-Utilizing-Mixed-Representations-to" },
        { label: "GitHub",         icon: "⌥",   url: "https://github.com/Hualeez/StepIdeator/tree/main" },
      ],
      image: "components/papers/papers_fig/paper.1.1.png",
    },
    {
      title:   "CoExploreDS: Framing and Advancing Collaborative Design Space Exploration Between Human and AI",
      authors: ["Pei Chen", "Jiayi Yao", "Zhuoyi Cheng", "Yichen Cai", "Jiayang Li", "Weitao You", "Lingyun Sun"],
      me:      "Yichen Cai",
      venue:   "ACM CHI 2025",
      abstract: {
        zh: "提出 CoExploreDS 系统，将人机协作设计空间探索中涌现的问题与解决方案形式化为节点，通过四种推理方法动态生成建议。用户研究证实该系统显著提升了设计质量与人机协作体验。",
        en: "Introduces CoExploreDS, which formalizes emerging problems and solutions in collaborative design space exploration as nodes, dynamically generating suggestions via four reasoning methods. User studies confirm significant improvements in design quality and human-AI collaboration experience.",
      },
      links: [
        { zh: "论文", en: "Paper", icon: "📄", url: "https://dl.acm.org/doi/10.1145/3706598.3713869" },
      ],
      image: "components/papers/papers_fig/paper.2.1.png",
    },
  ],

  // ── 项目 ───────────────────────────────────────────────
  // award 字段可选，没有奖项删掉该行即可
  projects: [
    {
      icon:  "👁",
      title: { zh: "第一人称共享视野的人机认知对齐研究",   en: "Cognitive Alignment via Shared First-Person Perspective" },
      desc:  {
        zh: "构建基于共享第一人称视角的双向感知系统，使 AI 具备「所见即用户所见」的能力。研发受认知科学启发的动态多模态智能体记忆系统，支持视野内物体图像与描述的实时检索以增强 VLM 协作力，并结合端到端实时处理流水线实现持续动态的认知对齐。",
        en: "A bidirectional perception system built on a shared first-person perspective, giving AI a 'see what the user sees' capability. Features a cognitive-science-inspired dynamic multimodal agent memory for real-time retrieval of in-view objects, and an end-to-end real-time pipeline for continuous cognitive alignment.",
      },
      tags: [
        { zh: "智能体", en: "Agent" },
        { zh: "VLM",   en: "VLM" },
        { zh: "人机交互", en: "HCI" },
      ],
      award: { zh: "CHI 2026", en: "CHI 2026" },
    },
    {
      icon:  "🎭",
      title: { zh: "基于角色背景知识的忠实角色扮演智能体研究", en: "Faithful Role-Playing Agents with Persona Knowledge" },
      desc:  {
        zh: "构建基于真实访谈数据微调的采访者智能体以生成上下文相关提问，并利用 1201 个视频资料构建人物背景知识图谱，驱动被访者智能体通过图谱查询实现忠实问答。基于生成的 23401 组三元组数据集进一步微调出高保真角色扮演模型，有效提升角色一致性。",
        en: "An interviewer agent fine-tuned on real interview data generates context-relevant questions, while persona knowledge graphs built from 1,201 video sources drive an interviewee agent to answer faithfully. A dataset of 23,401 triplets is used to fine-tune a high-fidelity role-playing model with improved persona consistency.",
      },
      tags: [
        { zh: "LLM", en: "LLM" },
        { zh: "知识图谱", en: "Knowledge Graph" },
        { zh: "角色扮演", en: "Role-Playing" },
      ],
      award: { zh: "ACL 2026", en: "ACL 2026" },
    },
    {
      icon:  "🔄",
      title: { zh: "基于隐式用户反馈的自进化对话智能体研究", en: "Self-Evolving Conversational Agent via Implicit Feedback" },
      desc:  {
        zh: "提出 IEvoAgent 框架，通过挖掘用户后续行为中蕴含的隐式反馈信号实现智能体自进化。基于 21 万轮真实对话数据揭示「响应类型—隐式反馈」的结构化依赖规律，构建两阶段优化机制：离线阶段以 KTO 算法进行偏好对齐，在线阶段通过动态反馈分布矩阵估算预期奖励驱动提示词实时演化。",
        en: "The IEvoAgent framework achieves self-evolution by mining implicit feedback signals from users' subsequent behaviors. Based on 210K rounds of real dialogue data, it builds a two-stage optimization mechanism: offline KTO-based preference alignment and online reward estimation via a dynamic feedback distribution matrix to evolve prompts in real time.",
      },
      tags: [
        { zh: "智能体", en: "Agent" },
        { zh: "LLM", en: "LLM" },
        { zh: "对话系统", en: "Dialogue" },
      ],
      award: { zh: "ACL 2026 Oral", en: "ACL 2026 Oral" },
    },
    {
      icon:  "🤖",
      title: { zh: "基于上下文工程的 LLM 机器人概念设计平台",   en: "LLM-based Robot Conceptual Design Platform" },
      desc:  {
        zh: "采用上下文工程实现 LLM 驱动的机器人概念方案设计与物理原型实现，将专业参数映射至需求问题，引导非专家用户完成从粗到细的设计流程，并集成任务分解、机械控制代码生成与仿真模拟功能。",
        en: "Uses context engineering for LLM-driven conceptual robot design and physical prototype realization, mapping expert parameters to user-facing questions. Integrates task decomposition, mechanical control code generation, and simulation.",
      },
      tags: [
        { zh: "机器人", en: "Robot" },
        { zh: "LLM",       en: "LLM" },
        { zh: "设计", en: "Design" },
      ],
    },
    {
      icon:  "⚙️",
      title: { zh: "基于 AutoGen 的多智能体辅助产品概念设计系统", en: "Multi-Agent Product Design System (AutoGen)" },
      desc:  {
        zh: "利用 AutoGen 框架搭建多智能体架构，开发可自动操作 Rhino 的参数化建模工具及通过 COM 接口操作 SolidWorks 的有限元分析工具，为设计师提供快速发散思维与验证可达性的方法。",
        en: "Multi-agent system built on AutoGen, featuring automated parametric modeling in Rhino and FEA via SolidWorks COM interface, enabling designers to rapidly expand ideas and verify feasibility in concept design.",
      },
      tags: [
        { zh: "智能体",    en: "Agent" },
        { zh: "设计",      en: "Design" },
        { zh: "CAE", en: "CAE" },
      ],
      award: { zh: "🏆 全国二等奖", en: "🏆 National 2nd Prize" },
    },
    {
      icon:  "✦",
      title: { zh: "StepIdeator — 渐进式 AI 设计辅助系统", en: "StepIdeator — Progressive AI Design Tool" },
      desc:  {
        zh: `针对生成式 AI"一步到位"的局限，开发了渐进式设计辅助系统，通过设计阶段划分、多模态模型调度和结构化提示词工程，将 AI 适配至设计师以混合表征迭代深化概念的真实工作流中。`,
        en: "Addresses the 'one-shot generation' pitfall of generative AI tools by building a progressive design system with stage decomposition, multimodal model orchestration, and structured prompt engineering—adapting AI to designers' real iterative workflows.",
      },
      tags: [
        { zh: "LLM",  en: "LLM" },
        { zh: "Design",  en: "Design" },
        { zh: "ASME JMD",   en: "ASME JMD" },
      ],
    },
  ],
};