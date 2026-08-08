# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 00:47 UTC

---

# Hugging Face 热门模型日报（2026-08-08）

## 今日速览
本周多模态与文本到视频模型继续爆发，MiniMax-H3 系列及其社区衍生库占据热度榜。LLM 家族中 GLM-5.2 与 DeepSeek-V4 系列保持强劲下载和关注。量化/GGUF 转换活动活跃，社区在将大模型转为更轻便格式以便本地部署。文本到图像/视频与多模态推理成为生态主要投资方向。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,744 | 702,709 | 一款主打对话与生成的文本模型，适用于 conversational 和文本生成场景。凭借大量下载表现出强用户采用度和实用性。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 379 | 77,973 | 轻量级因果语言模型，面向资源受限部署与快速推理。体现在下载量与 safetensors 格式的可用性上。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 226 | 686 | 以 causal-lm 和 mixture-of-experts 为特点的预览模型，侧重多任务文本生成与实验性架构。上榜原因在于研究与早期试用兴趣。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 203 | 3,065 | 定位为高效对话/生成模型，使用 safetensors 并强调混合训练策略。适合需要轻量化对话模型的场景。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 184 | 2,480 | Mistral 生态中的小型衍生模型，针对 vLLM 与工程化部署做了适配。凭借 Mistral 品牌获得社区关注。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,887 | 2,430,330 | 大规模会话与生成模型（GLM 系列后续），下载和点赞均位列前列，适合对话与通用生成任务。高人气反映其在研究与工程应用中的吸引力。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,953 | 18,112 | 主打 image-text-to-video 的多模态生成模型，擅长将图像与文本联合生成短视频。高点赞表明文本到视频方向的社区热度与实验兴趣。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 936 | 3,139,920 | ComfyUI 生态下的 MiniMax-H3 单文件扩展，下载量极高，便于本地/可视化工作流集成。是社区部署与创作的主要入口版本。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,282 | 1,308,186 | 面向 image-text-to-text 的多模态模型，极高点赞与下载体现出强烈的研究与应用兴趣。适合视觉理解与多模态特征提取场景。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 378 | 0 | 基于 Qwen3-VL 的多模态大模型改造版本，兼容 ComfyUI 并采用 INT8 优化以便本地运行。面向高质量视觉-语言任务与实验部署。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,708 | 2,217,339 | Qwen3.6 系列的融合/衍生 GGUF 包，面向图文理解与融合能力。大规模下载说明社区对本地可运行大模型的强烈需求。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 228 | 359 | 面向语音聊天/多模态语音交互的 11B 规模模型，带有多篇相关论文引用。代表厂商在语音对话研究与落地的进展。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,954 | 2,836,694 | 专注于 OCR 与图像到文本的强模型，拥有极高下载量，适合通用文本识别与文档解析。大规模采用表明其在工业级应用的实用性。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 415 | 0 | MiniMax-H3 的 LoRA 适配，面向文本到视频与音视频结合的轻量化微调。为创作者提供快速适配与个性化模型。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 177 | 0 | ComfyUI 友好的 MiniMax-H3 LoRA 适配版本，便于插件式集成与创作流程。强调在可视化管线中的易用性。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 128 | 0 | 面向 image-to-video 的 Minimax 衍生实现，支持将静态图像扩展为视频片段。体现社区在视觉生成方向的多样化实验。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 306 | 12,633 | 文本到语音（TTS）预览模型，适合语音合成与音频应用试验。较高下载显示对开源 TTS 的持续需求。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 425 | 332,992 | Qwen3.6 大模型的 GGUF 格式变体，面向离线与本地推理场景。下载量显示社区对大模型本地化的兴趣。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 127 | 452,420 | 对 MiniMax-H3 进行多种量化（nvfp4/INT4/INT8）与卷积旋转优化，明显针对本地高效推理。高下载表明量化版本很受欢迎。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 302 | 456,140 | Microsoft 出品的多模态视觉-语言模型，擅长图像到文本与视觉理解任务。在企业与研究中具备高适用性。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 221 | 0 | 面向文本到图像与 ComfyUI 的 LoRA/扩展包，强调可定制的视觉生成。适合创作者生态的可组合组件。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 336 | 25,340 | 小型多模态模型，面向图像-文本抽取与对话场景。适合资源受限环境中的视觉-语言任务。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 121 | 0 | Qwen3-VL 与 MiniMax-H3 的混合衍生，包含 NVFP4 优化，目标是高质量但更易部署的多模态推理。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 115 | 0 | ComfyUI 适配的 MiniMax-H3 版本，便于使用者在可视化管线中试验文本到视频生成。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 112 | 0 | MiniMax-H3 的主题衍生（PinkCherry），面向创意视频生成与风格适配。显示社区对风格化模型的兴趣。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,028 | 512,841 | 新兴的 text-to-image 代表作，点赞数位列全榜首，强调高质量图像生成与创新扩散方法。高人气反映该模型在创作社区的爆发性关注。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入等）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 531 | 17,399 | 面向代码生成与开发者助理的专用模型，包含代码理解与生成优化。适合需要自动化编程辅助与代码补全的场景。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 586 | 161,253 | DeepSeek-V4 的 GGUF 格式转换，便于在本地和轻量推理框架中运行。反映出社区对 GGUF 化的广泛需求。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 168 | 87,870 | 提供 MiniMax-H3 的多种 GGUF 量化版本，支持本地高效运行与 ComfyUI 集成。下载量显示量化包的实用价值。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 144 | 31,489 | LFM2.5 的 GGUF 版本，降低部署门槛，适合本地推理与离线环境。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 425 | 332,992 | Qwen3.6 系列的 GGUF 打包，方便社区在 CPU/GPU 上本地运行大模型。下载量高，反映本地化需求。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,708 | 2,217,339 | 大规模融合模型的 GGUF 版本，极高的下载量指向社区对可本地化大模型的强烈需求与广泛尝试。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 127 | 452,420 | 提供多种量化（nvfp4/INT4/INT8）与加速技巧，目标是显著降低资源消耗。高下载说明量化工作在生产与创作中的价值。 |

---

## 生态信号（100–200 字）
当前生态显示两个明显方向：一是多模态/文本到视频与高质量图像生成（MiniMax-H3、FLUX、Mage-VL）热度上升；二是大模型本地化的追求，GGUF、INT4/INT8 和 NVFP4 等量化格式大量涌现，推动下载与社区二次开发。厂商与开源并存：大型厂商（Microsoft、Baidu、NVIDIA）发布模型推动应用化，而社区通过微调、LoRA 和格式转换扩展可用性。量化与 GGUF 化是近期最显著的落地信号。

## 值得探索（2–3）
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)：高点赞与巨量下载，适合评估新一代 LLM 在对话与生成任务中的表现与工程化实践。  
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)：文本到视频领域的代表，适合研究多模态视频生成管线与创作流程。  
- [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)：点赞数最高的 text-to-image 模型，值得用于风格、质量评估与扩散技术对比研究。

--- 

报告完。若需把这些模型按下载/点赞画图或导出 CSV，可继续提供。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*