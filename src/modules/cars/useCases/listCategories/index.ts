import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesrepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesrepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
