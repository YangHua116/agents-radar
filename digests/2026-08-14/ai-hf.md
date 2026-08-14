# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 00:59 UTC

---

# Hugging Face 热门模型日报（2026-08-14）

## 今日速览
本周 Hugging Face 继续被视频/多模态模型与大规模语言模型双线驱动：MiniMax-H3 家族在视频与 ComfyUI 生态中爆发式增长，多个衍生版本与 LoRA 插件流行。Meta 的 Muse-Glimmer 30B 系列以强多模态能力与 GGUF 发布吸引关注。与此同时，Qwen 与 NVIDIA 的大尺寸文生成家族保持活跃，量化（GGUF/FP8/INT8）与 LoRA 微调成为社区主要实践。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 783 | 1,012 | 大规模 Qwen 家族最新变体，面向通用文本生成与对话任务；凭借规模与架构优化在基准与对话场景中被社区关注。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,319 | 1,431,587 | 文本生成/对话方向的高人气模型，下载量巨大说明在社区应用和部署上具备广泛吸引力；主打生成质量与通用对话能力。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 285 | 0 | DeepSeek 系列的 Pro 版本，主打更强的生成质量与定制能力；因性能或许可策略下载量暂未显著。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 602 | 116,640 | 中等规模因果语言模型，适合轻量部署与快速迭代；受欢迎于对成本敏感的生产或研究场景。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 229 | 44,859 | NVIDIA 的大规模生成模型优化版，面向高性能推理与专用硬件（NVFP4）优化；适合需要硬件加速的部署场景。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 130 | 22,279 | 同属 Nemotron 系列，使用 BF16 精度格式以平衡性能与数值稳定性；面向通用文本生成与研究。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 353 | 3,868 | 新兴的混合专家/因果 LM 预览版，关注生成质量与推理效率的折中；被用作探索混合架构效果。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 323 | 10,052 | 面向对话和轻量部署的文本生成模型，强调低资源环境与开源可用性；适合边缘或小规模服务。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,418 | 121,042 | 大型多模态模型，支持 image-text-to-text 与对话式多模态交互；以高质量视觉理解+生成能力上榜。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,823 | 1,605,940 | 面向视频生成/编辑的旗舰模型，社区生态（ComfyUI/LoRA）与巨量下载表明其在视频生成实践中成为事实标准。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,289 | 10,365,210 | 在 ComfyUI 与 diffusion-single-file 生态中被广泛分发；极高的下载量显示其在可视化生成流水线的采纳度。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 718 | 57,287 | 主攻 image→video 与 text→video 的生成能力，适合创意视频生成与编辑场景；架构偏向生产质量。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 462 | 91,455 | MiniMax-H3 的 Turbo 变体，面向高效推理与更快的生成速度；利于交互式应用。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,621 | 1,871,575 | 图像-文本模型，强调特征提取与压缩张量格式；极高点赞与下载体现其在多模态检索/生成上的热度。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 306 | 25 | 文本到音频（音乐）生成模型，定位于音乐创作与合成；目前下载量小但具有研究与创作潜力。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 390 | 352,023 | Muse-Glimmer 的 GGUF 格式发布，便于本地高效部署与离线推理；在多模态社区中被广泛下载用于离线实验。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111,222 | MiniMax-H3 的 GGUF 版本，降低部署门槛并支持 stable-diffusion.cpp 等本地运行工具链。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 297 | 324 | MiniMax-H3 的文本到视频变体（带特定风格），用于创意内容生成与风格控制；社区衍生样式示例。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | 针对 MiniMax-H3 的 LoRA 微调包，便于定制人物与风格生成；体现 LoRA 在视频/图像领域的普及。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 314 | 0 | 结合 ComfyUI 的 LoRA 适配包，便于在可视化节点式工作流中集成定制权重与加速。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 159 | 4,692 | 专注于人物写实性的 LoRA 微调，展示社区在特定内容细分上的迭代与微调实践。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 483 | 0 | Qwen3-VL 与 H3 集成、支持 INT8 的社区构建版，面向高效多模态推理与 ComfyUI 集成。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入等）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 371 | 1,164 | 面向实时语音对话与语音代理的专用模型，集成语音理解和生成能力；适合构建声聊机器人与语音接口。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 216 | 1,292 | 极小型模型，面向资源受限设备与低延迟场景；适合嵌入式或移动端的基础 NLP 任务。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 390 | 352,023 | Muse-Glimmer 的 GGUF 打包，极大便利本地与离线推理；反映 GGUF 已成为多模态模型落地的主流格式之一。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 257 | 136,783 | 官方/近官方的 GGUF 版本，便于社区在本地/嵌入式环境中运行大型多模态模型。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,987 | 2,793,115 | 社区融合与未审内容版本的 GGUF 发布，下载量极高；提示社区在功能与可访问性方面的强烈需求，同时带来合规/安全讨论。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 157 | 4,000 | FP8 量化变体，面向降低显存与提升推理吞吐；显示大型模型采用更激进数值格式用于部署。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 483 | 0 | 社区 INT8 量化与 ComfyUI 集成，代表将高性能多模态模型压缩到可用内存范围的尝试。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | LoRA 微调包，便于在下游任务或风格定制中快速适配模型，体现 LoRA 在生成领域的广泛采用。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 149 | 652 | 专注于提示改写的 LoRA，支持将 prompt engineering 模式参数化并共享。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111,222 | MiniMax-H3 的 GGUF 包，便于在本地工具链（如 stable-diffusion.cpp）中运行视频/图像生成模型。 |

---

## 生态信号（100–200 字）
MiniMax-H3 家族与其衍生生态（ComfyUI、LoRA、GGUF 本地包）本周呈现极强的扩散力，视频与图像到视频的创作需求推动了大量社区微调与格式转换。多模态大型模型（如 Muse‑Glimmer）在同时兼顾视觉理解与对话能力上占据话题中心。另一方面，量化与打包（GGUF、FP8、INT8）成为将大型模型从云迁移到本地/边缘的主流路径；大量社区 GGUF 与 LoRA 发布说明开放权重与社区改造仍然活跃，但某些高下载“未审/uncensored”版本也引发合规与安全关注。总体看：多模态 + 本地化部署（量化/LoRA）是当前主线。

---

## 值得探索
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 视频生成生态的事实标准，适合研究视频生成管线、ComfyUI 集成与 LoRA 定制化。  
- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) — 强多模态对话与图像文本理解能力，适合构建视觉问答与多模态代理。  
- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — 大规模通用 LLM，值得用于对比最新指令微调与多模态融合策略。

---

若需，我可以基于上述模型为你准备：A) 对比矩阵（能力、模型大小、推荐部署硬件），或 B) 快速上手部署指南（GGUF/INT8 本地化、ComfyUI 集成、LoRA 应用）。请选择一种。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*