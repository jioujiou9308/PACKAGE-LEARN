const mongoose = require('mongoose');
const User = require('./User');


const uri = "mongodb+srv://p1789632p:Nj7axZJdaUaC2I8V@cluster0.aoluoxk.mongodb.net/demoDB"


async function main() {
    try {
        await mongoose.connect(uri)
        console.log('success link')
    } catch (err) {
        console.log('wrong')
        console.log(err);
    }
}


main()

const createNewData = async () => {
    try {
        // 新增資料到資料庫有兩種方法
        // 第一種
        // const user = new User({ name: 'John', email: 'john@example.com', age: 18 })
        // await user.save()

        // 第二種
        // await User.create({ name: 'John', email: 'john@example.com', age: 18 })

        // 新增多筆資料
        const user = await User.insertMany(
            [
                {
                    name: 'Steve',
                    email: '123@gmail.com',
                    age: 10
                },
                {
                    name: 'Han',
                    email: '123@gmail.com',
                    age: 2
                }
            ])

        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}


createNewData()