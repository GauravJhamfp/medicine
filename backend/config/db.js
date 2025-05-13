import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://root:AcrqNYOLcIdXM1jr@techhub.rjdqups.mongodb.net/').then(() => console.log("DB Connected"));

}
// export const connectDB = async () => {

//     await mongoose.connect('mongodb+srv://gaurav1703:gaurav1703@cluster0.wex9np2.mongodb.net/').then(() => console.log("DB Connected"));

// }