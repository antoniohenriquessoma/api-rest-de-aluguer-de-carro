import { Router } from "express";
import multer from "multer"

import { categoryRepository } from "../modules/cars/repository/implementations/categoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const uploud = multer({
    dest: "./tmp",
})

categoriesRoutes.post("/", (req, res) =>{
return createCategoryController.handle(req, res);
})

categoriesRoutes.get("/", (req, res) =>{
    return listCategoriesController.handle(req, res);
})

categoriesRoutes.post("/import", uploud.single("file"), (req, res) =>{
    const { file } = req;
    console.log(file);
    return res.send();

})

export { categoriesRoutes }