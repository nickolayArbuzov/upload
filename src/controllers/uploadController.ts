import { injectable } from "inversify";
import { Request, Response } from 'express'

@injectable()
export class UploadController {
    upload (req: Request, res: Response): void {
        const file = req.file; 
        if (file && file.key && file.url) {
            res.status(200).send({ key: file.key, url: file.url });
        } else {
            res.status(400).send({ error: 'No file' });
        }
    }
}