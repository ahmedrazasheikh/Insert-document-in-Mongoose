import mongoose from 'mongoose'

const Database =  async  (datbase__url) => {

    const DB_options = {
        dbName : 'SalmanKhan',
        authSource : 'SalmanKhan'
    }
    try {
   await  mongoose.connect(datbase__url, DB_options)
        console.log("Connected Succesfully Server With Database!!")
    } catch (error) {
console.log(error)        
    }
  
}

export default Database
