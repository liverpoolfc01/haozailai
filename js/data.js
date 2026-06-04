// ============================================
// 甜甜商城 🍬 - 商品数据（京东热销版 60+件）
// ============================================

const SHOP_DATA = {
  banners: [
    { img: '🎉', title: '618 年中大促', subtitle: '全场低至3折 万店狂欢', color: '#e1251b' },
    { img: '📱', title: '数码狂欢趴', subtitle: '新品首发 限时直降 最高省2000', color: '#7c3aed' },
    { img: '🏠', title: '家居家装节', subtitle: '焕新生活 每满300减50', color: '#10b981' },
    { img: '🍪', title: '美食嘉年华', subtitle: '舌尖上的甜蜜 满199减30', color: '#f59e0b' },
  ],

  flashSale: {
    endTime: Date.now() + 7200 * 1000,
    items: [
      { id: 1, name: '无线降噪耳机 Pro', emoji: '🎧', price: 299, original: 499 },
      { id: 6, name: '纯棉印花T恤', emoji: '👕', price: 59, original: 139 },
      { id: 19, name: '机械键盘', emoji: '⌨️', price: 169, original: 299 },
      { id: 14, name: '挂耳咖啡', emoji: '☕', price: 29, original: 79 },
    ]
  },

  products: [
    // ==================== 数码 (20件) ====================
    // 耳机
    { id: 1, name: '索尼WH-1000XM5 降噪耳机', cat: '数码', sub: '耳机', emoji: '🎧', price: 2499, original: 2999, sales: 185000, rating: 4.9, tags: ['HOT','爆款'], desc: '旗舰级降噪｜30小时续航｜佩戴感应｜LDAC高清传输｜多麦克风降噪通话｜京东20万+好评', specs: '品牌: Sony\n续航: 30h\n降噪: 自适应AI降噪\n驱动: 30mm\n重量: 250g', stock: 1200 },
    { id: 2, name: 'AirPods Pro 2 无线耳机', cat: '数码', sub: '耳机', emoji: '🎧', price: 1699, original: 1999, sales: 520000, rating: 4.8, tags: ['爆款'], desc: 'H2芯片｜自适应降噪｜通透模式｜USB-C充电｜IPX4防水｜空间音频｜查找网络', specs: '品牌: Apple\n芯片: H2\n防水: IPX4\n充电: USB-C/MagSafe\n续航: 6h+30h', stock: 5600 },
    { id: 3, name: '华为FreeBuds Pro 3', cat: '数码', sub: '耳机', emoji: '🎧', price: 1199, original: 1499, sales: 278000, rating: 4.7, tags: ['HOT'], desc: '麒麟A2芯片｜超感知降噪｜星闪连接｜三重听感｜46dB降噪｜超长续航31h', specs: '品牌: 华为\n芯片: 麒麟A2\n降噪: 46dB\n续航: 7h+24h\n连接: 星闪', stock: 3400 },
    { id: 4, name: '漫步者W820NB头戴耳机', cat: '数码', sub: '耳机', emoji: '🎧', price: 349, original: 499, sales: 890000, rating: 4.6, tags: ['爆款'], desc: '主动降噪｜Hi-Res金标｜40h续航｜蓝牙5.3｜可折叠便携｜百元级降噪天花板', specs: '品牌: 漫步者\n续航: 40h\n降噪: -38dB\n蓝牙: 5.3\n重量: 220g', stock: 8900 },

    // 手机
    { id: 5, name: 'iPhone 16 Pro Max', cat: '数码', sub: '手机', emoji: '📱', price: 9999, original: 10999, sales: 1200000, rating: 4.9, tags: ['HOT','新品'], desc: 'A18 Pro｜钛金属机身｜4800万主摄｜5倍光学变焦｜ProMotion 120Hz｜iOS 20', specs: '品牌: Apple\n芯片: A18 Pro\n屏幕: 6.9寸 OLED\n存储: 256GB/512GB/1TB\n颜色: 黑钛/白钛/原色', stock: 28000 },
    { id: 6, name: '华为Mate 70 Pro', cat: '数码', sub: '手机', emoji: '📱', price: 6999, original: 7999, sales: 890000, rating: 4.8, tags: ['HOT'], desc: '麒麟9100｜鸿蒙5.0｜XMAGE影像｜卫星通信｜5.5G｜昆仑玻璃｜超级快充100W', specs: '品牌: 华为\n芯片: 麒麟9100\n屏幕: 6.8寸 OLED\n存储: 256GB/512GB/1TB\n续航: 5000mAh+100W', stock: 15000 },
    { id: 7, name: '小米15 Ultra', cat: '数码', sub: '手机', emoji: '📱', price: 5999, original: 6999, sales: 560000, rating: 4.7, tags: ['新品'], desc: '骁龙8 Elite｜徕卡四摄1英寸大底｜6000mAh金沙江电池｜2K LTPO屏', specs: '品牌: 小米\n芯片: 骁龙8 Elite\n屏幕: 2K LTPO\n相机: 徕卡四摄\n电池: 6000mAh+90W', stock: 12000 },
    { id: 8, name: 'OPPO Find X8 Pro', cat: '数码', sub: '手机', emoji: '📱', price: 5299, original: 6299, sales: 340000, rating: 4.6, tags: [], desc: '天玑9500｜哈苏四摄｜无影抓拍｜5910mAh｜80W超级闪充｜Find旗舰', specs: '品牌: OPPO\n芯片: 天玑9500\n屏幕: 6.78寸 OLED\n相机: 哈苏四摄\n电池: 5910mAh+80W', stock: 8900 },

    // 平板
    { id: 9, name: 'iPad Pro M4 13寸', cat: '数码', sub: '平板', emoji: '📱', price: 8799, original: 9499, sales: 450000, rating: 4.9, tags: ['HOT'], desc: 'M4芯片双层串联OLED｜超极薄5.1mm｜Apple Pencil Pro｜面容ID｜雷雳4', specs: '品牌: Apple\n芯片: M4\n屏幕: 13寸 OLED\n存储: 256GB/512GB/1TB\n厚度: 5.1mm', stock: 6000 },
    { id: 10, name: '华为MatePad Pro 13.2', cat: '数码', sub: '平板', emoji: '📱', price: 4999, original: 5799, sales: 290000, rating: 4.7, tags: ['新品'], desc: '麒麟9100｜柔性OLED｜天生会画｜星闪手写笔｜HarmonyOS 5.0｜PC级WPS', specs: '品牌: 华为\n芯片: 麒麟9100\n屏幕: 13.2寸 OLED\n存储: 256GB/512GB\n手写笔: 星闪', stock: 4500 },

    // 手表
    { id: 11, name: 'Apple Watch Ultra 3', cat: '数码', sub: '手表', emoji: '⌚', price: 5999, original: 6999, sales: 230000, rating: 4.8, tags: ['HOT'], desc: '钛金属49mm｜100m防水｜深度计+水温传感器｜双频GPS｜36h续航｜精准定位', specs: '品牌: Apple\n屏幕: 49mm\n防水: 100m\n续航: 36h\n材质: 钛金属', stock: 3200 },
    { id: 12, name: '华为WATCH GT 5 Pro', cat: '数码', sub: '手表', emoji: '⌚', price: 2699, original: 3299, sales: 680000, rating: 4.8, tags: ['爆款'], desc: '钛合金表体｜高尔夫球场｜ECG心电分析｜14天续航｜百种运动模式', specs: '品牌: 华为\n屏幕: 1.43寸 AMOLED\n防水: 5ATM\n续航: 14天\n表体: 钛合金', stock: 7800 },
    { id: 13, name: '小米手环9 Pro', cat: '数码', sub: '手表', emoji: '⌚', price: 299, original: 399, sales: 2500000, rating: 4.6, tags: ['爆款'], desc: '1.74寸AMOLED｜21天长续航｜独立GPS｜150+运动模式｜血氧心率睡眠监测', specs: '品牌: 小米\n屏幕: 1.74寸\n续航: 21天\n防水: 5ATM\n定位: 独立GPS', stock: 45000 },

    // 键鼠外设
    { id: 14, name: '罗技G Pro X Superlight', cat: '数码', sub: '外设', emoji: '🖱️', price: 899, original: 1299, sales: 150000, rating: 4.7, tags: ['HOT'], desc: '60g超轻量｜HERO 2传感器｜无线2kHz｜LIGHTFORCE微动｜职业电竞标配', specs: '品牌: 罗技\n重量: 60g\n传感器: HERO 2\n连接: 无线2kHz\n续航: 95h', stock: 2800 },
    { id: 15, name: 'ROG龙骑士2 机械键盘', cat: '数码', sub: '外设', emoji: '⌨️', price: 1599, original: 1999, sales: 89000, rating: 4.8, tags: [], desc: '磁轴可调键程｜OLED显示屏｜PBT键帽｜RX光轴｜掌托分离式设计', specs: '品牌: ROG\n轴体: RX光轴/磁轴\n键帽: PBT\n连接: 有线/无线\n布局: 可分离', stock: 1500 },
    { id: 16, name: '雷蛇毒蝰V3 Pro', cat: '数码', sub: '外设', emoji: '🖱️', price: 1099, original: 1499, sales: 120000, rating: 4.6, tags: [], desc: '54g超轻｜Focus Pro 35K｜4KHz轮询｜光学微动｜旗舰电竞鼠标', specs: '品牌: 雷蛇\n重量: 54g\n传感器: Focus Pro 35K\n轮询: 4KHz\n续航: 90h', stock: 2200 },
    { id: 17, name: '京东京造G96机械键盘', cat: '数码', sub: '外设', emoji: '⌨️', price: 199, original: 329, sales: 560000, rating: 4.5, tags: ['爆款'], desc: 'Gasket结构｜全键热插拔｜RGB背光｜三模连接｜PBT键帽｜98键配列', specs: '品牌: 京造\n轴体: 热插拔\n连接: 三模\n键帽: PBT\n灯光: RGB', stock: 12000 },

    // 其他数码
    { id: 18, name: 'Anker 737 充电宝', cat: '数码', sub: '配件', emoji: '🔋', price: 299, original: 449, sales: 450000, rating: 4.7, tags: ['爆款'], desc: '24000mAh｜140W双向快充｜智能数显｜飞机可带｜三口同充｜iPhone16/笔记本通用', specs: '容量: 24000mAh\n快充: 140W PD3.1\n接口: 2C1A\n重量: 650g\n航空: 可携带', stock: 8900 },
    { id: 19, name: '小米GaN 67W充电器', cat: '数码', sub: '配件', emoji: '🔌', price: 99, original: 149, sales: 1200000, rating: 4.5, tags: ['HOT'], desc: '氮化镓｜67W快充｜2C1A三口｜兼容QC/PD/PPS｜笔记本充电｜小巧便携', specs: '功率: 67W\n接口: 2C1A\n技术: GaN\n兼容: QC/PD/PPS\n重量: 104g', stock: 34000 },
    { id: 20, name: '大疆Osmo Pocket 3', cat: '数码', sub: '相机', emoji: '📷', price: 3499, original: 3999, sales: 98000, rating: 4.8, tags: ['新品'], desc: '1英寸CMOS｜4K/120fps｜2寸旋转屏｜三轴云台｜面部追踪｜Vlog神器', specs: '品牌: DJI\n传感器: 1英寸CMOS\n视频: 4K/120fps\n防抖: 三轴云台\n屏幕: 2寸旋转', stock: 1800 },

    // ==================== 服饰 (18件) ====================
    // 上衣
    { id: 21, name: '优衣库 AIRism棉质T恤', cat: '服饰', sub: '上衣', emoji: '👕', price: 79, original: 129, sales: 3200000, rating: 4.5, tags: ['爆款'], desc: 'AIRism科技面料｜吸汗速干｜柔软亲肤｜纯色百搭｜男女同款｜四季通用', specs: '品牌: 优衣库\n材质: AIRism混纺\n版型: 标准\n颜色: 12色可选\n尺码: S-4XL', stock: 56000 },
    { id: 22, name: 'Nike Dri-FIT运动T恤', cat: '服饰', sub: '上衣', emoji: '👕', price: 199, original: 299, sales: 890000, rating: 4.6, tags: ['HOT'], desc: 'Dri-FIT速干科技｜透气网眼｜反光细节｜运动健身必备｜Swoosh经典logo', specs: '品牌: Nike\n材质: Dri-FIT聚酯\n功能: 速干透气\n颜色: 黑/白/灰/蓝\n尺码: S-3XL', stock: 12000 },
    { id: 23, name: '优衣库休闲衬衫', cat: '服饰', sub: '上衣', emoji: '👔', price: 149, original: 249, sales: 560000, rating: 4.4, tags: [], desc: '免烫工艺｜柔软棉质｜修身版型｜通勤商务休闲皆可｜经典格纹纯色', specs: '材质: 100%棉\n工艺: 免烫\n版型: 修身\n颜色: 白/蓝/格纹', stock: 8900 },

    // 下装
    { id: 24, name: 'Levi\'s 501牛仔裤', cat: '服饰', sub: '下装', emoji: '👖', price: 599, original: 899, sales: 450000, rating: 4.7, tags: ['HOT'], desc: '经典直筒501｜原色丹宁｜百年经典版型｜铜扣拉链｜纯棉面料养牛仔裤首选', specs: '品牌: Levi\'s\n版型: 501直筒\n材质: 100%棉丹宁\n颜色: 原色/水洗/黑色\n尺码: 28-38', stock: 5600 },
    { id: 25, name: '优衣库弹力运动裤', cat: '服饰', sub: '下装', emoji: '👖', price: 199, original: 299, sales: 1200000, rating: 4.5, tags: ['爆款'], desc: '四面弹力｜吸汗速干｜收口设计｜松紧腰带｜居家运动通勤全能裤', specs: '品牌: 优衣库\n材质: 弹力面料\n功能: 速干\n颜色: 黑/灰/藏青\n尺码: S-4XL', stock: 23000 },
    { id: 26, name: '蕉下防晒裤', cat: '服饰', sub: '下装', emoji: '👖', price: 129, original: 199, sales: 780000, rating: 4.6, tags: ['爆款'], desc: 'UPF50+防晒｜冰感凉感｜轻薄透气｜宽松直筒｜夏日防晒神裤', specs: '品牌: 蕉下\n防晒: UPF50+\n材质: 冰感面料\n颜色: 5色\n尺码: S-3XL', stock: 15000 },

    // 鞋
    { id: 27, name: 'Nike Air Force 1 小白鞋', cat: '服饰', sub: '鞋', emoji: '👟', price: 699, original: 899, sales: 2500000, rating: 4.7, tags: ['爆款'], desc: '经典Air Force 1｜纯白百搭｜气垫缓震｜真皮鞋面｜潮流圈永不过时经典', specs: '品牌: Nike\n科技: Air气垫\n鞋面: 真皮\n颜色: 白色\n尺码: 36-45', stock: 34000 },
    { id: 28, name: 'Adidas Ultraboost 跑鞋', cat: '服饰', sub: '鞋', emoji: '👟', price: 1099, original: 1499, sales: 680000, rating: 4.8, tags: ['HOT'], desc: 'BOOST缓震科技｜Primeknit编织鞋面｜马牌橡胶外底｜跑步通勤一双搞定', specs: '品牌: Adidas\n科技: BOOST中底\n鞋面: Primeknit\n外底: 马牌橡胶\n尺码: 38-46', stock: 7800 },
    { id: 29, name: 'Crocs洞洞鞋', cat: '服饰', sub: '鞋', emoji: '🩴', price: 299, original: 499, sales: 1800000, rating: 4.4, tags: ['爆款'], desc: '经典洞洞鞋｜Croslite材质轻量｜可旋转后跟带｜可加智必星｜夏日必备', specs: '品牌: Crocs\n材质: Croslite\n功能: 轻量防滑\n颜色: 多色\n尺码: 36-46', stock: 28000 },

    // 包
    { id: 30, name: 'LV Neverfull 托特包', cat: '服饰', sub: '包', emoji: '👜', price: 15800, original: 17800, sales: 45000, rating: 4.9, tags: ['HOT'], desc: 'Monogram老花｜可调节侧绑带｜内含手拿包｜大容量托特｜经典永不过时', specs: '品牌: Louis Vuitton\n材质: Monogram涂层帆布\n尺寸: 32×29×14cm\n颜色: 老花/棋盘格', stock: 200 },
    { id: 31, name: '北极狐Kånken双肩包', cat: '服饰', sub: '包', emoji: '🎒', price: 599, original: 799, sales: 560000, rating: 4.6, tags: ['HOT'], desc: '瑞典经典｜Vinylon F耐磨面料｜方型设计｜坐垫设计｜16L容量｜多色可选', specs: '品牌: Fjällräven\n材质: Vinylon F\n容量: 16L\n重量: 300g\n颜色: 多色', stock: 8900 },
    { id: 32, name: 'Herschel双肩包', cat: '服饰', sub: '包', emoji: '🎒', price: 399, original: 598, sales: 230000, rating: 4.5, tags: [], desc: '经典复古设计｜条纹内衬｜加厚肩垫｜电脑夹层｜大容量23L｜学生通勤', specs: '品牌: Herschel\n容量: 23L\n颜色: 经典黑/海军蓝/酒红\n材质: 聚酯纤维', stock: 4500 },

    // 配饰
    { id: 33, name: '雷朋飞行员太阳镜', cat: '服饰', sub: '配饰', emoji: '🕶️', price: 1280, original: 1680, sales: 340000, rating: 4.7, tags: ['HOT'], desc: '经典RB3025｜偏光镜片｜防紫外线｜金属镜框｜双梁设计｜明星同款', specs: '品牌: Ray-Ban\n镜片: 偏光\n镜框: 金属\nUV防护: 100%\n颜色: 金框绿片/银框灰片', stock: 3400 },
    { id: 34, name: '潘多拉手链', cat: '服饰', sub: '配饰', emoji: '📿', price: 899, original: 1299, sales: 180000, rating: 4.5, tags: [], desc: '925银｜可串珠设计｜蛇骨链｜送礼首选｜多款串珠自由搭配独一无二', specs: '品牌: Pandora\n材质: 925银\n长度: 19cm\n工艺: 手工抛光', stock: 2800 },
    { id: 35, name: '卡西欧G-SHOCK', cat: '服饰', sub: '配饰', emoji: '⌚', price: 890, original: 1290, sales: 890000, rating: 4.6, tags: ['爆款'], desc: '经典DW-5600｜200米防水｜防震抗震｜LED照明｜计时秒表｜耐用神表', specs: '品牌: Casio\n防水: 200m\n功能: 防震/秒表/闹钟\n电池: 约2年\n颜色: 经典黑', stock: 12000 },

    // 帽子
    { id: 36, name: 'MLB经典棒球帽', cat: '服饰', sub: '帽子', emoji: '🧢', price: 199, original: 329, sales: 1500000, rating: 4.5, tags: ['爆款'], desc: 'NY/LA洋基道奇logo｜纯棉面料｜可调节扣｜软顶弯檐｜百搭街拍神器', specs: '品牌: MLB\n材质: 100%棉\n调节: 金属扣\n颜色: 黑/白/藏青/卡其', stock: 35000 },
    { id: 37, name: 'New Era 59FIFTY', cat: '服饰', sub: '帽子', emoji: '🧢', price: 269, original: 399, sales: 450000, rating: 4.6, tags: ['HOT'], desc: '全封平檐帽｜立体刺绣｜NBA/NFL官方联名｜硬顶设计｜潮人必入', specs: '品牌: New Era\n帽型: 59FIFTY全封\n材质: 羊毛混纺\n颜色: 多队标可选', stock: 5600 },

    // ==================== 家居 (20件) ====================
    // 灯具
    { id: 38, name: '飞利浦护眼台灯', cat: '家居', sub: '灯具', emoji: '💡', price: 399, original: 599, sales: 890000, rating: 4.7, tags: ['HOT'], desc: '国AA级照度｜无蓝光危害｜全光谱LED｜智能感应｜45分钟定时休息｜无可视频闪', specs: '品牌: 飞利浦\n标准: 国AA级\n色温: 2700-6500K\n显色: Ra>95\n材质: 铝合金+ABS', stock: 6700 },
    { id: 39, name: 'Yeelight智能台灯 Pro', cat: '家居', sub: '灯具', emoji: '💡', price: 199, original: 299, sales: 1200000, rating: 4.5, tags: ['爆款'], desc: '米家智能联动｜Ra95高显色｜无频闪｜色温亮度无极调节｜自适应光', specs: '品牌: Yeelight\n智能: 米家APP\n显色: Ra95\n色温: 2700-6500K\n材质: 铝合金', stock: 15000 },

    // 床品
    { id: 40, name: '水星家纺全棉四件套', cat: '家居', sub: '床品', emoji: '🛏️', price: 299, original: 599, sales: 2300000, rating: 4.6, tags: ['爆款'], desc: '100%新疆长绒棉｜60支高支高密｜亲肤细腻｜四季通用｜被套+床单+枕套', specs: '品牌: 水星家纺\n面料: 100%棉\n支数: 60支\n规格: 1.5m/1.8m床\n工艺: 高支高密', stock: 28000 },
    { id: 41, name: '网易严选乳胶枕', cat: '家居', sub: '床品', emoji: '🛏️', price: 159, original: 259, sales: 890000, rating: 4.5, tags: ['HOT'], desc: '泰国天然乳胶93%｜波浪形人体工学｜透气蜂窝孔｜防螨抑菌｜高低可选', specs: '品牌: 网易严选\n材质: 93%天然乳胶\n工艺: 波浪形\n尺寸: 60×40cm\n外套: 天竺棉', stock: 12000 },
    { id: 42, name: '无印良品天竺棉床笠', cat: '家居', sub: '床品', emoji: '🛏️', price: 249, original: 399, sales: 450000, rating: 4.4, tags: [], desc: '天竺棉针织面料｜柔软弹性｜全包裹床笠款｜不易滑动｜A类婴幼标准', specs: '品牌: 无印良品\n材质: 天竺棉\n规格: 1.5m/1.8m床\n颜色: 米白/灰/蓝', stock: 5600 },

    // 厨房
    { id: 43, name: '双立人刀具套装', cat: '家居', sub: '厨房', emoji: '🔪', price: 599, original: 999, sales: 340000, rating: 4.7, tags: ['HOT'], desc: '德国不锈钢｜Friodur冰锻｜V-edge刀锋｜8件套含刀座｜厨房利器', specs: '品牌: Zwilling\n材质: 特殊不锈钢\n工艺: Friodur冰锻\n套装: 8件+刀座\n产地: 德国', stock: 2300 },
    { id: 44, name: '苏泊尔不粘锅三件套', cat: '家居', sub: '厨房', emoji: '🍳', price: 399, original: 699, sales: 1500000, rating: 4.5, tags: ['爆款'], desc: '麦饭石不粘｜少油烟｜轻量化｜适用电磁炉燃气灶｜煎锅+炒锅+汤锅', specs: '品牌: 苏泊尔\n涂层: 麦饭石不粘\n适用: 电磁炉/燃气灶\n套装: 3件套', stock: 8900 },
    { id: 45, name: '小米即热式饮水机', cat: '家居', sub: '厨房', emoji: '💧', price: 349, original: 499, sales: 780000, rating: 4.6, tags: ['HOT'], desc: '3秒速热｜3L水箱｜多段温控｜童锁保护｜免安装台式｜米家智能联动', specs: '品牌: 小米\n加热: 3秒即热\n水箱: 3L\n水温: 常温/45/60/85/100℃\n安全: 童锁', stock: 12000 },

    // 香薰/日化
    { id: 46, name: '观夏 昆仑煮雪香薰', cat: '家居', sub: '香薰', emoji: '🕯️', price: 189, original: 259, sales: 230000, rating: 4.8, tags: ['新品'], desc: '晶石扩香｜精油调配｜松木冷冽香｜手工玻璃瓶｜高级质感送礼首选', specs: '品牌: 观夏\n类型: 晶石扩香\n香型: 昆仑煮雪\n容量: 100ml\n挥发: 约3个月', stock: 1200 },
    { id: 47, name: '伊索 芳香蜡烛', cat: '家居', sub: '香薰', emoji: '🕯️', price: 299, original: 429, sales: 89000, rating: 4.7, tags: [], desc: '植物蜡+精油｜陶瓷杯身｜木质/草本香调｜燃烧50h｜澳洲天然品牌', specs: '品牌: Aesop\n材质: 植物蜡+精油\n香型: 木质/草本\n燃烧: 50h\n杯体: 陶瓷', stock: 800 },

    // 装饰
    { id: 48, name: 'IKEA宜家落地灯', cat: '家居', sub: '装饰', emoji: '💡', price: 249, original: 399, sales: 560000, rating: 4.4, tags: [], desc: '经典纸灯罩｜天然竹编｜暖光氛围｜客厅卧室百搭｜日式侘寂风', specs: '品牌: IKEA\n灯罩: 天然竹编\n光源: E27接口\n高度: 150cm\n风格: 日式', stock: 4500 },
    { id: 49, name: '装饰画三联组合', cat: '家居', sub: '装饰', emoji: '🖼️', price: 89, original: 159, sales: 340000, rating: 4.3, tags: [], desc: '微喷画芯｜实木相框｜免钉安装｜北欧抽象/极简/莫兰迪多风格可选', specs: '工艺: 艺术微喷\n框材: 实木\n尺寸: 30×40cm×3幅\n安装: 免钉贴', stock: 7800 },

    // 家居服/拖鞋
    { id: 50, name: 'UGG 经典雪地靴', cat: '家居', sub: '拖鞋', emoji: '👢', price: 1299, original: 1799, sales: 340000, rating: 4.7, tags: ['HOT'], desc: '羊皮毛一体｜Twinsole鞋垫｜UGGpure羊毛｜EVA大底｜经典栗色', specs: '品牌: UGG\n材质: 羊皮毛一体\n内里: UGGpure羊毛\n鞋底: EVA\n颜色: 栗色/黑/灰', stock: 3400 },
    { id: 51, name: '优调云朵拖鞋', cat: '家居', sub: '拖鞋', emoji: '🩴', price: 29, original: 49, sales: 5600000, rating: 4.3, tags: ['爆款'], desc: 'EVA轻量材质｜云朵造型｜防滑大底｜柔软缓震｜浴室/居家两用', specs: '材质: EVA\n功能: 防滑/轻量\n颜色: 多色\n尺码: 36-45', stock: 89000 },

    // ==================== 美食 (22件) ====================
    // 零食
    { id: 52, name: '三只松鼠每日坚果', cat: '美食', sub: '零食', emoji: '🥜', price: 79, original: 139, sales: 5600000, rating: 4.5, tags: ['爆款'], desc: '每日坚果30包｜6种坚果+3种果干｜干湿分离锁鲜｜早餐代餐健康零食', specs: '品牌: 三只松鼠\n规格: 30包/箱\n净重: 750g\n种类: 6坚果3果干\n保质期: 8个月', stock: 78000 },
    { id: 53, name: '良品铺子肉脯大礼包', cat: '美食', sub: '零食', emoji: '🥓', price: 69, original: 119, sales: 2300000, rating: 4.4, tags: ['HOT'], desc: '猪肉脯+牛肉干+肉松饼组合｜独立小包｜追剧零食｜办公室下午茶', specs: '品牌: 良品铺子\n种类: 肉脯/牛肉干/肉松饼\n规格: 500g\n包装: 独立小包', stock: 24000 },
    { id: 54, name: '乐事薯片大礼包', cat: '美食', sub: '零食', emoji: '🥔', price: 59, original: 99, sales: 8900000, rating: 4.3, tags: ['爆款'], desc: '12包混合装｜经典原味+番茄+烧烤+青柠｜大包装｜追剧聚会必备', specs: '品牌: Lay\'s\n规格: 12包混合装\n口味: 原味/番茄/烧烤/青柠\n单包: 70g', stock: 120000 },

    // 糕点
    { id: 55, name: '好利来半熟芝士', cat: '美食', sub: '糕点', emoji: '🧀', price: 89, original: 129, sales: 3400000, rating: 4.7, tags: ['爆款'], desc: '北海道轻乳酪｜日式半熟工艺｜入口即化｜原味+抹茶双拼｜冷链配送', specs: '品牌: 好利来\n工艺: 半熟烘焙\n口味: 原味/抹茶\n规格: 5枚装\n配送: 冷链', stock: 15000 },
    { id: 56, name: '鲍师傅肉松小贝', cat: '美食', sub: '糕点', emoji: '🥮', price: 39, original: 59, sales: 1200000, rating: 4.6, tags: ['HOT'], desc: '现做海苔肉松｜松软蛋糕体｜沙拉酱夹心｜经典原味每盒4枚', specs: '品牌: 鲍师傅\n口味: 海苔肉松\n规格: 4枚/盒\n材质: 现做现发', stock: 8000 },
    { id: 57, name: '稻香村京八件礼盒', cat: '美食', sub: '糕点', emoji: '🎁', price: 168, original: 238, sales: 560000, rating: 4.5, tags: ['新品'], desc: '中华老字号｜8种京味糕点｜精美铁盒｜送礼佳品｜传统手工制作', specs: '品牌: 稻香村\n种类: 8种京式糕点\n包装: 铁盒装\n规格: 1.2kg\n保质期: 60天', stock: 4500 },

    // 咖啡
    { id: 58, name: '星巴克咖啡豆', cat: '美食', sub: '咖啡', emoji: '☕', price: 129, original: 179, sales: 890000, rating: 4.6, tags: ['HOT'], desc: '中度烘焙｜阿拉比卡｜哥伦比亚单一产地｜200g袋装｜香草/坚果风味', specs: '品牌: Starbucks\n产地: 哥伦比亚\n烘焙: 中度\n规格: 200g\n风味: 香草/坚果', stock: 8900 },
    { id: 59, name: '三顿半精品速溶咖啡', cat: '美食', sub: '咖啡', emoji: '☕', price: 89, original: 139, sales: 2300000, rating: 4.7, tags: ['爆款'], desc: '超即溶精品咖啡｜冷热水3秒速溶｜数字系列1-6号｜24颗装｜风味各异', specs: '品牌: 三顿半\n工艺: 冷萃冻干\n规格: 24颗/盒\n冲泡: 3秒速溶\n烘焙: 1-6号', stock: 34000 },
    { id: 60, name: '隅田川咖啡液', cat: '美食', sub: '咖啡', emoji: '☕', price: 49, original: 79, sales: 5600000, rating: 4.4, tags: ['爆款'], desc: '浓缩咖啡液｜0糖0脂｜常温保存｜即开即饮｜搭配牛奶yyds｜12颗装', specs: '品牌: 隅田川\n类型: 浓缩液\n规格: 12颗\n保存: 常温\n搭配: 牛奶/燕麦奶', stock: 67000 },

    // 茶
    { id: 61, name: '小罐茶 龙井礼盒', cat: '美食', sub: '茶', emoji: '🍵', price: 499, original: 699, sales: 230000, rating: 4.6, tags: [], desc: '明前龙井｜西湖产区｜一罐一泡｜铝罐锁鲜｜送礼高端大气', specs: '品牌: 小罐茶\n品类: 龙井绿茶\n产区: 西湖\n规格: 20罐/盒\n工艺: 明前采摘', stock: 1200 },
    { id: 62, name: 'Chali茶里蜜桃乌龙', cat: '美食', sub: '茶', emoji: '🍵', price: 39, original: 59, sales: 1800000, rating: 4.4, tags: ['HOT'], desc: '蜜桃果粒+乌龙茶｜三角茶包｜0糖0卡｜冷泡热泡皆可｜15包/盒', specs: '品牌: Chali\n口味: 蜜桃乌龙\n规格: 15包\n类型: 三角茶包\n冲泡: 冷/热', stock: 28000 },

    // 冲饮
    { id: 63, name: '蒙牛纯牛奶', cat: '美食', sub: '冲饮', emoji: '🥛', price: 59, original: 79, sales: 12000000, rating: 4.3, tags: ['爆款'], desc: '纯牛奶整箱｜3.2g乳蛋白｜250ml×24盒｜优质奶源｜家庭必备', specs: '品牌: 蒙牛\n规格: 250ml×24盒\n蛋白: 3.2g/100ml\n脂肪: 3.6g\n保质期: 6个月', stock: 120000 },
    { id: 64, name: 'OATLY燕麦奶', cat: '美食', sub: '冲饮', emoji: '🥛', price: 49, original: 69, sales: 890000, rating: 4.5, tags: ['HOT'], desc: '咖啡大师燕麦奶｜0乳糖｜低脂｜植物基｜搭配咖啡绝配｜1L装×2', specs: '品牌: OATLY\n规格: 1L×2盒\n特点: 0乳糖\n热量: 330kJ/100ml\n用途: 咖啡伴侣', stock: 15000 },

    // 酒
    { id: 65, name: '茅台飞天53度', cat: '美食', sub: '酒', emoji: '🍶', price: 2999, original: 3499, sales: 450000, rating: 4.9, tags: ['HOT'], desc: '贵州茅台酱香型｜53度500ml｜大曲坤沙｜酱香突出｜优雅细腻｜收藏送礼', specs: '品牌: 茅台\n酒精度: 53%vol\n规格: 500ml\n香型: 酱香型\n年份: 2026年', stock: 5000 },
    { id: 66, name: '奔富Bin389红酒', cat: '美食', sub: '酒', emoji: '🍷', price: 588, original: 788, sales: 230000, rating: 4.7, tags: [], desc: '澳大利亚原瓶进口｜赤霞珠设拉子｜Bin389经典｜浓郁果香｜单宁优雅', specs: '品牌: Penfolds\n产地: 澳大利亚\n品种: 赤霞珠/设拉子\n容量: 750ml\n年份: 2022', stock: 3400 },
    { id: 67, name: 'RIO微醺鸡尾酒', cat: '美食', sub: '酒', emoji: '🥂', price: 59, original: 89, sales: 5600000, rating: 4.3, tags: ['爆款'], desc: '3%vol微醺｜白桃+葡萄+柠檬8罐混装｜果汁调味｜小瓶装女士专属', specs: '品牌: RIO\n酒精度: 3%vol\n规格: 330ml×8罐\n口味: 白桃/葡萄/柠檬\n类型: 配制酒', stock: 78000 },

    // 生鲜
    { id: 68, name: '京东自营厄瓜多尔白虾', cat: '美食', sub: '生鲜', emoji: '🦐', price: 99, original: 159, sales: 2300000, rating: 4.5, tags: ['爆款'], desc: '厄瓜多尔进口｜大号2kg｜盐冻工艺｜鲜活速冻｜京东冷链配送', specs: '产地: 厄瓜多尔\n规格: 2kg\n工艺: 盐冻\n等级: 大号\n配送: 冷链', stock: 15000 },
    { id: 69, name: '澳洲M5和牛牛排', cat: '美食', sub: '生鲜', emoji: '🥩', price: 199, original: 299, sales: 560000, rating: 4.7, tags: ['HOT'], desc: '澳洲草饲谷饲｜M5雪花大理石油花｜厚切2cm｜原切无腌制｜冷链直达', specs: '产地: 澳大利亚\n等级: M5\n切割: 厚切2cm\n规格: 200g×2片\n配送: 冷链', stock: 4500 },
    { id: 70, name: '佳沛奇异果', cat: '美食', sub: '生鲜', emoji: '🥝', price: 69, original: 99, sales: 4500000, rating: 4.4, tags: [], desc: '新西兰进口｜阳光金果｜大果12粒｜维C满满｜酸甜可口', specs: '产地: 新西兰\n品种: 阳光金果\n规格: 12粒/箱\n等级: 大果\n甜度: 16°+', stock: 23000 },

    // ==================== 新增: 美妆个护 (12件) ====================
    { id: 71, name: 'SK-II 神仙水230ml', cat: '美妆', sub: '护肤', emoji: '🧴', price: 1590, original: 1790, sales: 890000, rating: 4.8, tags: ['爆款'], desc: '90%以上PITERA™精华｜调节水油平衡｜细腻毛孔｜日本原装进口', specs: '品牌: SK-II\n容量: 230ml\n成分: PITERA™\n产地: 日本\n适合: 所有肤质', stock: 5600 },
    { id: 72, name: '兰蔻小黑瓶精华', cat: '美妆', sub: '护肤', emoji: '🧴', price: 1080, original: 1280, sales: 560000, rating: 4.7, tags: ['HOT'], desc: '二裂酵母精华｜修护肌底｜增强屏障｜细致毛孔｜全球畅销精华', specs: '品牌: Lancôme\n容量: 50ml\n成分: 二裂酵母\n功能: 修护/抗老\n适合: 任何肤质', stock: 3400 },
    { id: 73, name: '雅诗兰黛DW粉底液', cat: '美妆', sub: '彩妆', emoji: '💄', price: 399, original: 499, sales: 1200000, rating: 4.6, tags: ['爆款'], desc: '24小时持妆｜遮瑕控油｜油皮亲妈｜SPF10｜多色号可选', specs: '品牌: Estee Lauder\n容量: 30ml\n功能: 持妆/控油\nSPF: 10\n适合: 油/混油皮', stock: 8900 },
    { id: 74, name: '迪奥999口红', cat: '美妆', sub: '彩妆', emoji: '💄', price: 359, original: 429, sales: 2500000, rating: 4.7, tags: ['爆款'], desc: '正红色传奇｜缎光/哑光/滋润｜气场女王色｜经典蓝调正红', specs: '品牌: Dior\n色号: #999\n质地: 缎光/哑光/滋润\n容量: 3.5g\n妆效: 正红色', stock: 18000 },
    { id: 75, name: '海蓝之谜面霜60ml', cat: '美妆', sub: '护肤', emoji: '🧴', price: 2680, original: 2980, sales: 230000, rating: 4.9, tags: ['HOT'], desc: '神奇活性精萃Miracle Broth™｜修护滋润｜抗老紧致｜Lamer经典传奇', specs: '品牌: La Mer\n容量: 60ml\n成分: Miracle Broth™\n功能: 修护/滋润\n适合: 干性/敏感肌', stock: 1200 },
    { id: 76, name: '资生堂红腰子精华', cat: '美妆', sub: '护肤', emoji: '🧴', price: 690, original: 890, sales: 450000, rating: 4.6, tags: [], desc: 'ULTIMUNE肌底液｜增强免疫力｜改善暗沉｜维稳肌肤｜水润透亮', specs: '品牌: Shiseido\n容量: 50ml\n功能: 肌底修护\n适合: 任何肤质\n质地: 清透精华', stock: 4500 },
    { id: 77, name: '赫莲娜黑绷带面霜', cat: '美妆', sub: '护肤', emoji: '🧴', price: 3480, original: 3880, sales: 180000, rating: 4.9, tags: ['新品'], desc: '30%玻色因｜修护抗老｜紧致提拉｜丝绒质地｜贵妇面霜天花板', specs: '品牌: HR赫莲娜\n容量: 50ml\n成分: 30%玻色因\n功能: 抗老修护\n质地: 丝绒', stock: 800 },
    { id: 78, name: 'Tom Ford眼影盘', cat: '美妆', sub: '彩妆', emoji: '🎨', price: 699, original: 899, sales: 340000, rating: 4.7, tags: ['HOT'], desc: 'TF四色眼影｜大牌质感｜显色不飞粉｜高级配色｜日常/浓妆皆宜', specs: '品牌: Tom Ford\n色号: #20 Disco Dust\n容量: 4色/10g\n质地: 粉状\n妆效: 微光/哑光', stock: 2200 },
    { id: 79, name: 'CPB长管隔离', cat: '美妆', sub: '彩妆', emoji: '🧴', price: 469, original: 569, sales: 780000, rating: 4.7, tags: ['爆款'], desc: '光凝妆前乳｜转油光为光泽｜隐形毛孔｜自然提亮｜隔离打底神器', specs: '品牌: CPB\n容量: 36ml\n功能: 隔离/提亮\nSPF: 25\n适合: 所有肤质', stock: 5600 },
    { id: 80, name: '雪花秀滋阴套装', cat: '美妆', sub: '护肤', emoji: '🧴', price: 599, original: 899, sales: 560000, rating: 4.5, tags: [], desc: '韩方草本护肤｜滋阴水乳2件套｜去黄提亮｜保湿滋养｜礼盒装', specs: '品牌: Sulwhasoo\n套装: 滋阴水+乳\n容量: 125ml+125ml\n功能: 保湿去黄\n适合: 干/混干', stock: 3400 },
    { id: 81, name: '欧莱雅紫熨斗眼霜', cat: '美妆', sub: '护肤', emoji: '👁️', price: 159, original: 229, sales: 3400000, rating: 4.4, tags: ['爆款'], desc: '玻色因+咖啡因｜淡化眼纹｜消肿抗皱｜全脸可用｜平价眼霜天花板', specs: '品牌: L\'Oreal\n容量: 30ml\n成分: 玻色因/咖啡因\n功能: 抗皱消肿\n适合: 所有肤质', stock: 34000 },
    { id: 82, name: 'MAC子弹头口红', cat: '美妆', sub: '彩妆', emoji: '💄', price: 149, original: 219, sales: 5600000, rating: 4.5, tags: ['爆款'], desc: '经典子弹头｜Chili小辣椒砖红色｜哑光质地｜显白不挑皮｜人手一支', specs: '品牌: MAC\n色号: #Chili\n质地: 哑光\n容量: 3g\n妆效: 丝绒哑光', stock: 45000 },
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
      { id: 'ORD20260601', date: '2026-06-01', items: [{ id:1, name:'索尼WH-1000XM5',emoji:'🎧',price:2499,qty:1 }, { id:52, name:'三只松鼠每日坚果',emoji:'🥜',price:79,qty:2 }], total: 2657, status: '已完成', addr: '上海市浦东新区甜甜路88号' },
      { id: 'ORD20260528', date: '2026-05-28', items: [{ id:71, name:'SK-II神仙水',emoji:'🧴',price:1590,qty:1 }, { id:74, name:'迪奥999口红',emoji:'💄',price:359,qty:1 }], total: 1949, status: '配送中', addr: '上海市浦东新区甜甜路88号' },
      { id: 'ORD20260520', date: '2026-05-20', items: [{ id:38, name:'飞利浦护眼台灯',emoji:'💡',price:399,qty:1 }, { id:44, name:'苏泊尔不粘锅',emoji:'🍳',price:399,qty:1 }], total: 798, status: '已签收', addr: '北京市朝阳区幸福大街100号' },
    ],
    addresses: [
      { name: '小甜甜', phone: '138****8888', addr: '上海市浦东新区甜甜路88号', def: true },
      { name: '老大', phone: '139****9999', addr: '北京市朝阳区幸福大街100号', def: false },
    ],
    favs: [1, 5, 27, 40, 52, 71, 74]
  }
};

// 工具函数
function formatPrice(p) { return '¥' + (p/1).toFixed(2); }

function getById(id) { return SHOP_DATA.products.find(p => p.id === id); }
