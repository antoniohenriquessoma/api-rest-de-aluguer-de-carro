import {Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{
    constructor(private createCategoryUse: CreateCategoryUseCase){

    }

    handle(req: Request, res: Response): Response{
        const { name, description } = req.body;

        this.createCategoryUse.execute({name, description });
        return res.status(201).send();
    }
}

export { CreateCategoryController }