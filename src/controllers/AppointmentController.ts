import express, { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppointmentRepository } from '../repositories/appointmentRepository';
import { Appointment } from '../entities/Appointment';

const app = express();
const appointmentRepository = new AppointmentRepository(new Repository(Appointment));


export class AppointmentController{}
// Criação de Consulta
app.post('/appointment', async (req: Request, res: Response) => {
  const { name, email, phone, reason } = req.body;
  const appointment = new Appointment({ name, email, phone, reason, status: 'pendente' });
  await appointmentRepository.save(appointment);
  res.status(201).send({ message: 'Consulta criada com sucesso!' });
});

// Listagem de Consultas
app.get('/appointment', async (req: Request, res: Response) => {
  const psych_id = req.query.psych_id;
  const appointments = await appointmentRepository.find(psych_id, 'pendente');
  res.send(appointments);
});

// Visualização de Consulta
app.get('/appointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const appointment = await appointmentRepository.findById(id);
  if (!appointment) {
    res.status(404).send({ message: 'Consulta não encontrada!' });
  } else {
    res.send(appointment);
  }
});

// Atualização de Status
app.patch('/appointment/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { status } = req.body;
  const appointment = await appointmentRepository.findById(id);
  if (!appointment) {
    res.status(404).send({ message: 'Consulta não encontrada!' });
  } else {
    appointment.status = status;
    await appointmentRepository.save(appointment);
    res.send({ message: `Status da consulta atualizado para ${status}!` });
  }
});
}