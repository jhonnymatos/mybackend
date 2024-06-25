import { AppDataSource } from "../data-source"
import Forms from "../entities/Forms"

export const formsRepository = AppDataSource.getRepository(Forms);