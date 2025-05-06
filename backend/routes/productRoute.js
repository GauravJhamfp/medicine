import express from 'express';
import { addMedicine, listMedicine, removeMedicine } from '../controllers/medicineController.js';
import multer from 'multer';
const productRoute = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

productRoute.get("/list",listMedicine);
productRoute.post("/add",upload.single('image'),addMedicine);
productRoute.post("/remove",removeMedicine);

export default productRoute;