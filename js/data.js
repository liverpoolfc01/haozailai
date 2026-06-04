// ================================================
// SweetMart 🍬 - 商品数据 (150+ 全球好物)
// ================================================

const DATA = {
  // ---------- 首页轮播 ----------
  banners: [
    { text:'Prime Day 会员日', sub:'全场低至5折 · 限时2天', color:'#232f3e' },
    { text:'Kindle 阅读器特惠', sub:'沉浸阅读 · 低至499元起', color:'#ff9900' },
    { text:'SweetMart 全球购', sub:'海外直邮 · 正品保障', color:'#146eb4' },
  ],

  // ---------- 用户 ----------
  defaultUser: {
    name:'demo', pass:'123456', nickname:'甜甜', avatar:'😊',
    phone:'138****8888', addr:'上海市甜玛特路1号',
    orders:[
      { id:'SM20260601001', date:'2026-06-01', items:[{id:1,name:'Sony WH-1000XM5',emoji:'🎧',price:2499,qty:1}], total:2499, status:'已送达', addr:'上海市甜玛特路1号' },
      { id:'SM20260528002', date:'2026-05-28', items:[{id:101,name:'SK-II 神仙水',emoji:'🧴',price:1590,qty:1},{id:135,name:'Dior 999口红',emoji:'💄',price:359,qty:1}], total:1949, status:'配送中', addr:'上海市甜玛特路1号' },
      { id:'SM20260520003', date:'2026-05-20', items:[{id:52,name:'三只松鼠每日坚果',emoji:'🥜',price:79,qty:3}], total:237, status:'已送达', addr:'上海市甜玛特路1号' },
      { id:'SM20260515004', date:'2026-05-15', items:[{id:40,name:'飞利浦台灯',emoji:'💡',price:399,qty:1},{id:68,name:'苏泊尔锅',emoji:'🍳',price:399,qty:1}], total:798, status:'已送达', addr:'上海市甜玛特路1号' },
    ],
    addrs:[{name:'小甜甜',phone:'138****8888',addr:'上海市甜玛特路1号',def:true},{name:'老大',phone:'139****9999',addr:'北京市朝阳区幸福街100号',def:false}],
    favs:[1,5,27,52,71,74,101,112]
  }
};

// ---------- 150+ 商品 ----------
const P = [
  // ======================== 数码 · 耳机 ========================
  { id:1,  name:'Sony WH-1000XM5 无线降噪耳机', cat:'数码', sub:'耳机', emoji:'🎧', price:2499, orig:2999, sales:185000, rate:4.9, tag:'Best Seller', desc:'旗舰级AI降噪｜30h续航｜LDAC高清传输｜佩戴感应｜多麦降噪通话｜20万+好评', brand:'Sony', stock:1200, prime:true },
  { id:2,  name:'Apple AirPods Pro 2 (USB-C)', cat:'数码', sub:'耳机', emoji:'🎧', price:1699, orig:1999, sales:520000, rate:4.8, tag:'Amazon Choice', desc:'H2芯片｜自适应降噪｜空间音频｜IPX4｜查找网络｜MagSafe充电', brand:'Apple', stock:5600, prime:true },
  { id:3,  name:'华为 FreeBuds Pro 3', cat:'数码', sub:'耳机', emoji:'🎧', price:1199, orig:1499, sales:278000, rate:4.7, tag:'Best Seller', desc:'麒麟A2｜46dB降噪｜星闪连接｜31h续航｜三重听感自适应', brand:'Huawei', stock:3400, prime:true },
  { id:4,  name:'漫步者 W820NB 头戴降噪', cat:'数码', sub:'耳机', emoji:'🎧', price:349, orig:499, sales:890000, rate:4.6, tag:'', desc:'Active Noise Cancelling｜Hi-Res金标｜40h续航｜蓝牙5.3｜折叠便携', brand:'Edifier', stock:8900, prime:true },
  { id:5,  name:'Bose QC Ultra 消噪耳机', cat:'数码', sub:'耳机', emoji:'🎧', price:2999, orig:3499, sales:95000, rate:4.9, tag:'Best Seller', desc:'CustomTune降噪｜沉浸空间音频｜24h续航｜旗舰舒适佩戴', brand:'Bose', stock:800, prime:true },
  { id:6,  name:'小米 Buds 5 Pro', cat:'数码', sub:'耳机', emoji:'🎧', price:899, orig:1199, sales:340000, rate:4.5, tag:'', desc:'三单元旗舰｜52dB降噪｜Hi-Res｜LHDC 5.0｜10h单次续航', brand:'Xiaomi', stock:6700, prime:true },
  // 数码 · 手机
  { id:7,  name:'iPhone 16 Pro Max 256GB', cat:'数码', sub:'手机', emoji:'📱', price:9999, orig:10999, sales:1200000, rate:4.9, tag:'Best Seller', desc:'A18 Pro｜钛金金属｜4800万主摄｜5倍光学变焦｜6.9寸ProMotion', brand:'Apple', stock:28000, prime:true },
  { id:8,  name:'Samsung Galaxy S25 Ultra', cat:'数码', sub:'手机', emoji:'📱', price:8999, orig:9999, sales:450000, rate:4.7, tag:'', desc:'骁龙8 Elite｜2亿像素｜S Pen｜5000mAh｜钛金属框架', brand:'Samsung', stock:12000, prime:true },
  { id:9,  name:'华为 Mate 70 Pro', cat:'数码', sub:'手机', emoji:'📱', price:6999, orig:7999, sales:890000, rate:4.8, tag:'Amazon Choice', desc:'麒麟9100｜鸿蒙5.0｜XMAGE影像｜卫星通信｜100W快充', brand:'Huawei', stock:15000, prime:true },
  { id:10, name:'小米 15 Ultra', cat:'数码', sub:'手机', emoji:'📱', price:5999, orig:6999, sales:560000, rate:4.7, tag:'', desc:'骁龙8 Elite｜徕卡四摄1英寸｜6000mAh｜2K LTPO｜IP69', brand:'Xiaomi', stock:12000, prime:true },
  { id:11, name:'Google Pixel 10 Pro', cat:'数码', sub:'手机', emoji:'📱', price:7499, orig:8499, sales:120000, rate:4.6, tag:'', desc:'Tensor G5｜AI影像｜48MP多摄｜7年系统更新｜钛金属', brand:'Google', stock:4500, prime:false },
  { id:12, name:'一加 13', cat:'数码', sub:'手机', emoji:'📱', price:4599, orig:5299, sales:340000, rate:4.6, tag:'', desc:'骁龙8 Elite｜哈苏影像｜6000mAh｜100W快充｜2K东方屏', brand:'OnePlus', stock:8900, prime:true },
  // 数码 · 平板
  { id:13, name:'iPad Pro M4 13" (2026)', cat:'数码', sub:'平板', emoji:'📱', price:8799, orig:9499, sales:450000, rate:4.9, tag:'Amazon Choice', desc:'M4芯片｜双层串联OLED｜5.1mm超薄｜Apple Pencil Pro｜雷雳4', brand:'Apple', stock:6000, prime:true },
  { id:14, name:'iPad Air M3 11"', cat:'数码', sub:'平板', emoji:'📱', price:4799, orig:5499, sales:680000, rate:4.7, tag:'Best Seller', desc:'M3芯片｜Liquid Retina屏｜Apple Pencil Pro｜轻薄长续航', brand:'Apple', stock:15000, prime:true },
  { id:15, name:'华为 MatePad Pro 13.2"', cat:'数码', sub:'平板', emoji:'📱', price:4999, orig:5799, sales:290000, rate:4.7, tag:'', desc:'柔性OLED｜天生会画｜星闪手写笔｜HarmonyOS 5.0｜PC级WPS', brand:'Huawei', stock:4500, prime:true },
  { id:16, name:'Samsung Galaxy Tab S10+', cat:'数码', sub:'平板', emoji:'📱', price:6999, orig:7999, sales:150000, rate:4.6, tag:'', desc:'14.6" Dynamic AMOLED｜S Pen｜MediaTek Dimensity｜IP68', brand:'Samsung', stock:3200, prime:true },
  // 数码 · 手表
  { id:17, name:'Apple Watch Ultra 3', cat:'数码', sub:'手表', emoji:'⌚', price:5999, orig:6999, sales:230000, rate:4.8, tag:'Amazon Choice', desc:'49mm钛金属｜100m防水｜深度计｜双频GPS｜36h续航', brand:'Apple', stock:3200, prime:true },
  { id:18, name:'Apple Watch Series 10', cat:'数码', sub:'手表', emoji:'⌚', price:2999, orig:3499, sales:890000, rate:4.7, tag:'Best Seller', desc:'46mm｜速充｜睡眠呼吸暂停检测｜车祸检测｜Always-On', brand:'Apple', stock:12000, prime:true },
  { id:19, name:'华为 GT 5 Pro', cat:'数码', sub:'手表', emoji:'⌚', price:2699, orig:3299, sales:680000, rate:4.8, tag:'Best Seller', desc:'钛合金｜ECG心电｜高尔夫球场｜14天续航｜百种运动', brand:'Huawei', stock:7800, prime:true },
  { id:20, name:'小米手环 9 Pro', cat:'数码', sub:'手表', emoji:'⌚', price:299, orig:399, sales:2500000, rate:4.6, tag:'Best Seller', desc:'1.74"AMOLED｜21天续航｜独立GPS｜150+运动模式', brand:'Xiaomi', stock:45000, prime:true },
  // 数码 · 笔记本
  { id:21, name:'MacBook Pro 16" M4 Max', cat:'数码', sub:'笔记本', emoji:'💻', price:19999, orig:22999, sales:180000, rate:4.9, tag:'Amazon Choice', desc:'M4 Max 16核｜48GB内存｜1TB SSD｜Liquid Retina XDR｜22h续航', brand:'Apple', stock:1800, prime:true },
  { id:22, name:'MacBook Air M4 13"', cat:'数码', sub:'笔记本', emoji:'💻', price:8499, orig:9499, sales:560000, rate:4.8, tag:'Best Seller', desc:'M4芯片｜18h续航｜2.8K Liquid Retina｜轻薄1.24kg｜午夜色', brand:'Apple', stock:8900, prime:true },
  { id:23, name:'ROG 枪神9 Plus', cat:'数码', sub:'笔记本', emoji:'💻', price:14999, orig:17999, sales:89000, rate:4.7, tag:'', desc:'i9-14900HX｜RTX 5080｜32GB DDR5｜2TB SSD｜18寸2.5K 240Hz', brand:'ASUS', stock:1200, prime:true },
  // 数码 · 外设
  { id:24, name:'Logitech MX Master 3S', cat:'数码', sub:'外设', emoji:'🖱️', price:699, orig:899, sales:560000, rate:4.7, tag:'Amazon Choice', desc:'8K DPI｜静音点击｜电磁滚轮｜多设备连接｜人体工学', brand:'Logitech', stock:6700, prime:true },
  { id:25, name:'罗技 G Pro X Superlight 2', cat:'数码', sub:'外设', emoji:'🖱️', price:1099, orig:1499, sales:150000, rate:4.7, tag:'', desc:'60g超轻｜HERO 2｜无线2kHz｜LIGHTFORCE微动｜职业电竞', brand:'Logitech', stock:2800, prime:true },
  { id:26, name:'ROG 龙骑士2 机械键盘', cat:'数码', sub:'外设', emoji:'⌨️', price:1599, orig:1999, sales:89000, rate:4.8, tag:'', desc:'磁轴可调键程｜OLED屏｜PBT｜RX光轴｜可分离掌托', brand:'ASUS', stock:1500, prime:false },
  { id:27, name:'京东京造 G96 机械键盘', cat:'数码', sub:'外设', emoji:'⌨️', price:199, orig:329, sales:560000, rate:4.5, tag:'Best Seller', desc:'Gasket结构｜全键热插拔｜三模连接｜PBT键帽｜RGB', brand:'JD', stock:12000, prime:true },
  // 数码 · 配件
  { id:28, name:'Anker 737 充电宝 24000mAh', cat:'数码', sub:'配件', emoji:'🔋', price:299, orig:449, sales:450000, rate:4.7, tag:'Amazon Choice', desc:'140W双向快充｜智能数显｜三口同充｜飞机可带', brand:'Anker', stock:8900, prime:true },
  { id:29, name:'小米 GaN 67W 充电器', cat:'数码', sub:'配件', emoji:'🔌', price:99, orig:149, sales:1200000, rate:4.5, tag:'Best Seller', desc:'氮化镓｜67W｜2C1A｜兼容QC/PD/PPS｜笔记本充电', brand:'Xiaomi', stock:34000, prime:true },
  { id:30, name:'DJI Osmo Pocket 3', cat:'数码', sub:'配件', emoji:'📷', price:3499, orig:3999, sales:98000, rate:4.8, tag:'', desc:'1英寸CMOS｜4K/120fps｜2寸旋转屏｜三轴云台｜Vlog神器', brand:'DJI', stock:1800, prime:true },
  { id:31, name:'Switch 2 游戏主机', cat:'数码', sub:'配件', emoji:'🎮', price:2999, orig:3499, sales:450000, rate:4.7, tag:'Best Seller', desc:'7.9寸OLED｜256GB｜可拆卸手柄｜4K输出｜向下兼容', brand:'Nintendo', stock:8900, prime:false },
  { id:32, name:'Kindle Scribe 2026', cat:'数码', sub:'配件', emoji:'📖', price:2399, orig:2799, sales:120000, rate:4.6, tag:'', desc:'10.2寸电子墨水｜手写笔｜笔记+阅读｜防水｜超长续航', brand:'Amazon', stock:3400, prime:true },

  // ======================== 服饰 · 上衣 ========================
  { id:33, name:'Uniqlo AIRism 棉质T恤', cat:'服饰', sub:'上衣', emoji:'👕', price:79, orig:129, sales:3200000, rate:4.5, tag:'Best Seller', desc:'AIRism科技面料｜吸汗速干｜柔软亲肤｜12色可选｜男女同款', brand:'Uniqlo', stock:56000, prime:true },
  { id:34, name:'Nike Dri-FIT 运动T恤', cat:'服饰', sub:'上衣', emoji:'👕', price:199, orig:299, sales:890000, rate:4.6, tag:'Amazon Choice', desc:'Dri-FIT速干｜透气网眼｜反光细节｜经典Swoosh', brand:'Nike', stock:12000, prime:true },
  { id:35, name:'Uniqlo 休闲衬衫 免烫', cat:'服饰', sub:'上衣', emoji:'👔', price:149, orig:249, sales:560000, rate:4.4, tag:'', desc:'免烫工艺｜柔软棉质｜修身版型｜通勤商务百搭', brand:'Uniqlo', stock:8900, prime:true },
  { id:36, name:'Tommy Hilfiger Polo 衫', cat:'服饰', sub:'上衣', emoji:'👕', price:499, orig:799, sales:230000, rate:4.5, tag:'', desc:'经典Polo｜珠地棉面料｜刺绣logo｜美式休闲风', brand:'Tommy', stock:5600, prime:false },
  { id:37, name:'优衣库 轻薄羽绒服', cat:'服饰', sub:'上衣', emoji:'🧥', price:399, orig:599, sales:1200000, rate:4.6, tag:'Best Seller', desc:'750蓬松度｜轻量保暖｜防水面料｜可收纳设计', brand:'Uniqlo', stock:12000, prime:true },
  { id:38, name:'The North Face 冲锋衣', cat:'服饰', sub:'上衣', emoji:'🧥', price:1299, orig:1899, sales:340000, rate:4.7, tag:'Amazon Choice', desc:'GORE-TEX｜防水透气｜防风保暖｜户外专业级', brand:'TNF', stock:4500, prime:true },
  // 服饰 · 下装
  { id:39, name:'Levi\'s 501 经典牛仔裤', cat:'服饰', sub:'下装', emoji:'👖', price:599, orig:899, sales:450000, rate:4.7, tag:'Best Seller', desc:'直筒经典版型｜原色丹宁｜铜扣拉链｜纯棉养牛仔裤', brand:'Levi\'s', stock:5600, prime:true },
  { id:40, name:'Uniqlo 弹力运动裤', cat:'服饰', sub:'下装', emoji:'👖', price:199, orig:299, sales:1200000, rate:4.5, tag:'Best Seller', desc:'四面弹力｜吸汗速干｜收口设计｜松紧腰带｜全能裤', brand:'Uniqlo', stock:23000, prime:true },
  { id:41, name:'Lululemon Align 瑜伽裤', cat:'服饰', sub:'下装', emoji:'👖', price:799, orig:1099, sales:890000, rate:4.8, tag:'Amazon Choice', desc:'Nulu面料｜裸感亲肤｜4向弹力｜高腰设计｜瑜伽健身', brand:'Lululemon', stock:4500, prime:true },
  // 服饰 · 鞋
  { id:42, name:'Nike Air Force 1 \'07', cat:'服饰', sub:'鞋', emoji:'👟', price:699, orig:899, sales:2500000, rate:4.7, tag:'Best Seller', desc:'经典纯白｜气垫缓震｜真皮鞋面｜潮流百搭永不过时', brand:'Nike', stock:34000, prime:true },
  { id:43, name:'Adidas Ultraboost Light', cat:'服饰', sub:'鞋', emoji:'👟', price:1099, orig:1499, sales:680000, rate:4.8, tag:'Amazon Choice', desc:'BOOST缓震｜Primeknit鞋面｜马牌橡胶｜跑步王者', brand:'Adidas', stock:7800, prime:true },
  { id:44, name:'New Balance 990v6', cat:'服饰', sub:'鞋', emoji:'👟', price:1399, orig:1799, sales:340000, rate:4.6, tag:'', desc:'美产经典｜ENCAP缓震｜猪皮绒面｜复古跑鞋标杆', brand:'New Balance', stock:3400, prime:false },
  { id:45, name:'Crocs 经典洞洞鞋', cat:'服饰', sub:'鞋', emoji:'🩴', price:299, orig:499, sales:1800000, rate:4.4, tag:'Best Seller', desc:'Croslite材质轻量｜可旋转后跟带｜可加智必星｜夏日必备', brand:'Crocs', stock:28000, prime:true },
  // 服饰 · 包
  { id:46, name:'Fjällräven Kånken 双肩包', cat:'服饰', sub:'包', emoji:'🎒', price:599, orig:799, sales:560000, rate:4.6, tag:'Amazon Choice', desc:'瑞典经典｜Vinylon F耐磨｜方形设计｜坐垫功能｜16L', brand:'Fjällräven', stock:8900, prime:true },
  { id:47, name:'Herschel Classic 双肩包', cat:'服饰', sub:'包', emoji:'🎒', price:399, orig:598, sales:230000, rate:4.5, tag:'', desc:'复古设计｜条纹内衬｜加厚肩垫｜电脑夹层｜23L', brand:'Herschel', stock:4500, prime:true },
  // 服饰 · 配饰
  { id:48, name:'Ray-Ban Aviator 太阳镜', cat:'服饰', sub:'配饰', emoji:'🕶️', price:1280, orig:1680, sales:340000, rate:4.7, tag:'Amazon Choice', desc:'经典RB3025｜偏光镜片｜金属镜框｜双梁设计｜明星同款', brand:'Ray-Ban', stock:3400, prime:true },
  { id:49, name:'Casio G-SHOCK DW-5600', cat:'服饰', sub:'配饰', emoji:'⌚', price:890, orig:1290, sales:890000, rate:4.6, tag:'Best Seller', desc:'200m防水｜防震｜LED照明｜秒表｜经典耐用神表', brand:'Casio', stock:12000, prime:true },
  { id:50, name:'MLB 经典棒球帽', cat:'服饰', sub:'配饰', emoji:'🧢', price:199, orig:329, sales:1500000, rate:4.5, tag:'Best Seller', desc:'NY/LA logo｜纯棉｜可调节｜软顶弯檐｜街拍神器', brand:'MLB', stock:35000, prime:true },

  // ======================== 家居 ========================
  { id:51, name:'飞利浦 护眼台灯 国AA级', cat:'家居', sub:'灯具', emoji:'💡', price:399, orig:599, sales:890000, rate:4.7, tag:'Amazon Choice', desc:'国AA级照度｜无蓝光｜全光谱LED｜智能感应｜无可视频闪', brand:'Philips', stock:6700, prime:true },
  { id:52, name:'Yeelight 智能台灯 Pro', cat:'家居', sub:'灯具', emoji:'💡', price:199, orig:299, sales:1200000, rate:4.5, tag:'Best Seller', desc:'米家智能联动｜Ra95高显色｜色温亮度无极调节', brand:'Yeelight', stock:15000, prime:true },
  { id:53, name:'水星家纺 全棉四件套', cat:'家居', sub:'床品', emoji:'🛏️', price:299, orig:599, sales:2300000, rate:4.6, tag:'Best Seller', desc:'100%新疆棉｜60支高支高密｜亲肤细腻｜四季通用', brand:'水星家纺', stock:28000, prime:true },
  { id:54, name:'网易严选 乳胶枕', cat:'家居', sub:'床品', emoji:'🛏️', price:159, orig:259, sales:890000, rate:4.5, tag:'', desc:'93%天然乳胶｜波浪人体工学｜透气蜂窝｜防螨抑菌', brand:'NetEase', stock:12000, prime:true },
  { id:55, name:'无印良品 天竺棉床笠', cat:'家居', sub:'床品', emoji:'🛏️', price:249, orig:399, sales:450000, rate:4.4, tag:'', desc:'天竺棉针织｜柔软弹性｜全包裹床笠款｜A类婴幼标准', brand:'MUJI', stock:5600, prime:true },
  { id:56, name:'双立人 刀具8件套', cat:'家居', sub:'厨房', emoji:'🔪', price:599, orig:999, sales:340000, rate:4.7, tag:'Amazon Choice', desc:'德国不锈钢｜Friodur冰锻｜V-edge刀锋｜含刀座', brand:'Zwilling', stock:2300, prime:true },
  { id:57, name:'苏泊尔 不粘锅三件套', cat:'家居', sub:'厨房', emoji:'🍳', price:399, orig:699, sales:1500000, rate:4.5, tag:'Best Seller', desc:'麦饭石不粘｜少油烟｜轻量化｜电磁炉燃气通用', brand:'Supor', stock:8900, prime:true },
  { id:58, name:'小米 即热式饮水机', cat:'家居', sub:'厨房', emoji:'💧', price:349, orig:499, sales:780000, rate:4.6, tag:'Amazon Choice', desc:'3秒速热｜3L水箱｜多段温控｜童锁｜米家智能联动', brand:'Xiaomi', stock:12000, prime:true },
  { id:59, name:'观夏 昆仑煮雪晶石香薰', cat:'家居', sub:'香薰', emoji:'🕯️', price:189, orig:259, sales:230000, rate:4.8, tag:'', desc:'晶石扩香｜精油调配｜松木冷冽香｜手工玻璃瓶', brand:'观夏', stock:1200, prime:false },
  { id:60, name:'Aesop 芳香蜡烛', cat:'家居', sub:'香薰', emoji:'🕯️', price:299, orig:429, sales:89000, rate:4.7, tag:'', desc:'植物蜡+精油｜陶瓷杯身｜木质草本香｜燃烧50h', brand:'Aesop', stock:800, prime:false },
  { id:61, name:'IKEA 竹编落地灯', cat:'家居', sub:'灯具', emoji:'💡', price:249, orig:399, sales:560000, rate:4.4, tag:'', desc:'天然竹编｜暖光氛围｜日式侘寂风｜客厅卧室百搭', brand:'IKEA', stock:4500, prime:true },
  { id:62, name:'UGG 经典雪地靴', cat:'家居', sub:'拖鞋', emoji:'👢', price:1299, orig:1799, sales:340000, rate:4.7, tag:'Amazon Choice', desc:'羊皮毛一体｜UGGpure羊毛｜EVA大底｜经典栗色', brand:'UGG', stock:3400, prime:true },
  { id:63, name:'蕉下 防晒衣', cat:'家居', sub:'居家', emoji:'🧥', price:159, orig:259, sales:1200000, rate:4.5, tag:'Best Seller', desc:'UPF50+｜冰感凉感｜轻薄透气｜原纱防晒｜夏日必备', brand:'蕉下', stock:23000, prime:true },
  { id:64, name:'Dyson V15 Detect 吸尘器', cat:'家居', sub:'清洁', emoji:'🧹', price:4590, orig:5490, sales:340000, rate:4.8, tag:'Amazon Choice', desc:'激光探测｜压电传感器｜230AW吸力｜LCD屏｜60min续航', brand:'Dyson', stock:2800, prime:true },
  { id:65, name:'科沃斯 X5 扫拖一体机', cat:'家居', sub:'清洁', emoji:'🤖', price:3999, orig:4999, sales:560000, rate:4.6, tag:'Best Seller', desc:'AI避障｜8000Pa吸力｜自动洗拖布｜热风烘干｜全链路除菌', brand:'ECOVACS', stock:4500, prime:true },
  { id:66, name:'美的 空气炸锅 5.5L', cat:'家居', sub:'厨房', emoji:'🍟', price:299, orig:449, sales:2300000, rate:4.5, tag:'Best Seller', desc:'360°热风循环｜少油健康｜智能菜单｜不粘内胆', brand:'Midea', stock:23000, prime:true },
  { id:67, name:'北鼎 养生壶', cat:'家居', sub:'厨房', emoji:'🫖', price:399, orig:599, sales:560000, rate:4.6, tag:'', desc:'高硼硅玻璃｜多段温控｜预约功能｜煮茶炖汤皆可', brand:'北鼎', stock:8900, prime:true },

  // ======================== 美食 ========================
  { id:68, name:'三只松鼠 每日坚果30包', cat:'美食', sub:'零食', emoji:'🥜', price:79, orig:139, sales:5600000, rate:4.5, tag:'Best Seller', desc:'6坚果3果干｜干湿分离锁鲜｜750g｜早餐健康零食', brand:'三只松鼠', stock:78000, prime:true },
  { id:69, name:'良品铺子 肉脯大礼包', cat:'美食', sub:'零食', emoji:'🥓', price:69, orig:119, sales:2300000, rate:4.4, tag:'', desc:'猪肉脯+牛肉干+肉松饼｜独立小包｜追剧零食', brand:'良品铺子', stock:24000, prime:true },
  { id:70, name:'乐事 薯片大礼包12包', cat:'美食', sub:'零食', emoji:'🥔', price:59, orig:99, sales:8900000, rate:4.3, tag:'Best Seller', desc:'原味+番茄+烧烤+青柠｜大包装｜聚会必备', brand:'Lay\'s', stock:120000, prime:true },
  { id:71, name:'好利来 半熟芝士5枚装', cat:'美食', sub:'糕点', emoji:'🧀', price:89, orig:129, sales:3400000, rate:4.7, tag:'Best Seller', desc:'北海道轻乳酪｜半熟工艺｜入口即化｜原味抹茶双拼', brand:'好利来', stock:15000, prime:true },
  { id:72, name:'鲍师傅 肉松小贝4枚', cat:'美食', sub:'糕点', emoji:'🥮', price:39, orig:59, sales:1200000, rate:4.6, tag:'', desc:'现做海苔肉松｜松软蛋糕｜沙拉酱夹心｜经典原味', brand:'鲍师傅', stock:8000, prime:false },
  { id:73, name:'稻香村 京八件礼盒', cat:'美食', sub:'糕点', emoji:'🎁', price:168, orig:238, sales:560000, rate:4.5, tag:'', desc:'8种京味糕点｜精美铁盒｜中华老字号｜送礼佳品', brand:'稻香村', stock:4500, prime:true },
  { id:74, name:'Starbucks 咖啡豆 中度烘焙', cat:'美食', sub:'咖啡', emoji:'☕', price:129, orig:179, sales:890000, rate:4.6, tag:'', desc:'哥伦比亚单一产地｜阿拉比卡｜200g｜香草坚果风味', brand:'Starbucks', stock:8900, prime:true },
  { id:75, name:'三顿半 精品速溶咖啡24颗', cat:'美食', sub:'咖啡', emoji:'☕', price:89, orig:139, sales:2300000, rate:4.7, tag:'Best Seller', desc:'超即溶｜3秒速溶｜数字系列1-6号｜24颗｜冷热水皆可', brand:'三顿半', stock:34000, prime:true },
  { id:76, name:'隅田川 浓缩咖啡液12颗', cat:'美食', sub:'咖啡', emoji:'☕', price:49, orig:79, sales:5600000, rate:4.4, tag:'Best Seller', desc:'0糖0脂｜常温保存｜即开即饮｜搭配牛奶yyds', brand:'隅田川', stock:67000, prime:true },
  { id:77, name:'小罐茶 龙井礼盒20罐', cat:'美食', sub:'茶', emoji:'🍵', price:499, orig:699, sales:230000, rate:4.6, tag:'', desc:'明前龙井｜西湖产区｜一罐一泡｜铝罐锁鲜', brand:'小罐茶', stock:1200, prime:false },
  { id:78, name:'Chali 蜜桃乌龙茶15包', cat:'美食', sub:'茶', emoji:'🍵', price:39, orig:59, sales:1800000, rate:4.4, tag:'', desc:'蜜桃果粒+乌龙茶｜三角茶包｜0糖0卡｜冷泡热泡', brand:'Chali', stock:28000, prime:true },
  { id:79, name:'蒙牛 纯牛奶250ml×24', cat:'美食', sub:'冲饮', emoji:'🥛', price:59, orig:79, sales:12000000, rate:4.3, tag:'Best Seller', desc:'3.2g乳蛋白｜优质奶源｜整箱家庭装', brand:'蒙牛', stock:120000, prime:true },
  { id:80, name:'OATLY 燕麦奶1L×2', cat:'美食', sub:'冲饮', emoji:'🥛', price:49, orig:69, sales:890000, rate:4.5, tag:'Amazon Choice', desc:'咖啡大师｜0乳糖｜植物基｜搭配咖啡绝配', brand:'OATLY', stock:15000, prime:true },
  { id:81, name:'茅台 飞天53度500ml', cat:'美食', sub:'酒', emoji:'🍶', price:2999, orig:3499, sales:450000, rate:4.9, tag:'Best Seller', desc:'酱香型｜大曲坤沙｜酱香突出｜优雅细腻｜收藏送礼', brand:'茅台', stock:5000, prime:false },
  { id:82, name:'Penfolds Bin389 红酒', cat:'美食', sub:'酒', emoji:'🍷', price:588, orig:788, sales:230000, rate:4.7, tag:'', desc:'澳洲原瓶进口｜赤霞珠设拉子｜浓郁果香｜单宁优雅', brand:'Penfolds', stock:3400, prime:false },
  { id:83, name:'RIO 微醺鸡尾酒8罐', cat:'美食', sub:'酒', emoji:'🥂', price:59, orig:89, sales:5600000, rate:4.3, tag:'Best Seller', desc:'3%vol微醺｜白桃+葡萄+柠檬｜果汁调配｜女士专属', brand:'RIO', stock:78000, prime:true },
  { id:84, name:'厄瓜多尔白虾2kg', cat:'美食', sub:'生鲜', emoji:'🦐', price:99, orig:159, sales:2300000, rate:4.5, tag:'Best Seller', desc:'厄瓜多尔进口｜盐冻工艺｜鲜活速冻｜冷链配送', brand:'京东生鲜', stock:15000, prime:true },
  { id:85, name:'澳洲M5 和牛牛排200g×2', cat:'美食', sub:'生鲜', emoji:'🥩', price:199, orig:299, sales:560000, rate:4.7, tag:'Amazon Choice', desc:'草饲谷饲｜M5雪花油花｜原切无腌制｜冷链直达', brand:'澳洲和牛', stock:4500, prime:true },
  { id:86, name:'佳沛 阳光金奇异果12粒', cat:'美食', sub:'生鲜', emoji:'🥝', price:69, orig:99, sales:4500000, rate:4.4, tag:'', desc:'新西兰进口｜大果｜VC满满｜酸甜可口', brand:'Zespri', stock:23000, prime:true },
  { id:87, name:'费列罗 巧克力礼盒48粒', cat:'美食', sub:'零食', emoji:'🍫', price:169, orig:239, sales:1200000, rate:4.6, tag:'Best Seller', desc:'意大利进口｜榛果威化｜金色包装｜节日送礼首选', brand:'Ferrero', stock:12000, prime:true },
  { id:88, name:'德芙 丝滑牛奶巧克力', cat:'美食', sub:'零食', emoji:'🍫', price:29, orig:49, sales:8900000, rate:4.3, tag:'Best Seller', desc:'丝滑口感｜纯可可脂｜分享装大包｜宅家甜宠', brand:'Dove', stock:89000, prime:true },
  { id:89, name:'Godiva 巧克力礼盒12颗', cat:'美食', sub:'零食', emoji:'🍫', price:369, orig:499, sales:230000, rate:4.7, tag:'', desc:'比利时皇室御用｜松露夹心｜精美礼盒｜高端送礼', brand:'Godiva', stock:3400, prime:false },
  { id:90, name:'可口可乐 迷你罐24罐', cat:'美食', sub:'冲饮', emoji:'🥤', price:49, orig:69, sales:15000000, rate:4.2, tag:'Best Seller', desc:'迷你200ml×24｜经典原味｜聚会畅饮｜冰箱常备', brand:'Coca-Cola', stock:180000, prime:true },

  // ======================== 美妆 ========================
  { id:91, name:'SK-II 护肤精华露 230ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:1590, orig:1790, sales:890000, rate:4.8, tag:'Best Seller', desc:'90%+ PITERA™｜水油平衡｜细腻毛孔｜日本原装进口', brand:'SK-II', stock:5600, prime:true },
  { id:92, name:'Lancôme 小黑瓶精华 50ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:1080, orig:1280, sales:560000, rate:4.7, tag:'Amazon Choice', desc:'二裂酵母精华｜修护肌底｜增强屏障｜全球畅销精华', brand:'Lancôme', stock:3400, prime:true },
  { id:93, name:'Estée Lauder DW 粉底液', cat:'美妆', sub:'彩妆', emoji:'💄', price:399, orig:499, sales:1200000, rate:4.6, tag:'Best Seller', desc:'24h持妆｜遮瑕控油｜油皮亲妈｜SPF10｜多色号', brand:'Estée Lauder', stock:8900, prime:true },
  { id:94, name:'Dior 烈艳蓝金唇膏 #999', cat:'美妆', sub:'彩妆', emoji:'💄', price:359, orig:429, sales:2500000, rate:4.7, tag:'Best Seller', desc:'传奇正红色｜缎光/哑光｜蓝调正红｜气场女王色', brand:'Dior', stock:18000, prime:true },
  { id:95, name:'La Mer 精华面霜 60ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:2680, orig:2980, sales:230000, rate:4.9, tag:'Amazon Choice', desc:'神奇活性精萃Miracle Broth™｜修护滋润抗老', brand:'La Mer', stock:1200, prime:true },
  { id:96, name:'Shiseido 红腰子精华 50ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:690, orig:890, sales:450000, rate:4.6, tag:'', desc:'ULTIMUNE肌底液｜增强免疫力｜改善暗沉维稳', brand:'Shiseido', stock:4500, prime:true },
  { id:97, name:'HR 赫莲娜黑绷带 50ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:3480, orig:3880, sales:180000, rate:4.9, tag:'', desc:'30%玻色因｜修护抗老｜紧致提拉｜丝绒质地', brand:'HR', stock:800, prime:false },
  { id:98, name:'Tom Ford 四色眼影盘 #20', cat:'美妆', sub:'彩妆', emoji:'🎨', price:699, orig:899, sales:340000, rate:4.7, tag:'', desc:'Disco Dust蜜桃盘｜显色不飞粉｜高级配色', brand:'Tom Ford', stock:2200, prime:false },
  { id:99, name:'CPB 长管隔离 36ml', cat:'美妆', sub:'彩妆', emoji:'🧴', price:469, orig:569, sales:780000, rate:4.7, tag:'Best Seller', desc:'光凝妆前乳｜转油光为光泽｜隐形毛孔｜自然提亮', brand:'CPB', stock:5600, prime:true },
  { id:100, name:'雪花秀 滋阴水乳套装', cat:'美妆', sub:'护肤', emoji:'🧴', price:599, orig:899, sales:560000, rate:4.5, tag:'', desc:'韩方草本｜去黄提亮｜保湿滋养｜礼盒装送礼佳品', brand:'Sulwhasoo', stock:3400, prime:true },
  { id:101, name:'L\'Oréal 紫熨斗眼霜 30ml', cat:'美妆', sub:'护肤', emoji:'👁️', price:159, orig:229, sales:3400000, rate:4.4, tag:'Best Seller', desc:'玻色因+咖啡因｜淡化眼纹｜全脸可用｜平价天花板', brand:'L\'Oréal', stock:34000, prime:true },
  { id:102, name:'MAC 子弹头口红 #Chili', cat:'美妆', sub:'彩妆', emoji:'💄', price:149, orig:219, sales:5600000, rate:4.5, tag:'Best Seller', desc:'经典小辣椒砖红色｜哑光质地｜显白不挑皮', brand:'MAC', stock:45000, prime:true },
  { id:103, name:'Kiehl\'s 高保湿面霜125ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:399, orig:529, sales:1200000, rate:4.5, tag:'Best Seller', desc:'角鲨烷｜冰川保护蛋白｜24h保湿｜干皮救星', brand:'Kiehl\'s', stock:12000, prime:true },
  { id:104, name:'雅诗兰黛 小棕瓶精华100ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:1299, orig:1499, sales:890000, rate:4.7, tag:'Amazon Choice', desc:'Chronolux Power Signal｜夜间修护｜抗老精华', brand:'Estée Lauder', stock:5600, prime:true },
  { id:105, name:'兰蔻 粉水400ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:359, orig:479, sales:2600000, rate:4.4, tag:'Best Seller', desc:'干皮亲妈｜补水保湿｜舒缓肌肤｜大容量超值', brand:'Lancôme', stock:23000, prime:true },
  { id:106, name:'OLAY 小白瓶精华40ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:219, orig:329, sales:4500000, rate:4.4, tag:'Best Seller', desc:'烟酰胺+革糖素｜美白淡斑｜透亮肌肤｜性价比之王', brand:'OLAY', stock:45000, prime:true },
  { id:107, name:'NARS 超持久粉底液', cat:'美妆', sub:'彩妆', emoji:'💄', price:399, orig:529, sales:560000, rate:4.5, tag:'', desc:'16h持妆｜中高遮瑕｜自然光泽｜控油不卡粉', brand:'NARS', stock:6700, prime:true },
  { id:108, name:'YSL 小金条口红 #21', cat:'美妆', sub:'彩妆', emoji:'💄', price:369, orig:449, sales:890000, rate:4.6, tag:'', desc:'复古正红｜哑光｜方管设计｜高级感满满', brand:'YSL', stock:8900, prime:true },
  { id:109, name:'理肤泉 B5修复霜40ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:89, orig:139, sales:5600000, rate:4.6, tag:'Best Seller', desc:'泛醇B5｜积雪草苷｜修护屏障｜敏感肌必备', brand:'La Roche-Posay', stock:45000, prime:true },
  { id:110, name:'科颜氏 白泥面膜125ml', cat:'美妆', sub:'护肤', emoji:'🧴', price:299, orig:399, sales:1800000, rate:4.5, tag:'Best Seller', desc:'亚马逊白泥｜深层清洁｜去黑头｜控油收毛孔', brand:'Kiehl\'s', stock:15000, prime:true },
  { id:111, name:'Aesop 香芹籽抗氧化精华', cat:'美妆', sub:'护肤', emoji:'🧴', price:599, orig:799, sales:230000, rate:4.6, tag:'', desc:'香芹籽+芦荟｜抗氧化｜保湿不油腻｜清爽精华', brand:'Aesop', stock:1800, prime:false },
  { id:112, name:'Whoo 后 天气丹套装', cat:'美妆', sub:'护肤', emoji:'🧴', price:1280, orig:1680, sales:340000, rate:4.7, tag:'', desc:'宫廷韩方精华｜抗老修复｜滋养补水｜奢华礼盒', brand:'Whoo', stock:1200, prime:false },

  // ======================== 母婴 ========================
  { id:113, name:'Pampers 帮宝适 纸尿裤XL136', cat:'母婴', sub:'纸尿裤', emoji:'👶', price:199, orig:289, sales:5600000, rate:4.5, tag:'Best Seller', desc:'超薄透气｜整夜干爽｜蚕丝感｜12h锁水｜不红屁屁', brand:'Pampers', stock:45000, prime:true },
  { id:114, name:'Huggies 好奇 小森林纸尿裤', cat:'母婴', sub:'纸尿裤', emoji:'👶', price:219, orig:329, sales:3400000, rate:4.6, tag:'Amazon Choice', desc:'植物触感｜天然棉感｜超强吸收｜0致敏', brand:'Huggies', stock:23000, prime:true },
  { id:115, name:'Aptamil 爱他美 卓傲3段800g', cat:'母婴', sub:'奶粉', emoji:'🍼', price:299, orig:399, sales:2300000, rate:4.6, tag:'Best Seller', desc:'纽迪希亚出品｜益生元GOS/FOS｜DHA｜欧洲原装', brand:'Aptamil', stock:12000, prime:true },
  { id:116, name:'飞鹤 星飞帆 3段700g', cat:'母婴', sub:'奶粉', emoji:'🍼', price:259, orig:329, sales:4500000, rate:4.5, tag:'Best Seller', desc:'国产大牌｜新鲜生牛乳｜OPO结构脂｜更适合中国宝宝', brand:'飞鹤', stock:34000, prime:true },
  { id:117, name:'Babycare 婴儿湿巾80抽×12', cat:'母婴', sub:'用品', emoji:'🧻', price:59, orig:99, sales:8900000, rate:4.4, tag:'Best Seller', desc:'EDI纯水｜无酒精｜无香精｜加厚珍珠纹｜手口可用', brand:'Babycare', stock:67000, prime:true },

  // ======================== 运动户外 ========================
  { id:118, name:'Nike Air Zoom Pegasus 42', cat:'运动', sub:'跑鞋', emoji:'👟', price:899, orig:1199, sales:560000, rate:4.7, tag:'Amazon Choice', desc:'ZoomX+Air双缓震｜React泡棉｜轻量透气｜日常训练', brand:'Nike', stock:8900, prime:true },
  { id:119, name:'Adidas 4DFWD 跑鞋', cat:'运动', sub:'跑鞋', emoji:'👟', price:1299, orig:1699, sales:230000, rate:4.5, tag:'', desc:'4D打印中底｜数据驱动设计｜能量回弹｜未来科技', brand:'Adidas', stock:3400, prime:false },
  { id:120, name:'Lululemon 运动背心', cat:'运动', sub:'运动服', emoji:'🎽', price:399, orig:529, sales:450000, rate:4.6, tag:'', desc:'Nulu™面料｜轻盈裸感｜瑜伽健身｜交叉美背', brand:'Lululemon', stock:5600, prime:true },
  { id:121, name:'Yeti 保温杯 750ml', cat:'运动', sub:'户外', emoji:'🥤', price:289, orig:399, sales:890000, rate:4.7, tag:'Best Seller', desc:'不锈钢真空｜保冷24h/保温12h｜不结露｜户外首选', brand:'Yeti', stock:12000, prime:true },
  { id:122, name:'Stanley 保温杯 1.4L', cat:'运动', sub:'户外', emoji:'🥤', price:299, orig:429, sales:1200000, rate:4.6, tag:'Best Seller', desc:'经典锤纹绿｜大容量｜保冷24h｜车载杯座｜网红款', brand:'Stanley', stock:23000, prime:true },
  // ======================== 图书 ========================
  { id:123, name:'《三体》全套3册 刘慈欣', cat:'图书', sub:'小说', emoji:'📚', price:89, orig:138, sales:8900000, rate:4.9, tag:'Best Seller', desc:'雨果奖获奖作品｜中国科幻巅峰｜降维打击经典', brand:'重庆出版社', stock:34000, prime:true },
  { id:124, name:'《人类简史》尤瓦尔·赫拉利', cat:'图书', sub:'人文', emoji:'📚', price:49, orig:79, sales:5600000, rate:4.6, tag:'Best Seller', desc:'从动物到上帝｜全球畅销2500万册｜刷新世界观', brand:'中信出版社', stock:23000, prime:true },
  { id:125, name:'《原子习惯》詹姆斯·克利尔', cat:'图书', sub:'自助', emoji:'📚', price:38, orig:59, sales:7800000, rate:4.7, tag:'Amazon Choice', desc:'细微改变带来巨大成就｜纽约时报畅销榜No.1', brand:'方智出版社', stock:45000, prime:true },
];
