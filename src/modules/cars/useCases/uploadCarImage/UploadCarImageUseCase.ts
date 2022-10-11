import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  car_id: string;
  images_name: string[];
}
@injectable()
class UploadCarImageUseCase {

  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository,
  ) {}
  
  async execute({ car_id, images_name }: IRequest): Promise<void> {

    images_name.map(async (image) => { // percorrendo o array com as img e salvando no banco
      await this.carsImagesRepository.create(car_id, image);
    })
  }
}

export { UploadCarImageUseCase };