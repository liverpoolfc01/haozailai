// ================================================
// 好再来 🍬 - Amazon Style App
// ================================================

// ----- STATE -----
const S = { cart:[], user:null, fav:[], page:'home', searchCat:'' };

// ----- HELPERS -----
const $ = id => document.getElementById(id);
const toast = $('toast');
let tt = null;
function msg(t, e=''){toast.textContent=(e?e+' ':'')+t;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),2500);}

function loadS(){
  try{const s=JSON.parse(localStorage.getItem('hz_state'));if(s){if(s.cart)S.cart=s.cart;if(s.fav)S.fav=s.fav;if(s.user)S.user=s.user;}}catch(e){}
}
function saveS(){localStorage.setItem('hz_state',JSON.stringify({cart:S.cart,fav:S.fav,user:S.user}));}
loadS();

function gp(id){return P.find(p=>p.id===id);}
function fmt(p){return (p/1).toFixed(2);}
function ct(){return S.cart.reduce((s,i)=>{const p=gp(i.id);return s+(p?p.price*i.qty:0);},0);}
function cc(){return S.cart.reduce((s,i)=>s+i.qty,0);}
function badge(){const c=cc();document.querySelectorAll('#cartCount').forEach(e=>e.textContent=c>99?'99+':c);}
function isLogged(){return S.user!==null;}
function isFav(id){return S.fav.includes(id);}

// ----- CART -----
function ca(id,q=1){const e=S.cart.find(i=>i.id===id);if(e)e.qty+=q;else S.cart.push({id,qty:q});badge();saveS();const p=gp(id);msg(`已加入购物车: ${p.name}`,'✅');}
function cr(id){S.cart=S.cart.filter(i=>i.id!==id);badge();saveS();}
function cq(id,q){if(q<=0){cr(id);return}const i=S.cart.find(i=>i.id===id);if(i){i.qty=q;badge();saveS();}}

// ----- AUTH -----
function openLogin(){$('loginModal').classList.add('open');}
function closeLogin(){$('loginModal').classList.remove('open');}
function openRegister(){$('registerModal').classList.add('open');}
function closeRegister(){$('registerModal').classList.remove('open');}

function doLogin(){
  const n=$('loginName').value.trim(),p=$('loginPass').value.trim();
  if(n===DATA.defaultUser.name&&p===DATA.defaultUser.pass){
    S.user={...DATA.defaultUser,name:n};saveS();closeLogin();
    msg(`欢迎回来, ${S.user.nickname}!`,'🎉');
    updateUserUI();renderPage(S.page);
  }else msg('用户名或密码错误 (demo / 123456)','⚠️');
}
function doRegister(){
  const n=$('regName').value.trim(),p1=$('regPass').value.trim(),p2=$('regPass2').value.trim();
  if(!n||!p1){msg('请填写完整信息','⚠️');return}
  if(p1!==p2){msg('两次密码不一致','⚠️');return}
  if(p1.length<4){msg('密码至少4位','⚠️');return}
  S.user={name:n,pass:p1,nickname:n,avatar:'😊',phone:'',addr:'',orders:[],addrs:[],favs:[]};saveS();
  closeRegister();msg(`${n}，注册成功！`,'🎉');updateUserUI();
}
function updateUserUI(){
  const el=$('userName');
  if(el)el.textContent=S.user?S.user.nickname:'请登录';
  const sec=$('authSection');
  if(sec)sec.innerHTML=S.user?'<a href="javascript:;" onclick="logout()">退出登录</a>':'<a href="javascript:;" onclick="openLogin()">登录</a><a href="javascript:;" onclick="openRegister()">注册</a>';
}
function logout(){S.user=null;saveS();msg('已退出登录','👋');updateUserUI();renderPage(S.page);}

// ----- NAVIGATION -----
function navigate(p){
  S.page=p;
  window.scrollTo({top:0,behavior:'smooth'});
  renderPage(p);
}

function renderPage(p){
  const app=$('app');
  if(p==='home')return renderHome();
  if(p.startsWith('list'))return renderList(p);
  if(p.startsWith('detail'))return renderDetail(p);
  if(p==='cart')return renderCart();
  if(p==='orders'){if(!isLogged()){openLogin();return}return renderOrders();}
  if(p==='fav'){if(!isLogged()){openLogin();return}return renderFav();}
  if(p==='profile'){if(!isLogged()){openLogin();return}return renderProfile();}
  if(p.startsWith('search'))return renderSearch(p);
  renderHome();
}

// ==================== CARD ====================
function pcard(p){
  const stars='★'.repeat(Math.floor(p.rate))+(p.rate%1>=0.5?'½':'');
  const tag=p.tag==='Best Seller'?'Best':p.tag==='Amazon Choice'?'Amazon':'';
  return `<div class="p-card" onclick="navigate('detail&id=${p.id}')">
    <div class="p-card-img">${p.emoji}${tag?`<span class="p-card-tag ${tag}">${p.tag}</span>`:''}${p.prime?`<span class="p-card-prime"><i class="fas fa-check"></i> Prime</span>`:''}</div>
    <div class="p-card-body">
      <div class="p-card-brand">${p.brand}</div>
      <div class="p-card-name">${p.name}</div>
      <div class="p-card-rate"><span class="p-card-stars">${stars}</span>${p.rate} <span>(${(p.sales/10000).toFixed(1)}万)</span></div>
      <div class="p-card-price"><span class="sym">¥</span><span class="amt">${Math.floor(p.price)}</span><span class="cents">.${(p.price%1*100).toFixed(0).padStart(2,'0')}</span><span class="p-card-orig">¥${p.orig}</span></div>
      <div class="p-card-sales">${p.prime?'<span style="color:var(--green)">免运费</span> · ':''}月销${(p.sales/10000).toFixed(1)}万+</div>
      <button class="p-card-btn" onclick="event.stopPropagation();ca(${p.id})">加入购物车</button>
    </div>
  </div>`;
}

// ==================== HOME ====================
function renderHome(){
  const {banners}=DATA;
  const bi=banners.map((b,i)=>`<div class="banner-slide ${i===0?'active':''}" style="background:${b.color}"><h1>${b.text}</h1><p>${b.sub}</p></div>`).join('');
  const bd=banners.map((_,i)=>`<span class="banner-dot ${i===0?'active':''}" data-i="${i}"></span>`).join('');

  // Featured sections
  const best = P.filter(p=>p.tag==='Best Seller').slice(0,10);
  const digital = P.filter(p=>p.cat==='数码').slice(0,10);
  const beauty = P.filter(p=>p.cat==='美妆').slice(0,10);
  const food = P.filter(p=>p.cat==='美食').slice(0,10);

  const sec = (title,link,items)=>`<div class="sec-header"><h2>${title}</h2><a href="javascript:;" onclick="navigate('${link}')">查看更多 →</a></div><div class="p-grid">${items.map(p=>pcard(p)).join('')}</div>`;

  const html = `
    <div class="banner" id="banner">${bi}<div class="banner-dots">${bd}</div></div>
    ${sec('🔥 Best Seller 热销爆款','list&sort=sales',best)}
    ${sec('📱 数码尖货','list&cat=数码',digital)}
    <div style="background:linear-gradient(135deg,#146eb4,#232f3e);border-radius:8px;padding:24px;text-align:center;margin:16px 0;color:#fff">
      <h2 style="font-size:24px;font-weight:700">🍬 好再来 Prime 会员</h2>
      <p style="font-size:16px;margin:8px 0">免费配送 · 专属折扣 · 无限畅享</p>
      <a href="javascript:;" style="display:inline-block;padding:8px 28px;background:var(--gold);color:var(--dark);border-radius:20px;font-weight:700" onclick="msg('Prime 30天免费试用已开通！','🎉')">立即开通 30天免费试用</a>
    </div>
    ${sec('💄 美妆护肤','list&cat=美妆',beauty)}
    ${sec('🍪 美食天地','list&cat=美食',food)}
  `;
  $('app').innerHTML = html;

  // Banner
  let bii=0,bt=null;
  const sl=document.querySelectorAll('.banner-slide'),dt=document.querySelectorAll('.banner-dot');
  function bg(i){sl.forEach(s=>s.classList.remove('active'));dt.forEach(d=>d.classList.remove('active'));bii=(i+sl.length)%sl.length;sl[bii]?.classList.add('active');dt[bii]?.classList.add('active');}
  dt.forEach(d=>d.addEventListener('click',()=>bg(parseInt(d.dataset.i))));
  clearInterval(bt);bt=setInterval(()=>bg(bii+1),4000);
}

// ==================== LIST ====================
function renderList(p){
  const params=Object.fromEntries(p.split('&').slice(1).map(s=>s.split('=')));
  const cat=params.cat||'',sub=params.sub||'',sort=params.sort||'default';
  let items=[...P];
  if(cat)items=items.filter(x=>x.cat===cat);
  if(sub)items=items.filter(x=>x.sub===sub);
  if(sort==='price-asc')items.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc')items.sort((a,b)=>b.price-a.price);
  else if(sort==='sales')items.sort((a,b)=>b.sales-a.sales);
  else if(sort==='rate')items.sort((a,b)=>b.rate-a.rate);

  const cats=['数码','服饰','家居','美食','美妆','母婴','运动','图书'];
  const subMap={'数码':['耳机','手机','平板','手表','笔记本','外设','配件'],'服饰':['上衣','下装','鞋','包','配饰'],'家居':['灯具','床品','厨房','香薰','拖鞋','清洁','居家'],'美食':['零食','糕点','咖啡','茶','冲饮','酒','生鲜'],'美妆':['护肤','彩妆'],'母婴':['纸尿裤','奶粉','用品'],'运动':['跑鞋','运动服','户外'],'图书':['小说','人文','自助']};

  const catLinks=cats.map(c=>`<a href="javascript:;" class="${c===cat?'on':''}" onclick="navigate('list&cat=${c}')">${c}</a>`).join('');
  const subLinks=(subMap[cat]||[]).map(s=>`<a href="javascript:;" class="${s===sub?'on':''}" onclick="navigate('list&cat=${cat}&sub=${s}')">${s}</a>`).join('');

  const sorts=[{k:'default',l:'综合'},{k:'sales',l:'销量'},{k:'rate',l:'评分'},{k:'price-asc',l:'价格↑'},{k:'price-desc',l:'价格↓'}];
  const sortLinks=sorts.map(s=>`<a href="javascript:;" class="${s.k===sort?'on':''}" onclick="navigate('list&cat=${cat}&sub=${sub}&sort=${s.k}')">${s.l}</a>`).join('');

  const html=`
    <div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>${cat||'全部商品'}</span></div>
    <div class="list-layout">
      <div class="list-side">
        <div class="list-side-box"><h4>品类</h4>${catLinks}</div>
        ${subLinks?`<div class="list-side-box"><h4>细分</h4>${subLinks}</div>`:''}
      </div>
      <div class="list-main">
        <div class="list-tools"><div class="list-sort">${sortLinks}</div><span>共 <strong>${items.length}</strong> 件商品</span></div>
        ${items.length?`<div class="p-grid">${items.map(p=>pcard(p)).join('')}</div>`:'<div class="empty-state"><span class="icon">🔍</span><p>没有找到相关商品</p></div>'}
      </div>
    </div>`;
  $('app').innerHTML=html;
}

// ==================== DETAIL ====================
function renderDetail(p){
  const id=parseInt(p.split('&id=')[1]);
  const x=gp(id);
  if(!x){$('app').innerHTML='<div class="empty-state"><span class="icon">❌</span><p>商品不存在</p></div>';return}
  const stars='★'.repeat(Math.floor(x.rate))+(x.rate%1>=0.5?'½':'');
  const tag=x.tag==='Best Seller'?'Best':x.tag==='Amazon Choice'?'Amazon':'';
  const html=`
    <div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <a href="javascript:;" onclick="navigate('list&cat=${x.cat}')">${x.cat}</a> › <span>${x.name}</span></div>
    <div class="detail">
      <div class="detail-img">${x.emoji}</div>
      <div class="detail-info">
        <div class="detail-brand"><a href="javascript:;">${x.brand}</a></div>
        <h1 class="detail-name">${x.name}</h1>
        <div class="detail-rate"><span class="stars">${stars}</span> ${x.rate} <span>(${(x.sales/10000).toFixed(1)}万条评价)</span></div>
        ${tag?`<div style="margin:6px 0"><span class="p-card-tag ${tag}">${x.tag}</span></div>`:''}
        <div class="detail-price-box">
          <span class="sym">¥</span><span class="amt">${Math.floor(x.price)}</span><span class="cents">.${(x.price%1*100).toFixed(0).padStart(2,'0')}</span>
          <span class="orig">建议零售价: ¥${x.orig}</span>
          <span class="save">节省 ¥${x.orig-x.price}</span>
        </div>
        <div class="detail-prime"><i class="fas fa-check-circle"></i> Prime | 免运费 · 次日达</div>
        <div class="detail-desc">${x.desc}</div>
        <div class="detail-info-row"><span class="lbl">品牌</span><span class="val">${x.brand}</span></div>
        <div class="detail-info-row"><span class="lbl">库存</span><span class="val"><span class="detail-stock"><i class="fas fa-check-circle"></i> 有货</span> (库存 ${x.stock} 件)</span></div>
        <div class="detail-actions">
          <button class="detail-btn-cart" onclick="ca(${x.id});renderDetail('detail&id=${x.id}')"><i class="fas fa-cart-plus"></i> 加入购物车</button>
          <button class="detail-btn-buy" onclick="ca(${x.id});navigate('cart')">立即购买</button>
        </div>
      </div>
    </div>
    <div style="background:#fff;border-radius:8px;padding:20px;margin-top:12px;box-shadow:0 1px 3px rgba(0,0,0,.08)">
      <h3 style="font-size:16px;font-weight:700;margin-bottom:12px;border-bottom:1px solid #eee;padding-bottom:8px">📋 商品描述</h3>
      <div style="font-size:14px;color:var(--text2);line-height:1.8">${x.desc}</div>
    </div>`;
  $('app').innerHTML=html;
}

// ==================== CART ====================
function renderCart(){
  if(!S.cart.length){
    $('app').innerHTML=`<div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>购物车</span></div><div class="empty-state"><span class="icon">🛒</span><p>你的购物车是空的</p><a href="javascript:;" onclick="navigate('home')">去逛逛</a></div>`;
    return;
  }
  const rows=S.cart.map(i=>{
    const p=gp(i.id);if(!p)return '';
    return `<div class="cart-row">
      <div class="emoji">${p.emoji}</div>
      <div class="info"><div class="name" onclick="navigate('detail&id=${p.id}')">${p.name}</div><div class="stock"><i class="fas fa-check-circle" style="color:var(--green)"></i> 有货 · ${p.prime?'Prime免运费':''}</div><div class="qty"><button onclick="cq(${p.id},${i.qty-1});renderCart()">−</button><div class="num">${i.qty}</div><button onclick="cq(${p.id},${i.qty+1});renderCart()">+</button></div></div>
      <div class="price">¥${fmt(p.price*i.qty)}</div>
      <div class="del" onclick="cr(${p.id});renderCart()"><i class="fas fa-trash-alt"></i></div>
    </div>`;
  }).join('');
  const total=ct(),cnt=cc();

  const html=`<div class="cart-page">
    <div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>购物车</span></div>
    <h1>🛒 购物车 (${cnt}件)</h1>
    <div class="cart-layout">
      <div class="cart-items"><div class="cart-box">${rows}</div></div>
      <div class="cart-summary-right"><div class="cart-summary-box">
        <div class="sub">商品数量: <span>${cnt}件</span></div>
        <div class="total">合计: <span class="price">¥${fmt(total)}</span></div>
        <button class="btn" onclick="navigate('checkout')">去结算</button>
      </div></div>
    </div></div>`;
  $('app').innerHTML=html;
}

// ==================== CHECKOUT ====================
// ====== SEARCH ======
function doSearch(){
  const q=$('searchInput')?.value?.trim();
  const cat=$('searchCat')?.value||'';
  if(q)navigate('search&q='+encodeURIComponent(q)+'&cat='+encodeURIComponent(cat));
}

// ====== INIT ======
document.addEventListener('DOMContentLoaded',()=>{
  badge();updateUserUI();renderPage('home');

  // search
  document.querySelector('.h-search-form')?.addEventListener('submit',(e)=>{e.preventDefault();doSearch();});

  // account dropdown
  const ab=$('accountBtn');
  ab?.addEventListener('click',()=>ab.classList.toggle('open'));
  document.addEventListener('click',e=>{if(!e.target.closest('.h-account'))ab?.classList.remove('open');});

  // modal masks
  document.querySelectorAll('.modal-mask').forEach(m=>m.addEventListener('click',()=>{
    closeLogin();closeRegister();
  }));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLogin();closeRegister();}});

  // back to top
  const bt=document.createElement('div');bt.className='back-top';bt.innerHTML='↑';bt.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  document.body.appendChild(bt);
  window.addEventListener('scroll',()=>bt.classList.toggle('show',window.scrollY>300));
});

// ==================== SEARCH ====================
function renderSearch(p){
  const params=Object.fromEntries(p.split('&').slice(1).map(s=>s.split('=')));
  const q=(params.q||'').toLowerCase();
  const cat=params.cat||'';
  let items=P.filter(x=>x.name.toLowerCase().includes(q)||x.brand.toLowerCase().includes(q)||x.cat.includes(q));
  if(cat)items=items.filter(x=>x.cat===cat);
  const html=`<div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>搜索结果</span></div><div style="font-size:15px;margin-bottom:12px">搜索 "<strong>${q}</strong>" 共找到 <strong style="color:var(--red)">${items.length}</strong> 个结果</div>${items.length?`<div class="p-grid">${items.map(p=>pcard(p)).join('')}</div>`:'<div class="empty-state"><span class="icon">🔍</span><p>没有找到相关商品</p><a href="javascript:;" onclick="navigate(\'home\')">返回首页</a></div>'}`;
  $('app').innerHTML=html;
}

// ==================== ORDERS ====================
function renderOrders(){
  const user=S.user||DATA.defaultUser;
  const orders=user.orders||[];
  if(!orders.length){$('app').innerHTML=`<div class="empty-state"><span class="icon">📦</span><p>暂无订单</p><a href="javascript:;" onclick="navigate('home')">去逛逛</a></div>`;return}
  const cards=orders.map(o=>`<div class="order-card"><div class="order-h"><span>订单: ${o.id}</span><span style="color:var(--red);font-weight:600">${o.status}</span></div><div class="order-items">${o.items.map(i=>`<div class="chk-item"><span class="emoji">${i.emoji}</span><span class="name">${i.name}</span><span class="qty">×${i.qty}</span><span class="price">¥${fmt(i.price*i.qty)}</span></div>`).join('')}</div><div class="order-f"><span style="color:var(--text2);font-size:13px">${o.date} · 送至: ${o.addr}</span><span style="font-weight:700;font-size:16px">合计: ¥${fmt(o.total)}</span></div></div>`).join('');
  $('app').innerHTML=`<div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>我的订单</span></div><h2 style="font-size:20px;font-weight:700;margin-bottom:12px">📋 我的订单</h2>${cards}`;
}

// ==================== FAV ====================
function renderFav(){
  const items=S.fav.map(id=>gp(id)).filter(Boolean);
  $('app').innerHTML=`<div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>收藏夹</span></div><h2 style="font-size:20px;font-weight:700;margin-bottom:12px">❤️ 我的收藏 (${items.length})</h2>${items.length?`<div class="p-grid">${items.map(p=>pcard(p)).join('')}</div>`:'<div class="empty-state"><span class="icon">💔</span><p>还没有收藏商品</p><a href="javascript:;" onclick="navigate(\'home\')">去逛逛</a></div>'}`;
}

// ==================== PROFILE ====================
function renderProfile(){
  if(!isLogged()){openLogin();return}
  const user=S.user;
  const oc=(user.orders||[]).length;
  const fc=S.fav.length;
  $('app').innerHTML=`
    <div class="list-crumbs"><a href="javascript:;" onclick="navigate('home')">首页</a> › <span>个人中心</span></div>
    <div class="profile-card">
      <div class="profile-avatar">${user.avatar||'😊'}</div>
      <div class="profile-info"><h2>${user.nickname||'用户'}</h2><p>${user.phone||''}</p><div class="profile-stats"><div class="num">${oc}</div><div class="label">订单</div><div class="num">${fc}</div><div class="label">收藏</div></div></div>
    </div>
    <div style="background:#fff;border-radius:8px;padding:20px;margin-top:10px">
      <div class="profile-grid">
        <a href="javascript:;" onclick="navigate('orders')"><span>📋</span>我的订单</a>
        <a href="javascript:;" onclick="navigate('fav')"><span>❤️</span>我的收藏</a>
        <a href="javascript:;" onclick="navigate('cart')"><span>🛒</span>购物车</a>
        <a href="javascript:;" onclick="navigate('home')"><span>🏠</span>去逛首页</a>
      </div>
    </div>
    <div style="background:#fff;border-radius:8px;padding:20px;margin-top:10px">
      <h4 style="font-size:15px;font-weight:700;margin-bottom:10px">📍 收货地址</h4>
      ${(user.addrs||DATA.defaultUser.addrs).map(a=>`<div class="addr-card"><div><strong>${a.name}</strong> ${a.phone} ${a.def?'<span class="badge">默认</span>':''}<br><span style="color:var(--text2);font-size:13px">${a.addr}</span></div></div>`).join('')}
    </div>`;
}
