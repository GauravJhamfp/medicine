import mongoose from "mongoose";

// export const connectDB = async () => {

//     await mongoose.connect('mongodb+srv://root:AcrqNYOLcIdXM1jr@techhub.rjdqups.mongodb.net/').then(() => console.log("DB Connected"));

// }
export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://gauravjha:gauravjha1703@cluster0.rgh5jou.mongodb.net/').then(() => console.log("DB Connected"));

}