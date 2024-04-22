import {Router} from "express";
import { container } from "../composition-root";
import { UploadController } from "../controllers/uploadController";
import { uploadMiddleware } from "../middlewares/uploadMiddleware";

const uploadController = container.resolve(UploadController)

export const uploadRouter = Router({})

uploadRouter.post('/', 
        uploadMiddleware.single('file'),
        uploadController.upload.bind(uploadController))
