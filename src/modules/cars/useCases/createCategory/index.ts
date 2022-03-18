import { categoryRepository } from "../../repository/implementations/categoriesRepository";
import {CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController"

const categoriesRespository =  categoryRepository.getInstance();

const createCategoryUse = new CreateCategoryUseCase(categoriesRespository);

const createCategoryController = new CreateCategoryController(createCategoryUse);


export { createCategoryController }