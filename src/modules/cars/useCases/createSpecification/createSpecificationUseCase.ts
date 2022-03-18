import { ISpecificationRepository } from "../../repository/ISpecificationRepository";


interface IResquest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

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

export { CreateSpecificationUseCase }