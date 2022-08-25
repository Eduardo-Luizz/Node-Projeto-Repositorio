import { Category } from "../models/Category";

// DTO => data transfer object, responsável pelo tráfego de dados entre uma classe e outra
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository };
export { ICreateCategoryDTO };