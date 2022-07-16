import { Category } from "../models/Category";

// DTO => data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  create({ description, name } : ICreateCategoryDTO) : void {

    const category = new Category(); 
    Object.assign(category, { // Object.assign consegue passar um objeto para ele e consegue passar quais são os atributos
      name,
      description,
      created_at: new Date()
    });
  
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

}

export { CategoriesRepository };