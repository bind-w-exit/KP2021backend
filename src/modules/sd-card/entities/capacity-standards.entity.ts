import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';


@Entity()
export class CapacityStandart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  //@Column()
  //logo: number;

  @Column()
  min_capacity: number;

  @Column()
  max_capacity: number;

  @Column()
  typical_fs: string;

  @ManyToMany(() => SDCard)
    @JoinTable()
    sd_cards: SDCard[];
}