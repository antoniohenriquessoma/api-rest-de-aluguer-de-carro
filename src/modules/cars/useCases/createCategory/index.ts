import { categoryRepository } from "../../repository/implementations/categoriesRepository";
import {CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController"


export default(): CreateCategoryController =>{
    const categoriesRespository =  new categoryRepository();

    const createCategoryUse = new CreateCategoryUseCase(categoriesRespository);
    
    const createCategoryController = new CreateCategoryController(createCategoryUse);


return createCategoryController
}


 