import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
  
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

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };