import fs from "fs";

export const deleteFile = async(filename: string) => {

  try {
    await fs.promises.stat(filename) // Verifica se na url passada existe ou não o arquivo desejado
  } catch (error) {
    return;
  }

  await fs.promises.unlink(filename); // Remove o arquivo
}