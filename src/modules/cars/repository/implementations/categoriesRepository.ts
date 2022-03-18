import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoryRepository";

//singleton padrao de projecto

class categoryRepository implements ICategoriesRepository{
    private categories: Category[];

    private static INSTANCE: categoryRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance(): categoryRepository{
        if(!categoryRepository.INSTANCE){
            categoryRepository.INSTANCE = new categoryRepository();

        }
        return categoryRepository.INSTANCE

    }

    create({name, description}: ICreateCategoryDTO){
    
    const category = new  Category();
    Object.assign(category, {name, description, created_at: new Date()});
    this.categories.push(category);
    }

    list(): Category[]{
        return this.categories
    }

    findByName(name: string): Category{
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}

export { categoryRepository };