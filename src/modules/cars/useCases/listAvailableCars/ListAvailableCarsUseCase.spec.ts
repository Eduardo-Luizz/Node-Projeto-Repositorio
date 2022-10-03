import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";



let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able to list all available cars", async () => {

    const car = await carsRepositoryInMemory.create({
      "name": "Audi A1 Teste",
      "description": "teste Descrição",
      "daily_rate": 140,
      "license_plate": "DGRT45 teste",
      "fine_amount": 100,
      "brand": "Audi",
      "category_id": "category_id teste"
    })

    const cars = await listAvailableCarsUseCase.execute({});
    
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Audi A1 Teste 2",
      "description": "teste Descrição",
      "daily_rate": 140,
      "license_plate": "DGRT45 teste",
      "fine_amount": 100,
      "brand": "Audi teste",
      "category_id": "category_id teste"
    })

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Audi teste"
    });
    
    expect(cars).toEqual([car]);
  })

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Audi A1 Teste 2",
      "description": "teste Descrição",
      "daily_rate": 140,
      "license_plate": "DGRT45 teste",
      "fine_amount": 100,
      "brand": "Audi teste",
      "category_id": "category_id teste"
    })

    const cars = await listAvailableCarsUseCase.execute({
      name: "Audi A1 Teste 2"
    });
    
    expect(cars).toEqual([car]);
  })

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      "name": "Audi A1 Teste 2",
      "description": "teste Descrição",
      "daily_rate": 140,
      "license_plate": "DGRT45 teste",
      "fine_amount": 100,
      "brand": "Audi teste",
      "category_id": "12345"
    })

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345"
    });
    
    expect(cars).toEqual([car]);
  })
})