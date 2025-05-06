import mongoose from "mongoose";

const productmedicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    image: { type: String, required: true },
    category:{ type:String, required:true}
})

const prodtModel = mongoose.models.productmedicine || mongoose.model("productmedicine", productmedicineSchema);
export default prodtModel;