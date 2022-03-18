import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repository/ICategoryRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){

    }
    execute(): Category[]{
        const categories = this.categoriesRepository.list();
        return categories;
    }
}


export { ListCategoriesUseCase }