
const temChange = {
  methods: {
    // 华氏转摄氏
    tempF2C(tem) {
      const decimal = Math.round((tem * 10) % 10) / 10; // 小数
      const integer = Math.round(tem - decimal); // 整数
      const result = {
        46: [8, 0],
        47: [8, 1],
        48: [9, 0],
        49: [9, 1],
        50: [10, 0],
        51: [11, 0],
        52: [11, 1],
        53: [12, 0],
        54: [12, 1],
        55: [13, 0],
        56: [13, 1],
        57: [14, 0],
        58: [14, 1],
        59: [15, 0],
        60: [15, 1],
        61: [16, 0],
        62: [17, 0],
        63: [17, 1],
        64: [18, 0],
        65: [18, 1],
        66: [19, 0],
        67: [19, 1],
        68: [20, 0],
        69: [21, 0],
        70: [21, 1],
        71: [22, 0],
        72: [22, 1],
        73: [23, 0],
        74: [23, 1],
        75: [24, 0],
        76: [24, 1],
        77: [25, 0],
        78: [26, 0],
        79: [26, 1],
        80: [27, 0],
        81: [27, 1],
        82: [28, 0],
        83: [28, 1],
        84: [29, 0],
        85: [29, 1],
        86: [30, 0],
        87: [31, 0],
        88: [31, 1],
        89: [32, 0],
        90: [32, 1],
      }[integer];
      result && (result[0] += decimal);
      return result || [16, 0];
    },
    // 摄氏转华氏
    tempC2F(tem, temRec = 0) {
      const decimal = Math.round((tem * 10) % 10) / 10; // 小数
      const integer = Math.round(tem - decimal); // 整数
      const result = {
        8: [46, 47],
        9: [48, 49],
        10: [50, 50],
        11: [51, 52],
        12: [53, 54],
        13: [55, 56],
        14: [57, 58],
        15: [59, 60],
        16: [61, 61],
        17: [62, 63],
        18: [64, 65],
        19: [66, 67],
        20: [68, 68],
        21: [69, 70],
        22: [71, 72],
        23: [73, 74],
        24: [75, 76],
        25: [77, 77],
        26: [78, 79],
        27: [80, 81],
        28: [82, 83],
        29: [84, 85],
        30: [86, 86]
      }[integer][temRec];
      return result ? result + decimal : 61;
    },
  }
};

export default temChange;
