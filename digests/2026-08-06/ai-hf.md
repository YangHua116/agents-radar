# Hugging Face 热门模型日报 2026-08-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 01:24 UTC

---

# Hugging Face 热门模型日报（2026-08-06）

## 今日速览
本周热点集中在多模态与高下载量的 LLM 家族：MiniMax、DeepSeek、Kimi 与 Qwen 系列占据话题榜单。视频/图像到视频与实用 OCR、TTS 模型增长明显，说明多模态下游应用热度上升。社区对 GGUF/量化分发活跃，许多热门模型出现可本地部署的量化包。企业级与开源混合并存：大厂模型下载大、社区微调与复刻广受欢迎。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,497 | 433,284 | 一款以 DeepSeek_V4 为核心的文本生成模型，面向对话与检索增强生成。因高下载量和 conversational 标记被广泛用于下游对话与检索任务。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,031 | 2,737,621 | DeepSeek 系列的基础发行版，定位为高吞吐文本生成/对话模型。超高下载量显示出其在生产与研究社区的广泛采用。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,849 | 2,234,662 | GLM 系列最新迭代，面向通用文本生成与会话任务。以大规模下载与高点赞证明学术/工程双向关注度。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 285 | 47,393 | 中小规模因果语言模型，适配轻量部署与生成任务。下载量说明在资源受限场景下有实际用途。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 416 | 1,317 | Aquila-mini 为小型高效生成模型，兼顾文本与图文任务。定位轻量化推理与快速迭代实验。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1,388 | Aquila-pro 面向更高能力的文本生成与检索场景。适合需要更强上下文理解的应用。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 2,987 | Qwen3.6 系列的社区/微调变体，侧重大规模生成能力。结合 MoE/混合架构提高参数利用率。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 157 | 0 | 新兴的文本生成预览模型，面向研究试验。当前主要用于功能验证与能力评估。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 156 | 25 | 针对对话与会话场景的轻量化语言模型，带有定制化代码和对话优化。下载数虽小但定位明确。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 131 | 166 | Mistral 家族的小型衍生模型，适用于低成本推理与安全性试验。体量小、适配性强。 |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 129 | 325 | 大规模 MoE 模型的社区镜像/发行，定位高性能生成场景。展示了 MoE 在开源社区的扩展应用。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,497 | 10,841 | 面向 image-text-to-video 的多模态生成模型，支持从图像与文本生成视频。高点赞反映对视频生成能力的强烈市场兴趣。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,125 | 1,125,935 | Kimi-K3 是面向图像与文本理解/生成的多模态模型，下载与点赞双高说明其广泛采纳。擅长图文检索与图像条件生成。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 308 | 15,500 | 小型多模态模型，支持图文问答与特征抽取。适合资源受限的多模态应用与实验。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435,784 | 微软的多模态视觉语言模型，强调跨模态理解与生成能力。高下载量体现企业级与研究用户的信任。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 284 | 0 | Qwen3-VL 的 ComfyUI/INT8 调整版本，面向本地化部署与视觉-语言任务。强调实用部署（INT8 量化）与图像理解能力。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 145 | 2,243 | 大型多模态（image-text-to-text）模型，兼顾生成与理解。适合高复杂度视觉上下文任务。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 191 | 0 | 专注 text-to-image 的 LoRA/krea2 工作流模型，便于与 ComfyUI/Krea 集成。面向创意生成与轻量定制。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 496 | 15,381 | 针对代码生成与编程任务优化的模型，适合开发者工具链集成。高点赞与中等下载表明社区对代码能力的关注。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 124 | 80 | 面向语音/对话的多模态语音模型，强调实时语音聊天能力。适合语音交互与客服场景的集成试验。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2,072 | 面向边缘设备的轻量 TTS 模型，优化 CPU/低资源推理。适合本地化语音合成与离线部署。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111,678 | DeepSeek-V4 的 GGUF 格式分发，便于本地化、离线部署与加速推理。大量下载显示社区对可本地运行权重的强烈需求。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170,055 | Kimi-K3 的 GGUF 量化包，降低部署门槛并兼顾多模态能力。下载量证明了用户对离线多模态模型的需求。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 137 | 40,010 | MiniMax-H3 的 GGUF/量化变体合集，专注于视频/图像到视频模型的本地运行。使得高质量视频生成更易于离线部署。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,588 | 1,633,405 | Qwen3.6 的社区融合与 GGUF 分发，下载极高表明广泛的本地化使用与微调实验。为想在本地运行大模型的团队提供可行路径。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 385 | 308,857 | Qwen3.6 35B 的 GGUF 量化分发，目标提供大模型的本地化可用版本。大量下载显示对高容量本地模型的需求。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 282 | 323,116 | Qwen3.5 的 GGUF 变体，规模适中且易于部署。高下载率表明中等规模量化模型在社区中极受欢迎。 |

---

## 生态信号（100–200 字）
当前热度集中在几类：一是多模态能力爆发（图像/视频到文本与视频生成），以 MiniMax、Kimi、Mage 等为代表；二是大规模 LLM 家族（Qwen、DeepSeek、GLM、EXAONE、Mistral 衍生）持续扩张；三是“开源权重 + 社区量化分发（GGUF/INT8/AWQ）”成为主流，显著降低本地部署门槛。企业级模型下载量大，社区微调与量化包下载活跃，表明研究/工程端都在做可用性和可部署性的权衡。

## 值得探索（2–3 个）
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 多模态能力强、点赞与下载极高，适合研究 cross-modal 检索与生成场景。  
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 专注 image-text-to-video，代表视频生成的最新消费级动向，值得测试样本生成质量与速度。  
- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — 高下载量与对话优化，适合作为对话/检索增强生成的基线并评估其可量化部署版本。

--- 

若需导出为 CSV、按作者/标签聚类或生成可运行的本地部署清单（含 GGUF/INT8 推荐），可继续说明需要的输出格式与优先级。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*