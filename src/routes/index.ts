import { Router } from 'express';
import { categoriesRoutes } from "./categories.routes"
import { specificationRoutes } from "./specification.routes"
const router = Router()

//Routas de categoria
router.use("/categoria", categoriesRoutes);
router.use("/especificacao", specificationRoutes);

export { router }