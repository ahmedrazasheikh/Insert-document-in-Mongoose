import express from 'express';
const app = express()
const port = process.env.PORT || 8000
import './Models/firstSchema.js'
import familyMembers from './Models/firstSchema.js';
import Database from './Database/dataBase.js'
// const dataBase = process.env.dataBase || 
// 'mongodb://hello_admin:hello123@0.0.0.0:27017/rtm?authSource=rtm'
const dataBase = process.env.dataBase || 'mongodb://0.0.0.0:27017'
Database(dataBase)
familyMembers('MuhammadHassan', 18, 8500.40, ["Programmer", "Ai Developer"], true, [{value : "Saad is a Good Boy "}])
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})