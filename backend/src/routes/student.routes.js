
import { Router } from "express";
import { studentRegistration } from "../controller/student.controller.js";

const router = Router();

router.route('/regi').post(studentRegistration);

export default router;