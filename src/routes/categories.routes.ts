import { Router } from "express";
import multer from "multer"

import { categoryRepository } from "../modules/cars/repository/implementations/categoriesRepository";
import createCategoryController  from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const uploud = multer({
    dest: "./tmp",
})

categoriesRoutes.post("/", (req, res) =>{
 // console.log("RELOAD FUNCIONANDO");
   return createCategoryController().handle(req, res);
})

categoriesRoutes.get("/", (req, res) =>{
    return listCategoriesController.handle(req, res);
})

categoriesRoutes.post("/import", uploud.single("file"), (req, res) =>{
    const { file } = req;
    console.log(file);
    return importCategoryController.handle(req, res);

})

export { categoriesRoutes }