import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoryRepository";
import { Repository, getRepository } from "typeorm"

//singleton padrao de projecto

class categoryRepository implements ICategoriesRepository{
    private repository: Repository<Category>;

   // private static INSTANCE: categoryRepository;
 
      constructor(){
        this.repository = getRepository(Category);
      }


  async  create({name, description}: ICreateCategoryDTO): Promise<void>{
    
    const category = this.repository.create({
        name,
        description
    })
    await this.repository.save(category)
  }

    async list(): Promise<Category[]>{
       const categories = await this.repository.find();
       return categories;
    }

   async findByName(name: string): Promise<Category>{
        const category = await this.repository.findOneBy({ name})
        return category;
    }
}

export { categoryRepository };