import multer from 'multer';
import {s3Storage} from '../storage/storage';

class UploadMiddleware {
    public uploader: multer.Multer;

    constructor() {
        this.uploader = multer({ storage: s3Storage });
    }

    single(fieldName: string) {
        return this.uploader.single(fieldName);
    }
}

export const uploadMiddleware = new UploadMiddleware();