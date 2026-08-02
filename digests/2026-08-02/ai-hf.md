# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 01:43 UTC

---

# 🤖 Hugging Face 热门模型日报
**日期**: 2026-08-02

---

## 📺 今日速览

Kimi-K3 以 9,489 周点赞持续领跑多模态赛道，DeepSeek-V4-Flash 系列表现亮眼，下载量达 281 万。Qwen3.6 在社区微调领域掀起热潮，多个 Uncensored 变体跻身热榜。开源模型量化适配（GGUF、NVFP4）生态繁荣，轻量化部署成新热点。语言模型与多模态融合加速，代码补全领域新声涌现。

---

## 📊 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,429 | 15,366 | 最新闪现版本，轻量高效。已成为 Flash 系列的主力选择，优化推理速度与显存占用。 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,948 | 2,814,414 | 爆量下载的生产级版本。开源社区首选，兼容 Transformers 原生推理。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | 基于 MOE 架构的高效模型。下载量超 168 万，展现智谱强劲竞争力。 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | 新晋文本生成模型，轻量化设计。Poolside 出品的平衡型方案。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | 超轻量 LLM，3B 级别。适配边缘设备与本地部署场景。 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 717 | 13,426 | 大规模开源基座，Upstage 旗舰。下载虽少，技术指标领先。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,489 | 559,924 | 周点赞第一名，多模态视觉理解标杆。Moonshot AI 旗下的图文交互通才，性能与易用性兼优。 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | 下载量排名第二的爆款。百度开源通用 OCR，支持多语言、多格式。 |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | 1,823,436 | 社区微调顶流，Qwen3.6 MOE 变体。激进去审查版本，受社区推崇。 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 172 | 10,525 | 微软多模态视觉语言模型。融合最新 VLM 技术。 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | Agent 能力加强版，支持 Computer Use。微软新型多模态框架。 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | 对话型多模态模型，下载增速快。融合视觉与语言的轻量方案。 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | 小型版本，超轻量部署。边缘设备友好。 |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | Kimi-K3 的量化版本。GGUF 格式便于本地运行。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | 代码生成开发版，基于 Qwen3.5 MOE。Kwaipilot 的编程助手，融合 Qwen 能力。 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 357 | 650 | 轻量多模态模型。Aquila 系列的极简版本。 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | 高性能多模态增强版。集成 Agentic Search 能力。 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 语音识别新方向，BitNet 架构。低比特量化的 ASR 突破。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | 文本转语音预览版。轻量级 TTS 方案。 |
| [LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 87 | 6,190 | 轻量嵌入模型，Liquid AI 出品。350M 参数的高效编码器。 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | 边缘 TTS 专家，CPU 友好。本地文语合成的理想选择。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,237 | 1,173,001 | 社区激进微调顶流，多层 Uncensored 增强。DavidAU 的极致优化 GGUF，下载超 117 万。 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 288 | 228,610 | Hermes 框架融合，Qwen MOE 量化版。社区创意微调的又一力作。 |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | 9B 轻量对标，Imatrix 优化。极限压缩与保能的平衡方案。 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | Qwen MOE 实验微调。EschaLabs 的创新融合方向。 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 289 | 4,048 | Flash 版的 GGUF 适配。Unsloth 团队的格式兼容方案。 |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | 大模型 NVFP4 量化旗舰。Nota AI 的 4 比特精准压缩。 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,134 | 716,341 | 三值量化前沿，极限压缩。Prism ML 的 2bit 激进尝试，下载 71 万。 |
| [Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 221 | 1,072 | Kimi-K3 全格式适配。Unsloth 的量化优化。 |

---

## 🔍 生态信号

**Qwen 系生态爆发**：Qwen3.6/3.5 在社区微调领域独占鳌头，超 10 个变体登榜，Uncensored / Heretic / Fable 等标签风靡，反映开源社区的激烈创意竞争。**DeepSeek 维持热度**：V4-Flash 系列凭借轻量高效赢得信任，官方版和量化版齐头并进，稳占主流。**多模态百花齐放**：Kimi-K3、Unlimited-OCR、Inkling 三足鼎立，视觉理解与 OCR 方向下载量惊人，展现行业对端到端多模态的旺盛需求。**量化与微调成标配**：GGUF/NVFP4/Ternary 等格式适配率高，显示模型部署从云端向边缘迁移，社区生态成熟度提升。**微软发力新赛道**：Mage-VL、Fara1.5、VibeVoice 等新品频出，Agent 与多模态融合成新焦点。

---

## 💡 值得探索

1. **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — 单次下载超 281 万，生产环境验证充分。若需构建开源语言模型应用，这是最值信赖的开箱即用选择。

2. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 下载量 245 万排行榜第二，开源 OCR 的工业标准。适合文档处理、表单识别、多语言场景。

3. **[Qwen3.6-27B-Fable-Fusion-711](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 社区创新的极致版本，117 万下载见证其价值。若探索社区微调的边界与创意方向，这是典范案例。

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*