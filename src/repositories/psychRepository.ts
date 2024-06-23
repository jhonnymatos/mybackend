import { AppDataSource } from '../data-source'
import { Psych } from '../entities/Psych'

export const psychRepository = AppDataSource.getRepository(Psych);

interface IPsychRepo {
    save(psych: Psych): Promise<void>;
    update(psych: Psych): Promise<void>;
    delete(psychId: number): Promise<void>;
    getById(psychId: number): Promise<Psych>;
    getAll(): Promise<Psych[]>;
    findByEmail(email: string): Promise<Psych | null>;
  }
  
  export class PsychRepo implements IPsychRepo {
    async save(psych: Psych): Promise<void> {
      try {
        await psychRepository.save(psych);
      } catch (error) {
        throw new Error("Falha ao criar usuário!");
      }
    }
  
    async update(psych: Psych): Promise<void> {
      try {
        const existingPsych = await psychRepository.findOneBy({ id: psych.id });
        if (!existingPsych) {
          throw new Error("Usuário não encontrado");
        }
  
        existingPsych.name = psych.name;
        existingPsych.password = psych.password;
        existingPsych.email = psych.email;
  
        await psychRepository.save(existingPsych);
      } catch (error) {
        throw new Error("Falha ao atualizar usuário!");
      }
    }
  
    async delete(psychId: number): Promise<void> {
      try {
        const existingPsych = await psychRepository.findOneBy({ id: psychId });
        if (!existingPsych) {
          throw new Error("Usuário não encontrado");
        }
  
        await psychRepository.remove(existingPsych);
      } catch (error) {
        throw new Error("Falha ao excluir usuário!");
      }
    }
  
    async getById(psychId: number): Promise<Psych> {
      try {
        const psych = await psychRepository.findOneBy({ id: psychId });
        if (!psych) {
          throw new Error("Usuário não encontrado!");
        }
        return psych;
      } catch (error) {
        throw new Error("Falha ao buscar usuário por ID!");
      }
    }
  
    async getAll(): Promise<Psych[]> {
      try {
        return await psychRepository.find();
      } catch (error) {
        throw new Error("Falha ao acessar todos os dados!");
      }
    }
  
    async findByEmail(email: string): Promise<Psych | null> {
      try {
        const psych = await psychRepository.findOneBy({ email });
        if (!psych) {
          throw new Error("Usuário não encontrado");
        }
        return psych;
      } catch (error) {
        throw new Error("Falha ao buscar usuário por e-mail!");
      }
    }
  }