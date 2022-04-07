
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase  } from "./ImportCategoryUsecase";
import { categoryRepository } from "../../repository/implementations/categoriesRepository";


const categoriesRespository =   null;
const  importCategoryUsecase = new ImportCategoryUsecase(categoriesRespository)
const  importCategoryController = new ImportCategoryController(importCategoryUsecase);


export { importCategoryController }