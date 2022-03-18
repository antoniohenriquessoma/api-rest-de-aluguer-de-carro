import { specificationRepository } from "../../repository/implementations/specificationRepository";

import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";


const SpecificationRepository = new specificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(SpecificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }