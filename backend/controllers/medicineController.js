import prodtModel from "../models/prodtModel.js";
import fs from 'fs'

// all product list
const listMedicine = async (req, res) => {
    try {
        const foods = await prodtModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// add product
const addMedicine = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`;
        const product = new prodtModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await product.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete product
const removeMedicine = async (req, res) => {
    try {
        const product = await prodtModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`, () => { })

        await prodtModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Medicine Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listMedicine, addMedicine, removeMedicine }