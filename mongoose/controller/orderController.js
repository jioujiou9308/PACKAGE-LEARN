const dbConnect = require("../db/connect");
const Order = require("../models/Order");

const createOrderData = async () => {
  dbConnect();
  try {
    const result = new Order({ orderNumber: 123, ship: true });
    await result.save();
    console.log("result data", result);
  } catch (error) {
    console.log("error", error);
  }
};

createOrderData();
