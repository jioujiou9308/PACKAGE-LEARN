const User = require("../models/User");
const dbConnect = require("../db/connect");

// * 1.  第一種建立資料的方法 - 只有一筆資料
// const createUserData = async () => {
//   try {
//     dbConnect();
//     const result = new User({ name: "Wei", email: "p1y8@gmail.com", age: 30 });
//     await result.save();
//     console.log("result data", result);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// * 2. 第二種建立資料的方法 - 只有一筆資料
// const createUserData = async () => {
//   try {
//     dbConnect();
//     const result = await User.create({ name: "Wayne", email: "wayne@gmail.com", age: "35" });
//     console.log("success create User data");
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// * 3. 新增多筆資料
// const createUserData = async () => {
//   try {
//     dbConnect();
//     const result = await User.insertMany([
//       { name: "insert1", email: "insert1@gmail.com", age: "36" },
//       { name: "insert2", email: "insert2@gmail.com", age: "50" },
//     ]);
//     console.log("success create User data");
//   } catch (error) {
//     console.log("error", error);
//   }
// };

//  createUserData();

// * 4. 找尋資料
// const findUserData = async () => {
//   try {
//     dbConnect();
//     // ^ 搜尋全部資料
//     // const result = await User.find();

//     // ^ 搜尋特定資料
//     const result = await User.find({
//       name: { $in: ["Alice", "Bob"] }, //找到名字是Alice或Bob的資料
//       age: { $gt: 30 }, //年齡大於30歲的
//     });

//     console.log("result", result);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// findUserData();

// * 5. 更新資料
// ! 注意 : 更新資料的時候使用特定的function來更新是不會開始schema的驗證方式
// ! 如果要使用update來開啟驗證方式，要加上{ runValidators: true }
// const updateUserData = async () => {
//   try {
//     dbConnect();
//     let opts = { runValidators: true };

//     // ^ 降這個opts的參數加在後面
//     const result = await User.updateOne({ name: "Alice" }, { age: 33 }, opts);
//     console.log("result", result);
//     console.log("success update data");
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// updateUserData();

// * 6. 刪除資料
// const deleteUserData = async () => {
//   try {
//     dbConnect();
//     let opts = { runValidators: true };
//     const result = await User.deleteOne({ name: "Steve" }, opts);
//     console.log("result", result);
//     console.log("success delete data");
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// deleteUserData();

// * 7. 客製化schema function
// ^ 這個必須先找到資料，才能使用這個function
// const customSchemaFunction = async () => {
//   try {
//     dbConnect();
//     const user = await User.findOne({ name: "Alice" });
//     const hello = user.sayHello();
//     console.log("hello => ", hello);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// customSchemaFunction();

//  * 8. 客製化static function
// ^ 這個不需要先找到資料，直接使用這個function即可
const staticSchemaFunction = async () => {
  try {
    dbConnect();
    // ^ byName是query function可以接在static function後面使用
    const user = await User.findByAgeGreaterThanEqual(30).byName("Alice");
    console.log("user => ", user);
  } catch (error) {
    console.log("error", error);
  }
};
staticSchemaFunction();

// ^ 如果新增的資料沒有在schema中定義，就不會將其資料寫入
/*
{ name: "insert1", email: "insert1@gmail.com", age: "35", address:'Taipei }
 schema中沒有address這個屬性，所以不會寫入

*/
