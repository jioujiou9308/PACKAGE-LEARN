const mongoose = require('mongoose');


// 定義資料的類型
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
        maxLength: 255
    },
    age: {
        type: Number,
        required: true,
        max: 100,
        min: 2,
        validate: {
            validator: (value) => value % 2 === 0,
            message: (props) => `${props.value} 不是偶數`
        }
    }
})

module.exports = mongoose.model('User', userSchema);