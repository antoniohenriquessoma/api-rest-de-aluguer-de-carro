import { ISpecificationRepository, ICreateSpecificationDTO } from "../repository/ISpecificationRepository";


interface IResquest{
    name: string;
    description: string;
}
class CreateSpecificationService {

    constructor(private specificationController: ISpecificationRepository){
        
    }

    execute({name, description}: IResquest): void{

        const specificationAlreadyExists = this.specificationController.findByName(name);
        if(specificationAlreadyExists){
            throw new Error("Especificação já existe");
        }
        this.specificationController.create({name, description});
    }
}

export { CreateSpecificationService }