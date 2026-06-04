// ============================================
// 甜甜商城 🍬 - 商品数据
// ============================================

const SHOP_DATA = {
  banners: [
    { img: '🎉', title: '618 年中大促', subtitle: '全场低至3折', color: '#ff6b9d' },
    { img: '📱', title: '数码狂欢趴', subtitle: '新品首发 限时直降', color: '#7c3aed' },
    { img: '🏠', title: '家居家装节', subtitle: '焕新生活 每满300减50', color: '#10b981' },
    { img: '🍪', title: '美食嘉年华', subtitle: '舌尖上的甜蜜 满199减30', color: '#f59e0b' },
  ],

  flashSale: {
    endTime: Date.now() + 7200 * 1000, // 2 hours from now
    items: [
      { id: 1, name: '无线降噪耳机', emoji: '🎧', price: 299, original: 499 },
      { id: 2, name: '智能手表 Pro', emoji: '⌚', price: 899, original: 1299 },
      { id: 3, name: '蓝牙音箱', emoji: '🔊', price: 159, original: 259 },
      { id: 4, name: '挂耳咖啡', emoji: '☕', price: 39, original: 79 },
    ]
  },

  products: [
    { id: 1, name: '无线降噪耳机 Pro', cat: '数码', sub: '耳机', emoji: '🎧', price: 299, original: 499, sales: 28473, rating: 4.8, tags: ['HOT', '新品'], desc: '旗舰级主动降噪｜40小时续航｜Hi-Res金标认证｜蓝牙5.3｜佩戴舒适不压耳', specs: '颜色: 黑色/白色\n续航: 40小时\n降噪: ANC自适应降噪\n接口: Type-C', stock: 289 },
    { id: 2, name: '智能手表 Pro Max', cat: '数码', sub: '手表', emoji: '⌚', price: 899, original: 1299, sales: 15620, rating: 4.7, tags: ['HOT'], desc: '1.5寸AMOLED｜血氧/心率/睡眠监测｜100+运动模式｜IP68防水｜14天续航', specs: '屏幕: 1.5寸AMOLED\n续航: 14天\n防水: IP68\n传感器: 心率/血氧/加速度', stock: 156 },
    { id: 3, name: '便携蓝牙音箱', cat: '数码', sub: '音箱', emoji: '🔊', price: 159, original: 259, sales: 38921, rating: 4.6, tags: ['爆款'], desc: '360°环绕立体声｜IPX7防水｜12h续航｜TWS串联｜挂扣设计随身带', specs: '功率: 20W\n防水: IPX7\n续航: 12小时\n尺寸: 180×70×70mm', stock: 523 },
    { id: 4, name: '10000mAh充电宝', cat: '数码', sub: '手机', emoji: '🔋', price: 89, original: 149, sales: 67218, rating: 4.9, tags: ['爆款'], desc: '轻薄便携｜20W快充｜双输入三输出｜自带双线｜飞机可带', specs: '容量: 10000mAh\n快充: PD20W\n重量: 200g\n接口: USB-A×2 + Type-C', stock: 890 },
    { id: 5, name: '简约帆布双肩包', cat: '服饰', sub: '包', emoji: '🎒', price: 129, original: 199, sales: 12340, rating: 4.5, tags: ['新品'], desc: '加厚肩带不勒肩｜多隔层收纳｜防水面料｜简约有型通勤必备', specs: '材质: 防水帆布\n容量: 25L\n重量: 420g\n颜色: 黑/灰/卡其', stock: 345 },
    { id: 6, name: '纯棉印花T恤', cat: '服饰', sub: '上衣', emoji: '👕', price: 79, original: 139, sales: 45210, rating: 4.4, tags: ['HOT'], desc: '100%新疆长绒棉｜亲肤透气｜趣味印花｜宽松版型不挑身材', specs: '材质: 100%棉\n版型: 宽松\n颜色: 白/黑/蓝/粉\n尺码: S-3XL', stock: 1200 },
    { id: 7, name: '复古棒球帽', cat: '服饰', sub: '帽子', emoji: '🧢', price: 59, original: 99, sales: 18230, rating: 4.6, tags: [], desc: '经典六片帽型｜可调节松紧｜立体刺绣logo｜出街凹造型必备', specs: '材质: 纯棉斜纹\n调节: 金属扣\n颜色: 黑/白/卡其/藏青', stock: 670 },
    { id: 8, name: '真丝丝巾', cat: '服饰', sub: '配饰', emoji: '🧣', price: 199, original: 359, sales: 5680, rating: 4.8, tags: ['新品'], desc: '100%桑蚕丝｜手工卷边｜雅致印花礼盒装｜送妈妈送女友首选', specs: '材质: 100%桑蚕丝\n尺寸: 90×90cm\n工艺: 手工卷边', stock: 89 },
    { id: 9, name: '北欧极简台灯', cat: '家居', sub: '灯具', emoji: '💡', price: 189, original: 289, sales: 9870, rating: 4.7, tags: ['HOT'], desc: '三档色温可调｜RG0无蓝光｜触摸调光｜简约设计百搭各种风格', specs: '功率: 12W\n色温: 3000K-6000K\n材质: 铝+ABS\n调光: 触摸无极', stock: 234 },
    { id: 10, name: '香薰蜡烛礼盒', cat: '家居', sub: '香薰', emoji: '🕯️', price: 69, original: 119, sales: 23450, rating: 4.5, tags: ['爆款'], desc: '天然大豆蜡｜4款清新香型｜燃烧约25小时｜精美礼盒送礼佳品', specs: '材质: 大豆蜡\n香型: 薰衣草/白茶/柑橘/海盐\n燃烧: 约25h/个', stock: 456 },
    { id: 11, name: '日式陶瓷对杯', cat: '家居', sub: '餐具', emoji: '☕', price: 49, original: 79, sales: 31200, rating: 4.6, tags: [], desc: '手工拉胚｜哑光釉面｜350ml容量｜一对装｜每一只都是独一无二', specs: '材质: 陶瓷\n容量: 350ml\n工艺: 手工拉胚\n套装: 2只装', stock: 578 },
    { id: 12, name: 'ins风装饰画', cat: '家居', sub: '装饰', emoji: '🖼️', price: 39, original: 68, sales: 18900, rating: 4.3, tags: [], desc: '艺术微喷｜实木相框｜免钉安装｜北欧简约风点亮你的家', specs: '尺寸: 40×50cm\n工艺: 艺术微喷\n框材: 实木\n安装: 免钉贴', stock: 340 },
    { id: 13, name: '手工牛轧糖礼盒', cat: '美食', sub: '零食', emoji: '🍬', price: 39, original: 59, sales: 56780, rating: 4.9, tags: ['爆款'], desc: '纯手工制作｜进口乳制品｜四味经典拼｜甜而不腻停不下来', specs: '口味: 花生/蔓越莓/抹茶/巧克力\n净重: 500g\n保质期: 90天', stock: 1200 },
    { id: 14, name: '挂耳咖啡混合装', cat: '美食', sub: '咖啡', emoji: '☕', price: 49, original: 79, sales: 28910, rating: 4.7, tags: ['HOT'], desc: '哥伦比亚+埃塞+巴西三地｜10包入｜每天一杯唤醒清晨', specs: '产地: 哥伦比亚/埃塞/巴西\n规格: 10g×10包\n烘焙: 中度', stock: 890 },
    { id: 15, name: '北海道白色恋人', cat: '美食', sub: '糕点', emoji: '🍪', price: 128, original: 168, sales: 12340, rating: 4.8, tags: ['新品'], desc: '经典猫舌饼夹白巧｜北海道限定风味｜铁盒装送礼自用皆宜', specs: '净重: 324g(36枚)\n保质期: 120天\n包装: 铁盒', stock: 267 },
    { id: 16, name: '坚果大礼包', cat: '美食', sub: '零食', emoji: '🥜', price: 99, original: 169, sales: 43500, rating: 4.6, tags: ['爆款'], desc: '8种坚果混合装｜每日坚果｜独立小包｜新鲜现烘营养满满', specs: '净重: 1kg(20包)\n种类: 8种坚果\n保质期: 180天', stock: 670 },
    { id: 17, name: '蓝牙自拍杆', cat: '数码', sub: '手机', emoji: '📱', price: 69, original: 119, sales: 34500, rating: 4.5, tags: ['HOT'], desc: '蓝牙遥控｜三脚架一体｜360°旋转｜伸缩长1.2m｜出门旅行必备', specs: '蓝牙: 5.0\n长度: 22cm-120cm\n重量: 210g\n兼容: iOS/Android', stock: 560 },
    { id: 18, name: '云朵抱枕', cat: '家居', sub: '装饰', emoji: '☁️', price: 45, original: 79, sales: 25670, rating: 4.7, tags: [], desc: '软糯云朵造型｜记忆棉填充｜可拆洗外套｜办公室/卧室都可爱', specs: '材质: 水晶绒+记忆棉\n尺寸: 45×35cm\n外套: 可拆洗', stock: 430 },
  ],

  // 用户默认数据
  defaultUser: {
    name: 'demo',
    pass: '123456',
    nickname: '甜甜用户',
    avatar: '😊',
    phone: '138****8888',
    address: '上海市浦东新区甜甜路88号',
    orders: [
      { id: 'ORD20260601', date: '2026-06-01', items: [{ id:1, name:'无线降噪耳机 Pro',emoji:'🎧',price:299,qty:2 }], total: 598, status: '已完成', addr: '上海市浦东新区甜甜路88号' },
      { id: 'ORD20260528', date: '2026-05-28', items: [{ id:13, name:'手工牛轧糖礼盒',emoji:'🍬',price:39,qty:3 }], total: 117, status: '配送中', addr: '上海市浦东新区甜甜路88号' },
    ],
    addresses: [
      { name: '小甜甜', phone: '138****8888', addr: '上海市浦东新区甜甜路88号', def: true },
      { name: '老大', phone: '139****9999', addr: '北京市朝阳区幸福大街100号', def: false },
    ],
    favs: [1, 6, 13]
  }
};

// 工具函数
function formatPrice(p) { return '¥' + (p/1).toFixed(2); }

function getById(id) { return SHOP_DATA.products.find(p => p.id === id); }
