import { Router } from "express";
import controller from "../controllers/candidate";
import { getOne } from "./validators";

//Add more validation

const routes = Router();

routes.get("/candidates", controller.getAll);
routes.post("/candidates", controller.createApplication);
routes.put("/candidates/:id", controller.updateStatus);
routes.get("/candidates/:id", getOne, controller.getOne);

export default routes;


