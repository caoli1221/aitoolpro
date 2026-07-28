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
    { id: 'synthesia', name: 'Synthesia', category: 'ai-marketing', icon: '\u{1F3AC}', description: '企业级AI数字人，140+语言', rating: 4.4, featured: false, url: 'https://www.synthesia.io' }
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
    { slug: 'cursor-tutorial', title: 'Cursor零基础教程：用AI写代码的正确姿势', excerpt: '从安装到精通，AI编程神器Cursor的完整上手路线图...', date: '2026-06-25', category: 'AI编程' }
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
    return '<span class="text-yellow-400">' + stars + '</span><span class="text-gray-300 ml-1 text-sm">' + rating + '</span>';
  }

  const categoryGrid = document.getElementById('categoryGrid');
  categories.forEach(cat => {
    categoryGrid.innerHTML +=
      '<a href="#featured" class="card-hover bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm cursor-pointer" onclick="filterByCategory(\'' + cat.id + '\')">' +
        '<div class="text-3xl mb-2">' + cat.icon + '</div>' +
        '<h3 class="font-semibold text-gray-900">' + cat.name + '</h3>' +
        '<p class="text-sm text-gray-500 mt-1">' + cat.count + ' \u6B3E\u5DE5\u5177</p>' +
      '</a>';
  });

  const featuredGrid = document.getElementById('featuredGrid');
  tools.forEach(tool => {
    featuredGrid.innerHTML +=
      '<div class="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm tool-card" data-category="' + tool.category + '">' +
        '<div class="flex items-start justify-between mb-3">' +
          '<div class="text-3xl">' + tool.icon + '</div>' +
          '<div>' + renderStars(tool.rating) + '</div>' +
        '</div>' +
        '<h3 class="font-semibold text-lg mb-1">' + tool.name + '</h3>' +
        '<p class="text-sm text-gray-500 mb-4">' + tool.description + '</p>' +
        '<a href="pages/tool.html?id=' + tool.id + '" class="text-purple-600 text-sm font-medium hover:text-purple-800">\u67E5\u770B\u8BE6\u60C5 \u2192</a>' +
      '</div>';
  });

  const articlesGrid = document.getElementById('articlesGrid');
  articles.forEach(article => {
    articlesGrid.innerHTML +=
      '<div class="card-hover bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">' +
        '<div class="p-6">' +
          '<span class="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">' + article.category + '</span>' +
          '<h3 class="font-semibold mt-3 mb-2 leading-snug">' + article.title + '</h3>' +
          '<p class="text-sm text-gray-500 mb-4">' + article.excerpt + '</p>' +
          '<div class="flex items-center justify-between">' +
            '<span class="text-xs text-gray-400">' + article.date + '</span>' +
            '<a href="pages/article.html?slug=' + article.slug + '" class="text-purple-600 text-sm font-medium hover:text-purple-800">\u9605\u8BFB\u5168\u6587 \u2192</a>' +
          '</div>' +
        '</div>' +
      '</div>';
  });
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
