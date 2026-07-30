/**
 * AI创作工具导航 - 广告管理系统
 * 支持占位模式（AdSense未审批）和正式模式（AdSense已审批）
 * 
 * 切换方式：将 AD_CONFIG.mode 改为 "live"，填入你的 AdSense 发布商ID
 */

const AD_CONFIG = {
  mode: 'placeholder',        // 'placeholder' | 'live'
  clientId: '',               // AdSense 发布商ID，如 'ca-pub-xxxxxxxxxxxxxxxx'
  
  // 广告位定���
  slots: {
    // === 首页广告位 ===
    'ad-home-top': {
      name: '首页顶部横幅',
      size: '970x90',
      responsive: true,
      formats: [[970, 90], [728, 90], [320, 50]],
      desc: '顶部横幅广告 · 高曝光'
    },
    'ad-home-mid-1': {
      name: '首页中部一',
      size: '728x90',
      responsive: true,
      formats: [[728, 90], [468, 60], [320, 50]],
      desc: '内容区广告 · 高点击'
    },
    'ad-home-mid-2': {
      name: '首页中部二',
      size: '728x90',
      responsive: true,
      formats: [[728, 90], [468, 60], [320, 50]],
      desc: '内容区广告 · 高点击'
    },
    'ad-home-bottom': {
      name: '首页底部',
      size: '728x90',
      responsive: true,
      formats: [[728, 90], [468, 60], [320, 50]],
      desc: '底部广告 · 全页覆盖'
    },

    // === 文章页广告位 ===
    'ad-article-top': {
      name: '文章顶部',
      size: '728x90',
      responsive: true,
      formats: [[728, 90], [468, 60], [320, 50]],
      desc: '文章内广告 · 高转化'
    },
    'ad-article-bottom': {
      name: '文章底部',
      size: '728x90',
      responsive: true,
      formats: [[728, 90], [468, 60], [320, 50]],
      desc: '文章底部 · 相关推荐'
    },

    // === 移动端浮层广告 ===
    'ad-mobile-sticky': {
      name: '移动端浮层',
      size: '320x50',
      responsive: false,
      formats: [[320, 50]],
      desc: '移动端固定底部'
    }
  }
};

(function() {
  'use strict';

  // 渲染占位广告
  function renderPlaceholder(container, slotId) {
    var slot = AD_CONFIG.slots[slotId];
    if (!slot) return;

    var isMobile = window.innerWidth < 768;
    var displaySize = isMobile ? '320x50' : slot.size;

    container.className = 'ad-container';
    container.setAttribute('data-ad-status', 'placeholder');
    container.style.cssText = [
      'margin: 24px auto',
      'max-width: ' + (isMobile ? '320px' : (slot.size === '970x90' ? '970px' : '728px')),
      'min-height: ' + (isMobile ? '50px' : '90px'),
      'background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      'border: 2px dashed #dee2e6',
      'border-radius: 8px',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'cursor: default',
      'overflow: hidden',
      'position: relative'
    ].join(';');

    var inner = document.createElement('div');
    inner.style.cssText = [
      'text-align: center',
      'padding: 12px 20px'
    ].join(';');

    var label = document.createElement('div');
    label.style.cssText = [
      'font-size: 13px',
      'color: #adb5bd',
      'letter-spacing: 1px',
      'margin-bottom: 4px',
      'font-weight: 500'
    ].join(';');
    label.textContent = '广告位';

    var sizeInfo = document.createElement('div');
    sizeInfo.style.cssText = [
      'font-size: 11px',
      'color: #ced4da'
    ].join(';');
    sizeInfo.textContent = displaySize + ' · ' + slot.desc;

    inner.appendChild(label);
    inner.appendChild(sizeInfo);
    container.appendChild(inner);
  }

  // 加载真实 AdSense 广告
  function loadAdSense(container, slotId) {
    if (!AD_CONFIG.clientId) {
      renderPlaceholder(container, slotId);
      return;
    }

    var slot = AD_CONFIG.slots[slotId];
    if (!slot) return;

    // 创建 ins 标签
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', AD_CONFIG.clientId);
    ins.setAttribute('data-ad-slot', slot.adSlotId || slotId);
    ins.setAttribute('data-ad-format', slot.responsive ? 'auto' : '');
    ins.setAttribute('data-full-width-responsive', slot.responsive ? 'true' : 'false');
    container.innerHTML = '';
    container.appendChild(ins);
    
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense load failed for:', slotId, e);
    }
  }

  // 初始化广告
  function initAds() {
    var containers = document.querySelectorAll('[data-ad-slot]');
    
    containers.forEach(function(container) {
      var slotId = container.getAttribute('data-ad-slot');
      
      if (AD_CONFIG.mode === 'live' && AD_CONFIG.clientId) {
        loadAdSense(container, slotId);
      } else {
        renderPlaceholder(container, slotId);
      }
    });
  }

  // 窗口大小变化时重新渲染占位广告
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (AD_CONFIG.mode === 'placeholder') {
        var containers = document.querySelectorAll('[data-ad-slot]');
        containers.forEach(function(container) {
          var slotId = container.getAttribute('data-ad-slot');
          renderPlaceholder(container, slotId);
        });
      }
    }, 250);
  });

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAds);
  } else {
    initAds();
  }
})();
