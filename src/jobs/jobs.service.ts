import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobListing } from './job-listing.entity';
import { CreateJobListingDto } from './dto/create-job-listing.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobListing)
    private readonly jobRepository: Repository<JobListing>,
  ) {}

  async createJob(
    createJobListingDto: CreateJobListingDto,
  ): Promise<JobListing> {
    const jobListing = this.jobRepository.create(createJobListingDto);
    return this.jobRepository.save(jobListing);
  }
}
