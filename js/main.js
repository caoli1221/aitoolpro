document.addEventListener('DOMContentLoaded', async () => {
  const tools = [
    { id: 'chatgpt', name: 'ChatGPT', category: 'ai-writing', icon: '💬', description: '最强对话AI，写作编程翻译全能', rating: 4.9, featured: true, url: 'https://chat.openai.com' },
    { id: 'midjourney', name: 'Midjourney', category: 'ai-drawing', icon: '🎨', description: '顶级AI绘画工具，效果惊艳', rating: 4.8, featured: true, url: 'https://www.midjourney.com' },
    { id: 'claude', name: 'Claude', category: 'ai-writing', icon: '🤖', description: '长文本处理之王，200K上下文', rating: 4.7, featured: true, url: 'https://claude.ai' },
    { id: 'runway', name: 'Runway', category: 'ai-video', icon: '🎬', description: 'AI视频生成与编辑平台', rating: 4.5, featured: false, url: 'https://runwayml.com' },
    { id: 'notion-ai', name: 'Notion AI', category: 'ai-writing', icon: '📝', description: 'Notion内置AI写作助手', rating: 4.4, featured: false, url: 'https://www.notion.so/product/ai' },
    { id: 'stable-diffusion', name: 'Stable Diffusion', category: 'ai-drawing', icon: '🖼️', description: '开源AI绘画，免费无限制', rating: 4.6, featured: false, url: 'https://stability.ai' },
    { id: 'gemini', name: 'Gemini', category: 'ai-writing', icon: '🌟', description: 'Google多模态AI，理解文字/图片/视频', rating: 4.5, featured: false, url: 'https://gemini.google.com' },
    { id: 'canva-ai', name: 'Canva AI', category: 'ai-drawing', icon: '✏️', description: '一站式AI设计平台，模板超多', rating: 4.3, featured: false, url: 'https://www.canva.com' },
    { id: 'pika', name: 'Pika', category: 'ai-video', icon: '🎥', description: '轻量级AI视频生成工具', rating: 4.2, featured: false, url: 'https://pika.art' },
    { id: 'suno', name: 'Suno', category: 'ai-audio', icon: '🎵', description: 'AI音乐生成，一键创作歌曲', rating: 4.6, featured: false, url: 'https://suno.ai' },
    { id: 'elevenlabs', name: 'ElevenLabs', category: 'ai-audio', icon: '🔊', description: '最逼真的AI语音合成', rating: 4.4, featured: false, url: 'https://elevenlabs.io' },
    { id: 'perplexity', name: 'Perplexity', category: 'ai-writing', icon: '🔍', description: 'AI搜索引擎，实时联网回答', rating: 4.5, featured: false, url: 'https://www.perplexity.ai' }
  ];

  const categories = [
    { id: 'ai-writing', name: 'AI写作', icon: '✍️', desc: '文案、代码、翻译', count: 0 },
    { id: 'ai-drawing', name: 'AI绘画', icon: '🎨', desc: '图像生成与设计', count: 0 },
    { id: 'ai-video', name: 'AI视频', icon: '🎬', desc: '视频生成与编辑', count: 0 },
    { id: 'ai-audio', name: 'AI音频', icon: '🎵', desc: '音乐与语音合成', count: 0 }
  ];

  const articles = [
    { title: 'ChatGPT完全入门指南：从注册到精通', excerpt: '手把手教你注册和使用ChatGPT，包含10个实用技巧...', date: '2026-07-25', category: 'AI写作', image: '' },
    { title: 'Midjourney提示词大全：100个高质量prompt', excerpt: '整理100个实测好用的Midjourney提示词，涵盖各种风格...', date: '2026-07-22', category: 'AI绘画', image: '' },
    { title: '免费AI工具大盘点：不花一分钱也能用AI', excerpt: '10款完全免费的AI工具推荐，涵盖写作、绘画、视频...', date: '2026-07-20', category: '综合', image: '' },
    { title: 'AI视频生成哪家强？Runway vs Pika实测对比', excerpt: '实测对比主流AI视频生成工具，告诉你哪个更适合你...', date: '2026-07-18', category: 'AI视频', image: '' },
    { title: '用AI写公众号爆文：实操全流程拆解', excerpt: '从选题到发布，完整AI辅助写作流程，提高10倍效率...', date: '2026-07-15', category: 'AI写作', image: '' },
    { title: 'Notion AI深度测评：值不值得每月多花70元？', excerpt: '详细体验Notion AI的所有功能，告诉你是否值得付费...', date: '2026-07-12', category: 'AI写作', image: '' }
  ];

  categories.forEach(cat => {
    cat.count = tools.filter(t => t.category === cat.id).length;
  });

  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '☆';
    return `<span class="text-yellow-400">${stars}</span><span class="text-gray-300 ml-1 text-sm">${rating}</span>`;
  }

  const categoryGrid = document.getElementById('categoryGrid');
  categories.forEach(cat => {
    categoryGrid.innerHTML += `
      <a href="#featured" class="card-hover bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm cursor-pointer" onclick="filterByCategory('${cat.id}')">
        <div class="text-3xl mb-2">${cat.icon}</div>
        <h3 class="font-semibold text-gray-900">${cat.name}</h3>
        <p class="text-sm text-gray-500 mt-1">${cat.count} 款工具</p>
      </a>
    `;
  });

  const featuredGrid = document.getElementById('featuredGrid');
  tools.forEach(tool => {
    featuredGrid.innerHTML += `
      <div class="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm tool-card" data-category="${tool.category}">
        <div class="flex items-start justify-between mb-3">
          <div class="text-3xl">${tool.icon}</div>
          <div>${renderStars(tool.rating)}</div>
        </div>
        <h3 class="font-semibold text-lg mb-1">${tool.name}</h3>
        <p class="text-sm text-gray-500 mb-4">${tool.description}</p>
        <a href="pages/tool.html?id=${tool.id}" class="text-purple-600 text-sm font-medium hover:text-purple-800">
          查看详情 →
        </a>
      </div>
    `;
  });

  const articlesGrid = document.getElementById('articlesGrid');
  articles.forEach(article => {
    articlesGrid.innerHTML += `
      <div class="card-hover bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-6">
          <span class="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">${article.category}</span>
          <h3 class="font-semibold mt-3 mb-2 leading-snug">${article.title}</h3>
          <p class="text-sm text-gray-500 mb-4">${article.excerpt}</p>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-400">${article.date}</span>
            <a href="pages/article.html" class="text-purple-600 text-sm font-medium hover:text-purple-800">阅读全文 →</a>
          </div>
        </div>
      </div>
    `;
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
