import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Psych } from "./Psych";
import { User } from "./User";
 
@Entity('appointment')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number
 
    @Column({type: 'text'})
    name: string
 
    @Column({type: 'text', unique: true})
    email: string
 
    @Column({type: 'text'})
    phone: number
 
    @Column({type: 'text'})
    reason: string
 
    @Column({type: 'text'})
    status: string
 
    @ManyToOne(() => Psych, psych => psych.id)
    @JoinColumn({name: 'psych_id'})
    psych: Psych
 
    @ManyToOne(() => User, user => user.id)
    @JoinColumn({name: 'user_id'})
    user: User
}