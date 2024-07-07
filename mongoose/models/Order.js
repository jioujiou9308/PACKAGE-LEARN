const mongoose = require("mongoose");

// 定義資料的類型
const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  ship: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("OrderList", orderSchema);
