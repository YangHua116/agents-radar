# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 00:58 UTC

---

# Hugging Face 热门模型日报（2026-08-12）

## 今日速览
本周 Hugging Face 热点被 MiniMax-H3 系列与多款多模态/视频生成模型主导，社区围绕 LoRA、ComfyUI 包装和 GGUF/量化格式展开大量二次分发。文本生成领域继续有轻量与大模型并行（DeepSeek、LFM、Ling 系列），而百度 Unlimited-OCR 与语音聊天模型显示出强烈的工程化采纳趋势。总体信号是：多模态生成与社区量化/微调工具链正在成为主要增长点。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,150 | 1,048,685 | 一个面向对话与文本生成的 Flash 系列模型。因高下载量与对话优化被广泛采用于聊天与生成场景。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 | 轻量级因果语言模型（2.6B），定位离线/嵌入式部署。受欢迎于低成本推理与边缘场景。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 | 试验性文本生成模型，标注为混合专家/创新架构。上榜因其研究吸引力与预览关注。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | Ling 3.0 系列的中等规模快速版，目标对话与轻量生成。适合对延迟和资源敏感的应用。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 152 | 0 | Ling 系列的超小型版本，便于快速本地试验与部署。上榜反映社区对微型模型的持续兴趣。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | 基于 Mistral 系列的 3B 模型，旨在均衡性能与成本。受关注于中等算力环境的高性价比方案。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,574 | 59,368 | 面向 image-text-to-video 的多模态基础模型。因清晰的图像→视频管线与高点赞成为本周焦点。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,093 | 0 | 大型 30B 多模态模型（image→text），聚焦视觉理解与对话回复。上榜源于其家族与能力跨度。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,212 | 6,798,796 | ComfyUI 打包的 MiniMax-H3 变体，单文件 diffusion 兼容。超高下载量表明 ComfyUI/工作流集成的实用价值。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,525 | 1,565,484 | 多模态特征提取模型，拥有极高点赞与下载。采用压缩张量与 transformers 接口，适合大规模检索与推理。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 340 | 20,376 | Minimax-H3 的 Turbo 适配，优化图片→视频生成性能。被社区用于更快的推理与实验。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 275 | 0 | 针对 ComfyUI 的 MiniMax-H3 包装版本。方便图形化工作流中直接调用。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 458 | 0 | Qwen3-VL 32B 的 ComfyUI/INT8 变体，面向视觉理解与界面集成。兼顾大模型能力与工程化部署。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 264 | 0 | MiniMax-H3 的特定风格/用途衍生（文本→视频）。代表社区在多模态创作上的大量衍生尝试。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 210 | 39 | 面向图像/视频转换的 diffusion 单文件模型。定位工程级视频编辑与生成工作流。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 191 | 0 | MiniMax-H3 的实验性分支，供社区测试新特性。体现快速迭代与社区试验文化。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | 多模态对话/生成模型，宣称在图像-文本交互上有优化。上榜因其在多模态会话方向的应用潜力。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）（含 OCR / 语音类专用）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 325 | 653 | 面向语音聊天的 11B 级模型，强调端到端语音对话能力。适用于多轮语音代理与研究验证。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,018 | 2,892,191 | 高流行度的 OCR/视觉文本抽取模型，下载量极高。被大量工程项目用于文档、表格和图像文本抽取任务。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 | 针对 MiniMax-H3 的 LoRA 适配，旨在低成本定制化风格或能力。反映出文本/视频领域的插件化微调生态。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,896 | 2,521,093 | Qwen3.6 的社区融合与 GGUF 打包版本，下载量很高。表明大型模型社区正在积极产出可离线部署的量化格式。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 304 | 0 | Muse-Glimmer 30B 的 GGUF 转换版，便于本地/轻量化推理。展示了对大模本地化部署的持续需求。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 272 | 0 | 同时提供 LoRA 与 ComfyUI 集成的适配包，方便非开发者使用。强调界面化微调/适配的流行。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 202 | 0 | 官方/社区的 GGUF 打包，支持离线与量化推理。对于需要单文件部署的大模型很有价值。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 | DeepSeek-V4 的 GGUF 版本，表明文本生成家族同样被大量转换为本地友好格式。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 | LFM2.5 的 GGUF 打包，便于 llama.cpp 类工具使用。反映小模型量化与本地部署热度。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 129 | 353 | 用于提示重写的 LoRA 适配，助力生成质量提升与下游集成。显示出围绕 prompt 工具链的活跃微调活动。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 125 | 19,250 | NVIDIA 的 30B 量化/优化版本（NVFP4），面向高效推理。代表厂商级量化格式与性能工程化尝试。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 111 | 0 | 针对人物真实感的 LoRA 微调，应用于视频/图像生成的特定风格控制。示例了领域微调在多模态生成中的作用。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 160 | 0 | Qwen3-VL 32B 的 NVFP4/ComfyUI 包装，侧重量化与界面集成。突出社区在跨模型/格式打包的活跃度。 |

---

## 生态信号（100–200 字）
MiniMax-H3 生态本周最活跃：大量 ComfyUI 打包、LoRA 适配与风格衍生显示出该家族在视频/图像生成的工程化落地。Muse-Glimmer 与 Qwen3 系列也在向多模态和本地部署扩展。下载与标签显示出两条并行趋势：一是大模型（30B 级）在研究/对话上的曝光，二是社区对可离线部署格式（GGUF、NVFP4、INT8、NVFP4/gguf）与 LoRA 插件化微调的强烈需求。企业级和研究级发布（NVIDIA、Baidu）正在推动专用任务（语音聊天、OCR）成为工程首选，而社区转换（ComfyUI、GGUF、LoRA）则降低了本地化和快速验证的门槛。

---

## 值得探索（2–3 个）
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 图像/文本到视频的代表性基础模型，生态活跃（ComfyUI 与 LoRA 衍生众多），适合研究视频生成与工作流集成。  
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 拥有极高点赞与下载的多模态特征提取器，适合检索、嵌入与下游视觉-语言任务的快速原型。  
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 工程级 OCR 模型，下载量与实用性突出，值得在文档理解和产业化流程中优先测试。

---

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*