
import { Request, Response } from "express"
import { ImportCategoryUsecase } from "./ImportCategoryUsecase"

class ImportCategoryController {

    constructor(private importCategoryUsecase: ImportCategoryUsecase){}

    handle(req: Request, res: Response): Response{
       const { file } = req;
       this.importCategoryUsecase.execute(file);
       res.send();

    }
}



export { ImportCategoryController }