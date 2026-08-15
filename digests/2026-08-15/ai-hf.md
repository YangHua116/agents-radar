# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 00:35 UTC

---

# Hugging Face 热门模型日报（2026-08-15）

## 今日速览
- 多模态与视频生成继续领跑：MiniMax-H3 系列与 Comfy 生态爆发式增长，下载量和衍生 LoRA/Comfy 配套庞大。  
- 大型多模态 LLM（如 Qwen3.8、Muse-Glimmer）在「高赞/低下载」和「广泛下载/适配」之间呈现分化：部分权重大但受限下载，社区量化与 GGUF 版本流行。  
- 量化/微调活动显著：GGUF、FP8、LoRA、Turbo-Lora 等格式频繁出现，显示本地部署与定制化需求旺盛。  

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 914 | 3,832 | 大规模 MoE 文本生成模型，面向高吞吐与对话场景；因规模与推理特性在生成/对话任务上受关注。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,383 | 1,606,491 | 高人气文本生成模型（对话/创作方向），因高下载量和丰富示例被广泛采用。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 433 | 245 | DeepSeek 系列的 Pro 版本，针对质量与鲁棒性做优化，适合对话与指令任务的高质量生成。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | NVIDIA 的 Nemotron 家族（30B 轻量版），面向高效推理与企业部署，提供不同数值格式支持。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34,137 | Nemotron 的 BF16 版本，便于在支持 BF16 的硬件上获得更好性能/精度平衡。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124,172 | 小型高效文本生成模型，面向嵌入/生成轻量化部署，适合资源受限场景。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | Qwen MoE 的 FP8 量化变体，便于更低成本推理与本地部署，保留模型能力同时降低硬件需求。 |

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 8,978 | 2 | 大型多模态（image-text-to-text）模型，因多模态能力与高赞数成为关注焦点；下载受限、但在零-shot multimodal 任务上能力突出。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,511 | 165,300 | Muse-Glimmer 30B 面向图文多模态生成，表现出强大的图像理解与文本生成融合能力，下载活跃。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | 1,997,541 | 面向图像到视频/文本到视频的旗舰模型，生态衍生（LoRA、Comfy）丰富，下载与社区适配度非常高。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,317 | 11,768,622 | ComfyUI 兼容的 MiniMax-H3 镜像/适配版本，极高的下载量反映了 Comfy 生态在视频生成领域的主导地位。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 856 | 207,830 | 针对图像到视频与视频编辑的 diffusion 单文件模型，适合创意视频生成与编辑工作流。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 651 | 63 | 面向音乐生成的多模态模型（text-to-audio / music-generation），展示 MiniMax 在音频方向的扩展。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,672 | 1,974,635 | 高赞且大下载的多模态/特征提取模型，因高质量嵌入与多模态提取能力在研究与工程中广受关注。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | MiniMax-H3 的 Turbo 适配版，侧重更快的推理与工程化部署，适合实时或近实时视频生成流水线。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10,106 | 小型 text-to-image 模型，兼容 ComfyUI，适合轻量图像生成与快速迭代。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 310 | 473 | 针对文本到视频的 MiniMax-H3 微调/定制版本，展示社区在风格与内容方向的快速尝试。 |

---

### 🔧 专用模型（语音、轻量化、领域专用）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | 面向语音/对话的专用模型，整合语音交互与对话策略，适合语音助手与实时交互场景。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | 极小型模型，面向低资源或嵌入式部署场景；适合快速推理与边缘端应用。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | 针对 ComfyUI 的 MiniMax-H3 适配版本，便于在 Comfy 流水线中直接使用与集成。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 138 | 11 | 轻量化的文本/图文生成模型预览，适合笔记类或短文本生成任务的快速验证。 |

---

### 📦 微调与量化（社区微调、GGUF、FP8、LoRA 等）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 789 | 0 | Qwen3.8 的 GGUF 量化版本，便于本地/离线部署，反映社区对 GGUF 格式的强烈需求。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | Muse-Glimmer 的 GGUF 量化打包，显著提升本地推理可及性，下载量高表明实用性强。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | MiniMax-H3 的 GGUF 版本，支持 stable-diffusion.cpp 等本地运行工具，促进去云部署。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,016 | 2,891,524 | 社区大规模融合/微调并打包为 GGUF 的实例，超高下载量显示用户对离线定制模型的强烈需求。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 291 | 0 | FP8 量化变体，目标降低推理成本并保留多模态能力，适合硬件受限部署。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | MoE 模型的 FP8 版本，支持更低精度下的高效推理，便于在成本受限环境中使用。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 742 | 0 | 针对 MiniMax-H3 的 Turbo-LoRA 微调，展示社区在速度与风格微调上的密集尝试。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | 将 LoRA 与 ComfyUI 集成的实用微调包，便于快速在 Comfy 流程中应用定制风格。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 176 | 9,060 | 针对人物真实感的 LoRA 微调，示范了社区在特定内容方向的持续精细化。 |

---

## 生态信号（100~200 字）
多模态视频/音频方向（MiniMax-H3、LTX、Anima）成长迅速，ComfyUI 生态成为分发与二次创作中心；大型多模态 LLM（Qwen、Muse-Glimmer、Kimi）继续吸引注意力，但社区更偏好易部署的量化/GGUF 与 LoRA 变体以支持本地化和定制。FP8、GGUF 与 Turbo/LoRA 的普及说明「高性能 + 低成本」是当前开源模型采纳的关键驱动力；同时，NVIDIA 等厂商推出的专用语音/推理格式推动企业级落地。

---

## 值得探索（2–3 个）
1. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 极高点赞与下载，适合研究多模态特征提取与下游任务迁移，值得做基准与嵌入质量对比。  
2. [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — 在 Comfy 生态中表现为基础设施级模型，超大下载量和多样衍生物使其成为视频生成与工程化集成的首选目标。  
3. [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) 或 [DavidAU/...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — 高下载的 GGUF 包表明量化离线部署与社区微调的实际可行性，适合做性能/质量与成本权衡实验。  

---

（以上均保留模型链接与原始点赞/下载数据）

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*