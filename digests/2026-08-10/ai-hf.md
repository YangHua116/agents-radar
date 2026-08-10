# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 00:53 UTC

---

# Hugging Face 热门模型日报（2026-08-10）

## 今日速览
MiniMax-H3 家族继续占据热度，衍生出大量 ComfyUI/LoRA/GGUF 打包与文本到视频（text-to-video）适配项目。大型开源 LLM（如 GLM-5.2、LiquidAI 系列）与多模态模型并行活跃。量化（NVFP4/INT4/INT8）、GGUF 格式与社区微调/LoRA 成为实用化部署的主流路径。百度 Unlimited-OCR 与 black-forest-labs/FLUX.1-dev 展现出高下载与高点赞并存的“落地”吸引力。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 | 一个以对话与生成为主的 text-generation 模型，适用于多轮对话与创作场景。凭借大量下载快速上榜，说明社区对高性能生成模型需求仍高。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 452 | 85,651 | 小型但高效的 text-generation 模型，面向轻量级生成与在线服务。被多次下载用于实验与集成。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 | 处于预览阶段的 causal LM，面向研究与 Mixture-of-Experts（MoE）试验。上榜反映社区对新型架构实验的关注。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 | 面向对话与指令跟随的 text-generation 模型，突出 conversational 能力与混合策略。适合做定制化对话系统的基座。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | Mistral 生态下的小型模型，兼顾推理效率与良好表现。适合资源受限环境的部署与微调。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | 新一代大规模多任务生成模型（GLM 系列），在社群中获得大量关注与下载。凭借高点赞与下载，成为开源 LLM 的代表性条目之一。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 | 面向 image-text-to-video 的大型多模态生成模型，专注文本与图像提示生成视频。由于强大的视频生成能力，吸引大量创作者与开发者关注。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,072 | 4,947,943 | 将 MiniMax-H3 做成 diffusion-single-file / ComfyUI 友好包，便于本地与可视化工作流。超高下载量显示社区对便捷部署与集成的强烈需求。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,398 | 1,456,459 | 面向 image-text-to-text 的多模态特征抽取模型，支持压缩张量与高效推理。高点赞与下载表明其在多模态检索与嵌入场景的广泛适用性。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | 大规模多模态 Qwen3-VL 的 ComfyUI 与 INT8 优化版本，面向图文理解与生成。虽无下载记录但代表社区在多模态大模型量化与 UI 集成上的尝试。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 | 针对 image-to-video 的 Minimax-H3 Turbo 变体，侧重高效视频生成流水线。适合把图像快速扩展为短视频的创作工作流。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | 通用 OCR 与图像到文本模型，数据与下载量巨大，适合文档理解与信息抽取。高下载量反映其在实际工程落地中的价值。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | 轻量化 TTS 模型，面向高质量语音合成与集成预览。适合语音产品的快速迭代与评估。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 121 | 482 | 面向图文多模态对话的模型，适合轻量化交互应用开发。上榜体现小众多模态模型的持续活跃。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | 针对 text-to-image 的高交互度生成模型，获得极高点赞数。凭借优秀的样本质量和社区口碑，成为图像生成领域的关注点。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | Microsoft 的多模态视觉-语言模型，擅长图像理解与文本生成。高下载量说明企业级模型在研究与产品化中的重要地位。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 233 | 0 | 对 MiniMax-H3 的 ComfyUI 打包或适配版本，便于可视化创作流程。体现社区在使能工具链上的迭代。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | 基于 MiniMax-H3 的文本到视频适配与微调作品，面向个性化风格生成。反映出 MiniMax 生态下大量变体化内容创作。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | 面向代码生成与理解的 text-generation 模型（Code-oriented）。适合做自动化编码助手与代码相关基准测试。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 544 | 0 | 针对 MiniMax-H3 的 LoRA 微调适配，支持更轻量的个性化风格调整。显示社区在快速迭代和个性化视频生成上的活跃性。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | 将 Qwen3.6-27B 的融合/微调产出以 GGUF 格式发布，便于本地高效部署。超大下载量表明社区对 GGUF 可执行格式的强烈偏好。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 | DeepSeek-V4 的 GGUF 打包版本，方便离线运行与量化部署。体现了从模型发布到可用部署格式的常见路线。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 231 | 0 | 将 MiniMax-H3-Turbo 与 LoRA、ComfyUI 集成，便于低成本微调与可视化调参。社区化组合增强了模型可用性。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | 提供 MiniMax-H3 的 GGUF 量化包，面向离线与资源受限部署。高下载量说明量化版本在工程落地中的重要性。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 | LFM2.5 的 GGUF 打包，便于用 llama.cpp 等本地推理栈运行。表明小型 LLM 的可迁移性能需求旺盛。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | 针对 MiniMax-H3 做 NVFP4/INT4/INT8 等多种量化方案的版本，显著降低显存消耗。庞大下载量证明量化对部署门槛降低的关键作用。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | 将 Qwen3-VL 与 NVFP4 量化和 MiniMax-H3 兼容性改造，体现多模型互操作与量化尝试。代表社区在跨模型集成与量化优化上的探索。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 454 | 396,282 | Qwen3.6 大模型的 GGUF 打包分发，便于本地部署与加速。大量下载说明 GGUF 已成为社区首选的可执行分发格式。 |

---

## 生态信号（100–200 字）
多模态视频/图像生成（以 MiniMax-H3 为核心）的生态爆发，带动 ComfyUI、LoRA、GGUF 与多种量化格式的配套工具链迅速扩大。开源 LLM（如 GLM-5.2、Qwen 系列、LiquidAI）与企业级多模态（Mage-VL、Unlimited-OCR）并驾齐驱。社区更倾向于把模型“包装成可运行格式”（GGUF、NVFP4、INT8）并通过 LoRA/adapter 做快速微调，以降低部署门槛并实现本地化应用。

---

## 值得探索（2–3 个）
1. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 领先的 image-text-to-video 模型，适合研究文本驱动视频生成与下游艺术/短视频创作管线。  
2. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 高下载量与实用性强的 OCR 模型，适合大规模文档理解与信息抽取方向的落地研究。  
3. [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) — 在 text-to-image 领域获得极高社区认可，适合探索高质量图像生成与样式控制策略。

---

若需将本日报转换为可打印 PDF、或生成每日监控脚本（自动抓取点赞/下载变动并发送通知），可再提供需求与目标渠道（Slack/邮件/Notion）。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*