import { Router } from "express";
import ApplicantController from "../controllers/applicant";
const routers = Router();

routers.get("/", ApplicantController.home);

export default routers;
