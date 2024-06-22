import { AppDataSource } from '../data-source'
import { Psych } from '../entities/Psych'
import IPsych from '../interfaces/IPsych'

export const psychRepository = AppDataSource.getRepository(Psych);