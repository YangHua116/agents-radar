# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 01:45 UTC

---

# Hugging Face 热门模型日报（2026-08-03）

## 今日速览
1. 月度爆款 Kimi-K3（moonshotai）以约 9.6k 点赞和 837,202 次下载居首，显示多模态推理与压缩权重受关注。  
2. DeepSeek 系列（deepseek-ai / unsloth）和 GLM-5.2 的热度表明新一代指令/对话 LLM 与检索增强生成正在活跃迭代。  
3. 社区微调与量化（GGUF、NVFP4、AWQ）继续主导边缘部署讨论，多个高下载量模型以量化/转换版本广泛流传。  
4. 大厂（Baidu/Microsoft）在 OCR/多模态与语音方向推出强基线，TTS/ASR 与视觉理解并行增长。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,733 | 156,173 | 一款面向对话与生成的文本模型，专注检索增强生成与可扩展推理。上榜因活跃迭代与与 DeepSeek 家族的高能见度。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,755 | 2,050,533 | 大型对话/生成模型，支持混合专家与对话能力。高下载量表明在生产与研究中被广泛试用。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 627 | 33,042 | 中等规模开源生成模型，面向通用对话与指令任务。以轻量化和快速部署受社区欢迎。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 878 | 80,102 | 面向对话和生成的高效模型，注重延迟与成本控制。下载量与点赞反映社区对小/中型实用模型的需求。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,958 | 2,785,810 | DeepSeek 家族的主版本，擅长对话与检索结合的生成。极高的下载量显示其作为通用基线的地位。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 719 | 14,863 | 大规模生成模型（Solar 系列），面向高质量文本生成与研究。被多方用于大模型评估与下游微调。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 121 | 1,957 | 混合专家（MoE）架构的生成模型，强调高效大规模参数利用。适合资源受限环境下的扩展策略研究。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,640 | 837,202 | 多模态（image-text-to-text）模型，采用压缩权重与 safetensors 格式发布。高点赞与下载反映其在图文理解与生成任务的强吸引力。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,340 | 1,372,285 | 基于 Qwen3.6 的融合/微调多模态变体，提供 GGUF 格式便于本地部署。巨量下载表明社区对可离线运行多模态模型的强烈需求。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,778 | 2,536,284 | 专注 OCR 的多模态模型，提供高覆盖场景的文本识别能力。极高下载量显示实际工程落地与采纳度。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88,481 | Kimi-K3 的社区 GGUF 转换版，便于边缘/离线部署。因压缩与可移植性在社区获得转载与测试。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 187 | 272,148 | Microsoft 的多模态视觉语言模型，面向图文理解与生成。作为大厂基线，下载与工业适配度较高。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 371 | 1,825 | 轻量级本地 TTS 模型，面向 CPU/边缘场景。适合低延迟语音生成实验与应用。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 179 | 4,314 | 预览版文本到语音模型，强调音质与可定制性。适合评估本地化语音合成能力。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 126 | 0 | 面向文本到图像 / LoRA 风格的模型，目标与 Krea2 / ComfyUI 集成。虽然下载为 0，但对艺术化图像合成有潜在价值。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2,938 | Microsoft 发布的图文一体化模型，面向交互式视觉理解与生成。代表大厂在多模态大模型上的持续投入。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292,511 | Qwen 系列的较小规模但可部署的多模态变体，提供 GGUF 便捷性。大量下载表明边缘/本地化需求强劲。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1,892,654 | 高参数 Qwen3.6 社区变体，强调视觉能力与本地可运行格式（GGUF）。超高下载量说明社区对大模型可用性的强烈兴趣。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13,164 | 代码生成/辅助的指令微调模型，针对开发者与编程任务优化。适合代码补全与工程化集成测试。 |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 89 | 6,957 | 轻量级编码器/填空模型，适用于检索与嵌入前端任务。小模型体量便于作为检索-生成管道的一部分。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 150 | 8,468 | 面向自动语音识别（ASR）的模型，兼顾精度与推理效率。适合语音转文本流水线与实时识别场景。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,340 | 1,372,285 | 大量社区微调与 GGUF 打包示例，便于离线部署与高效推理。下载数据说明社区对本地可运行权重的强烈需求。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 340 | 48,707 | DeepSeek 的 GGUF 转换版，目标是便携与低延迟推理。社区版本通常用于离线验证与比较基线。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88,481 | Kimi-K3 的 GGUF 版本，强调本地部署友好性。展示了热门模型被快速转换为轻量格式的趋势。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 300 | 259,237 | Qwen3.6 大模型的社区 GGUF 打包，便于在 CPU/GPU 边缘设备上运行。高下载量显示 GGUF 格式的普及度。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292,511 | 面向轻量化部署的 Qwen3.5 社区变体，GGUF 格式利于快速本地测试。下载量反映社区对可用、可调优权重的高需求。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 153 | 68,199 | Solar-Open2 的 NVFP4 量化版本，面向极低显存部署。典型代表了专业量化（NVFP4）在大模型实用化中的应用。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1,892,654 | 社区对 Qwen3.6 的激进微调与 GGUF 打包，极高的传播与部署份额。说明“高性能 + 可离线运行”是当前主要驱动力。 |

---

## 生态信号（100–200 字）
Qwen 系列、DeepSeek 与 Solar 家族势头强劲，既有大厂基线（Microsoft/Baidu）又有社区微调热潮。社区正在以 GGUF、NVFP4 等量化格式把大模型带到边缘与离线场景，导致下载量与复刻版本激增。同时 TTS/ASR 与 OCR 等多模态实用型模型出现显著增长，表明研究重心从纯基线能力转向可用性、部署友好性与跨模态工程化。

---

## 值得探索（2–3 个）
1. moonshotai/Kimi-K3 — 顶级点赞与高下载，采用压缩权重与 safetensors，适合研究多模态压缩与高效推理策略。  
2. baidu/Unlimited-OCR — 超大下载量和工业级 OCR 能力，适合文本提取流水线与实际工程集成测试。  
3. nota-ai/Solar-Open2-250B-Nota-NVFP4 — 代表性的大模型量化（NVFP4），适合研究极低显存部署与性能/精度折中。

---

（报告基于 2026-08-03 Hugging Face Hub 提供的模型清单与元数据，保留所有原始链接。）

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*