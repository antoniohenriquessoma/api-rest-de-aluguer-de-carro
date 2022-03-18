import { categoryRepository } from "../../repository/implementations/categoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./listCategoriesController"

const categoriesRespository = categoryRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export { listCategoriesController }