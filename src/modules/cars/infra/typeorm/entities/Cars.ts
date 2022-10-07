import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category) // Muitos carros pra uma categorias
  @JoinColumn({ name: "category_id" }) // mesmo nome da chave estrangeira
  category: Category;

  @Column()
  category_id: string;

  // Tabela de relacionamento é Many to Many
  @ManyToMany(() => Specification)
  @JoinTable({
    name: "specifications_cars",
    joinColumns: [{ name: "car_id" }], // nome da coluna dentro da tavela de relacionamento que referencia a tabela que estamos
    inverseJoinColumns: [{ name: "specification_id" }] // nome da outra coluna que referencia a tabela passada no many to many
  })
  specifications: Specification[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Car };