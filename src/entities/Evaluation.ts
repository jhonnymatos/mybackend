import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Psych } from "./Psych";

@Entity('evaluations')
export class Evaluation{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({ type: 'integer' })
    rating: number;


    @Column({type: 'text'})
    comment: string

    @Column({type: 'date'})
    date: Date

    @ManyToOne(() => Psych, psych => psych.evaluation)
    @JoinColumn({name: 'psych_id'})
    psych: Psych
}