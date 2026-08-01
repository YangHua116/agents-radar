# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 11:29 UTC

---

Hugging Face 热门模型日报（2026-08-01）

今日速览

 - 本周榜单由多模态与社区量化/GGUF 作品主导，视觉-文本与本地推理镜像流行。
 - moonshotai 的 Kimi-K3 以最高点赞与大流量下载领跑，多模态互动持续受热捧。
 - 社区对 Qwen/DeepSeek/Solar 等家族的微调与量化（GGUF、NVFP4、ternary/2-bit）活动显著增加。
 - 大厂（Baidu、Microsoft）与小社群同时发力：企业级多模态 + 社区轻量化/离线部署并行发展。

热门模型

🧠 语言模型（LLM、对话模型、指令微调）

┌──────────────────────┬────────┬────┬──────┬──────────────────────────────────────────────────┐
│ 模型                 │ 作者   │ 点 │ 下载 │ 简要说明                                         │
│                      │        │ 赞 │      │                                                  │
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-1eq4fb3;https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731deepseek-ai/DeepSeek]8;;]8;; │ deepse │ 1, │ 15,3 │ 一个面向生成/检索增强的文本生成模型；以 Flash    │]8;;
│ ]8;id=md-1eq4fb3;https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731-V4-Flash-0731]8;;]8;;       │ ek-ai  │ 23 │ 66   │ 变体上榜，强调对话与检索-生成能力。              │]8;;
│                      │        │ 8  │      │                                                  │
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-11h0zp7;https://huggingface.co/zai-org/GLM-5.2zai-org/GLM-5.2]8;;]8;;      │ zai-or │ 4, │ 1,68 │ 新一代中文/多语对话生成模型家族，排名靠前且下载  │]8;;
│                      │ g      │ 72 │ 3,44 │ 量大，适合会话与指令式任务。                     │
│                      │        │ 0  │ 2    │                                                  │
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-1a6q5b6;https://huggingface.co/Nanbeige/Nanbeige4.2-3BNanbeige/Nanbeige4.2]8;;]8;; │ Nanbei │ 60 │ 27,8 │ 小型开源对话/生成模型，适合轻量化部署与快速迭代  │]8;;
│ ]8;id=md-1a6q5b6;https://huggingface.co/Nanbeige/Nanbeige4.2-3B-3B]8;;]8;;                  │ ge     │ 6  │ 92   │ 微调。                                           │]8;;
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-qrs7gl;https://huggingface.co/poolside/Laguna-S-2.1poolside/Laguna-S-2.]8;;]8;; │ poolsi │ 86 │ 77,0 │ 文本生成模型，定位通用生成/写作助手，社区关注度  │]8;;
│ ]8;id=md-qrs7gl;https://huggingface.co/poolside/Laguna-S-2.11]8;;]8;;                    │ de     │ 6  │ 21   │ 高。                                             │]8;;
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-1gnilo9;https://huggingface.co/upstage/Solar-Open2-250Bupstage/Solar-Open2-]8;;]8;; │ upstag │ 71 │ 13,4 │ 大规模开源生成模型（250B），为高能力场景提供基础 │]8;;
│ ]8;id=md-1gnilo9;https://huggingface.co/upstage/Solar-Open2-250B250B]8;;]8;;                 │ e      │ 5  │ 26   │ 权重，适合研究与微调。                           │]8;;
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-1xzga7h;https://huggingface.co/XYZAILab/XYZ-Aquila-miniXYZAILab/XYZ-Aquila-]8;;]8;; │ XYZAIL │ 35 │ 650  │ 面向轻量推理的迷你生成模型，便于边缘或本地化部署 │]8;;
│ ]8;id=md-1xzga7h;https://huggingface.co/XYZAILab/XYZ-Aquila-minimini]8;;]8;;                 │ ab     │ 3  │      │ 的试验。                                         │]8;;
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-i94c49;https://huggingface.co/XYZAILab/XYZ-Aquila-proXYZAILab/XYZ-Aquila-]8;;]8;; │ XYZAIL │ 32 │ 923  │ 更高能力的 Aquila                                │]8;;
│ ]8;id=md-i94c49;https://huggingface.co/XYZAILab/XYZ-Aquila-propro]8;;]8;;                  │ ab     │ 7  │      │ 变体，定位更强的生成与检索融合能力。             │]8;;
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-1jww6mn;https://huggingface.co/deepseek-ai/DeepSeek-V4-Flashdeepseek-ai/DeepSeek]8;;]8;; │ deepse │ 1, │ 2,81 │ 原始 DeepSeek V4                                 │]8;;
│ ]8;id=md-1jww6mn;https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-V4-Flash]8;;]8;;            │ ek-ai  │ 94 │ 4,41 │ 系列，下载量巨大，适合对话与检索增强生成任务。   │]8;;
│                      │        │ 0  │ 4    │                                                  │
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-15y5nrx;https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2EschaLabs/Qwen3.6-35]8;;]8;; │ EschaL │ 11 │ 875  │ Qwen 家族的混合专家 /                            │]8;;
│ ]8;id=md-15y5nrx;https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2B-A3B-Escha-W2]8;;]8;;       │ abs    │ 0  │      │ 大模型变体，面向高效多任务生成与对话应用。       │]8;;
└──────────────────────┴────────┴────┴──────┴──────────────────────────────────────────────────┘

🎨 多模态与生成（图像/音频/文本到X）

┌─────────────────────┬───────────┬────┬───────┬───────────────────────────────────────────────┐
│ 模型                │ 作者      │ 点 │ 下载  │ 简要说明                                      │
│                     │           │ 赞 │       │                                               │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-kyj4bu;https://huggingface.co/moonshotai/Kimi-K3moonshotai/Kimi-K3]8;;]8;;  │ moonshota │ 9, │ 559,9 │ 高人气的图文-文本交互多模态模型；以交互性与大 │]8;;
│                     │ i         │ 37 │ 24    │ 量点赞/下载领跑榜单。                         │
│                     │           │ 4  │       │                                               │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-q7wg79;https://huggingface.co/baidu/Unlimited-OCRbaidu/Unlimited-OCR]8;;]8;; │ baidu     │ 3, │ 2,457 │ 专注通用 OCR                                  │]8;;
│                     │           │ 69 │ ,387  │ 的多模态模型；极高下载量，适合大规模文档/图片 │
│                     │           │ 2  │       │ 文字识别。                                    │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-tjllhj;https://huggingface.co/owensong/Inflect-Micro-v2owensong/Inflect-Mi]8;;]8;; │ owensong  │ 35 │ 1,565 │ 小型 TTS                                      │]8;;
│ ]8;id=md-tjllhj;https://huggingface.co/owensong/Inflect-Micro-v2cro-v2]8;;]8;;              │           │ 2  │       │ 模型，面向本地/边缘低资源语音合成，强调       │]8;;
│                     │           │    │       │ CPU/嵌入式运行。                              │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-blc7ba;https://huggingface.co/thinkingmachines/Inkling-Smallthinkingmachines/In]8;;]8;; │ thinkingm │ 20 │ 3,998 │ 轻量多模态模型，适合资源受限场景的视觉-文本理 │]8;;
│ ]8;id=md-blc7ba;https://huggingface.co/thinkingmachines/Inkling-Smallkling-Small]8;;]8;;         │ achines   │ 1  │       │ 解与生成。                                    │]8;;
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-1824hk6;https://huggingface.co/unsloth/Kimi-K3unsloth/Kimi-K3]8;;]8;;     │ unsloth   │ 21 │ 1,072 │ Kimi-K3                                       │]8;;
│                     │           │ 8  │       │ 的另一个作者版本，提供易用的多模态交互实现。  │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-ax9js8;https://huggingface.co/microsoft/Fara1.5-27Bmicrosoft/Fara1.5-2]8;;]8;; │ microsoft │ 23 │ 2,775 │ Microsoft                                     │]8;;
│ ]8;id=md-ax9js8;https://huggingface.co/microsoft/Fara1.5-27B7B]8;;]8;;                  │           │ 6  │       │ 的多模态变体，定位高能力图文理解与生成。      │]8;;
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-ip4mxf;https://huggingface.co/microsoft/Mage-VLmicrosoft/Mage-VL]8;;]8;;   │ microsoft │ 16 │ 10,52 │ 多模态视觉语言模型，适配创作与理解任务的企业  │]8;;
│                     │           │ 3  │ 5     │ 级模型。                                      │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-gmvf8s;https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6bAudio8/Audio8-TTS-P]8;;]8;; │ Audio8    │ 16 │ 3,254 │ 文本到语音的预览版本，面向高质量语音合成试验  │]8;;
│ ]8;id=md-gmvf8s;https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6breview-0.6b]8;;]8;;         │           │ 0  │       │ 。                                            │]8;;
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-1m0xbwg;https://huggingface.co/thinkingmachines/Inklingthinkingmachines/In]8;;]8;; │ thinkingm │ 1, │ 59,07 │ 更完整的 Inkling                              │]8;;
│ ]8;id=md-1m0xbwg;https://huggingface.co/thinkingmachines/Inklingkling]8;;]8;;               │ achines   │ 66 │ 6     │ 多模态模型，社区关注用于对话型视觉应用。      │]8;;
│                     │           │ 8  │       │                                               │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-1i4oo3u;https://huggingface.co/microsoft/VibeVoice-ASR-BitNetmicrosoft/VibeVoice]8;;]8;; │ microsoft │ 13 │ 5,835 │ 面向自动语音识别（ASR）的模型，适用于语音转文 │]8;;
│ ]8;id=md-1i4oo3u;https://huggingface.co/microsoft/VibeVoice-ASR-BitNet-ASR-BitNet]8;;]8;;         │           │ 8  │       │ 本管线。                                      │]8;;
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-irf5o6;https://huggingface.co/Comfy-Org/Mage-FlowComfy-Org/Mage-Flow]8;;]8;; │ Comfy-Org │ 10 │ 62,82 │ 基于 diffusion/ComfyUI                        │]8;;
│                     │           │ 9  │ 0     │ 的图像生成流模型，方便集成与可视化工作流。    │
├─────────────────────┼───────────┼────┼───────┼───────────────────────────────────────────────┤
│ ]8;id=md-1eyjr8l;https://huggingface.co/owensong/Inflect-Nano-v2owensong/Inflect-Na]8;;]8;; │ owensong  │ 12 │ 838   │ 更小的 TTS                                    │]8;;
│ ]8;id=md-1eyjr8l;https://huggingface.co/owensong/Inflect-Nano-v2no-v2]8;;]8;;               │           │ 3  │       │ 模型，面向极低资源设备与快速推理需求。        │]8;;
└─────────────────────┴───────────┴────┴───────┴───────────────────────────────────────────────┘

🔧 专用模型（代码、数学、医疗、嵌入）

┌──────────────────────┬────────┬────┬──────┬──────────────────────────────────────────────────┐
│ 模型                 │ 作者   │ 点 │ 下载 │ 简要说明                                         │
│                      │        │ 赞 │      │                                                  │
├──────────────────────┼────────┼────┼──────┼──────────────────────────────────────────────────┤
│ ]8;id=md-8d1ok6;https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-DevKwaipilot/KAT-Coder-]8;;]8;; │ Kwaipi │ 37 │ 10,7 │ 面向代码生成/理解的模型变体；专为编码场景与开发  │]8;;
│ ]8;id=md-8d1ok6;https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-DevV2.5-Dev]8;;]8;;             │ lot    │ 9  │ 71   │ 者工具集成优化。                                 │]8;;
└──────────────────────┴────────┴────┴──────┴──────────────────────────────────────────────────┘

📦 微调与量化（社区微调、GGUF、AWQ）

┌───────────────────────────────────────────────┬───────┬───┬──────┬───────────────────────────┐
│ 模型                                          │ 作者  │ 点 │ 下载 │ 简要说明                  │
│                                               │       │ 赞 │      │                           │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1woxp2t;https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUFunsloth/DeepSeek-V4-Flash-0731-GGUF]8;;]8;;           │ unslo │ 2 │ 4,04 │ DeepSeek 的社区 GGUF      │]8;;
│                                               │ th    │ 3 │ 8    │ 镜像，便于本地/离线运行与 │
│                                               │       │ 6 │      │ 轻量化部署。              │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-hd1z2g;https://huggingface.co/unsloth/Kimi-K3-GGUFunsloth/Kimi-K3-GGUF]8;;]8;;                          │ unslo │ 2 │ 41,3 │ Kimi-K3 的 GGUF           │]8;;
│                                               │ th    │ 3 │ 37   │ 版本，目标是离线推理与更  │
│                                               │       │ 5 │      │ 快的本地体验。            │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1ck1mwd;https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUFDavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensor]8;;]8;; │ David │ 1 │ 1,17 │ Qwen3.6 的社区融合/微调与 │]8;;
│ ]8;id=md-1ck1mwd;https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUFed-Heretic-NM-DAU-NEO-MAX-MTP-GGUF]8;;]8;;            │ AU    │ , │ 3,00 │ GGUF                      │]8;;
│                                               │       │ 1 │ 1    │ 发布，下载量极高，反映强  │
│                                               │       │ 9 │      │ 烈的离线/本地化需求。     │
│                                               │       │ 5 │      │                           │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1pvd6v4;https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUFLuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesi]8;;]8;; │ Luffy │ 2 │ 228, │ Qwen 家族的 GGUF          │]8;;
│ ]8;id=md-1pvd6v4;https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUFs-Hermes-V6-GGUF]8;;]8;;                              │ TheFo │ 7 │ 610  │ 大模型镜像，便于离线推理  │]8;;
│                                               │ x     │ 9 │      │ 与社区试验。              │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1mx9yvb;https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4nota-ai/Solar-Open2-250B-Nota-NVFP4]8;;]8;;           │ nota- │ 1 │ 22,3 │ Solar-Open2 的 NVFP4      │]8;;
│                                               │ ai    │ 5 │ 96   │ 量化版本，面向 GPU        │
│                                               │       │ 1 │      │ 加速的低精度推理优化。    │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1nnm3xx;https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUFDavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensor]8;;]8;; │ David │ 1 │ 267, │ Qwen3.5 的社区微调/GGUF   │]8;;
│ ]8;id=md-1nnm3xx;https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUFed-Heretic-NEO-IMATRIX-MAX-MTP-GGUF]8;;]8;;           │ AU    │ 7 │ 572  │ 镜像，兼顾高可用下载与离  │]8;;
│                                               │       │ 9 │      │ 线部署需求。              │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-17qz1pb;https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-AggressiveHauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-]8;;]8;; │ Hauha │ 3 │ 1,82 │ 大量下载的 Qwen3.6        │]8;;
│ ]8;id=md-17qz1pb;https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-AggressiveAggressive]8;;]8;;                                    │ uCS   │ , │ 3,43 │ 非官方变体，显示社区对高  │]8;;
│                                               │       │ 2 │ 6    │ 吞吐/本地模型的强烈需求。 │
│                                               │       │ 1 │      │                           │
│                                               │       │ 3 │      │                           │
├───────────────────────────────────────────────┼───────┼───┼──────┼───────────────────────────┤
│ ]8;id=md-1j4fsbr;https://huggingface.co/prism-ml/Ternary-Bonsai-27B-ggufprism-ml/Ternary-Bonsai-27B-gguf]8;;]8;;              │ prism │ 1 │ 716, │ 采用 ternary/2-bit 量化的 │]8;;
│                                               │ -ml   │ , │ 341  │ GGUF                      │
│                                               │       │ 1 │      │ 模型，关注极低精度下的实  │
│                                               │       │ 2 │      │ 用性能与内存节省。        │
│                                               │       │ 9 │      │                           │
└───────────────────────────────────────────────┴───────┴───┴──────┴───────────────────────────┘

生态信号（100–200 字）

 - Qwen、DeepSeek、Solar 与 Kimi-K3 家族热度上升，反映多模态与大模型并行发展的态势。开源权重与社区镜
像（GGUF、NVFP4、2-bit/ternary）正大幅增长，表明离线与低成本推理是主要需求。企业（Baidu、Microsoft）
继续贡献高质量多模态基线，社区则专注于量化、本地化和非官方微调。

值得探索（2–3 个）

 - moonshotai/Kimi-K3 — 排名与互动性最高的多模态模型，适合研究视觉-文本对话与交互体验改进。链接:
]8;id=md-kyj4bu;https://huggingface.co/moonshotai/Kimi-K3https://huggingface.co/moonshotai/Kimi-K3]8;;
 - zai-org/GLM-5.2 — 高下载量的对话/指令模型，适合中文会话与多任务微调基线研究。链接:
]8;id=md-11h0zp7;https://huggingface.co/zai-org/GLM-5.2https://huggingface.co/zai-org/GLM-5.2]8;;
 - prism-ml/Ternary-Bonsai-27B-gguf —
在极低位宽量化（ternary/2-bit）上的实现值得深入评估，适合对推理效率与精度权衡做实验。链接:
]8;id=md-1j4fsbr;https://huggingface.co/prism-ml/Ternary-Bonsai-27B-ggufhttps://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf]8;;

（结束）

---
*本日报由 [agents-radar](https://github.com/YangHua116/agents-radar) 自动生成。*