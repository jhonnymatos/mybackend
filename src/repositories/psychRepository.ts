import { AppDataSource } from '../data-source'
import { Psych } from '../entities/Psych'

export const psychRepository = AppDataSource.getRepository(Psych)