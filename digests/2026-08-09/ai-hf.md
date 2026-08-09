# Hugging Face 热门模型日报 2026-08-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-09 00:50 UTC

---

# Hugging Face 热门模型日报（2026-08-09）

## 今日速览
本周多模态生成（尤其 MiniMax-H3 家族）的热度继续攀升，文本到视频/图像生成与 ComfyUI 生态结合紧密。大规模语言模型与多模态 VL（Qwen3-VL / Mage-VL 等）依旧活跃，GGUF/量化分发增长显著，社区在性能/可部署性上投入增加。OCR、TTS 与语音聊天方向（Baidu、NVIDIA、Audio8）也显示出产业化倾向。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,852 | 785,771 | 一款面向对话/生成的因果 LM，强调对话与检索增强能力。凭借高下载量和“Flash”系列标识成为社区轻量化部署和微调热点。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 415 | 81,522 | 中等规模的开源因果模型，定位轻量推理与聊天应用。因体积与性能折衷适合边缘/本地部署，下载量稳健。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 255 | 896 | 预览版因果 LM，包含专家路由/混合专家特性（MoE）。被关注为新的架构实验和多任务微调候选。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 222 | 4,189 | 以会话和对话为目标的轻量化模型，带有“flash”可部署优化。适合对话代理与定制化微调场景。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,902 | 2,480,368 | 大规模对话/生成模型家族的新成员，强调多任务与多语言能力。高点赞与下载证明其在研究与工程端的广泛影响力。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | 小尺寸 Mistral 系列衍生模型，面向高效部署与安全机制。作为轻量化 Mistral 变体，被当作嵌入端与推理端选项。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,104 | 26,693 | 面向 image-text-to-video 的多模态生成模型，主打图文到视频转换。高点赞说明视频生成方向正在吸引大量实验与内容创作。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,006 | 3,943,176 | 将 MiniMax-H3 以 diffusion-single-file/ComfyUI 形式分发，便于无缝集成到 ComfyUI 流程中。极高的下载量表明 ComfyUI 社区对一体化包的强烈需求。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,342 | 1,388,105 | 多模态特征提取/图文理解模型（image-text-to-text），下载与点赞极高。被视为高效特征提取与下游多模态任务的基础模型。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 198 | 0 | Minimax 系列的 turbo 版本，目标加速图像到视频/文本到视频生成。作为社区衍生项被用于性能探索。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,037 | 502,330 | 文本到图像生成模型，点赞最高之一，说明图像生成依然是用户关注焦点。凭借 Flux 品牌吸引大量创作与试验。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 | Microsoft 的多模态视觉语言模型，强调强大的图文理解与生成能力。高下载量表明企业级多模态能力被广泛采用。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | （见上）在多模态微调或作为视觉-语言管线前端时被频繁提及。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 | （重复：已列出） |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 | （多模态融合/图文模型）大型 Qwen3.6 系列的融合/离线 GGUF 包，强调图像-文本理解与高可用部署。超高下载量显示社区对离线大模型的强烈需求。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 346 | 28,178 | 小型多模态（image-text-to-text），适合资源受限场景的视觉语言任务。被关注为轻量化多模态应用的候选。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 | 将 MiniMax-H3 量化为 nvfp4/INT4/INT8 格式以便部署，面向加速与嵌入式推理。大量下载表明对可部署视频模型的强需求。 |
| [sexgod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 171 | 0 | 基于 MiniMax-H3 的风格/任务适配模型，偏向文本到视频创作。社区衍生内容生态的一部分。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 183 | 0 | ComfyUI 友好的 MiniMax 衍生，方便在本地工作流中使用。强调可视化工作流集成。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 140 | 0 | 试验性衍生版本，用于探索新插件/性能改进。主要面向社区测试。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 403 | 0 | Qwen3-VL 大型号的 ComfyUI/INT8 优化衍生，面向高性能视觉-语言任务。适合需要大模型视觉理解但追求部署效率的用户。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | （重复条目；见上） |

> 说明：多模态/生成分类中包含大量 MiniMax-H3 系列及其衍生（LoRA、ComfyUI、量化），显示该家族在图文/视频生成领域的强势扩散。

---

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR、语音）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,970 | 2,857,997 | 高质量 OCR 模型，强调“Unlimited”通用文字识别能力与多语言支持。极高下载量说明工业部署与研究双重需求。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 544 | 17,885 | 面向代码生成/理解的专用模型，强调编程任务的提升。适合代码自动补全与微调用于开发者工具。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 246 | 458 | 面向语音对话与语音聊天的模型，结合最新语音合成/识别研究。属于语音代理与交互系统的重要基石。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 322 | 12,837 | 语音合成（TTS）预览模型，定位高质量可调节语音输出。适合构建语音接口与助手。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 607 | 175,093 | DeepSeek V4 的 GGUF 离线包，方便在无需完整 Python 环境下使用。下载量表明用户对本地化、低依赖部署的偏好。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 157 | 49,562 | LFM 模型的 GGUF 版本，便于 llama.cpp 等工具快速加载与运行。支持边缘/单机离线推理场景。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 175 | 128,265 | MiniMax-H3 的多个 GGUF/量化版本，目标是降低显存并加速部署。大量下载显示量化版本是推动生产化的关键路径。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 | 大型 Qwen3.6 的 GGUF 离线分发，便于高性能离线部署与调优。极高下载量反映出离线化/量化在社区的强烈需求。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 | 提供 nvfp4 / INT4 / INT8 等多种量化格式，用于显著降低推理资源。成为将视频模型移向生产环境的重要手段。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 438 | 373,651 | Qwen3.6 大模型的 GGUF 版本，满足离线部署与高效推理需求。社区对 GGUF 格式的接受度持续提升。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 485 | 0 | LoRA 适配的 MiniMax-H3 衍生，用于快速微调与风格/任务专化。反映社区在用参数高效的微调方案扩展大模型功能。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 205 | 0 | 将 LoRA 与 ComfyUI 集成以便于可视化微调与快速试验。方便创作者在 UI 中应用微调权重。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 403 | 0 | INT8/ConvRot 优化的 Qwen3-VL 衍生，目标大模型视觉能力的低成本部署。说明社区在追求大模型可用性的同时注重量化优化。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 133 | 0 | NVFP4 量化版本，用于显存受限环境下运行大型视觉语言模型。强调多模态大模型的实用部署路径。 |

---

## 生态信号（100–200 字）
MiniMax-H3 家族与 ComfyUI 整合呈爆发式传播，推动文本/图像到视频的工具链成熟；与此同时 Qwen 系列与 GLM 等多模态/LLM 家族继续在研究与工程两端活跃。GGUF、nvfp4、INT8/INT4 等量化格式与 LoRA 微调的广泛出现，显示社区把“可部署性”与“本地离线运行”放在首位。闭源厂商与开源权重并行共存：企业/研究机构发布高质量基线（如 Microsoft、Baidu、NVIDIA），社区通过量化和微调快速衍生出可用版本，形成“基线+社区优化”的生态闭环。

---

## 值得探索（2–3 个）
1. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 关注文本/图像到视频的端到端能力与 ComfyUI 集成，可用于评估生成质量与工作流集成价值。  
2. [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 工业级 OCR，超高下载量说明工程化与多语言能力值得在实际产品中验证。  
3. [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) — 点赞领先的文本到图像模型，适合研究生成视觉质量与风格控制。

---

若需，我可以基于以上清单做进一步深挖：对某一模型的架构/许可/使用示例比较，或给出针对本地部署（GGUF/llama.cpp/量化流程）的实践建议与命令范例。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*