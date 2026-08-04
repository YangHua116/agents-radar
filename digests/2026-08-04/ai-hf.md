# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 01:22 UTC

---

# Hugging Face 热门模型日报（2026-08-04）

## 今日速览
- 本周榜单以多模态与社区量化/微调爆款为主：moonshotai 的 Kimi-K3 获得最高点赞与大量下载，显示视觉-文本推理类模型的高关注度。  
- DeepSeek / DeepSeek-V4 系列与 GLM-5.2 热度稳健，文本生成家族仍是流量核心。  
- 社区发布的 GGUF/量化与“uncensored”变体活跃，表明离线/本地化部署需求上升。  
- 视频与多模态生成（MiniMax-H3、Mage-VL 等）与 TTS/OCR（Audio8、Unlimited-OCR）并驾齐驱，生态在向多模态全栈扩展。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,058 | 236,076 | 文本生成模型，DeepSeek V4 系列的特定迭代；以对话与生成质量被社区关注，适合多轮生成与聊天场景。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,797 | 2,180,509 | 大型混合专家/生成模型（GLM 家族）；下载量巨大，显示其在实际应用与研究中的广泛采用。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | 中小参数量生成模型，面向轻量部署与快速响应场景；上榜因社区兴趣与可用性。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 909 | 81,584 | 文本生成方向的新兴模型，关注自然语言生成质量与速度，下载活跃。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,990 | 2,746,291 | DeepSeek V4 主版本，极高下载量表明广泛试验与生产测试；擅长对话与生成任务。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 | 1,063 | 小型 Aquila 系列模型，面向轻量端部署與推理试验；被标注为文本/多模态兼容。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | 更大或更强化的 Aquila 版本，针对更复杂生成与检索任务做优化。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 168 | 68,778 | 超大模型的量化（NVFP4）发布，面向高端推理与成本优化场景；亮点在于量化格式便于加速。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 148 | 2,078 | MoE（Mixture-of-Experts）架构模型，针对高效容量与推理伸缩性设计；社区对 MoE 趋势持续关注。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,850 | 967,622 | 多模态（image-text-to-text）模型，本周最高点赞与大量下载；强在视觉-文本理解与生成，社区热度极高。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,464 | 0 | image-text-to-video 模型，面向视频生成/编辑方向；上榜表明文本到视频的兴趣提升。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 446 | 2 | MiniMax-H3 的另一个发布点，关联 ComfyUI 生态，便于在本地图形工作流中试用。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,846 | 2,601,062 | 大规模 OCR/视觉文本提取模型，下载遥遥领先；适合文档识别与工业级 OCR 应用。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | 小型多模态模型，面向轻量交互与视觉问答；上榜因其实用性与易部署特性。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | Kimi-K3 的 GGUF 编码变体，便于本地离线推理与快速部署，兼顾多模态能力。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 231 | 431,487 | Microsoft 的视觉语言模型，面向多模态理解与生成，企业级落地潜力大。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 342 | 287,745 | Qwen3.6 的社区“uncensored”/GGUF 变体，强调本地化与高可用的多模态推理。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | 标注为 image-text-to-text 的大模型，面向复杂视觉语言任务与企业应用试验。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 118 | 1,736 | 多模态/图文模型，代表社区在大参数多模态模型上的持续尝试。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 93 | 0 | 集成多种社区改造（INT8、ComfyUI 支持等），面向本地加速与工作流集成。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 242 | 1,324 | Kimi-K3 的另一个发布点（transformers 格式），便于对比实验与跨框架部署。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 237 | 304,420 | Qwen3.5 的社区改造（GGUF/uncensored）；受欢迎用于离线多模态/文本混合场景。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,269 | 1,895,741 | 高下载量的 Qwen3.6 社区“uncensored”变体，显示对本地化大模型变体的强烈需求。 |

---

### 🔧 专用模型（代码、音频、OCR、LoRA 等）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 212 | 4,609 | 文本到语音（TTS）预览模型，面向高自然度语音合成与多声线支持。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 398 | 1,944 | 面向本地/边缘设备的轻量 TTS 模型，强调 CPU 友好和低延迟。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 445 | 14,339 | 针对代码生成与编程任务微调的模型，适合辅助编程与代码理解场景。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 159 | 0 | 专注于 text-to-image/LoRA 类资源，便于集成到 ComfyUI 等图形工作流中。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | 小型多模态/对话模型，适用于资源受限环境的视觉问答与对话。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ、INT8、NVFP4）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,431 | 1,550,034 | Qwen3.6 的 GGUF/社区融合变体，高下载量突显离线量化与“uncensored”改造的普及。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 429 | 69,656 | DeepSeek V4 的 GGUF 量化版，方便离线部署与低延迟推理。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | Kimi-K3 的 GGUF 编码版本，面向社区本地化部署与快速启动。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 237 | 304,420 | Qwen3.5 的社区量化/改造版本，便于在资源受限环境运行大型模型。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 342 | 287,745 | 社区发布的 GGUF/uncensored 变体，强调本地化、可量化部署能力。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,269 | 1,895,741 | 超高下载量的社区量化/改造版本，反映大量用户在本地运行 Qwen 大模型的需求。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 168 | 68,778 | NVFP4 量化的超大模型权重，针对 GPU 上更高吞吐与更低显存占用优化。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 93 | 0 | 集成 INT8 与 ComfyUI 支持的社区构建，面向本地化低精度推理与工作流集成。 |

---

## 生态信号（约 140 字）
Qwen 系列与 DeepSeek 家族热度不减，GLM/MoE 与大参数量模型仍受企业与研究双重追捧。社区对 GGUF、INT8、NVFP4 等量化格式与“uncensored”变体的热衷，反映出离线/本地化部署需求与对更低成本推理的追求。多模态（图像/视频/OCR/ TTS）同时上升，表明生态正在从纯文本扩展为多模态全栈。微调与社区权重共享保持活跃，量化工具链与框架整合成关键基础设施信号。

---

## 值得探索（2–3 个推荐）
1. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 原因：本周点赞与下载双料领跑，适合做视觉-文本理解、视觉问答与多模态推理基线验证。  
2. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 原因：工业级 OCR 下载量巨大，适合文档理解、表单/票据自动化与 OCR+LLM 的端到端集成实验。  
3. [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — 原因：高下载量与 MoE/混合架构代表性强，适合研究大规模模型的性能、推理成本与微调策略。

---

如需把某类模型做深度对比（例如：Kimi-K3 系列不同发布点、或 Qwen 家族的 GGUF/原权重比较），可提供对比指标（推理延迟、显存、生成质量评测集），我可以基于这些指标给出实验设计与优先级建议。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*