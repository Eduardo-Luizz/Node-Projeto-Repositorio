import { Router } from "express";
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";


const specificationsRouter = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle)

export { specificationsRouter };