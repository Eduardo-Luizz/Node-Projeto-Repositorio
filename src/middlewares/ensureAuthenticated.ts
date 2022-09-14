import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";


interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Bearer adfadfadf(token)
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  //Pegar apenas o token dessa maneira dentro do array temos a posicao [0] = Bearer e [1] = token
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "f0556f393ebaefae50115fe8eb8ed15f") as IPayload;

    //Verificar se o usuario existe no banco
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);

    if(!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}