import { inject, injectable } from "tsyringe";
import * as bcrypt from "bcryptjs";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

    const userAlreayExists = await this.usersRepository.findByEmail(email);
    if(userAlreayExists) {
      throw new AppError("User Alreay exists");
    }

    const passwordHash = await bcrypt.hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase }