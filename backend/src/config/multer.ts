import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          // mantenha a lógica do seu filename aqui
        }
      })
    };
  }
};