import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository") // busca de dentro do shared container e busca de dentro da classe 
    private categoriesRepository: ICategoriesRepository) { };
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };