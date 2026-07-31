document.addEventListener('DOMContentLoaded', async () => {
  const tools = [
    { id: 'chatgpt', name: 'ChatGPT', category: 'ai-writing', icon: '\u{1F4AC}', description: '最强对话AI，写作、编程、翻译全能', rating: 4.9, featured: true, url: 'https://chat.openai.com' },
    { id: 'claude', name: 'Claude', category: 'ai-writing', icon: '\u{1F916}', description: '长文本处理之王，200K上下文窗口', rating: 4.7, featured: true, url: 'https://claude.ai' },
    { id: 'gemini', name: 'Gemini', category: 'ai-writing', icon: '\u{1F31F}', description: 'Google多模态AI，文字/图片/视频全理解', rating: 4.5, featured: false, url: 'https://gemini.google.com' },
    { id: 'deepseek', name: 'DeepSeek', category: 'ai-writing', icon: '\u{1F9E0}', description: '国产开源大模型，代码能力突出', rating: 4.6, featured: true, url: 'https://chat.deepseek.com' },
    { id: 'kimi', name: 'Kimi', category: 'ai-writing', icon: '\u{1F4D6}', description: '月之暗面出品，200万字超长上下文', rating: 4.4, featured: false, url: 'https://kimi.moonshot.cn' },
    { id: 'tongyi', name: '通义千问', category: 'ai-writing', icon: '\u{2601}', description: '阿里云AI助手，中文理解能力强', rating: 4.3, featured: false, url: 'https://tongyi.aliyun.com' },
    { id: 'doubao', name: '豆包', category: 'ai-writing', icon: '\u{1F95C}', description: '字节跳动AI助手，对话流畅自然', rating: 4.2, featured: false, url: 'https://www.doubao.com' },
    { id: 'wenxin', name: '文心一言', category: 'ai-writing', icon: '\u{1F4DD}', description: '百度出品，中文创作能力强', rating: 4.3, featured: false, url: 'https://yiyan.baidu.com' },
    { id: 'midjourney', name: 'Midjourney', category: 'ai-drawing', icon: '\u{1F3A8}', description: '顶级AI绘画，效果惊艳业界标杆', rating: 4.8, featured: true, url: 'https://www.midjourney.com' },
    { id: 'stable-diffusion', name: 'Stable Diffusion', category: 'ai-drawing', icon: '\u{1F5BC}', description: '开源AI绘画，免费无限制', rating: 4.6, featured: false, url: 'https://stability.ai' },
    { id: 'dalle', name: 'DALL-E 3', category: 'ai-drawing', icon: '\u{1F308}', description: 'OpenAI出品，文字还原度极高', rating: 4.5, featured: false, url: 'https://openai.com/dall-e-3' },
    { id: 'jimeng', name: '即梦AI', category: 'ai-drawing', icon: '\u{2728}', description: '字节跳动AI绘画，中文理解好', rating: 4.2, featured: false, url: 'https://jimeng.jianying.com' },
    { id: 'liblib', name: 'LiblibAI', category: 'ai-drawing', icon: '\u{1F4F7}', description: '国内SD模型社区，海量模型下载', rating: 4.4, featured: false, url: 'https://www.liblib.art' },
    { id: 'leonardo', name: 'Leonardo.ai', category: 'ai-drawing', icon: '\u{1F3AD}', description: '游戏资产AI生成，免费额度大', rating: 4.3, featured: false, url: 'https://leonardo.ai' },
    { id: 'runway', name: 'Runway', category: 'ai-video', icon: '\u{1F3AC}', description: '专业AI视频生成与编辑平台', rating: 4.5, featured: true, url: 'https://runwayml.com' },
    { id: 'pika', name: 'Pika', category: 'ai-video', icon: '\u{1F3A5}', description: '轻量AI视频生成，上手简单', rating: 4.2, featured: false, url: 'https://pika.art' },
    { id: 'kling', name: '可灵AI', category: 'ai-video', icon: '\u{1F4F9}', description: '快手出品，国产视频生成标杆', rating: 4.4, featured: true, url: 'https://kling.kuaishou.com' },
    { id: 'jianying-ai', name: '剪映AI', category: 'ai-video', icon: '\u{2702}', description: '字节跳动视频剪辑+AI功能', rating: 4.5, featured: false, url: 'https://www.jianying.com' },
    { id: 'haiper', name: 'Haiper', category: 'ai-video', icon: '\u{1F3A0}', description: '免费AI视频生成，效果惊艳', rating: 4.1, featured: false, url: 'https://haiper.ai' },
    { id: 'luma', name: 'Luma Dream Machine', category: 'ai-video', icon: '\u{1F4AD}', description: 'AI视频生成新秀，画质出色', rating: 4.3, featured: false, url: 'https://lumalabs.ai' },
    { id: 'suno', name: 'Suno', category: 'ai-audio', icon: '\u{1F3B5}', description: 'AI音乐生成，一键创作歌曲', rating: 4.6, featured: true, url: 'https://suno.ai' },
    { id: 'elevenlabs', name: 'ElevenLabs', category: 'ai-audio', icon: '\u{1F50A}', description: '最逼真的AI语音合成', rating: 4.4, featured: false, url: 'https://elevenlabs.io' },
    { id: 'udio', name: 'Udio', category: 'ai-audio', icon: '\u{1F3BC}', description: 'AI音乐生成，音质极佳', rating: 4.3, featured: false, url: 'https://www.udio.com' },
    { id: 'speechify', name: 'Speechify', category: 'ai-audio', icon: '\u{1F399}', description: 'AI文字转语音，超逼真朗读', rating: 4.2, featured: false, url: 'https://speechify.com' },
    { id: 'perplexity', name: 'Perplexity', category: 'ai-search', icon: '\u{1F50D}', description: 'AI搜索引擎，实时联网回答', rating: 4.5, featured: true, url: 'https://www.perplexity.ai' },
    { id: 'devv', name: 'Devv', category: 'ai-search', icon: '\u{1F4BB}', description: '程序员专属AI搜索引擎', rating: 4.3, featured: false, url: 'https://devv.ai' },
    { id: 'miku', name: '秘塔AI搜索', category: 'ai-search', icon: '\u{1F50E}', description: '国内AI搜索，无广告直达答案', rating: 4.4, featured: false, url: 'https://metaso.cn' },
    { id: 'github-copilot', name: 'GitHub Copilot', category: 'ai-coding', icon: '\u{1F916}', description: '微软出品，代码补全王者', rating: 4.7, featured: true, url: 'https://github.com/features/copilot' },
    { id: 'cursor', name: 'Cursor', category: 'ai-coding', icon: '\u{2328}', description: 'AI原生代码编辑器，效率翻倍', rating: 4.8, featured: true, url: 'https://cursor.sh' },
    { id: 'tongyi-lingma', name: '通义灵码', category: 'ai-coding', icon: '\u{1F527}', description: '阿里AI编程助手，免费好用', rating: 4.3, featured: false, url: 'https://tongyi.aliyun.com/lingma' },
    { id: 'windsurf', name: 'Windsurf', category: 'ai-coding', icon: '\u{1F4A8}', description: 'AI IDE新秀，代码理解深刻', rating: 4.5, featured: false, url: 'https://codeium.com/windsurf' },
    { id: 'v0', name: 'v0 by Vercel', category: 'ai-coding', icon: '\u{1F3D7}', description: '一句话生成前端UI界面', rating: 4.4, featured: false, url: 'https://v0.dev' },
    { id: 'notion-ai', name: 'Notion AI', category: 'ai-office', icon: '\u{1F4DD}', description: 'Notion内置AI写作助手', rating: 4.4, featured: false, url: 'https://www.notion.so/product/ai' },
    { id: 'wps-ai', name: 'WPS AI', category: 'ai-office', icon: '\u{1F4C4}', description: '金山办公AI，文档/表格/PPT全覆盖', rating: 4.3, featured: false, url: 'https://ai.wps.cn' },
    { id: 'gamma', name: 'Gamma', category: 'ai-office', icon: '\u{1F4CA}', description: 'AI一键生成PPT和文档', rating: 4.5, featured: true, url: 'https://gamma.app' },
    { id: 'feishu-miaobi', name: '飞书智能伙伴', category: 'ai-office', icon: '\u{1F426}', description: '飞书内置AI，会议纪要/文档辅助', rating: 4.2, featured: false, url: 'https://www.feishu.cn' },
    { id: 'canva-ai', name: 'Canva AI', category: 'ai-design', icon: '\u{270F}', description: '一站式AI设计平台，素材海量', rating: 4.3, featured: false, url: 'https://www.canva.com' },
    { id: 'mastergo-ai', name: 'MasterGo AI', category: 'ai-design', icon: '\u{1F3AF}', description: '国产UI设计工具+AI辅助', rating: 4.1, featured: false, url: 'https://mastergo.com' },
    { id: 'uizard', name: 'Uizard', category: 'ai-design', icon: '\u{1F4F1}', description: 'AI原型设计，草图秒变界面', rating: 4.2, featured: false, url: 'https://uizard.io' },
    { id: 'heygen', name: 'HeyGen', category: 'ai-marketing', icon: '\u{1F3A4}', description: 'AI数字人视频生成，口型完美', rating: 4.5, featured: true, url: 'https://www.heygen.com' },
    { id: 'jimeng-avatar', name: '即创', category: 'ai-marketing', icon: '\u{1F4E2}', description: '字节跳动AI营销内容创作', rating: 4.1, featured: false, url: 'https://aicreator.jianying.com' },
    { id: 'jasper', name: 'Jasper', category: 'ai-marketing', icon: '\u{1F4E8}', description: 'AI营销文案生成，品牌声音定制', rating: 4.2, featured: false, url: 'https://www.jasper.ai' },
    { id: 'copy-ai', name: 'Copy.ai', category: 'ai-marketing', icon: '\u{1F4CB}', description: 'AI营销内容一站式平台', rating: 4.1, featured: false, url: 'https://www.copy.ai' },
    { id: 'grammarly', name: 'Grammarly', category: 'ai-writing', icon: '\u{2714}', description: 'AI英语写作润色，全球最流行', rating: 4.6, featured: false, url: 'https://www.grammarly.com' },
    { id: 'quillbot', name: 'QuillBot', category: 'ai-writing', icon: '\u{1F4D8}', description: 'AI改写润色，多语言支持', rating: 4.2, featured: false, url: 'https://quillbot.com' },
    { id: 'beautiful-ai', name: 'Beautiful.ai', category: 'ai-office', icon: '\u{1F4CA}', description: 'AI智能PPT，自动排版美化', rating: 4.1, featured: false, url: 'https://www.beautiful.ai' },
    { id: 'otter', name: 'Otter.ai', category: 'ai-office', icon: '\u{1F3A7}', description: 'AI会议记录，英文转写王者', rating: 4.3, featured: false, url: 'https://otter.ai' },
    { id: 'remove-bg', name: 'Remove.bg', category: 'ai-design', icon: '\u{1F4F7}', description: 'AI一键抠图，5秒出结果', rating: 4.5, featured: false, url: 'https://www.remove.bg' },
    { id: 'photo-room', name: 'Photoroom', category: 'ai-design', icon: '\u{1F4F8}', description: 'AI电商产品图，背景替换神器', rating: 4.4, featured: false, url: 'https://www.photoroom.com' },
    { id: 'synthesia', name: 'Synthesia', category: 'ai-marketing', icon: '\u{1F3AC}', description: '企业级AI数字人，140+语言', rating: 4.4, featured: false, url: 'https://www.synthesia.io' },
    { id: 'xinghuo', name: '\u8BAF\u98DE\u661F\u706B', category: 'ai-writing', icon: '\u{1F525}', description: '\u8BAF\u98DE\u51FA\u54C1\uFF0C\u591A\u6A21\u6001\u4EA4\u4E92\u5168\u8986\u76D6', rating: 4.4, featured: false, url: 'https://xinghuo.xfyun.cn' },
    { id: 'hunyuan', name: '\u817E\u8BAF\u6DF7\u5143', category: 'ai-writing', icon: '\u{1F4AC}', description: '\u817E\u8BAF\u5927\u6A21\u578B\uFF0C\u5FAE\u4FE1\u751F\u6001\u6DF1\u5EA6\u96C6\u6210', rating: 4.3, featured: false, url: 'https://hunyuan.tencent.com' },
    { id: 'zhipu', name: '\u667A\u8C31\u6E05\u8A00', category: 'ai-writing', icon: '\u{1F9E0}', description: '\u6E05\u534E\u56E2\u961F\u51FA\u54C1\uFF0CGLM\u6A21\u578B\u6027\u80FD\u5F3A\u52B2', rating: 4.4, featured: false, url: 'https://chatglm.cn' },
    { id: 'baichuan', name: '\u767E\u5DDD\u667A\u80FD', category: 'ai-writing', icon: '\u{1F30A}', description: '\u767E\u5DDD\u5927\u6A21\u578B\uFF0C\u957F\u6587\u672C\u7406\u89E3\u4E13\u5BB6', rating: 4.2, featured: false, url: 'https://www.baichuan-ai.com' },
    { id: 'biling', name: '\u7B14\u7075AI', category: 'ai-writing', icon: '\u{1F58A}', description: '\u4E13\u6CE8\u4E2D\u6587\u5199\u4F5C\uFF0C\u8BBA\u6587\u3001\u5C0F\u8BF4\u5168\u80FD', rating: 4.0, featured: false, url: 'https://www.bilingai.com' },
    { id: 'huoshan-writing', name: '\u706B\u5C71\u5199\u4F5C', category: 'ai-writing', icon: '\u{270F}', description: '\u5B57\u8282\u8DF3\u52A8\u51FA\u54C1\uFF0C\u4E2D\u82F1\u6587\u5199\u4F5C\u6DA6\u8272', rating: 4.1, featured: false, url: 'https://www.writingo.net' },
    { id: 'yige', name: '\u6587\u5FC3\u4E00\u683C', category: 'ai-drawing', icon: '\u{1F5A5}', description: '\u767E\u5EA6\u51FA\u54C1\uFF0C\u4E2D\u6587\u63D0\u793A\u8BCD\u6548\u679C\u4F73', rating: 4.1, featured: false, url: 'https://yige.baidu.com' },
    { id: 'dreamina', name: '\u5373\u68A6AI', category: 'ai-drawing', icon: '\u{1F4A1}', description: '\u5B57\u8282\u51FA\u54C1\uFF0C\u4E2D\u6587\u7406\u89E3\u51C6\u786E\u3001\u514D\u8D39\u989D\u5EA6\u5927', rating: 4.2, featured: false, url: 'https://dreamina.jianying.com' },
    { id: 'wujie', name: '\u65E0\u754CAI', category: 'ai-drawing', icon: '\u{1F30C}', description: '\u56FD\u5185SD\u6A21\u578B\u793E\u533A\uFF0C\u539F\u751F\u6A21\u578B\u8D28\u91CF\u9AD8', rating: 4.3, featured: false, url: 'https://www.wujieai.com' },
    { id: 'playground', name: 'Playground AI', category: 'ai-drawing', icon: '\u{1F3AE}', description: '\u514D\u8D39AI\u7ED8\u753B\u5E73\u53F0\uFF0C\u6BCF\u59291000\u5F20\u989D\u5EA6', rating: 4.0, featured: false, url: 'https://playground.com' },
    { id: 'clipdrop', name: 'Clipdrop', category: 'ai-drawing', icon: '\u{1F4F7}', description: 'Stability AI\u51FA\u54C1\uFF0C\u4E00\u952E\u6269\u56FE\u3001\u62A0\u56FE\u3001\u91CD\u7ED8', rating: 4.3, featured: false, url: 'https://clipdrop.co' },
    { id: 'krea', name: 'Krea AI', category: 'ai-drawing', icon: '\u{1F3A8}', description: '\u5B9E\u65F6AI\u7ED8\u753B\uFF0C\u5373\u65F6\u53CD\u9988\u6781\u901F\u751F\u6210', rating: 4.2, featured: false, url: 'https://www.krea.ai' },
    { id: 'capcut', name: 'CapCut/\u526A\u6620', category: 'ai-video', icon: '\u{2702}', description: '\u5B57\u8282\u51FA\u54C1\uFF0C\u514D\u8D39AI\u89C6\u9891\u526A\u8F91', rating: 4.5, featured: false, url: 'https://www.capcut.com' },
    { id: 'invideo', name: 'Invideo AI', category: 'ai-video', icon: '\u{1F4DD}', description: '\u6587\u6848\u4E00\u952E\u8F6C\u89C6\u9891\uFF0C\u8425\u9500\u4EBA\u7684\u5229\u5668', rating: 4.2, featured: false, url: 'https://invideo.io' },
    { id: 'pictory', name: 'Pictory', category: 'ai-video', icon: '\u{1F3A5}', description: '\u535A\u5BA2\u6587\u7AE0\u8F6C\u89C6\u9891\uFF0C\u81EA\u52A8\u914D\u5B57\u5E55', rating: 4.1, featured: false, url: 'https://pictory.ai' },
    { id: 'veed', name: 'VEED.io', category: 'ai-video', icon: '\u{1F39E}', description: '\u5728\u7EBFAI\u89C6\u9891\u7F16\u8F91\uFF0C\u81EA\u52A8\u5B57\u5E55\u548C\u7FFB\u8BD1', rating: 4.3, featured: false, url: 'https://www.veed.io' },
    { id: 'moyin', name: '\u9B54\u97F3\u5DE5\u574A', category: 'ai-audio', icon: '\u{1F3A4}', description: '\u56FD\u5185\u6700\u5F3AAI\u914D\u97F3\uFF0C\u591A\u79CD\u97F3\u8272\u53EF\u9009', rating: 4.2, featured: false, url: 'https://www.moyin.com' },
    { id: 'xunfei-dub', name: '\u8BAF\u98DE\u914D\u97F3', category: 'ai-audio', icon: '\u{1F3A7}', description: '\u8BAF\u98DE\u51FA\u54C1\uFF0C\u5F55\u97F3\u7EA7\u8BED\u97F3\u5408\u6210', rating: 4.3, featured: false, url: 'https://peiyin.xunfei.cn' },
    { id: 'aiva', name: 'AIVA', category: 'ai-audio', icon: '\u{1F3BC}', description: '\u4E13\u4E1AAI\u4F5C\u66F2\uFF0C\u5F71\u89C6\u6E38\u620F\u914D\u4E50\u795E\u5668', rating: 4.1, featured: false, url: 'https://www.aiva.ai' },
    { id: 'soundraw', name: 'Soundraw', category: 'ai-audio', icon: '\u{1F3B6}', description: 'AI\u539F\u521B\u80CC\u666F\u97F3\u4E50\uFF0C\u5546\u7528\u514D\u7248\u6743', rating: 4.2, featured: false, url: 'https://soundraw.io' },
    { id: 'tiangong', name: '\u5929\u5DE5AI\u641C\u7D22', category: 'ai-search', icon: '\u{1F52C}', description: '\u6606\u4ED1\u4E07\u7EF4\u51FA\u54C1\uFF0C\u5F3A\u5927\u8054\u7F51\u641C\u7D22', rating: 4.3, featured: false, url: 'https://www.tiangong.cn' },
    { id: 'nami', name: '\u7EB3\u7C73\u641C\u7D22', category: 'ai-search', icon: '\u{1F31F}', description: '360\u51FA\u54C1\uFF0C\u591A\u6B65\u641C\u7D22\u6DF1\u5EA6\u5206\u6790', rating: 4.1, featured: false, url: 'https://www.n.cn' },
    { id: 'phind', name: 'Phind', category: 'ai-search', icon: '\u{1F52C}', description: '\u7A0B\u5E8F\u5458\u4E13\u5C5E\u641C\u7D22\uFF0C\u76F4\u63A5\u7ED9\u4EE3\u7801\u7B54\u6848', rating: 4.4, featured: false, url: 'https://www.phind.com' },
    { id: 'tabnine', name: 'Tabnine', category: 'ai-coding', icon: '\u{1F916}', description: '\u8001\u724CAI\u4EE3\u7801\u8865\u5168\uFF0C\u672C\u5730\u90E8\u7F72\u4FDD\u5BC6', rating: 4.2, featured: false, url: 'https://www.tabnine.com' },
    { id: 'replit', name: 'Replit AI', category: 'ai-coding', icon: '\u{2601}', description: '\u4E91\u7AEFAI\u7F16\u7A0B\u73AF\u5883\uFF0C\u4E00\u53E5\u8BDD\u751F\u6210\u5E94\u7528', rating: 4.3, featured: false, url: 'https://replit.com' },
    { id: 'bolt', name: 'Bolt.new', category: 'ai-coding', icon: '\u{26A1}', description: 'AI\u5168\u6808\u5E94\u7528\u751F\u6210\uFF0C\u4E00\u53E5\u8BDD\u4ECE0\u52301', rating: 4.5, featured: true, url: 'https://bolt.new' },
    { id: 'cline', name: 'Cline', category: 'ai-coding', icon: '\u{1F527}', description: 'VS Code\u63D2\u4EF6\uFF0C\u5F00\u6E90AI\u7F16\u7A0B\u52A9\u624B', rating: 4.4, featured: false, url: 'https://github.com/cline/cline' },
    { id: 'lovable', name: 'Lovable', category: 'ai-coding', icon: '\u{2764}', description: 'AI\u751F\u6210\u7F51\u7AD9\u548CWeb\u5E94\u7528\uFF0C\u901F\u5EA6\u6781\u5FEB', rating: 4.3, featured: false, url: 'https://lovable.dev' },
    { id: 'xunfei-trans', name: '\u8BAF\u98DE\u542C\u89C1', category: 'ai-office', icon: '\u{1F3A7}', description: 'AI\u5B9E\u65F6\u8F6C\u5199\uFF0C\u4F1A\u8BAE\u7EAA\u8981\u4E00\u952E\u751F\u6210', rating: 4.4, featured: false, url: 'https://tingjian.xfyun.cn' },
    { id: 'mindshow', name: 'MindShow', category: 'ai-office', icon: '\u{1F4CA}', description: 'Markdown\u4E00\u952E\u8F6CPPT\uFF0C\u81EA\u52A8\u6392\u7248', rating: 4.1, featured: false, url: 'https://www.mindshow.fun' },
    { id: 'slidesai', name: 'SlidesAI', category: 'ai-office', icon: '\u{1F4CB}', description: 'Google Slides\u63D2\u4EF6\uFF0CAI\u81EA\u52A8\u751F\u6210PPT', rating: 4.0, featured: false, url: 'https://www.slidesai.io' },
    { id: 'tongyi-listen', name: '\u901A\u4E49\u542C\u609F', category: 'ai-office', icon: '\u{1F442}', description: '\u963F\u91CCAI\u97F3\u89C6\u9891\u8F6C\u6587\u5B57\uFF0C\u514D\u8D39\u597D\u7528', rating: 4.3, featured: false, url: 'https://tingwu.aliyun.com' },
    { id: 'tencent-doc-ai', name: '\u817E\u8BAF\u6587\u6863AI', category: 'ai-office', icon: '\u{1F4C4}', description: '\u817E\u8BAF\u6587\u6863\u5185\u7F6EAI\uFF0C\u5199\u4F5C\u3001\u7FFB\u8BD1\u3001\u603B\u7ED3', rating: 4.2, featured: false, url: 'https://docs.qq.com' },
    { id: 'gaoding', name: '\u7A3F\u5B9AAI', category: 'ai-design', icon: '\u{1F3AF}', description: '\u56FD\u5185\u6700\u5F3AAI\u8BBE\u8BA1\u5DE5\u5177\uFF0C\u6D77\u62A5\u3001Logo\u5168\u8986\u76D6', rating: 4.3, featured: false, url: 'https://www.gaoding.com' },
    { id: 'meitu-ai', name: '\u7F8E\u56FE\u8BBE\u8BA1\u5BA4', category: 'ai-design', icon: '\u{1F4F8}', description: '\u7F8E\u56FE\u51FA\u54C1\uFF0CAI\u5546\u54C1\u56FE\u3001AI\u8BD5\u8863\u4E00\u7AD9\u5F0F', rating: 4.4, featured: false, url: 'https://design.meitu.com' },
    { id: 'logoai', name: 'LogoAI', category: 'ai-design', icon: '\u{1F451}', description: 'AI Logo\u8BBE\u8BA1\uFF0C\u4E00\u5206\u949F\u751F\u6210\u591A\u5957\u65B9\u6848', rating: 4.0, featured: false, url: 'https://www.logoai.com' },
    { id: 'looka', name: 'Looka', category: 'ai-design', icon: '\u{1F3A8}', description: 'AI\u54C1\u724C\u8BBE\u8BA1\uFF0CLogo+\u4F01\u4E1AVI\u4E00\u7AD9\u5F0F', rating: 4.1, featured: false, url: 'https://looka.com' },
    { id: 'chuangkit', name: '\u521B\u5BA2\u8D34AI', category: 'ai-marketing', icon: '\u{1F4E3}', description: 'AI\u8425\u9500\u7D20\u6750\u8BBE\u8BA1\uFF0C\u6D77\u62A5\u89C6\u9891\u5168\u80FD', rating: 4.2, featured: false, url: 'https://www.chuangkit.com' },
    { id: 'eqxiu', name: '\u6613\u4F01\u79C0AI', category: 'ai-marketing', icon: '\u{1F4F1}', description: 'H5\u8425\u9500\u9875\u9762AI\u751F\u6210\uFF0C\u4F01\u4E1A\u5BA3\u4F20\u5229\u5668', rating: 4.0, featured: false, url: 'https://www.eqxiu.com' },
    { id: 'descript', name: 'Descript', category: 'ai-marketing', icon: '\u{1F3AC}', description: 'AI\u89C6\u9891\u526A\u8F91\uFF0C\u5982\u540C\u7F16\u8F91\u6587\u6863\u822C\u7B80\u5355', rating: 4.3, featured: false, url: 'https://www.descript.com' },
    { id: 'opus-clip', name: 'Opus Clip', category: 'ai-marketing', icon: '\u{2702}', description: '\u957F\u89C6\u9891AI\u526A\u6210\u77ED\u89C6\u9891\uFF0C\u4E00\u952E\u7206\u6B3E', rating: 4.4, featured: false, url: 'https://www.opus.pro' },
    { id: 'chanmama', name: '\u8749\u5988\u5988AI', category: 'ai-marketing', icon: '\u{1F4CA}', description: '\u77ED\u89C6\u9891\u6570\u636E\u5206\u6790+\u865A\u62DF\u4EBA\u5E26\u8D27', rating: 4.1, featured: false, url: 'https://www.chanmama.com' },
    { id: 'monica', name: 'Monica', category: 'ai-writing', icon: '\u{1F4AC}', description: '\u5168\u5E73\u53F0AI\u52A9\u624B\uFF0C\u6D4F\u89C8\u5668\u63D2\u4EF6\u751F\u6001', rating: 4.2, featured: false, url: 'https://monica.im' },
    { id: 'yuanbao', name: '\u817E\u8BAF\u5143\u5B9D', category: 'ai-writing', icon: '\u{1F916}', description: '\u817E\u8BAF\u51FA\u54C1\uFF0C\u5FAE\u4FE1/\u4F01\u4E1A\u5FAE\u4FE1\u6DF1\u5EA6\u96C6\u6210', rating: 4.3, featured: false, url: 'https://yuanbao.tencent.com' },
    { id: 'minimax', name: 'MiniMax', category: 'ai-writing', icon: '\u{1F4DA}', description: '\u6D77\u5916\u7528\u6237\u6700\u591A\u7684\u56FD\u4EA7AI\uFF0C\u591A\u6A21\u6001\u80FD\u529B\u5F3A', rating: 4.2, featured: false, url: 'https://hailuoai.com' },
    { id: 'stepfun', name: '\u9636\u8DC3\u661F\u8FB0', category: 'ai-writing', icon: '\u{2B50}', description: '\u6B65\u6B65\u9AD8\u51FA\u54C1\uFF0C\u591A\u6A21\u6001\u5927\u6A21\u578B', rating: 4.1, featured: false, url: 'https://platform.stepfun.com' },
    { id: 'sora', name: 'Sora', category: 'ai-video', icon: '\u{1F31F}', description: 'OpenAI\u89C6\u9891\u751F\u6210\uFF0C\u8D28\u91CF\u60CA\u8273\u4E1A\u754C\u6807\u6746', rating: 4.7, featured: true, url: 'https://sora.com' },
    { id: 'veo', name: 'Veo', category: 'ai-video', icon: '\u{1F3A5}', description: 'Google DeepMind\u89C6\u9891\u751F\u6210\uFF0C\u753B\u8D28\u6781\u4F73', rating: 4.5, featured: false, url: 'https://deepmind.google/technologies/veo' },
    { id: 'pollo', name: 'Pollo AI', category: 'ai-video', icon: '\u{1F3AC}', description: '\u56FD\u4EA7\u89C6\u9891\u751F\u6210\u65B0\u79C0\uFF0C\u4E00\u952E\u6587\u751F\u89C6\u9891', rating: 4.0, featured: false, url: 'https://pollo.ai' },
    { id: '360ai', name: '360\u667A\u8111', category: 'ai-writing', icon: '\u{1F6E1}', description: '360\u51FA\u54C1\uFF0C\u5168\u7F51\u641C\u7D22+AI\u804A\u5929\u878D\u5408', rating: 4.1, featured: false, url: 'https://ai.360.com' }
  ];

  const categories = [
    { id: 'ai-writing', name: 'AI写作', icon: '\u{270D}', desc: '文案、代码、翻译', count: 0 },
    { id: 'ai-drawing', name: 'AI绘画', icon: '\u{1F3A8}', desc: '图像生成与设计', count: 0 },
    { id: 'ai-video', name: 'AI视频', icon: '\u{1F3AC}', desc: '视频生成与编辑', count: 0 },
    { id: 'ai-audio', name: 'AI音频', icon: '\u{1F3B5}', desc: '音乐与语音合成', count: 0 },
    { id: 'ai-coding', name: 'AI编程', icon: '\u{1F4BB}', desc: '代码生成与辅助', count: 0 },
    { id: 'ai-office', name: 'AI办公', icon: '\u{1F4BC}', desc: '文档、表格、PPT', count: 0 },
    { id: 'ai-design', name: 'AI设计', icon: '\u{1F58C}', desc: 'UI/UX与视觉设计', count: 0 },
    { id: 'ai-search', name: 'AI搜索', icon: '\u{1F50D}', desc: '智能搜索与问答', count: 0 },
    { id: 'ai-marketing', name: 'AI营销', icon: '\u{1F4E3}', desc: '数字人与内容营销', count: 0 }
  ];

  const articles = [
    { slug: 'chatgpt-guide', title: 'ChatGPT完全入门指南：从注册到精通', excerpt: '手把手教你注册和使用ChatGPT，包含10个实用技巧...', date: '2026-07-25', category: 'AI写作' },
    { slug: 'midjourney-prompts', title: 'Midjourney提示词大全：100个高质量prompt', excerpt: '整理100个实测好用的Midjourney提示词，涵盖各种风格...', date: '2026-07-22', category: 'AI绘画' },
    { slug: 'free-ai-tools', title: '免费AI工具大盘点：不花一分钱也能用AI', excerpt: '10款完全免费的AI工具推荐，涵盖写作、绘画、视频...', date: '2026-07-20', category: '综合' },
    { slug: 'ai-video-compare', title: 'AI视频生成哪家强？Runway vs Pika vs 可灵实测对比', excerpt: '实测对比主流AI视频生成工具，告诉你哪个更适合你...', date: '2026-07-18', category: 'AI视频' },
    { slug: 'ai-write-guide', title: '用AI写公众号爆文：实操全流程拆解', excerpt: '从选题到发布，完整AI辅助写作流程，提高10倍效率...', date: '2026-07-15', category: 'AI写作' },
    { slug: 'notion-ai-review', title: 'Notion AI深度测评：值不值得每月多花70元？', excerpt: '详细体验Notion AI的所有功能，告诉你是否值得付费...', date: '2026-07-12', category: 'AI写作' },
    { slug: 'ai-coding-tools', title: '2026年AI编程工具终极对比：Cursor vs Copilot vs Windsurf', excerpt: '三款顶级AI编程助手横向测评，程序员选工具必看...', date: '2026-07-10', category: 'AI编程' },
    { slug: 'suno-udio-compare', title: 'AI音乐生成大对决：Suno vs Udio谁更强', excerpt: '实测两款AI音乐神器，从旋律到歌词全面对比...', date: '2026-07-08', category: 'AI音频' },
    { slug: 'ai-presentation', title: 'AI做PPT最强攻略：Gamma、Beautiful.ai、WPS AI横评', excerpt: '三款AI PPT工具实测，帮你找到最高效的演示制作方式...', date: '2026-07-05', category: 'AI办公' },
    { slug: 'heygen-guide', title: 'HeyGen数字人完全指南：零基础做出专业视频', excerpt: '从创建数字人到生成视频，完整操作流程和高级技巧...', date: '2026-07-02', category: 'AI营销' },
    { slug: 'perplexity-guide', title: 'Perplexity深度使用指南：比Google好用10倍的AI搜索', excerpt: 'AI搜索引擎的正确打开方式，学术研究和工作利器...', date: '2026-06-28', category: 'AI搜索' },
    { slug: 'cursor-tutorial', title: 'Cursor零基础教程：用AI写代码的正确姿势', excerpt: '从安装到精通，AI编程神器Cursor的完整上手路线图...', date: '2026-06-25', category: 'AI编程' },
    { slug: 'deepseek-guide', title: 'DeepSeek完全指南：国产最强开源大模型上手体验', excerpt: 'DeepSeek注册、使用技巧和最强功能解析，免费又好用...', date: '2026-07-27', category: 'AI写作' },
    { slug: 'kling-video-tips', title: '可灵AI视频进阶技巧：从入门到出爆款', excerpt: '可灵AI高阶提示词技巧，教你生成电影级AI视频...', date: '2026-07-26', category: 'AI视频' },
    { slug: 'ai-design-tools', title: '2026年AI设计工具推荐：平面/UI/电商全覆盖', excerpt: '盘点最好的AI设计工具，Remove.bg、Canva、Photoroom等实测...', date: '2026-07-24', category: 'AI设计' },
    { slug: 'ai-office-revolution', title: 'AI如何改变办公方式：6款效率神器实测', excerpt: 'WPS AI、Notion AI、Gamma等AI办公工具深度体验报告...', date: '2026-07-21', category: 'AI办公' },
    { slug: 'stable-diffusion-guide', title: 'Stable Diffusion新手入门：从安装到出图全流程', excerpt: 'SD本地部署教程、模型推荐和提示词技巧，免费AI绘画利器...', date: '2026-07-19', category: 'AI绘画' },
    { slug: 'ai-earn-money', title: '2026年用AI赚钱的10种方法：副业实操指南', excerpt: '从AI绘画接单到自媒体运营，10种已验证的AI变现方式...', date: '2026-07-17', category: '综合' },
    { slug: 'elevenlabs-tutorial', title: 'ElevenLabs语音克隆教程：3分钟复刻你的声音', excerpt: 'AI语音合成神器ElevenLabs完整使用指南，附中文配音技巧...', date: '2026-07-14', category: 'AI音频' },
    { slug: 'ai-seo-tools', title: 'AI+SEO：用AI工具做内容排名的完整工作流', excerpt: '从关键词研究到AI写文章再到排名监控，全流程拆解...', date: '2026-07-11', category: '综合' },
    { slug: 'remove-bg-guide', title: 'Remove.bg vs Photoroom：电商抠图工具对比', excerpt: '两款AI抠图神器横向测评，电商卖家必看的选型指南...', date: '2026-07-09', category: 'AI设计' }
  ];

  categories.forEach(cat => {
    cat.count = tools.filter(t => t.category === cat.id).length;
  });

  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '\u2605';
    if (half) stars += '\u2606';
    return '<span class="text-yellow-400">' + stars + '</span><span class="text-gray-300 dark:text-gray-500 ml-1 text-sm">' + rating + '</span>';
  }

  const categoryGrid = document.getElementById('categoryGrid');
  categories.forEach(cat => {
    categoryGrid.innerHTML +=
      '<a href="#featured" class="card-hover bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-sm cursor-pointer" onclick="filterByCategory(\'' + cat.id + '\')">' +
        '<div class="text-3xl mb-2">' + cat.icon + '</div>' +
        '<h3 class="font-semibold text-gray-900 dark:text-white">' + cat.name + '</h3>' +
        '<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">' + cat.count + ' \u6B3E\u5DE5\u5177</p>' +
      '</a>';
  });

  const featuredGrid = document.getElementById('featuredGrid');
  let currentTools = tools.slice();
  function renderFeaturedGrid(list) {
    const favs = JSON.parse(localStorage.getItem('aitool_favs') || '[]');
    featuredGrid.innerHTML = list.map(tool =>
      '<div class="card-hover bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm tool-card" data-id="' + tool.id + '" data-category="' + tool.category + '">' +
        '<div class="flex items-start justify-between mb-3">' +
          '<div class="text-3xl">' + tool.icon + '</div>' +
          '<div class="flex items-center gap-2">' + renderStars(tool.rating) +
            '<button onclick="event.stopPropagation(); toggleFav(\'' + tool.id + '\')" class="fav-btn text-lg leading-none" style="opacity:' + (favs.includes(tool.id) ? '1' : '0.3') + ';" title="' + (favs.includes(tool.id) ? '\u53D6\u6D88\u6536\u85CF' : '\u52A0\u5165\u6536\u85CF') + '">\u2B50</button>' +
          '</div>' +
        '</div>' +
        '<h3 class="font-semibold text-lg mb-1 text-gray-900 dark:text-white">' + tool.name + '</h3>' +
        '<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">' + tool.description + '</p>' +
        '<a href="pages/tool.html?id=' + tool.id + '" onclick="trackRecent(\'' + tool.id + '\')" class="text-purple-600 dark:text-purple-400 text-sm font-medium hover:text-purple-800 dark:hover:text-purple-300">\u67E5\u770B\u8BE6\u60C5 \u2192</a>' +
      '</div>'
    ).join('');
  }
  renderFeaturedGrid(currentTools);

  const articlesGrid = document.getElementById('articlesGrid');
  articles.forEach(article => {
    articlesGrid.innerHTML +=
      '<div class="card-hover bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">' +
        '<div class="p-6">' +
          '<span class="text-xs text-purple-600 dark:text-purple-400 font-medium bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">' + article.category + '</span>' +
          '<h3 class="font-semibold mt-3 mb-2 leading-snug text-gray-900 dark:text-white">' + article.title + '</h3>' +
          '<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">' + article.excerpt + '</p>' +
          '<div class="flex items-center justify-between">' +
            '<span class="text-xs text-gray-400 dark:text-gray-500">' + article.date + '</span>' +
            '<a href="pages/article.html?slug=' + article.slug + '" class="text-purple-600 dark:text-purple-400 text-sm font-medium hover:text-purple-800 dark:hover:text-purple-300">\u9605\u8BFB\u5168\u6587 \u2192</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  });

  window.filterByCategory = function(categoryId) {
    document.querySelectorAll('.tool-card').forEach(card => {
      if (card.dataset.category === categoryId) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
  };

  window.handleSearch = function() {
    const q = (document.getElementById('searchInput')||{}).value||'';
    const resultsDiv = document.getElementById('searchResults');
    if (!q || q.length < 1) { resultsDiv.classList.add('hidden'); return; }
    const matched = tools.filter(t =>
      t.name.toLowerCase().includes(q.toLowerCase()) ||
      t.description.includes(q) ||
      (categories.find(c=>c.id===t.category)||{}).name.includes(q)
    );
    if (matched.length === 0) {
      resultsDiv.classList.remove('hidden');
      resultsDiv.innerHTML = '<div class="bg-white dark:bg-gray-800 rounded-xl p-4 text-gray-400 dark:text-gray-500 text-center text-sm">\u672A\u627E\u5230\u5339\u914D\u5DE5\u5177\uFF0C\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5</div>';
      return;
    }
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-2 max-h-80 overflow-y-auto">' +
      matched.map(t =>
        '<a href="pages/tool.html?id='+t.id+'" onclick="trackRecent(\''+t.id+'\')" class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">' +
          '<span class="text-2xl">'+t.icon+'</span>' +
          '<div class="flex-1"><div class="font-medium text-gray-900 dark:text-white">'+t.name+'</div><div class="text-xs text-gray-500 dark:text-gray-400">'+t.description+'</div></div>' +
          '<span class="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">'+(categories.find(c=>c.id===t.category)||{}).name+'</span>' +
          renderStars(t.rating) +
        '</a>'
      ).join('') + '</div>';
  };



  // === DARK MODE ===
  window.toggleDark = function() {
    const body = document.getElementById('bodyEl');
    const btn = document.getElementById('darkToggle');
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('aitool_dark', isDark ? '1' : '0');
    if (btn) btn.textContent = isDark ? '\u2600\uFE0F' : '\u1F319';
  };
  (function() {
    const saved = localStorage.getItem('aitool_dark');
    const body = document.getElementById('bodyEl');
    const btn = document.getElementById('darkToggle');
    if (saved === '1' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      body.classList.add('dark');
      if (btn) btn.textContent = '\u2600\uFE0F';
    }
  })();

  // === SORT ===
  window.sortTools = function() {
    const mode = document.getElementById('sortSelect').value;
    let list = tools.slice();
    if (mode === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (mode === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    if (mode === 'category') list.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name, 'zh'));
    currentTools = list;
    renderFeaturedGrid(list);
    renderFavBar();
  };

  // === VIEW TOGGLE ===
  window.toggleView = function() {
    const grid = document.getElementById('featuredGrid');
    const btn = document.getElementById('viewToggle');
    grid.classList.toggle('list-view');
    const isList = grid.classList.contains('list-view');
    btn.textContent = isList ? '\u25A6' : '\u1F4CB';
    btn.title = isList ? '\u7F51\u683C\u89C6\u56FE' : '\u5217\u8868\u89C6\u56FE';
    if (isList) {
      grid.querySelectorAll('.tool-card').forEach(card => {
        card.classList.add('flex', 'items-center', 'gap-4');
        card.querySelector('h3').classList.add('mb-0');
        card.querySelector('p').classList.add('mb-0', 'flex-1');
      });
    } else {
      grid.querySelectorAll('.tool-card').forEach(card => {
        card.classList.remove('flex', 'items-center', 'gap-4');
        card.querySelector('h3').classList.remove('mb-0');
        card.querySelector('p').classList.remove('mb-0', 'flex-1');
      });
    }
  };

  // === FAVORITES ===
  window.toggleFav = function(toolId) {
    let favs = JSON.parse(localStorage.getItem('aitool_favs') || '[]');
    const idx = favs.indexOf(toolId);
    const isFav = idx > -1;
    if (isFav) favs.splice(idx, 1); else favs.push(toolId);
    localStorage.setItem('aitool_favs', JSON.stringify(favs));
    document.querySelectorAll('.tool-card').forEach(card => {
      if (card.dataset.id !== toolId) return;
      const btn = card.querySelector('.fav-btn');
      if (!btn) return;
      btn.style.opacity = isFav ? '0.3' : '1';
      btn.title = isFav ? '\u52A0\u5165\u6536\u85CF' : '\u53D6\u6D88\u6536\u85CF';
    });
    renderFavBar();
  };
  window.clearFavs = function() {
    localStorage.removeItem('aitool_favs');
    document.querySelectorAll('.fav-btn').forEach(b => { b.style.opacity = '0.3'; b.title = '\u52A0\u5165\u6536\u85CF'; });
    renderFavBar();
  };
  window.renderFavBar = function() {
    const favs = JSON.parse(localStorage.getItem('aitool_favs') || '[]');
    const bar = document.getElementById('favBar');
    const count = document.getElementById('favCount');
    const list = document.getElementById('favTools');
    if (!bar || !count || !list) return;
    count.textContent = favs.length;
    if (favs.length === 0) { bar.classList.add('collapsed'); bar.classList.remove('expanded'); return; }
    bar.classList.remove('collapsed');
    bar.classList.add('expanded');
    list.innerHTML = favs.map(id => {
      const t = tools.find(x => x.id === id);
      if (!t) return '';
      return '<a href="pages/tool.html?id='+id+'" onclick="trackRecent(\''+id+'\')" class="flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition whitespace-nowrap">'+t.icon+' '+t.name+'</a>';
    }).join('');
  };
  renderFavBar();

  // === RECENT VIEWED ===
  window.trackRecent = function(toolId) {
    let recent = JSON.parse(localStorage.getItem('aitool_recent') || '[]');
    recent = recent.filter(id => id !== toolId);
    recent.unshift(toolId);
    recent = recent.slice(0, 10);
    localStorage.setItem('aitool_recent', JSON.stringify(recent));
  };
  window.renderRecentBar = function() {
    const recent = JSON.parse(localStorage.getItem('aitool_recent') || '[]');
    const bar = document.getElementById('recentBar');
    const list = document.getElementById('recentTools');
    if (!bar || !list) return;
    if (recent.length === 0) { bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    list.innerHTML = recent.map(id => {
      const t = tools.find(x => x.id === id);
      if (!t) return '';
      return '<a href="pages/tool.html?id='+id+'" onclick="trackRecent(\''+id+'\')" class="flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition whitespace-nowrap">'+t.icon+' '+t.name+'</a>';
    }).join('');
  };
  renderRecentBar();

  // === BACK TO TOP ===
  window.addEventListener('scroll', function() {
    const btn = document.getElementById('backToTop');
    if (btn) btn.classList.toggle('show', window.scrollY > 500);
  });

});
