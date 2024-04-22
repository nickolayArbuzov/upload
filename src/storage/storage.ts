import aws from 'aws-sdk';
import { Request } from 'express';
import { StorageEngine } from 'multer';
import { PassThrough } from 'stream';

class S3Storage implements StorageEngine {
    private s3: aws.S3;

    constructor() {
        this.s3 = new aws.S3({
            accessKeyId: 'test',
            secretAccessKey: 'test',
            region: 'us-east-1',
            //localStack:
            endpoint: new aws.Endpoint('http://localhost:4566'),  
            s3ForcePathStyle: true,
        });
    }

    _handleFile(req: Request, file: Express.Multer.File, cb: (error?: any, info?: Partial<Express.Multer.File>) => void): void {
        const pass = new PassThrough();
        const params: aws.S3.Types.PutObjectRequest = {
            Bucket: 'BUCKET_NAME', 
            Key: file.originalname,
            Body: pass,
            ContentType: file.mimetype,
        };

        this.s3.upload(params, (err, data) => {
            if (err) {
                return cb(err);
            }
            cb(null, { key: data.Key, url: `http://localhost:4566/BUCKET_NAME/${data.Key}` });
        });

        file.stream.pipe(pass);
    }

    _removeFile(req: Request, file: Express.Multer.File, cb: (error: Error | null) => void): void {
        cb(null);
    }
}

export const s3Storage = new S3Storage();