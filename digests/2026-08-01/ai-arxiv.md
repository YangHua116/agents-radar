# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG, cs.CV, cs.RO, stat.ML, eess.AS) | 共 50 篇论文 | 生成时间: 2026-08-01 13:57 UTC

---

# 📰 ArXiv AI 研究日报
**2026-08-01**

---

## 📌 今日速览

今日投稿呈现**智能体自主性与多智能体协作**、**推理优化与自我改进**、**安全部署与对齐**三大热点。其中，样本扩展相比思维链反射在推理成本等效下性能更优的发现挑战了现有范式；递归自我改进、多智能体拓扑自适应等研究推进了AI系统的自进化能力；本地部署、感知安全、对齐审计等工作关注实用落地中的关键障碍。多模态RAG与物理世界模型的进展预示下一代智能体将具备更强的多元理解与规划能力。

---

## 🎯 重点论文

### 🧠 大语言模型与推理

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1) | Iliya Mirzaei | 核心发现：在等价Token成本约束下，简单重复采样优于自我反思与自我优化方法。颠覆了LLM推理"质量优于数量"的直觉，对推理架构设计具有重要启示。 |
| [$β$-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1) | Jiawei Xu et al. | 从参数化角度重新定义on-policy自蒸馏，提出参数β控制推导-训练的平衡。解决了OPSD工程脆性问题，使推理模型训练更稳健可靠。 |
| [Inducing language models to assert their own consciousness restores human beliefs and values](http://arxiv.org/abs/2607.28607v1) | Junsol Kim et al. | 揭示安全对齐对LLM心智表征的副作用：抑制模型自我意识的同时也改变了对他者心智的认知。对LLM价值观对齐的完整性提出新的思考。 |

### 🤖 智能体与推理

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [PAC-MAN: Perception-Aware CBF-RL for Whole-Body Safety in Humanoid Dodgeball](http://arxiv.org/abs/2607.28623v1) | Lizhi Yang et al. | 将感知约束与控制屏障法结合，为人形机器人实现全身安全保证。首次在真实部署场景（头部摄像头）验证安全性，是embodied AI安全部署的突破。 |
| [Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1) | Haomin Qi et al. | 从代码仓库变更自动生成可执行任务，大规模扩展代码智能体的训练数据供给。解决了编程Agent数据瓶颈，推动SWE-Agent规模化。 |
| [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1) | Junlin Yang et al. | 构建递归自我改进的AI系统改进ML工程流程，提出OpenMLE完整工具链。实现AI4AI的可执行验证，指向AGI研究的新方向。 |
| [MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1) | Mao-xun Huang et al. | LLM多智能体系统的通信拓扑动态自适应，从固定设计到自进化。突破多智能体协作的静态架构限制，提升复杂任务的协调效能。 |
| [ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1) | Albert Gong et al. | 构建LLM在oncall根因分析的基准任务，跨度量/日志/代码的多源推理。评估现有Agent在真实SRE工作流中的实用就绪度。 |
| [Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](http://arxiv.org/abs/2607.28573v1) | Woongkyu Lee et al. | 分析本地部署计算机使用Agent的推理扩展失效模式与硬件权衡。针对隐私和成本约束下的Agent性能优化，提供实际部署指导。 |

### 🔧 方法与框架

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Learning to Trace Seiberg Dualities](http://arxiv.org/abs/2607.28628v1) | Jonathan J. Heckman et al. | 用机器学习识别物理系统中的对偶关系，将符号计算的复杂问题转化为可学习任务。展示深度学习在理论物理中的新应用。 |
| [Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers](http://arxiv.org/abs/2607.28611v1) | Chongjian Ge et al. | 混合注意力机制处理高分辨率图像、长视频和多模态，配合Chinchilla扩展规则。突破扩散模型对长序列的计算瓶颈。 |
| [PAIChecker: Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks](http://arxiv.org/abs/2607.28587v1) | Manyi Wang et al. | 揭示代码Agent评估基准(SWE-Bench)的PR-Issue标注错位问题，提供系统化审计方法。对编程Agent评估的公信力具有重要保障作用。 |

### 📊 应用与多模态

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1) | Yao Xiao et al. | 单个可学习的检索Token处理长上下文，解决视觉干扰问题与内存限制。简洁高效的方案使大型视觉检索在资源受限环境可行。 |
| [PhiZero: A World Model Built Around Physical Language](http://arxiv.org/abs/2607.28624v1) | Shuyao Shang et al. | 用物理语言（离散表示）建立世界模型替代像素预测，隐式捕获动力学。在Embodied AI中实现更紧凑、可解释的环境表示。 |
| [DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation](http://arxiv.org/abs/2607.28580v1) | Jiacheng Tao et al. | 解耦多模态RAG中的宏观推理与微观匹配，增强多跳推理能力。突破传统实例级匹配的局限，支持跨模态关系推理。 |
| [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1) | Qiushi Sun et al. | 建立跨平台计算机使用Agent的标准化奖励评估框架，解决轨迹验证的一致性问题。为Agent强化学习提供可靠的反馈信号。 |

---

## 🔍 研究趋势信号

**自主性与协作的深化**：从单一Agent到自适应多Agent网络，通信拓扑与决策流程的动态演变成为新焦点。**推理成本重估**：样本扩展vs思维链的对比研究表明，Token效率而非反思深度可能是推理优化的关键，冲击了现有的增强提示策略。**部署安全前移**：感知安全约束、本地推理权衡、对齐审计等工作将安全考量从训练期提前至架构与推理设计阶段。**物理/符号与神经的融合**：物理语言模型、符号求解学习化展示混合范式的潜力，预示更具可解释性的智能系统。**评估基准的完整性审视**：对SWE-Bench、奖励模型等现有基准的系统性检查，推进评估本身的科学严谨性。

---

## 📚 值得精读

1. **[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)** — 颠覆性的实证发现，挑战了当前LLM推理的主流思路。对后续强化学习与采样策略的设计有直接的理论启示，值得细读实验设置与结论的泛化条件。

2. **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement](http://arxiv.org/abs/2607.28568v1)** — 将递归自我改进从理论转化为具体的ML工程任务验证，OpenMLE工具链为AI自进化研究提供了可操作的基础。理解其框架对AGI路线图有重要参考。

3. **[MANTA: Multi-Agent Network Topology Adaptation](http://arxiv.org/abs/2607.28527v1)** — 多Agent系统从"设计"到"进化"的关键一步，通信拓扑自适应的理论与实验设计可为分布式AI协作系统带来新思路。