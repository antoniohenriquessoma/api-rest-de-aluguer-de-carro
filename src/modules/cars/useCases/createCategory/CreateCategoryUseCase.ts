import { ICategoriesRepository } from "../../repository/ICategoryRepository";

interface Iresquest{
    name: string;
    description: string;
}

class CreateCategoryUseCase{

    constructor(private categoriesController: ICategoriesRepository){}

   async execute({name, description}: Iresquest): Promise<void>{
     
    const categoryAlreadyExiste = await this.categoriesController.findByName(name);

    if(categoryAlreadyExiste){
          throw new Error("Categoria já existe!");
    }
         this.categoriesController.create({ name, description});
    }
    
}

export { CreateCategoryUseCase }