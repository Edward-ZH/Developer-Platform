const mongoose = require("mongoose");

// 创建子文档 funcDefine
const funcSchema = new mongoose.Schema({
  name: String,
  identifier: String,
  json: String,
  order: [String],
  type: String,
  statusDefine: Object,
  page: Object
})

// 创建Schema
const templateSchema = new mongoose.Schema({
  productKey: String,
  deviceKey: String,
  funcDefine: [funcSchema]
});

module.exports = mongoose.model("template", templateSchema);