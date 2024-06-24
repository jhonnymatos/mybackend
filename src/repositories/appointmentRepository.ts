/*import { getRepository, Repository } from 'typeorm';
import { Appointment } from '../entities/Appointment';

export class AppointmentRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async save(appointment: Appointment): Promise<Appointment> {
    return this.repository.save(appointment);
  }

  async find(psych_id?: string, status?: string): Promise<Appointment[]> {
    const query = this.repository.createQueryBuilder('appointment');

    if (psych_id) {
      query.andWhere('appointment.psych_id = :psych_id', { psych_id });
    }

    if (status) {
      query.andWhere('appointment.status = :status', { status });
    }

    return query.getMany();
  }

  async findById(id: number): Promise<Appointment | undefined> {
    return this.repository.findOne(id);
  }
}*/