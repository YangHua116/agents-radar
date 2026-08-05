# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 01:27 UTC

---

# Hugging Face 热门模型日报（2026-08-05）

## 今日速览
本周关注点集中在多模态生成与社区量化两条主线：MiniMax-H3 系列推动文本/图像到视频的热度上升；DeepSeek-V4 系列（含 Flash 版本）与 GLM-5.2 在文本生成领域持续高热度并带来大量下载；社区对 GGUF / 量化格式的转换和未审查（uncensored）分支活跃，说明离线部署与轻量化使用需求旺盛。企业级多模态（例如 Mage-VL、Unlimited-OCR）依然获得广泛关注，表明视觉理解与 OCR 场景的高实用价值。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,302 | 433,284 | 一个以文本生成为主的 DeepSeek V4 Flash 变体；上榜因高人气与大量下载，适合对话/生成场景。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 | DeepSeek 官方 Flash 版本，下载量极高，证明其在开源文本生成/会话用途上的广泛采用。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,820 | 2,234,662 | 大规模对话/生成模型（GLM 系列）；点赞与下载双高，表明企业与研究用户的双向兴趣。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37,256 | 轻量级通用文本生成模型，适合资源受限环境与快速原型验证。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 | Laguna 系列的小/中等体量模型，受到社区开发者关注用于对话与生成任务。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 | Aquila 系列的迷你版，面向轻量部署和低资源测试。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 | Aquila 的更强版本，适用于需要更高生成质量的场景。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 153 | 47,393 | 中小型文本生成模型，侧重通用性能与较小的算力门槛。 |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 | 极大规模 MoE/混合专家家族成员，面向高端研究与推理能效优化。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 192 | 2,987 | 基于 Qwen 家族的文本生成变体，面向高容量/高质量生成场景。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,021 | 0 | 面向图像+文本到视频的生成模型；代表文本到视频方向的社区热潮。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,012 | 1,125,935 | 多模态（image→text/对话）模型，点赞与下载量都非常高，适合视觉语言交互与特征提取。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 603 | 2 | ComfyUI 生态下的 MiniMax-H3 封装/集成示例，便于 UI/流程集成。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,881 | 2,703,366 | 专业级 OCR 与图像到文本能力，超高下载量说明在生产 OCR 场景中的广泛应用。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 | 紧凑型多模态模型，面向轻量视觉-文本任务与对话。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 247 | 11,276 | 本地化 TTS 预览模型，适合边缘/离线语音合成实验。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 188 | 0 | Qwen3-VL 的整合/工程化变体，面向视觉语言与 ComfyUI 流程。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 435,784 | 微软的多模态视觉-语言模型，适合图像理解与生成任务，下载量可观。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | 面向文本到图像的生成与 LoRA 用例，偏向 ComfyUI 与创作工具链。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2,243 | 跨模态能力的较大模型变体，适合复杂视觉-文本任务。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 | 小体积、高效率的离线 TTS，面向边缘/CPU 场景。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | （创作/生成工具）文本到图像 LoRA / 模型适配，便于 ComfyUI 集成。 |

> 注：表中已合并 ComfyUI/工具集成类条目以反映多模态生态链。

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15,381 | 针对代码生成/理解的模型变体，面向开发者工具与自动化编码辅助。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 470 | 111,678 | DeepSeek V4 Flash 的 GGUF 转换版，供离线/优化推理使用，反映社区量化趋向。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 | Kimi-K3 的 GGUF 格式，方便在本地/嵌入式环境加载并减少内存开销。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,512 | 1,633,405 | Qwen3.6 的社区融合与 GGUF 打包，下载极高，显示用户对“可脱机部署 + 调整变体”的强需求。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 265 | 323,116 | Qwen3.5 的社区量化/分支，便于低成本部署与实验性使用。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 | 大型号的 Qwen3.6 社区 GGUF 构建，反映用户偏好离线化大模型。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 | 高下载量的 Qwen3.6 未审查变体，显示社区在模型可用性与自定义方面的强烈活动。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 103 | 40,010 | MiniMax-H3 的 GGUF 集合，支持文本到视频流程在本地化环境中的快速试验。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69,253 | Solar-Open2 的 NVFP4 量化变体，强调针对特定硬件（FP4/NV）和高效推理的优化工作流。 |

---

## 生态信号（约 120–160 字）
当前生态显示两大方向：一是多模态（尤其文本/图像→视频 与视觉-语言）快速扩张，MiniMax-H3 系列与 Mage-VL、Kimi-K3 等代表这一波；二是“可部署化”驱动的社区量化热潮，GGUF、NVFP4、INT8/AWQ 等格式与大量未审查/融合分支（Qwen 家族）说明用户更倾向于本地离线运行和定制微调。总体上，开源权重与社区派生版本占据主导，商业/企业模型仍通过企业发布（如 Microsoft、Baidu）维持高影响力。注意量化工件数量激增，值得关注部署兼容性与安全/合规审查。

---

## 值得探索（2–3 个）
1. [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — 高下载量与 Flash 系列的性能/可用性使其成为评估对话生成与微调效果的首选基线。  
2. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 文本/图像到视频方向的代表作，适合研究文本驱动的视频生成与流水线集成。  
3. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 超高下载量、企业级 OCR 能力，值得用于生产 OCR 集成、文档理解与下游微调。

---

如需把上述模型按你的用例（推理延迟、显存约束、商业许可）筛选并生成测试脚本或对比矩阵，可提供优先条件，我将输出可复现的对比计划与示例命令。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*