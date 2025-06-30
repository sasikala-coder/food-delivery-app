import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://chandrayanapallisasikala:tomatosasikala@cluster0.gr6lr.mongodb.net/food-del')
        .then(()=>console.log("DB Connected"))
}
