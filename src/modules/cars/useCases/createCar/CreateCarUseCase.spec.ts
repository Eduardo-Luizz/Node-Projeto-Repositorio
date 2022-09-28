import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  })

  it("should be able to create a new car", async () => {
    await createCarUseCase.excute({
      name: "Name car",
      description: "Description car",
      daily_rate: 10,
      license_plate: "ABC-123",
      fine_amount: 50,
      brand: "Brand car",
      category_id: "CategoryId car"
    });
  })
})