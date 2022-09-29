import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  })

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.excute({
      name: "Name car",
      description: "Description car",
      daily_rate: 10,
      license_plate: "ABC-123",
      fine_amount: 50,
      brand: "Brand car",
      category_id: "CategoryId car"
    });

    expect(car).toHaveProperty("id");
  })

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.excute({
        name: "Car1",
        description: "Description car teste",
        daily_rate: 10,
        license_plate: "ABC-123 teste",
        fine_amount: 50,
        brand: "Brand car teste",
        category_id: "CategoryId car teste"
      });

      await createCarUseCase.excute({
        name: "Car1",
        description: "Description car teste",
        daily_rate: 10,
        license_plate: "ABC-123 teste",
        fine_amount: 50,
        brand: "Brand car teste",
        category_id: "CategoryId car teste"
      });
    }).rejects.toBeInstanceOf(AppError);
  })

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.excute({
      name: "Car t",
      description: "Description car t",
      daily_rate: 10,
      license_plate: "ABC-123 t",
      fine_amount: 50,
      brand: "Brand car t",
      category_id: "CategoryId car t"
    })

    expect(car.available).toBe(true);
  })
});