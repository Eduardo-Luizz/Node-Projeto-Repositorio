import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

// Este é o modelo que a classe deve seguir
@Entity("categories")
class Category {

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() { // Isso retirar a respnsabilidade da rota de validar o id
    if(!this.id){
      this.id = uuidV4();
    }  
  }
}

export { Category };