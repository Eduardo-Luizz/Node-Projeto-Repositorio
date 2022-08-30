import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// Utilizando o singleton (Classe global para resolver o problema que não tras listagem)
// Repositorio manipula os dados
class CategoriesRepository implements ICategoriesRepository{
  
  private categories: Category[] = []; // Este atributo deve ser privado somente o repositorio tem acesso
  private static INSTANCE: CategoriesRepository;

  private constructor() { // Tira a responsabilidade do private categories e deixa para o constructor
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
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