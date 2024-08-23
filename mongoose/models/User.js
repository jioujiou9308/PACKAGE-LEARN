const mongoose = require("mongoose");

// * 定義資料的類型
const userSchema = new mongoose.Schema({
  // 這是基本的方法
  // name: String,
  // email: String,
  // age: Number

  
  // 加上條件的話是這樣
  // 還可以客製化欄位規則  使用validate
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 255,
  },
  age: {
    type: Number,
    required: true,
    max: 100,
    min: 2,
    // * 自訂義驗證
    // validate: {
    //   validator: (value) => value % 2 === 0,
    //   message: (props) => `${props.value} 不是偶數`,
    // },
  },
});

// * 自訂schema function
userSchema.methods.sayHello = function () {
  console.log(`Hello ${this.name} your age is ${this.age}`);
  return `Hello ${this.name} your age is ${this.age}`;
};

// * 自訂static function (設定查詢age大於等於30的資料)
userSchema.statics.findByAgeGreaterThanEqual = function (age) {
  return this.find({ age: { $gte: age } });
};

// * 自訂query function (找尋特定的名字)
// ^ 這個query function可以說是進階的查詢方法，再可放在static後面使用
userSchema.query.byName = function (name) {
  return this.where({ name: name }).select(["name"]);
};

// User => collection名稱 (在mongodb的資料庫，這個collection都會變小寫加上s)
// userSchema => schema
module.exports = mongoose.model("UserFile", userSchema);
