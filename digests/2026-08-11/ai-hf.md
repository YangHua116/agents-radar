# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 00:52 UTC

---

# Hugging Face 热门模型日报（2026-08-11）

## 今日速览
1. MiniMax-H3 家族继续主导热度——大量 ComfyUI 打包、LoRA 与量化衍生版本涌现，推动文本/图像到视频生成的社区创新。  
2. 多模态大模型（尤其 image↔text、video 方向）占据榜单主流，同时高下载量的文本生成模型（DeepSeek-V4）与工业级 OCR（Baidu Unlimited‑OCR）显示实用化强劲。  
3. 社区侧重于 GGUF/量化与 LoRA 微调分发，表明离线部署与加速推理是当前核心信号。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,059 | 954,441 | 一个以对话/文本生成为主的flash 版 DeepSeek V4，适合会话与生成任务。高下载量表明被广泛用于实验与部署。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | 中小规模因果语言模型，面向高效推理与嵌入生成场景。下载量稳定，适合作为轻量化生产替代品。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 311 | 1,344 | 生成式因果 LM 的 Preview 版本，标签显示 mixture-of-experts 方向的尝试。上榜反映研究/社区兴趣。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | 面向对话与指令的轻量化模型，强调可微调和对话表现。适合低成本部署与定制化对话系统。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | Mistral 系列的小型变体，面向高效推理与 vLLM 兼容性。体量小、便于服务化部署。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,429 | 47,468 | 面向 image+text→video 的大型生成模型，支持图像/文本混合输入生成视频。High 热度与大量衍生表明它是当前 t2v/i2v 社区的核心基座。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,146 | 6,009,639 | ComfyUI 打包的单文件 diffusion 版本（基于 MiniMax-H3），下载量极高，方便在 ComfyUI 生态中即刻使用。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 599 | 0 | 针对 MiniMax-H3 的 LoRA 微调，面向更快或更精细的视频/音频生成。社区微调以适配特定风格与轻量化需求。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,470 | 1,510,032 | 高热度的 multimodal 模型（image-text→text），大幅点赞与下载量说明其在图像理解/视觉问答上的广泛应用。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,861 | 2,439,083 | Qwen3.6 系列的融合/改造版本，面向视觉-文本任务且以 GGUF 等格式分发，下载量巨大，适合离线推理。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | Qwen3‑VL 大模型的 ComfyUI/INT8 版本，面向高质量视觉理解与生成，强调量化与 ComfyUI 集成。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 297 | 597 | 面向语音/对话的多模态模型（VoiceChat），适用于语音聊天与研究。来自工业厂商，具备论文与工程背景。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | MiniMax‑H3 的加速/精简版，专注 image→video 与快速生成流程。适合希望较低成本生成视频的用户。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | 针对 ComfyUI/MiniMax-H3 的打包或实验性分发，便利社区试验与工作流集成。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 251 | 0 | 综合 LoRA、Turbo 与 ComfyUI 的 MiniMax-H3 衍生，强调轻量化与工作流兼容性。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 | MiniMax-H3 的社区变体，面向特定风格的文本到视频生成（已标注 Apache‑2.0）。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 184 | 0 | 实验性 MiniMax-H3 衍生，供研究与探索不同生成策略。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 152 | 617 | 面向图像→文本/视觉对话的大模型，标签显示 MoE 方向的尝试，适合多模态问答场景。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 | 高质量 OCR 与图像文本提取模型，巨量下载与点赞说明其在生产级文档/图像理解中的广泛采用。 |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | 高热度文本到图像 diffusion 模型（Flux），受社区创作与图像生成爱好者欢迎，显示创意生成持续火热。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | 面向视频生成的 MiniMax‑H3 量化版（nvfp4/INT4/INT8），在保持生成能力的同时优化离线部署与加速推理。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 115 | 2,129 | 研究导向的大模型（标注 qwen3_5_moe 与 ternary/additive 技术），侧重模型压缩/新架构实验。适合研究量化与稀疏/加性表示。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 207 | 0 | Muse‑Glimmer 30B 的 GGUF 打包版本，便于离线/llm.cpp 生态部署。社区 GGUF 化显示出对本地部署的强烈需求。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 | DeepSeek‑V4 的 GGUF 格式转换，显著提升离线推理可用性与跨平台部署可能性。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | LFM2.5 的 GGUF 版本，适配 llama.cpp 等本地推理工具，推动轻量级部署。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 148 | 0 | 官方/社区的 GGUF 打包，便于将大型 multimodal 模型带入本地推理管线。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | 标注 NVFP4 的 Qwen3‑VL 变体，展示针对 GPU/嵌入式推理的量化工程实践。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | 针对 prompt‑rewriting 的 LoRA 微调，便于在不改动主权重下定制输入处理逻辑。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | 将 MiniMax‑H3 系列转换为 GGUF/quant 版本，支持离线与加速推理的社区工作流。 |

---

## 生态信号（100–200 字）
当前生态呈现两大方向：一是“多模态大模型与生成工具链”的爆发——MiniMax‑H3、Flux、Kimi‑K3 等推动了从图像/文本到视频/图像的产业化与创作化；二是“离线部署与推理加速”的强需求，表现为大量 GGUF、NVFP4/INT8/INT4 与 LoRA 微调包的涌现。开源权重与社区分发依旧活跃（ComfyUI 打包、GGUF 转换、LoRA），但可见厂商级闭源/论文支持（如 Meta、NVIDIA、Baidu）的模型在工程质量与下载表现上仍有优势。量化与 GGUF 化成为主流手段，表示用户在追求本地/低成本推理与可控部署。

## 值得探索（2–3 个）
1. MiniMaxAI/MiniMax-H3 — 核心的 image+text→video 基座，生态衍生丰富（Comfy 打包、LoRA、量化），适合研究视频生成管线与风格微调。  
2. moonshotai/Kimi-K3 — 高点赞与实用下载量，表现出优秀的视觉理解/多模态能力，适合视觉问答与图像到文本的下游任务。  
3. deepseek-ai/DeepSeek-V4-Flash-0731 — 文本生成/会话方向的热门模型，下载量巨大，适合评估最新对话生成与离线推理流程（可结合其 GGUF 版本使用）。

--- 

（报告基于 2026-08-11 提供的 Hugging Face 热门模型列表与标签；所有链接已保留原始 Hugging Face 页面。）

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*