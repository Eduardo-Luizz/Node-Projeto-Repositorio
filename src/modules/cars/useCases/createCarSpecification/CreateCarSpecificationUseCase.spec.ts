import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Car Specification", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  })

  it("should not be able to add a new specification to a now-existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["54321"];

      await createCarSpecificationUseCase.execute({ car_id, specifications_id });
    }).rejects.toBeInstanceOf(AppError);
  })

  it("should be able to add a new specification to the car", async () => {

    const car = await carsRepositoryInMemory.create({
      name: "Name car",
      description: "Description car",
      daily_rate: 10,
      license_plate: "ABC-123",
      fine_amount: 50,
      brand: "Brand car",
      category_id: "CategoryId car"
    })

    const specification = await specificationsRepositoryInMemory.create({
      description: "teste",
      name: "teste"
    })

    const specifications_id = [specification.id];

    const specificationCars = await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id });
    
    expect(specificationCars).toHaveProperty("specifications");
    expect(specificationCars.specifications.length).toBe(1);
  })
})