import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('jobs')
export class JobListing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  salary: string;

  @Column()
  job_type: string;

  @Column()
  company_name: string;

  @CreateDateColumn()
  created_at: Date;
}
