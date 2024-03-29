module.exports = {
  name: '空调',
  home: {
    power: '开关',
    powerOn: '已开机',
    powerOff: '已关机',
    rotate: '摇头',
    windSpeed: '风速',
    windLevel: '档',
    function: '功能',
    paintedScreen: '画时代',
    voice: '语音',
    smart: '智能',
    timing: '定时',
    CO2: '二氧化碳浓度',
    save: '保存',
    Electric: '电量查询'
  },
  slot1: {
    OutWtTem: '实时出水温度 {{%s-40}}℃',
    IndoorTem: '实时室内温度 %s℃',
    TemSen: '室温 %s℃',
    CleanTime: '自清洁剩余{{%s-100}}分钟'
  },
  slot2: {
    AutoImshow: '自动调温'
  },
  mod: {
    Mod_制冷模式: '制冷',
    CHMod_制冷模式: '制冷',
    Mod_除湿模式: '除湿',
    Mod_自动模式: '自动',
    Mod_送风模式: '送风',
    Mod_制热模式: '制热',
    CHMod_制热模式: '制热'
  },
  fan: {
    Fan_自动风: '自动风',
    Fan_低风: '低风',
    Fan_中低风: '中低风',
    Fan_中风: '中风',
    Fan_中高风: '中高风',
    Fan_高风: '高风',
    Fan_强劲风: '强劲风',
    Fan_静音风: '静音风'
  },
  btn: {
    Elc: '电量查询',
    Sleep: '睡眠',
    SmartSleep: '智眠',
    BabySleep: '智眠',
    SwingUD: '上下扫风',
    SwingLR: '左右扫风',
    ConstUD: '上下定格',
    ConstLR: '左右定格',
    'SwingUD(new)': '上下扫风',
    'SwingLR(new)': '左右扫风',
    Health: '健康',
    AutoLig: '自动灯光',
    Lig: '灯光',
    'Lig(Auto)': '灯光',
    StHt: '8℃制热',
    VocCtl: '空调语音',
    UnmanedShutDown: '无人节能',
    SmartWind: '智能送风',
    Dazzling: '炫光',
    AssHt: '辅热',
    'AssHt(Auto)': '辅热',
    'AssHt(Reverse)': '辅热',
    'AssHt(M3)': '辅热',
    ModPopup: '模式',
    FanPopup: '风速',
    BottomSleep: '睡眠',
    'BottomSleep(ordinary)': '睡眠',
    FuncPopup: '高级',
    TemStep: '温度间隔',
    TemUn: '温度单位',
    AppTimer: '预约',
    'AppTimer(Home)': '预约',
    FanLR: '双侧出风',
    FanLR_左侧: '左侧出风',
    FanLR_右侧: '右侧出风',
    LFan: '左侧出风',
    RFan: '右侧出风',
    LRFan: '双侧出风',
    Follow: '风随',
    Avoid: '风避',
    Air: '新风',
    CleanState: '自清洁',
    Ventilation: '换气',
    Air_智能: '智能新风',
    NobodySave: '无人节能',
    FbidBloPer: '防直吹',
    UDFanPort: '下出风',
    'UDFanPort(Auto)': '下出风',
    AntiDirectBlow: '防直吹',
    // 商用
    OutHome: '外出模式',
    LoopMod: '全新风',
    LoopMod_混合风: '混合风',
    SvSt: '节能',
    AcSvSt: '空调节能',
    'Quiet(Btn)': '静音',
    Blo: '干燥',
    Humi: '加湿',
    ParameterQuery: '参数查询',
    NoiseSet: '室内噪声'
  },
  sweep: {
    speedTitle: '扫风',
    advance_updown: '上下定格',
    advance_leftright: '左右定格',
    sweep_ud_tips: '不支持此区域扫风。',
    sweep_ud_tips2: '上下定格只支持定格扫。',
    sweep_lr_tips: '左右定格只支持定格扫。',
    sweep_powoff_tips: '空调已被关闭，自动退出扫风设置。',
    Stage_tips: '提示:',
    sweep_txt2: '1.点击扫风位置，可精确定格扫风。<br> 2.滑动整个区域，可区域扫风。<br> 3.点击空白处可取消扫风设置。'
  },
  noise: {
    title: '室内噪音',
    text: '请设置噪声大小'
  },
  svst: {
    title: '节能',
    text: '请设置噪声大小'
  },
  area: {
    title: '区域送风',
    title2: '禁止吹人',
    tip: '可根据实际情况改变空调或人的所在位置'
  },
  offline: {
    txt: '断开连接 ...',
    tip:
      '1. 设备是否连接上电源？<br> 2. 设备是否关闭了WiFi功能？按空调遥控器上的<br>&nbsp;&nbsp;“WiFi”按键打开。<br> 3. 拔掉电源插头再插上试试看。<br> 4.  路由器名称和密码是否有变动？若有变动则需要<br>&nbsp;&nbsp;&nbsp;&nbsp;<span id="btn">重新添加设备</span>。',
    bottom: '如排查以上原因后仍未恢复连接，您可尝试重置WiFi。'
  }
};
