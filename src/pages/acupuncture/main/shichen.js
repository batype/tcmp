/**
 * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
 * @param y  solar year
 * @param m  solar month
 * @param d  solar day
 * @return JSON object
 * @eg:console.log(calendar.solar2lunar(1987,11,01));
 */
export function solar2lunar(
  y = new Date().getFullYear(),
  m = new Date().getMonth() + 1,
  d = new Date().getDate(),
  hh = new Date().getHours(),
  mm = new Date().getMinutes(),
) {
  //参数区间1900.1.31~2100.12.31

  function fillzero(s) {
    return s < 10 ? '0' + s : s;
  }

  //灵龟八法取穴 公孙/内关，后溪/申脉，临泣/外关，列缺/照海
  let lgBF = [
    '-',
    '申脉',
    '照海',
    '外关',
    '临泣',
    '女:内关 / 男:照海',
    '公孙',
    '后溪',
    '内关',
    '列缺',
  ];
  let lgBFP = [
    '-',
    '后溪',
    '列缺',
    '临泣',
    '外关',
    '女:公孙 / 男:列缺',
    '内关',
    '申脉',
    '公孙',
    '照海',
  ];

  // 十二时辰对应
  let sdArr = [
    '夜半',
    '鸡鸣',
    '平旦',
    '日出',
    '食时',
    '隅中',
    '日中',
    '日昳',
    '晡时',
    '日入',
    '黄昏',
    '人定',
  ];
  // 一个时辰为八刻
  let skArr = ['一', '二', '三', '四', '五', '六', '七', '八'];

  let lunarInfo = [
    0x04bd8,
    0x04ae0,
    0x0a570,
    0x054d5,
    0x0d260,
    0x0d950,
    0x16554,
    0x056a0,
    0x09ad0,
    0x055d2, //1900-1909
    0x04ae0,
    0x0a5b6,
    0x0a4d0,
    0x0d250,
    0x1d255,
    0x0b540,
    0x0d6a0,
    0x0ada2,
    0x095b0,
    0x14977, //1910-1919
    0x04970,
    0x0a4b0,
    0x0b4b5,
    0x06a50,
    0x06d40,
    0x1ab54,
    0x02b60,
    0x09570,
    0x052f2,
    0x04970, //1920-1929
    0x06566,
    0x0d4a0,
    0x0ea50,
    0x16a95,
    0x05ad0,
    0x02b60,
    0x186e3,
    0x092e0,
    0x1c8d7,
    0x0c950, //1930-1939
    0x0d4a0,
    0x1d8a6,
    0x0b550,
    0x056a0,
    0x1a5b4,
    0x025d0,
    0x092d0,
    0x0d2b2,
    0x0a950,
    0x0b557, //1940-1949
    0x06ca0,
    0x0b550,
    0x15355,
    0x04da0,
    0x0a5b0,
    0x14573,
    0x052b0,
    0x0a9a8,
    0x0e950,
    0x06aa0, //1950-1959
    0x0aea6,
    0x0ab50,
    0x04b60,
    0x0aae4,
    0x0a570,
    0x05260,
    0x0f263,
    0x0d950,
    0x05b57,
    0x056a0, //1960-1969
    0x096d0,
    0x04dd5,
    0x04ad0,
    0x0a4d0,
    0x0d4d4,
    0x0d250,
    0x0d558,
    0x0b540,
    0x0b6a0,
    0x195a6, //1970-1979
    0x095b0,
    0x049b0,
    0x0a974,
    0x0a4b0,
    0x0b27a,
    0x06a50,
    0x06d40,
    0x0af46,
    0x0ab60,
    0x09570, //1980-1989
    0x04af5,
    0x04970,
    0x064b0,
    0x074a3,
    0x0ea50,
    0x06b58,
    0x05ac0,
    0x0ab60,
    0x096d5,
    0x092e0, //1990-1999
    0x0c960,
    0x0d954,
    0x0d4a0,
    0x0da50,
    0x07552,
    0x056a0,
    0x0abb7,
    0x025d0,
    0x092d0,
    0x0cab5, //2000-2009
    0x0a950,
    0x0b4a0,
    0x0baa4,
    0x0ad50,
    0x055d9,
    0x04ba0,
    0x0a5b0,
    0x15176,
    0x052b0,
    0x0a930, //2010-2019
    0x07954,
    0x06aa0,
    0x0ad50,
    0x05b52,
    0x04b60,
    0x0a6e6,
    0x0a4e0,
    0x0d260,
    0x0ea65,
    0x0d530, //2020-2029
    0x05aa0,
    0x076a3,
    0x096d0,
    0x04afb,
    0x04ad0,
    0x0a4d0,
    0x1d0b6,
    0x0d250,
    0x0d520,
    0x0dd45, //2030-2039
    0x0b5a0,
    0x056d0,
    0x055b2,
    0x049b0,
    0x0a577,
    0x0a4b0,
    0x0aa50,
    0x1b255,
    0x06d20,
    0x0ada0, //2040-2049
    /**Add By JJonline@JJonline.Cn**/
    0x14b63,
    0x09370,
    0x049f8,
    0x04970,
    0x064b0,
    0x168a6,
    0x0ea50,
    0x06b20,
    0x1a6c4,
    0x0aae0, //2050-2059
    0x092e0,
    0x0d2e3,
    0x0c960,
    0x0d557,
    0x0d4a0,
    0x0da50,
    0x05d55,
    0x056a0,
    0x0a6d0,
    0x055d4, //2060-2069
    0x052d0,
    0x0a9b8,
    0x0a950,
    0x0b4a0,
    0x0b6a6,
    0x0ad50,
    0x055a0,
    0x0aba4,
    0x0a5b0,
    0x052b0, //2070-2079
    0x0b273,
    0x06930,
    0x07337,
    0x06aa0,
    0x0ad50,
    0x14b55,
    0x04b60,
    0x0a570,
    0x054e4,
    0x0d160, //2080-2089
    0x0e968,
    0x0d520,
    0x0daa0,
    0x16aa6,
    0x056d0,
    0x04ae0,
    0x0a9d4,
    0x0a2d0,
    0x0d150,
    0x0f252, //2090-2099
    0x0d520, //2100
  ];

  /**
   * 公历每个月份的天数普通表
   * @Array Of Property
   * @return Number
   */
  let solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  /**
   * 天干地支之天干速查表
   * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
   * @return Cn string
   */
  let Gan = [
    '\u7532',
    '\u4e59',
    '\u4e19',
    '\u4e01',
    '\u620a',
    '\u5df1',
    '\u5e9a',
    '\u8f9b',
    '\u58ec',
    '\u7678',
  ];

  /**
   * 天干地支之地支速查表
   * @Array Of Property
   * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
   * @return Cn string
   */
  let Zhi = [
    '\u5b50',
    '\u4e11',
    '\u5bc5',
    '\u536f',
    '\u8fb0',
    '\u5df3',
    '\u5348',
    '\u672a',
    '\u7533',
    '\u9149',
    '\u620c',
    '\u4ea5',
  ];

  /**
   * 天干地支之地支速查表<=>生肖
   * @Array Of Property
   * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
   * @return Cn string
   */
  let Animals = [
    '\u9f20',
    '\u725b',
    '\u864e',
    '\u5154',
    '\u9f99',
    '\u86c7',
    '\u9a6c',
    '\u7f8a',
    '\u7334',
    '\u9e21',
    '\u72d7',
    '\u732a',
  ];

  /**
   * 24节气速查表
   * @Array Of Property
   * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
   * @return Cn string
   */
  let solarTerm = [
    '\u5c0f\u5bd2',
    '\u5927\u5bd2',
    '\u7acb\u6625',
    '\u96e8\u6c34',
    '\u60ca\u86f0',
    '\u6625\u5206',
    '\u6e05\u660e',
    '\u8c37\u96e8',
    '\u7acb\u590f',
    '\u5c0f\u6ee1',
    '\u8292\u79cd',
    '\u590f\u81f3',
    '\u5c0f\u6691',
    '\u5927\u6691',
    '\u7acb\u79cb',
    '\u5904\u6691',
    '\u767d\u9732',
    '\u79cb\u5206',
    '\u5bd2\u9732',
    '\u971c\u964d',
    '\u7acb\u51ac',
    '\u5c0f\u96ea',
    '\u5927\u96ea',
    '\u51ac\u81f3',
  ];

  /**
   * 1900-2100各年的24节气日期速查表
   * @Array Of Property
   * @return 0x string For splice
   */
  let sTermInfo = [
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa',
    '9778397bd19801ec9210c965cc920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd09801d98082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd197c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e',
    '97bd09801d98082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e',
    '97bcf97c3598082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '9778397bd19801ec9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bd07f1487f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c9274c920e',
    '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa',
    '97b6b97bd197c36c9210c9274c920e',
    '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c920e',
    '97b6b7f0e47f531b0723b0b6fb0722',
    '7f0e37f5307f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b70c9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0787b0721',
    '7f0e27f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa',
    '97b6b7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2',
    '977837f0e37f149b0723b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f5307f595b0b0bc920fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0723b06bd',
    '7f07e7f0e37f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e37f14998083b0787b0721',
    '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14898082b0723b02d5',
    '7f07e7f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e36665b66aa89801e9808297c35',
    '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722',
    '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e26665b66a449801e9808297c35',
    '665f67f0e37f1489801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722',
  ];

  //['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let nStr0 = [
    '\u96F6',
    '\u4e00',
    '\u4e8c',
    '\u4e09',
    '\u56db',
    '\u4e94',
    '\u516d',
    '\u4e03',
    '\u516b',
    '\u4e5d',
  ];

  /**
   * 数字转中文速查表
   * @Array Of Property
   * @trans ['日','一','二','三','四','五','六','七','八','九','十']
   * @return Cn string
   */
  let nStr1 = [
    '\u65e5',
    '\u4e00',
    '\u4e8c',
    '\u4e09',
    '\u56db',
    '\u4e94',
    '\u516d',
    '\u4e03',
    '\u516b',
    '\u4e5d',
    '\u5341',
  ];

  /**
   * 日期转农历称呼速查表
   * @Array Of Property
   * @trans ['初','十','廿','卅']
   * @return Cn string
   */
  let nStr2 = ['\u521d', '\u5341', '\u5eff', '\u5345'];

  /**
   * 月份转农历称呼速查表
   * @Array Of Property
   * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
   * @return Cn string
   */
  let nStr3 = [
    '\u6b63',
    '\u4e8c',
    '\u4e09',
    '\u56db',
    '\u4e94',
    '\u516d',
    '\u4e03',
    '\u516b',
    '\u4e5d',
    '\u5341',
    '\u51ac',
    '\u814a',
  ];

  /**
   * 返回农历y年一整年的总天数
   * @param lunar Year
   * @return Number
   * @eg:var count = calendar.lYearDays(1987) ;//count=387
   */
  function lYearDays(y) {
    var i,
      sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + leapDays(y);
  }

  /**
   * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
   * @param lunar Year
   * @return Number (0-12)
   * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
   */
  function leapMonth(y) {
    //闰字编码 \u95f0
    return lunarInfo[y - 1900] & 0xf;
  }

  /**
   * 返回农历y年闰月的天数 若该年没有闰月则返回0
   * @param lunar Year
   * @return Number (0、29、30)
   * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
   */
  function leapDays(y) {
    if (leapMonth(y)) {
      return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  }

  /**
   * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
   * @param lunar Year
   * @return Number (-1、29、30)
   * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
   */
  function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //月份参数从1至12，参数错误返回-1
    return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
  }

  /**
   * 返回公历(!)y年m月的天数
   * @param solar Year
   * @return Number (-1、28、29、30、31)
   * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
   */
  function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {
      //2月份的闰平规律测算后确认返回28或29
      return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
    } else {
      return solarMonth[ms];
    }
  }

  /**
   * 农历年份转换为干支纪年
   * @param  lYear 农历年的年份数
   * @return Cn string
   */
  function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; //如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; //如果余数为0则为最后一个地支
    return Gan[ganKey - 1] + Zhi[zhiKey - 1];
  }

  /**
   * 传入offset偏移量返回干支
   * @param offset 相对甲子的偏移量
   * @return Cn string
   */
  function toGanZhi(offset) {
    return Gan[offset % 10] + Zhi[offset % 12];
  }

  /**
   * 传入公历(!)y年获得该年第n个节气的公历日期
   * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
   * @return day Number
   * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
   */
  function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = sTermInfo[y - 1900];
    var _info = [
      parseInt('0x' + _table.substr(0, 5)).toString(),
      parseInt('0x' + _table.substr(5, 5)).toString(),
      parseInt('0x' + _table.substr(10, 5)).toString(),
      parseInt('0x' + _table.substr(15, 5)).toString(),
      parseInt('0x' + _table.substr(20, 5)).toString(),
      parseInt('0x' + _table.substr(25, 5)).toString(),
    ];
    var _calday = [
      _info[0].substr(0, 1),
      _info[0].substr(1, 2),
      _info[0].substr(3, 1),
      _info[0].substr(4, 2),

      _info[1].substr(0, 1),
      _info[1].substr(1, 2),
      _info[1].substr(3, 1),
      _info[1].substr(4, 2),

      _info[2].substr(0, 1),
      _info[2].substr(1, 2),
      _info[2].substr(3, 1),
      _info[2].substr(4, 2),

      _info[3].substr(0, 1),
      _info[3].substr(1, 2),
      _info[3].substr(3, 1),
      _info[3].substr(4, 2),

      _info[4].substr(0, 1),
      _info[4].substr(1, 2),
      _info[4].substr(3, 1),
      _info[4].substr(4, 2),

      _info[5].substr(0, 1),
      _info[5].substr(1, 2),
      _info[5].substr(3, 1),
      _info[5].substr(4, 2),
    ];
    return parseInt(_calday[n - 1]);
  }

  function toChinaYear(y) {
    var yy = String(y);
    return nStr0[yy[0]] + nStr0[yy[1]] + nStr0[yy[2]] + nStr0[yy[3]];
  }

  /**
   * 传入农历数字月份返回汉语通俗表示法
   * @param lunar month
   * @return Cn string
   * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
   */
  function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } //若参数错误 返回-1
    var s = nStr3[m - 1];
    s += '\u6708'; //加上月字
    return s;
  }

  /**
   * 传入农历日期数字返回汉字表示法
   * @param lunar day
   * @return Cn string
   * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
   */
  function toChinaDay(d) {
    //日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = '\u521d\u5341';
        break;
      case 20:
        s = '\u4e8c\u5341';
        break;
        break;
      case 30:
        s = '\u4e09\u5341';
        break;
        break;
      default:
        s = nStr2[Math.floor(d / 10)];
        s += nStr1[d % 10];
    }
    return s;
  }

  /**
   * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
   * @param y year
   * @return Cn string
   * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
   */
  function getAnimal(y) {
    return Animals[(y - 4) % 12];
  }

  //年份限定、上限
  if (y < 1900 || y > 2100) {
    return -1; // undefined转换为数字变为NaN
  }
  //公历传参最下限
  if (y == 1900 && m == 1 && d < 31) {
    return -1;
  }

  var i,
    leap = 0,
    temp = 0;
  var offset = (Date.UTC(y, m - 1, d) - Date.UTC(1900, 0, 31)) / 86400000;
  for (i = 1900; i < 2101 && offset > 0; i++) {
    temp = lYearDays(i);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    i--;
  }

  //农历年
  var year = i;
  var leap = leapMonth(i); //闰哪个月
  var isLeap = false;

  //效验闰月
  for (i = 1; i < 13 && offset > 0; i++) {
    //闰月
    if (leap > 0 && i == leap + 1 && isLeap == false) {
      --i;
      isLeap = true;
      temp = leapDays(year); //计算农历闰月天数
    } else {
      temp = monthDays(year, i); //计算农历普通月天数
    }
    //解除闰月
    if (isLeap == true && i == leap + 1) {
      isLeap = false;
    }
    offset -= temp;
  }
  // 闰月导致数组下标重叠取反
  if (offset == 0 && leap > 0 && i == leap + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --i;
    }
  }
  if (offset < 0) {
    offset += temp;
    --i;
  }
  //农历月
  var month = i;
  //农历日
  var day = offset + 1;
  //天干地支处理
  var sm = m - 1;
  var gzY = toGanZhiYear(year);

  // 当月的两个节气
  // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
  var firstNode = getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
  var secondNode = getTerm(y, m * 2); //返回当月「节」为几日开始

  // 依据12节气修正干支月
  var gzM = toGanZhi((y - 1900) * 12 + m + 11);
  if (d >= firstNode) {
    gzM = toGanZhi((y - 1900) * 12 + m + 12);
  }

  //传入的日期的节气与否
  var Term = null;
  if (firstNode == d) {
    Term = solarTerm[m * 2 - 2];
  }
  if (secondNode == d) {
    Term = solarTerm[m * 2 - 1];
  }
  //日柱 当月一日与 1900/1/1 相差天数
  var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
  var dayOffset = dayCyclical + d - 1;
  var gzD = toGanZhi(dayOffset);
  var shichenStr = '';
  var zhiH = 0;
  //if (hh == 23) {
  //	shichenStr += Zhi[0] + '时（' + sdArr[0] + '）'
  //} else {
  zhiH = hh == 23 ? 0 : parseInt((hh + 1) / 2);
  shichenStr += Zhi[zhiH] + '时（' + sdArr[zhiH] + '）';
  //}
  //时干公式：时干=日干×2+时支 -2 ，注意日干从1开始
  var gzH = Gan[(((dayOffset % 10) + 1) * 2 + zhiH - 2) % 10];
  // 判断时刻
  if (hh % 2 === 1) {
    shichenStr += skArr[parseInt(mm / 15)];
  } else if (hh % 2 === 0) {
    shichenStr += skArr[parseInt(mm / 15) + 4];
  }
  shichenStr += '刻';

  var solarDate = y + '-' + fillzero(m) + '-' + fillzero(d);
  var lunarDate = year + '-' + fillzero(month) + '-' + fillzero(day);
  var clunarDate =
    '农历 ' +
    toChinaYear(year) +
    '年 ' +
    (isLeap ? '\u95f0' : '') +
    toChinaMonth(month) +
    toChinaDay(day);
  var gzDate = gzY + '(' + getAnimal(year) + ')年 ' + gzM + '月 ' + gzD + '日';

  //日干支：甲、己、辰、戌、丑、未对应数值10，乙、庚、申、酉对应数值9，丁、壬、寅、卯对应数值8，戊、癸、巳、午、丙、辛、亥、子对应数值7
  //甲丙戊庚壬为阳日，乙丁己辛癸为阴日。
  //时干支：甲、己、子、午 9，乙、庚、丑、未 8，丙、辛、寅、申 7，丁、壬、卯、酉 6，戊、癸、辰、戌 5，巳、亥 4
  //先将日的干支数值相加，再加上时辰的干支数值，最终得到的总数，阳日除以9，阴日除以6，最后看剩余的数值是多少
  //公孙/内关，后溪/申脉，临泣/外关，列缺/照海
  var lg = gzD;
  lg = lg.replace('甲', '10,'); //甲、己、辰、戌、丑、未
  lg = lg.replace('己', '10,');
  lg = lg.replace('辰', '10,');
  lg = lg.replace('戌', '10,');
  lg = lg.replace('丑', '10,');
  lg = lg.replace('未', '10,');
  lg = lg.replace('乙', '9,'); //乙、庚、申、酉
  lg = lg.replace('庚', '9,');
  lg = lg.replace('申', '9,');
  lg = lg.replace('酉', '9,');
  lg = lg.replace('丁', '8,'); //丁、壬、寅、卯
  lg = lg.replace('壬', '8,');
  lg = lg.replace('寅', '8,');
  lg = lg.replace('卯', '8,');
  lg = lg.replace('戊', '7,'); //戊、癸、巳、午、丙、辛、亥、子
  lg = lg.replace('癸', '7,');
  lg = lg.replace('巳', '7,');
  lg = lg.replace('午', '7,');
  lg = lg.replace('丙', '7,');
  lg = lg.replace('辛', '7,');
  lg = lg.replace('亥', '7,');
  lg = lg.replace('子', '7,');
  var lgH = gzH + Zhi[zhiH];
  lgH = lgH.replace('甲', '9,'); //甲、己、子、午
  lgH = lgH.replace('己', '9,');
  lgH = lgH.replace('子', '9,');
  lgH = lgH.replace('午', '9,');
  lgH = lgH.replace('乙', '8,'); //乙、庚、丑、未
  lgH = lgH.replace('庚', '8,');
  lgH = lgH.replace('丑', '8,');
  lgH = lgH.replace('未', '8,');
  lgH = lgH.replace('丙', '7,'); //丙、辛、寅、申
  lgH = lgH.replace('辛', '7,');
  lgH = lgH.replace('寅', '7,');
  lgH = lgH.replace('申', '7,');
  lgH = lgH.replace('丁', '6,'); //丁、壬、卯、酉
  lgH = lgH.replace('壬', '6,');
  lgH = lgH.replace('卯', '6,');
  lgH = lgH.replace('酉', '6,');
  lgH = lgH.replace('戊', '5,'); //戊、癸、辰、戌
  lgH = lgH.replace('癸', '5,');
  lgH = lgH.replace('辰', '5,');
  lgH = lgH.replace('戌', '5,');
  lgH = lgH.replace('巳', '4,'); //巳、亥
  lgH = lgH.replace('亥', '4,');
  var lgArray = lg.split(',');
  var lgArrayH = lgH.split(',');
  var lgSum =
    parseInt(lgArray[0]) +
    parseInt(lgArray[1]) +
    parseInt(lgArrayH[0]) +
    parseInt(lgArrayH[1]);
  var lgMod = (dayOffset % 10) % 2 == 0 ? 9 : 6;
  var lgData = lgSum % lgMod;
  if (lgData == 0) {
    lgData = lgMod;
  }
  //console.log(gzD + gzH + Zhi[zhiH] + ' ' + lgMod + ' ' + lgSum + ' ' + lgData + lgBF[lgData])

  return {
    //date: solarDate,
    //lunarDate: lunarDate,
    clunarDate: clunarDate,
    gzDate: gzDate,
    isLeap: isLeap,
    //'ncWeek': "\u661f\u671f" + cWeek,
    Term: Term,
    ShiChen: gzH + shichenStr,
    LGBF: lgBF[lgData],
    LGBFP: lgBFP[lgData],
    indexLGBF: lgData,
  };
}
