import 'multer';

declare global {
    namespace Express {
        namespace Multer {
            interface File {
                key?: string;
                url?: string;
            }
        }
    }
}