# ArXiv AI 研究日报 2026-08-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG, cs.CV, cs.RO, stat.ML, eess.AS) | 共 50 篇论文 | 生成时间: 2026-08-13 01:00 UTC

---

# ArXiv AI 研究日报 — 2026-08-13

## 今日速览
今日投稿显示三条高频线索：一是对生成模型的分布级评价与鲁棒性优化（如 Fréchet 目标与对抗化），二是自演化/自适应智能体与技能压缩在长期任务与工具使用中的应用与效率问题，三是模型可靠性与对齐——跨语种安全、注意力路径脆弱性及可验证推理在评估与安全方向上受关注。垂直应用（外科机器人、医学影像、农业与畜牧）继续推动方法落地与标注效率研究。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Attention-Path Fragility as an Uncertainty Signal in Large Language Models](http://arxiv.org/abs/2608.11138v1) | Minsoo Kim, Sungyoung Ji, Kisung Moon et al. | 提出 ASMI（Attention-Subnetwork Mutual Information），把注意力子网络的“脆弱性”作为不确定性信号。提供一种新的不确定性度量，有助于更细粒度的模型可靠性与拒答策略。 |
| [The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1) | Abigail Oppong, P Sam Sahil, Tadesse Destaw Belay et al. | 系统评估安全对齐在低资源语言的迁移缺陷，展示英文优先的防护并不能直接泛化。强调多语种安全评估与本地化防护策略的必要性。 |
| [From Interpretability to Control: Insights from Six Years of the TrustNLP Workshop](http://arxiv.org/abs/2608.11171v1) | Rahul Gupta, Abhinav Mohanty, Anaelia Ovalle et al. | 回顾 TrustNLP 六年，论述从可解释性到可控性的演变与实践经验。为对齐/评估研究提供社区趋势与成熟方法学的宏观视角。 |
| [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1) | Kushal Chakrabarti et al. | 分析 agentic coding 文档无限增长的根源（碎片化记忆与重复附加）。揭示长期自治代理在知识管理与可维护性上的实际挑战。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1) | Alan Li, Rahul Saha, Anton Xue et al. | 报告人机协作在改进 Grothendieck 常数上下界中的长期研究流程与方法。展示 AI 在复杂数学推理与长期规划任务中的协同潜力与流程化实践。 |
| [SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure](http://arxiv.org/abs/2608.11079v1) | Xiaofan Bai, Hongqiang Lin, Chao Liu et al. | 提出无评估指标的技能压缩方法，自动发现可重用行动片段以减少代理技能冗余。对自进化代理的扩展性和存储/推理效率有直接提升意义。 |
| [Scheduling Mixed RL Rollouts Beyond Prefix Locality](http://arxiv.org/abs/2608.11152v1) | Zetao Hong, Song Yuan, Yuanhao Ding et al. | 探讨 RL 后训练中跨域 rollout 调度问题，提出超越前缀局部性的调度规则以提升缓存复用与训练效率。对大规模多任务/多反馈管线尤为重要。 |
| [Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents](http://arxiv.org/abs/2608.11110v1) | Sourabrata Mukherjee, Kalika Bali, Sunayana Sitaram et al. | 考察工具使用代理在跨语言下是否保持相似决策序列，强调“动作路径”比最终答案更能反映策略保真性。为多语种代理的行为一致性评估提出新视角。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）
| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [AdvFD: Boosting Visual Generation via Adversarial Fr'echet Distance Loss](http://arxiv.org/abs/2608.11205v1) | Mingju Gao, Jingkai Zhou, Kun Gai et al. | 将对抗性训练与 Fréchet 距离目标结合以提升生成模型的分布级性能，并讨论 Fréchet 优化导致的“Fréchet hacking”。对生成质量与指标鲁棒性有直接影响。 |
| [VIScore: Diagnosing Planning-Relevant Quality in Latent World Models](http://arxiv.org/abs/2608.11174v1) | Haiyu Wu, Randall Balestriero, Morgan Levine et al. | 提出用于评估世界模型规划相关质量的新指标/诊断方法，连接潜空间规范性与规划成功率。对基于潜空间的模型预测与控制研究具有实用诊断价值。 |
| [AlbumentationsX: One Augmentation Pipeline for Images and Related Annotations](http://arxiv.org/abs/2608.11123v1) | Vladimir Iglovikov et al. | 提出统一的增强流水线以确保图像与多类注释（掩码、框、关键点等）的一致变换。降低数据增强引入的注释错位错误，提升训练稳定性。 |
| [Batch Size or Negatives? A Selection Rule for Memory-Constrained Recommender Training](http://arxiv.org/abs/2608.11061v1) | Artyom Sabitov, Daniil Volkov, Alexey Zaytsev et al. | 针对大规模推荐训练的内存限制，给出在 batch size 与负样本数量之间的选择规则，优化内存-样本利用率权衡。对工业级推荐系统训练效率有直接应用价值。 |

### 📊 应用（垂直领域、多模态、代码生成）
| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1) | Wenrui Bao, Tianyun Jiang, Zhiben Chen et al. | 为外科机器人提出基于 World-Action 模型的数据高效学习方法，旨在减少高质量操作标签需求并提升接触精度。对临床可用性的推进具有直接意义。 |
| [Foundation Model-Enabled Efficient Data Sampling (FEEDS): A label-efficient training strategy for pan-cancer, multi-tracer PET/CT datasets](http://arxiv.org/abs/2608.11076v1) | Biratal Raj Wagle, Bashirul Azam Biswas, Grant Chau et al. | 利用 foundation model 指导样本选择，显著减少医学图像标注成本并提升肿瘤分割泛化。对多中心、多示踪剂数据的标注效率尤为关键。 |
| [3D Weighted Geometric Graph Neural Networks for Sheep Facial Pain Assessment](http://arxiv.org/abs/2608.11050v1) | Alam Noor, Luis Almeida, Mohamed Daoudi et al. | 将 3D 几何图神经网络应用于动物面部痛感评估，结合加权图结构与临床量表改进诊断准确度。展示 ML 在兽医与福利监测中的定量潜力。 |

---

## 研究趋势信号（100–200 字）
近期投稿集中在“评估与可靠性（注意力路径脆弱性、跨语种安全）”与“自适应/自进化系统”（技能压缩、长期人机协作）两端，同时方法层面强调分布级目标（Fréchet）与潜空间诊断工具，并在医疗、机器人、农业等垂直领域推动标注效率与鲁棒部署实践。这表明研究同时追求方法学进步与可落地的安全与效率解决方案。

---

## 值得精读（2–3 篇）
1. AdvFD: Boosting Visual Generation via Adversarial Fr'echet Distance Loss  
   理由：将分布级 Fréchet 目标与对抗训练结合，并讨论指标优化带来的“攻击/曲解”问题，适合希望改进生成质量同时规避指标过拟合的研究者與工程师。  
   链接: http://arxiv.org/abs/2608.11205v1

2. Attention-Path Fragility as an Uncertainty Signal in Large Language Models  
   理由：提出新的不确定性信号（基于注意力子网络脆弱性）——对安全、拒答、模型监控与置信估计具有直接应用价值，可补充基于输出熵的传统方法。  
   链接: http://arxiv.org/abs/2608.11138v1

3. Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration  
   理由：详细呈现人机长期协作在高难度数学问题上的实践流程、方法选择与失败修正策略，对将 AI 纳入长期科学研究工作流有重要启发。  
   链接: http://arxiv.org/abs/2608.11195v1

---

如需将上述论文按关键词、可复现实验代码或数据集链接整理成 CSV 或生成关注优先级（短中长期）清单，可继续指示。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*