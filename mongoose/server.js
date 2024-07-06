// import { MongoClient } from 'mongodb';
const { MongoClient } = require('mongodb')

const User = require('./User');


// const uri = "mongodb+srv://p1789632p:Nj7axZJdaUaC2I8V@cluster0.aoluoxk.mongodb.net/demoDB"

async function connectToCluster(uri) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}
async function executeStudentCrudOperations() {
    const uri = "mongodb+srv://p1789632p:%40Jioujiou820830@cluster0.aoluoxk.mongodb.net/demoDB"
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
    } finally {
        await mongoClient.close();
    }
}
executeStudentCrudOperations()













// const uri = 'mongodb://127.0.0.1:27017'
// async function main() {
//     try {
//         await mongoose.connect(uri)
//         console.log('success link')
//     } catch (err) {
//         console.log('wrong')
//         console.log(err);
//     }
// }


// main()

// const createNewData = async () => {
//     try {
//         // 新增資料到資料庫有兩種方法
//         // 第一種
//         // const user = new User({ name: 'John', email: 'john@example.com', age: 18 })
//         // await user.save()

//         // 第二種
//         // await User.create({ name: 'John', email: 'john@example.com', age: 18 })

//         // 新增多筆資料
//         const user = await User.insertMany(
//             [
//                 {
//                     name: 'Steve',
//                     email: '123@gmail.com',
//                     age: 10
//                 },
//                 {
//                     name: 'Han',
//                     email: '123@gmail.com',
//                     age: 2
//                 }
//             ])

//         console.log(user)
//     } catch (error) {
//         console.log(error.message)
//     }
// }


// createNewData()