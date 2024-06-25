import { AppDataSource } from "../data-source"
import { Evaluation } from "../entities/Evaluation"

export const evaluationRepository = AppDataSource.getRepository(Evaluation)