import mongoose from "mongoose";

const firstSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: {
        type: Number, required: true,
        min: 18, max: 50
    },

    feeS: {
        type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50
    },
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }

})


// Here You use the word members which createcollection with the name of Members//
 
const firstSchemaSend = mongoose.model('Members', firstSchema)

const familyMembers = async (nm,age,fe,hob,isA,comm)=>{

try {
// Creating new Document//

    const familyData = new firstSchemaSend({
        name : nm,
        age :age,
        feeS : fe,
        hobbies : hob,
        isActive : isA ,
        comments : comm,
    })
    const familyData2 = new firstSchemaSend({
        name : nm,
        age :age,
        feeS : fe,
        hobbies : hob,
        isActive : isA ,
        comments : comm,
    })
    const familyData3 = new firstSchemaSend({
        name : nm,
        age :age,
        feeS : fe,
        hobbies : hob,
        isActive : isA ,
        comments : comm,
    })
    
    // Saving  Single   Document

// let result = await familyData.save()
// console.log(result)

// Saving Multiple Document //

let result = await firstSchemaSend.insertMany([familyData,familyData2,familyData3])
console.log(result)





} catch (error) {
    console.log(error)
}

}


export default familyMembers;




// If we want to about something than we use 

// console.log(firstSchema.path('age'))


// Compiling Schema 

