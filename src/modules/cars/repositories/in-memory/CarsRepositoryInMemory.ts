import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {

  cars: Car[] = [];

  async create({ brand, category_id, daily_rate, description, fine_amount, name, license_plate }: ICreateCarDTO): Promise<Car> {
    const cars = new Car();

    Object.assign(cars, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate
    });

    this.cars.push(cars);

    return cars;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === licensePlate);
  }

}

export { CarsRepositoryInMemory };