import { resolve } from 'node:path';
import multer from 'multer';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(process.cwd(), folder),
        filename: (request, file, callback) => {
          // mantenha a lógica do seu filename aqui
        }
      })
    };
  }
};