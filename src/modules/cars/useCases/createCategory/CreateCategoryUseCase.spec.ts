import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should be able to create a new category", async () => {

    const category = {
      name: "Category Test",
      description: "Category Description Test"
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

    // console.log(categoryCreated)
    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with same name", async () => {

    expect(async() => {
      const category = {
        name: "Category Test",
        description: "Category Description Test"
      }
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
    }).rejects.toBeInstanceOf(AppError); // valida se o erro e uma instacia da classe app Error

  });
});