import { v4 as uuidV4 } from "uuid";

// Este é o modelo que a classe deve seguir
class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() { // Isso retirar a respnsabilidade da rota de validar o id
    if(!this.id){
      this.id = uuidV4();
    }  
  }
}

export { Category };