// ================================================
// 甜甜商城 🍬 - SweetShop v2.0 主程序
// SPA Router + 所有交互逻辑
// ================================================

/* ===================== STATE ===================== */
const state = {
  user: null,
  cart: [],
  fav: [],
  currentPage: 'home',
  searchCat: '',
  searchQuery: '',
  listSort: 'default',
  listCat: '',
  listSub: '',
  selectedPayment: 'alipay',
  selectedAddr: 0,
};

/* ===================== DOM REFS ===================== */
const $ = id => document.getElementById(id);
const app = $('app');
const toast = $('toast');
let toastTimer = null;

/* ===================== TOAST ===================== */
function showToast(msg, emoji = '') {
  toast.textContent = (emoji ? emoji + ' ' : '') + msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ===================== STORAGE ===================== */
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem('sweetshop_state'));
    if (s) {
      if (s.cart) state.cart = s.cart;
      if (s.fav) state.fav = s.fav;
      if (s.user) state.user = s.user;
    }
  } catch(e) {}
}

function saveState() {
  localStorage.setItem('sweetshop_state', JSON.stringify({
    cart: state.cart,
    fav: state.fav,
    user: state.user,
  }));
}

loadState();

/* ===================== CART ===================== */
function cartAdd(id, qty = 1, showToastMsg = true) {
  const exist = state.cart.find(i => i.id === id);
  if (exist) {
    exist.qty += qty;
  } else {
    state.cart.push({ id, qty });
  }
  updateCartBadge();
  saveState();
  if (showToastMsg) {
    const p = getById(id);
    showToast(`${p.emoji} ${p.name} 已加入购物车`, '✅');
  }
}

function cartRemove(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartBadge();
  saveState();
}

function cartUpdateQty(id, qty) {
  if (qty <= 0) { cartRemove(id); return; }
  const item = state.cart.find(i => i.id === id);
  if (item) { item.qty = qty; updateCartBadge(); saveState(); }
}

function cartTotal() {
  return state.cart.reduce((sum, i) => {
    const p = getById(i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function cartCount() {
  return state.cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartBadge() {
  const c = cartCount();
  document.querySelectorAll('.header-cart-count, .cart-mini-count').forEach(el => {
    el.textContent = c > 99 ? '99+' : c;
  });
}

/* ===================== AUTH ===================== */
function isLoggedIn() {
  return state.user !== null;
}

function requireLogin(cb) {
  if (isLoggedIn()) { cb && cb(); return true; }
  openLogin();
  return false;
}

function openLogin() { $('loginModal').classList.add('open'); }
function closeLogin() { $('loginModal').classList.remove('open'); }
function openRegister() { $('registerModal').classList.add('open'); }
function closeRegister() { $('registerModal').classList.remove('open'); }

/* ===================== FAVORITES ===================== */
function toggleFav(id) {
  const idx = state.fav.indexOf(id);
  if (idx > -1) { state.fav.splice(idx, 1); showToast('已取消收藏', '💔'); }
  else { state.fav.push(id); showToast('已收藏，可在个人中心查看', '❤️'); }
  saveState();
  renderPage(state.currentPage);
}

function isFav(id) { return state.fav.includes(id); }

/* ===================== ROUTER ===================== */
function navigate(page) {
  state.currentPage = page;
  if (page === 'home') {
    document.querySelector('.nav-link.active')?.classList.remove('active');
    document.querySelector('.nav-link[data-page="home"]')?.classList.add('active');
  }
  renderPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPage(page) {
  if (page === 'home') return renderHome();
  if (page.startsWith('list')) return renderList(page);
  if (page.startsWith('detail')) return renderDetail(page);
  if (page === 'cart') return renderCart();
  if (page === 'checkout') return renderCheckout();
  if (page === 'orders') return renderOrders();
  if (page === 'profile') return renderProfile();
  if (page === 'fav') return renderFav();
  if (page.startsWith('search')) return renderSearch(page);
  renderHome();
}

// ==================== HOMEPAGE ====================
function renderHome() {
  const { banners, flashSale } = SHOP_DATA;
  const bItems = banners.map((b,i) => `<div class="banner-slide ${i===0?'active':''}" data-idx="${i}" style="background:${b.color}"><span class="banner-slide-emoji">${b.img}</span><div class="banner-slide-title">${b.title}</div><div class="banner-slide-sub">${b.subtitle}</div></div>`).join('');

  const saleItems = flashSale.items.map(p => {
    const stock = getById(p.id)?.stock || 100;
    const pct = Math.max(5, Math.round((1 - stock / 1000) * 100));
    return `<div class="flash-item" onclick="navigate('detail&id=${p.id}')"><span class="emoji">${p.emoji}</span><div class="name">${p.name}</div><div><span class="price">${formatPrice(p.price)}</span><span class="original">${formatPrice(p.original)}</span></div><div class="flash-progress"><div class="flash-progress-bar" style="width:${pct}%"></div></div></div>`;
  }).join('');

  const featured = SHOP_DATA.products.slice(0, 15);

  const html = `
    <div class="home-banner">
      <div class="banner-main" id="bannerMain">
        ${bItems}
        <div class="banner-dots" id="bannerDots">${banners.map((_,i) => `<span class="banner-dot ${i===0?'active':''}" data-idx="${i}"></span>`).join('')}</div>
        <div class="banner-nav banner-prev" id="bannerPrev">‹</div>
        <div class="banner-nav banner-next" id="bannerNext">›</div>
      </div>
      <div class="banner-side">
        <div class="banner-side-item" style="background:linear-gradient(135deg,#7c3aed,#a78bfa)" onclick="navigate('list&cat=数码')"><span class="emoji">📱</span><span class="text">数码尖货</span><span class="sub">新品首发</span></div>
        <div class="banner-side-item" style="background:linear-gradient(135deg,#ff6b9d,#fb7185)" onclick="navigate('list&cat=服饰')"><span class="emoji">👗</span><span class="text">时尚服饰</span><span class="sub">潮流穿搭</span></div>
        <div class="banner-side-item" style="background:linear-gradient(135deg,#10b981,#34d399)" onclick="navigate('list&cat=家居')"><span class="emoji">🏠</span><span class="text">品质家居</span><span class="sub">生活美学</span></div>
      </div>
    </div>
    <div class="flash-sale">
      <div class="flash-header">
        <div class="flash-title"><span class="icon">⏰</span><h2>限时秒杀</h2><div class="flash-countdown">距结束 <div class="flash-timer" id="flashTimer"><span id="fh">02</span>:<span id="fm">00</span>:<span id="fs">00</span></div></div></div>
        <a href="javascript:;" class="flash-more" onclick="navigate('list&sort=hot')">查看更多 →</a>
      </div>
      <div class="flash-grid">${saleItems}</div>
    </div>
    <div class="section-header"><div class="section-title"><span class="mark"></span> 好物推荐</div><a href="javascript:;" class="section-more" onclick="navigate('list&sort=hot')">更多好物 →</a></div>
    <div class="product-grid">${featured.map(p => renderCard(p)).join('')}</div>
  `;
  app.innerHTML = html;
  initBanner();
  initFlashCountdown();
  bindCardEvents();
}

// ==================== BANNER ====================
let bannerIdx = 0, bannerTimer = null;
function initBanner() {
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.banner-dot');
  if (!slides.length) return;
  const go = (idx) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    bannerIdx = (idx + slides.length) % slides.length;
    slides[bannerIdx].classList.add('active');
    dots[bannerIdx].classList.add('active');
  };
  const next = () => go(bannerIdx + 1);
  const prev = () => go(bannerIdx - 1);
  const $ = id => document.getElementById(id);
  $('bannerNext')?.addEventListener('click', next);
  $('bannerPrev')?.addEventListener('click', prev);
  dots.forEach(d => d.addEventListener('click', () => go(parseInt(d.dataset.idx))));
  clearInterval(bannerTimer);
  bannerTimer = setInterval(next, 4000);
}

// ==================== FLASH COUNTDOWN ====================
function initFlashCountdown() {
  const update = () => {
    let diff = Math.max(0, Math.floor((SHOP_DATA.flashSale.endTime - Date.now()) / 1000));
    const h = String(Math.floor(diff / 3600)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const s = String(diff % 60).padStart(2, '0');
    ['fh','fm','fs'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = [h,m,s][i];
    });
  };
  update();
  setInterval(update, 1000);
}

// ==================== PRODUCT CARD ====================
function renderCard(p) {
  const tags = (p.tags || []).map(t => `<span class="product-card-tag ${t}">${t}</span>`).join('');
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  return `<div class="product-card" onclick="navigate('detail&id=${p.id}')">
    ${tags ? `<div class="product-card-tags">${tags}</div>` : ''}
    <div class="product-card-img">${p.emoji}</div>
    <div class="product-card-body">
      <div class="product-card-name">${p.name}</div>
      <div class="product-card-info">
        <span class="product-card-price"><span class="unit">¥</span>${p.price}</span>
        <span class="product-card-original">¥${p.original}</span>
      </div>
      <div class="product-card-extra"><span class="stars">${stars}</span><span>已售${(p.sales/10000).toFixed(1)}万</span></div>
    </div>
    <button class="product-card-btn" onclick="event.stopPropagation();cartAdd(${p.id});"><i class="fas fa-plus"></i></button>
  </div>`;
}

function bindCardEvents() {
  document.querySelectorAll('.product-card-btn').forEach(btn => {
    btn.addEventListener('click', e => e.stopPropagation());
  });
}

// ==================== PRODUCT LIST ====================
function renderList(page) {
  const params = Object.fromEntries(page.split('&').slice(1).map(s => s.split('=')));
  const cat = params.cat || '';
  const sub = params.sub || '';
  const sort = params.sort || state.listSort;

  let filtered = [...SHOP_DATA.products];
  if (cat) { filtered = filtered.filter(p => p.cat === cat); }
  if (sub) { filtered = filtered.filter(p => p.sub === sub); }

  if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'sales') filtered.sort((a,b) => b.sales - a.sales);
  else if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);

  const cats = ['数码','服饰','家居','美食','美妆'];
  const subs = ['耳机','手机','平板','手表','外设','配件','相机','上衣','下装','鞋','包','配饰','帽子','灯具','床品','厨房','香薰','装饰','拖鞋','零食','糕点','咖啡','茶','冲饮','酒','生鲜','护肤','彩妆'];

  const catOpts = cats.map(c => `<a href="javascript:;" class="${c===cat?'active':''}" onclick="navigate('list&cat=${c}')">${c}</a>`).join('');
  const subOpts = subs.map(s => `<a href="javascript:;" class="${s===sub?'active':''}" onclick="navigate('list&cat=${cat}&sub=${s}')">${s}</a>`).join('');

  const sorts = [
    { key:'default', label:'综合' },
    { key:'sales', label:'销量' },
    { key:'price-asc', label:'价格 ↑' },
    { key:'price-desc', label:'价格 ↓' },
    { key:'rating', label:'评分' },
  ];
  const sortLinks = sorts.map(s => `<a href="javascript:;" class="${s.key===sort?'active':''}" onclick="navigate('list&cat=${cat}&sub=${sub}&sort=${s.key}')">${s.label}</a>`).join('');

  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>${cat || '全部商品'}</span></div>
    <div class="list-layout">
      <div class="list-side">
        <h4><i class="fas fa-filter"></i> 分类筛选</h4>
        <div class="list-filter-group">
          <label>品类</label>
          <div class="list-filter-options">
            <a href="javascript:;" class="${!cat?'active':''}" onclick="navigate('list&sort=${sort}')">全部</a>
            ${catOpts}
          </div>
        </div>
        <div class="list-filter-group">
          <label>细分</label>
          <div class="list-filter-options">
            <a href="javascript:;" class="${!sub?'active':''}" onclick="navigate('list&cat=${cat}&sort=${sort}')">不限</a>
            ${subOpts}
          </div>
        </div>
      </div>
      <div class="list-main">
        <div class="list-toolbar">
          <div class="list-sort">${sortLinks}</div>
          <div class="list-total">共 <strong style="color:var(--red)">${filtered.length}</strong> 件商品</div>
        </div>
        ${filtered.length ? `<div class="product-grid">${filtered.map(p => renderCard(p)).join('')}</div>` : '<div style="text-align:center;padding:60px 0;color:var(--text3)"><span style="font-size:48px;display:block;margin-bottom:12px;">🔍</span>没有找到相关商品</div>'}
      </div>
    </div>
  `;
  app.innerHTML = html;
  bindCardEvents();
}

// ==================== PRODUCT DETAIL ====================
function renderDetail(page) {
  const id = parseInt(page.split('&id=')[1]);
  const p = getById(id);
  if (!p) { app.innerHTML = '<div style="text-align:center;padding:100px 0;font-size:18px">商品不存在</div>'; return; }

  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  const specLines = (p.specs || '').split('\n').map(l => {
    const [k,v] = l.split(':');
    return `<div class="detail-info-row"><span class="detail-info-label">${k}</span><span class="detail-info-value">${v}</span></div>`;
  }).join('');

  const hasFav = isFav(id);

  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <a href="javascript:;" onclick="navigate('list&cat=${p.cat}')">${p.cat}</a> &gt; <span>${p.name}</span></div>
    <div class="detail-layout">
      <div class="detail-img">${p.emoji}</div>
      <div class="detail-info">
        <h1 class="detail-name">${p.name}</h1>
        <p class="detail-desc">${p.desc}</p>
        <div class="detail-price-box">
          <span class="detail-price"><span class="unit">¥</span>${p.price}</span>
          <span class="detail-original">¥${p.original}</span>
          <span class="detail-promo">已省¥${p.original - p.price}</span>
        </div>
        <div class="detail-info-row"><span class="detail-info-label">评分</span><span class="detail-info-value"><i class="fas fa-star" style="color:var(--orange)"></i> ${p.rating} 分</span></div>
        <div class="detail-info-row"><span class="detail-info-label">销量</span><span class="detail-info-value">已售 ${(p.sales).toLocaleString()} 件</span></div>
        ${specLines}
        <div class="detail-tags">${(p.tags||[]).map(t => `<span># ${t}</span>`).join('')}</div>
        <div class="detail-stock"><strong>✅ 有现货</strong>（库存 ${p.stock} 件）</div>
        <div class="detail-actions">
          <button class="detail-cart-btn" onclick="cartAdd(${p.id})"><i class="fas fa-cart-plus"></i> 加入购物车</button>
          <button class="detail-buy-btn" onclick="cartAdd(${p.id});navigate('cart')">立即购买</button>
          <button class="detail-cart-btn" style="padding:14px 18px" onclick="toggleFav(${p.id})"><i class="fas fa-${hasFav?'heart':'heart-o'}"></i></button>
        </div>
      </div>
    </div>
    <div style="background:var(--white);border-radius:var(--radius-l);padding:20px;margin-top:10px;box-shadow:var(--shadow)">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:12px;border-bottom:2px solid var(--red);padding-bottom:8px;">📋 商品详情</h3>
      <div style="font-size:14px;color:var(--text2);line-height:1.8">${p.desc}</div>
    </div>
  `;
  app.innerHTML = html;
}

// ==================== CART ====================
function renderCart() {
  if (!state.cart.length) {
    app.innerHTML = `
      <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>购物车</span></div>
      <div class="cart-empty-state">
        <span class="icon">🛒</span>
        <p>购物车还是空的</p>
        <a href="javascript:;" onclick="navigate('home')">去逛逛</a>
      </div>
    `;
    return;
  }

  const rows = state.cart.map((item, idx) => {
    const p = getById(item.id);
    if (!p) return '';
    return `<div class="cart-item-row">
      <input type="checkbox" class="item-checkbox" checked>
      <div class="item-info">
        <div class="item-emoji">${p.emoji}</div>
        <div><div class="item-name" onclick="navigate('detail&id=${p.id}')">${p.name}</div></div>
      </div>
      <div class="item-price">${formatPrice(p.price)}</div>
      <div><div class="qty-ctrl"><button onclick="cartUpdateQty(${p.id},${item.qty-1});renderCart()">−</button><span class="qty-num">${item.qty}</span><button onclick="cartUpdateQty(${p.id},${item.qty+1});renderCart()">+</button></div></div>
      <div class="item-subtotal">${formatPrice(p.price * item.qty)}</div>
      <div class="item-remove" onclick="cartRemove(${p.id});renderCart()"><i class="fas fa-trash-alt"></i></div>
    </div>`;
  }).join('');

  const total = cartTotal();
  const count = cartCount();

  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>购物车</span></div>
    <div class="cart-page">
      <div class="cart-page-title">🛒 我的购物车 <span style="font-size:14px;font-weight:400;color:var(--text3)">(${count}件)</span></div>
      <div class="cart-table">
        <div class="cart-header-row">
          <span></span><span>商品</span><span>单价</span><span>数量</span><span>小计</span><span>操作</span>
        </div>
        ${rows}
      </div>
      <div class="cart-summary">
        <div class="cart-summary-left">
          <span>已选 <strong style="color:var(--red);font-size:16px">${count}</strong> 件</span>
        </div>
        <div class="cart-summary-right">
          <div class="cart-summary-total">合计：<span class="cart-summary-price">${formatPrice(total)}</span></div>
          <button class="cart-checkout-btn" onclick="navigate('checkout')">去结算</button>
        </div>
      </div>
    </div>
  `;
  app.innerHTML = html;
}

// ==================== CHECKOUT ====================
function renderCheckout() {
  if (!state.cart.length) { navigate('cart'); return; }

  const user = state.user || SHOP_DATA.defaultUser;
  const addr = user.addresses?.[0] || { name:'小甜甜', phone:'138****8888', addr:'上海市浦东新区甜甜路88号' };

  const items = state.cart.map(i => {
    const p = getById(i.id);
    return p ? `<div class="checkout-item"><div class="emoji">${p.emoji}</div><div class="name">${p.name}</div><div class="qty">×${i.qty}</div><div class="price">${formatPrice(p.price * i.qty)}</div></div>` : '';
  }).join('');

  const subTotal = cartTotal();
  const shipping = subTotal >= 99 ? 0 : 10;
  const total = subTotal + shipping;

  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <a href="javascript:;" onclick="navigate('cart')">购物车</a> &gt; <span>确认订单</span></div>
    <div class="checkout-page">
      <div class="checkout-section">
        <h3><i class="fas fa-map-marker-alt"></i> 收货地址</h3>
        <div class="address-selected">
          <div><span class="name">${addr.name}</span><span class="badge">默认</span></div>
          <div class="detail">${addr.addr}　${addr.phone}</div>
        </div>
      </div>
      <div class="checkout-section">
        <h3><i class="fas fa-box"></i> 商品清单</h3>
        <div class="checkout-items">${items}</div>
      </div>
      <div class="checkout-section">
        <h3><i class="fas fa-credit-card"></i> 支付方式</h3>
        <div class="payment-options">
          <div class="payment-opt active" onclick="document.querySelectorAll('.payment-opt').forEach(e=>e.classList.remove('active'));this.classList.add('active')"><i class="fab fa-alipay" style="color:#1677ff"></i> 支付宝</div>
          <div class="payment-opt" onclick="document.querySelectorAll('.payment-opt').forEach(e=>e.classList.remove('active'));this.classList.add('active')"><i class="fab fa-weixin" style="color:#07c160"></i> 微信支付</div>
          <div class="payment-opt"><i class="fas fa-credit-card" style="color:var(--red)"></i> 银行卡</div>
        </div>
      </div>
      <div class="checkout-summary">
        <div class="checkout-summary-row"><span>商品金额</span><span>${formatPrice(subTotal)}</span></div>
        <div class="checkout-summary-row"><span>运费</span><span>${shipping === 0 ? '<span style="color:var(--green)">免运费</span>' : formatPrice(shipping)}</span></div>
        <div class="checkout-summary-total"><span>应付总额</span><span class="price">${formatPrice(total)}</span></div>
        <button class="checkout-submit" onclick="submitOrder(${total})">提交订单</button>
      </div>
    </div>
  `;
  app.innerHTML = html;
}

function submitOrder(total) {
  if (!state.cart.length) { showToast('购物车为空', '⚠️'); return; }

  const orderId = 'ORD' + Date.now().toString(36).toUpperCase();
  const items = state.cart.map(i => {
    const p = getById(i.id);
    return p ? { id: p.id, name: p.name, emoji: p.emoji, price: p.price, qty: p.iqty || i.qty } : null;
  }).filter(Boolean);

  const user = state.user || SHOP_DATA.defaultUser;
  const addr = user.addresses?.[0] || { name:'小甜甜', phone:'138****8888', addr:'上海市浦东新区甜甜路88号' };

  const order = {
    id: orderId,
    date: new Date().toISOString().slice(0,10),
    items,
    total,
    status: '待发货',
    addr: addr.addr
  };

  // Save order to user
  if (state.user) {
    state.user.orders = state.user.orders || [];
    state.user.orders.unshift(order);
  } else if (SHOP_DATA.defaultUser) {
    SHOP_DATA.defaultUser.orders.unshift(order);
  }

  state.cart = [];
  updateCartBadge();
  saveState();

  const detail = items.map(i => `${i.emoji} ${i.name} × ${i.qty}`).join('\n');
  showToast(`🎉 下单成功！订单号：${orderId}`, '✅');

  app.innerHTML = `
    <div style="text-align:center;padding:80px 20px">
      <span style="font-size:72px;display:block;margin-bottom:16px">🎉</span>
      <h2 style="font-size:24px;font-weight:700;margin-bottom:8px">下单成功！</h2>
      <p style="color:var(--text2);margin-bottom:20px">订单号：${orderId}</p>
      <div style="background:#f9fafb;border-radius:var(--radius-l);padding:16px;max-width:400px;margin:0 auto 24px;text-align:left;font-size:13px;line-height:2">${detail.replace(/\n/g,'<br>')}<br><br>合计：<strong style="color:var(--red);font-size:16px">${formatPrice(total)}</strong><br>送至：${addr.addr}</div>
      <div style="display:flex;justify-content:center;gap:12px">
        <button class="detail-cart-btn" onclick="navigate('orders')" style="padding:10px 24px">查看订单</button>
        <button class="detail-buy-btn" onclick="navigate('home')" style="padding:10px 24px">继续购物</button>
      </div>
    </div>
  `;
}

// ==================== ORDERS ====================
function renderOrders() {
  if (!requireLogin(() => renderOrders())) return;

  const user = state.user;
  const orders = user?.orders || SHOP_DATA.defaultUser.orders;

  if (!orders || !orders.length) {
    app.innerHTML = `
      <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>我的订单</span></div>
      <div class="cart-empty-state"><span class="icon">📦</span><p>暂无订单</p><a href="javascript:;" onclick="navigate('home')">去逛逛</a></div>
    `;
    return;
  }

  const cards = orders.map((o, idx) => `
    <div class="order-card">
      <div class="order-header">
        <span>订单号：${o.id}　|　${o.date}</span>
        <span class="order-status">${o.status}</span>
      </div>
      <div class="order-body">
        ${o.items.map(i => `<div class="order-item"><span class="emoji">${i.emoji}</span><span class="name">${i.name}</span><span class="qty">×${i.qty}</span><span class="price">${formatPrice(i.price * i.qty)}</span></div>`).join('')}
      </div>
      <div class="order-footer">
        <div class="order-total">共 ${o.items.reduce((s,i) => s + i.qty, 0)} 件商品　合计：<strong>${formatPrice(o.total)}</strong></div>
        <div class="order-actions">
          <button class="order-btn primary">查看详情</button>
          <button class="order-btn">再次购买</button>
        </div>
      </div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>我的订单</span></div>
    <div class="order-page">
      <div class="section-title" style="margin-bottom:16px"><span class="mark"></span> 我的订单</div>
      ${cards}
    </div>
  `;
}

// ==================== PROFILE ====================
function renderProfile() {
  if (!requireLogin(() => renderProfile())) return;

  const user = state.user;
  const orderCount = (user?.orders || SHOP_DATA.defaultUser.orders).length;
  const favCount = state.fav.length;

  const addrs = (user?.addresses || SHOP_DATA.defaultUser.addresses).map(a => `
    <div class="address-card">
      <div><span class="addr-name">${a.name}　${a.phone}</span>${a.def ? '<span class="addr-badge">默认</span>' : ''}<div class="addr-detail">${a.addr}</div></div>
      <div class="addr-actions"><a href="javascript:;">编辑</a><a href="javascript:;">删除</a></div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>个人中心</span></div>
    <div class="profile-page">
      <div class="profile-header">
        <div class="profile-avatar">${user?.avatar || '😊'}</div>
        <div class="profile-info">
          <h2>${user?.nickname || '甜甜用户'}</h2>
          <p><i class="fas fa-phone" style="color:var(--text3);width:16px"></i> ${user?.phone || '138****8888'}</p>
          <div class="profile-stats">
            <div class="profile-stat"><div class="num">${orderCount}</div><div class="label">订单</div></div>
            <div class="profile-stat"><div class="num">${favCount}</div><div class="label">收藏</div></div>
          </div>
        </div>
      </div>
      <div class="profile-section">
        <h4>🎯 快捷操作</h4>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center">
          <a href="javascript:;" onclick="navigate('orders')" style="padding:16px 0;background:#fef2f2;border-radius:var(--radius-l)"><span style="font-size:28px;display:block">📋</span><span style="font-size:13px;margin-top:4px;display:block">我的订单</span></a>
          <a href="javascript:;" onclick="navigate('fav')" style="padding:16px 0;background:#fff5f5;border-radius:var(--radius-l)"><span style="font-size:28px;display:block">❤️</span><span style="font-size:13px;margin-top:4px;display:block">我的收藏</span></a>
          <a href="javascript:;" onclick="navigate('cart')" style="padding:16px 0;background:#f0fdf4;border-radius:var(--radius-l)"><span style="font-size:28px;display:block">🛒</span><span style="font-size:13px;margin-top:4px;display:block">购物车</span></a>
          <a href="javascript:;" onclick="navigate('home')" style="padding:16px 0;background:#fefce8;border-radius:var(--radius-l)"><span style="font-size:28px;display:block">🏠</span><span style="font-size:13px;margin-top:4px;display:block">去逛逛</span></a>
        </div>
      </div>
      <div class="profile-section">
        <h4>📍 收货地址</h4>
        ${addrs}
      </div>
    </div>
  `;
}

// ==================== FAVORITES ====================
function renderFav() {
  if (!requireLogin(() => renderFav())) return;

  const items = state.fav.map(id => getById(id)).filter(Boolean);
  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>我的收藏</span></div>
    <div class="fav-page">
      <div class="section-title" style="margin-bottom:16px"><span class="mark"></span> 我的收藏 <span style="font-size:14px;font-weight:400;color:var(--text3)">(${items.length}件)</span></div>
      ${items.length ? `<div class="product-grid">${items.map(p => renderCard(p)).join('')}</div>` : '<div class="cart-empty-state"><span class="icon">💔</span><p>还没有收藏商品</p><a href="javascript:;" onclick="navigate(\'home\')">去逛逛</a></div>'}
    </div>
  `;
  app.innerHTML = html;
  bindCardEvents();
}

// ==================== SEARCH ====================
function renderSearch(page) {
  const q = (page.split('&q=')[1] || '').toLowerCase();
  const results = SHOP_DATA.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.cat.includes(q) ||
    p.desc.toLowerCase().includes(q)
  );

  const html = `
    <div class="breadcrumb"><a href="javascript:;" onclick="navigate('home')">首页</a> &gt; <span>搜索</span></div>
    <div class="search-result-header">搜索 "<strong>${q}</strong>" 共找到 <strong style="color:var(--red)">${results.length}</strong> 个结果</div>
    ${results.length ? `<div class="product-grid">${results.map(p => renderCard(p)).join('')}</div>` : '<div class="cart-empty-state"><span class="icon">🔍</span><p>没有找到相关商品</p><a href="javascript:;" onclick="navigate(\'home\')">返回首页</a></div>'}
  `;
  app.innerHTML = html;
  bindCardEvents();
}

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderPage('home');

  // Navigation clicks
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      const page = el.dataset.page;
      if (page === 'cart') { renderPage('cart'); return; }
      if (page === 'orders') { renderPage('orders'); return; }
      if (page === 'profile') { renderPage('profile'); return; }
      if (page === 'fav') { renderPage('fav'); return; }
      navigate(page);
    });
  });

  // Nav link highlight
  document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
      const page = el.dataset.page;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      el.classList.add('active');
      if (page === 'home') { navigate('home'); }
      else if (page.startsWith('list')) { navigate(page); }
    });
  });

  // Search
  const searchBtn = $('searchBtn');
  const searchInput = $('searchInput');
  const searchCat = document.querySelector('.search-cat');

  searchBtn.addEventListener('click', () => {
    const q = searchInput.value.trim();
    if (q) {
      const catParam = state.searchCat ? '&cat=' + encodeURIComponent(state.searchCat) : '';
      navigate('search&q=' + encodeURIComponent(q) + catParam);
    }
  });
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') searchBtn.click();
  });

  // Search category dropdown
  searchCat?.addEventListener('click', () => searchCat.classList.toggle('open'));
  document.querySelectorAll('#searchCatDropdown li').forEach(li => {
    li.addEventListener('click', () => {
      $('searchCatLabel').textContent = li.textContent;
      state.searchCat = li.dataset.cat;
      searchCat.classList.remove('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-cat')) searchCat?.classList.remove('open');
  });

  // Auth
  $('loginBtn').addEventListener('click', openLogin);
  $('registerBtn').addEventListener('click', openRegister);
  $('loginClose').addEventListener('click', closeLogin);
  document.querySelector('#loginModal .modal-mask').addEventListener('click', closeLogin);
  $('registerClose').addEventListener('click', closeRegister);
  document.querySelector('#registerModal .modal-mask').addEventListener('click', closeRegister);

  $('switchToRegister').addEventListener('click', () => { closeLogin(); openRegister(); });
  $('switchToLogin').addEventListener('click', () => { closeRegister(); openLogin(); });

  $('loginSubmit').addEventListener('click', () => {
    const name = $('loginName').value.trim();
    const pass = $('loginPass').value.trim();
    if (name === SHOP_DATA.defaultUser.name && pass === SHOP_DATA.defaultUser.pass) {
      state.user = { ...SHOP_DATA.defaultUser, name };
      saveState();
      closeLogin();
      showToast(`${state.user.nickname}，欢迎回来！`, '🎉');
      if (state.currentPage !== 'home') renderPage(state.currentPage);
      $('loginName').value = '';
      $('loginPass').value = '';
    } else {
      showToast('用户名或密码错误，试试 admin / 123456', '⚠️');
    }
  });

  $('registerSubmit').addEventListener('click', () => {
    const name = $('regName').value.trim();
    const pass = $('regPass').value.trim();
    const pass2 = $('regPass2').value.trim();
    if (!name || !pass) { showToast('请填写完整信息', '⚠️'); return; }
    if (pass !== pass2) { showToast('两次密码不一致', '⚠️'); return; }
    if (pass.length < 4) { showToast('密码至少4位', '⚠️'); return; }
    state.user = { name, pass, nickname: name, avatar: '😊', phone: '', address: '', orders: [], addresses: [], favs: [] };
    saveState();
    closeRegister();
    showToast(`${name}，注册成功！`, '🎉');
    $('regName').value = '';
    $('regPass').value = '';
    $('regPass2').value = '';
  });

  // Mega menu sub category click
  document.querySelectorAll('.mega-sub a').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = el.closest('.mega-item')?.querySelector('a')?.dataset?.cat || '';
      const sub = el.dataset.sub || '';
      navigate(`list&cat=${cat}&sub=${sub}`);
    });
  });
  document.querySelectorAll('.mega-item > a').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.mega-sub')) return;
      const cat = el.dataset.cat;
      if (cat) navigate(`list&cat=${cat}`);
    });
  });

  // Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLogin(); closeRegister();
    }
  });

  // Back to top
  const backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', () => {
    backTop?.classList.toggle('show', window.scrollY > 300);
  });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
