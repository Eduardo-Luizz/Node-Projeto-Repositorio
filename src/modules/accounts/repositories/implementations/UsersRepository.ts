import { IUsersRepository } from "../IUserRepository";
import { Users } from "../../entities/User";
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UserRepository implements IUsersRepository {

    private repository: Repository<Users>;

    constructor() {
      this.repository = getRepository(Users);
    }
    
    async create({ name, email, driver_license, password, avatar, id }: ICreateUserDTO): Promise<void> {
      const user = this.repository.create({
        name,
        email,
        driver_license,
        password,
        avatar,
        id,
      });

      await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<Users> {
      const user = await this.repository.findOne(id);
      return user;
    }
}

export { UserRepository }