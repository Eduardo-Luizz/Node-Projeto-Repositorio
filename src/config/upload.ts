import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder), // Volta para a raiz do projeto e pasta tmp
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex"); //Cria um hash
          const filename = `${ fileHash }-${ file.originalname }`  //Concatena o hash criado com o nome original
          return callback(null, filename);
        }
      })
    }
  }
}