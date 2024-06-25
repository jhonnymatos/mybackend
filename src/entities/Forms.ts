import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forms')
class Forms {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  fullName: string;

  @Column({type: 'text'})
  email: string;

  @Column({type: 'text'})
  phone: string;

  @Column({type: 'text'})
  state: string;

  @Column({type: 'text'})
  crp: string;

  @Column({type: 'text'})
  approach: string;

  @Column({type: 'text'})
  specialty: string;

  @Column({ type: 'text', nullable: true })
  specialty2: string | null;

  @Column({ type: 'text', nullable: true })
  specialty3: string | null;

  @Column({type: 'text'})
  formation: string;

  @Column({type: 'text'})
  formationArea: string;

  @Column({type: 'text', nullable: true })
  formationArea2: string | null;

  @Column({type: 'text'})
  service: string;

  @Column({ type: 'text', nullable: true })
  service2: string | null;

  @Column({ type: 'text', nullable: true })
  service3: string | null;

  @Column({type: 'text'})
  gender: string;

  @Column({type: 'text'})
  serviceModality: string;

  @Column({type: 'text'})
  pounds: string;

  @Column({type: 'text'})
  shortBio: string;

  @Column({type: 'text'})
  fullBio: string;
}

export default Forms;