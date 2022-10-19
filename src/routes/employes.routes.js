import { Router } from "express";

import { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees', getEmployees)

router.get('/employee/:id', getEmployee)

router.post('/employees', createEmployees)

router.delete('/employees/:id', deleteEmployees)

router.patch('/employees/:id', updateEmployees)

export default router