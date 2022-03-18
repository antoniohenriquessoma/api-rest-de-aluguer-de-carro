
import {Request, Response } from "express";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

class CreateSpecificationController {

    constructor(private createSpecification: CreateSpecificationUseCase){

    }
    handle(req: Request, res: Response): Response{
        const { name, description} = req.body;
        this.createSpecification.execute({ name, description});
        return res.status(201).send()
    }

}
export { CreateSpecificationController }