import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUserRepository";


class UserRepositoryInMemory implements IUsersRepository {

  users: Users[] = [];

  async create({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {
    const user = new Users();

    Object.assign(user, {
      driver_license, 
      email, 
      name, 
      password
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<Users> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<Users> {
    return this.users.find((user) => user.id === id);
  }

}

export { UserRepositoryInMemory };