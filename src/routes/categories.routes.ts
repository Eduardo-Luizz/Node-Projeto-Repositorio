import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category(); 
  Object.assign(category, { // Object.assign consegue passar um objeto para ele e consegue passar quais são os atributos
    name,
    description,
    created_at: new Date()
  });


  categories.push(category);

  return response.status(201).json({ category });
})

export { categoriesRoutes };