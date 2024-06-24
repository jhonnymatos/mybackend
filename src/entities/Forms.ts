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
  state: string;
 
  @Column({type: 'text'})
  crp: string;
 
  @Column({type: 'text', nullable: true})
  specialty: string;
 
  @Column({ type: 'text'})
  specialty2: string | null;
 
  @Column({type: 'text'})
  formation: string;
 
  @Column({type: 'text'})
  formationArea: string;
 
  @Column({type: 'text', nullable: true})
  service: string;
 
  @Column({ type: 'text'})
  service2: string | null;
 
  @Column({type: 'text'})
  shortBio: string;
 
  @Column({type: 'text'})
  fullBio: string;
}

export default Forms;