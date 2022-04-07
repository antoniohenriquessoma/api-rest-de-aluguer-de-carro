import {Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{
    constructor(private createCategoryUse: CreateCategoryUseCase){

    }

  async handle(req: Request, res: Response): Promise<Response>{
        const { name, description } = req.body;

     await  this.createCategoryUse.execute({name, description });
        return res.status(201).send();
    }
}

export { CreateCategoryController }