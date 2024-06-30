import { Request, Response } from 'express';
import { formsRepository } from '../repositories/formsRepository';

export class FormsController {
  async createForm(req: Request, res: Response) {
    try {
      const newForm = formsRepository.create(req.body);
      await formsRepository.save(newForm);
      res.status(201).json({ message: 'Formulário criado com sucesso' });
    } catch (error: any) {
      console.error('Erro ao criar formulário:', error);
      res.status(500).json({ message: 'Erro ao criar formulário', error: error.message });
    }
  }

  async getForms(req: Request, res: Response) {
    try {
      const forms = await formsRepository.find();
      res.json(forms);
    } catch (error: any) {
      console.error('Erro ao buscar formulários:', error);
      res.status(500).json({ message: 'Erro ao buscar formulários', error: error.message });
    }
  }

  async getFormById(req: Request, res: Response) {
    const id = +req.params.id; 
    try {
      const form = await formsRepository.findOneBy({ id });
      if (!form) {
        res.status(404).json({ message: 'Formulário não encontrado' });
      } else {
        res.json(form);
      }
    } catch (error: any) {
      console.error('Erro ao buscar formulário:', error);
      res.status(500).json({ message: 'Erro ao buscar formulário', error: error.message });
    }
  }
}