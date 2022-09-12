import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { Users } from "../entities/User";


interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<Users>;
}

export { IUsersRepository }