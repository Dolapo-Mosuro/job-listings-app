import { Controller, Post, Body, UseGuards, HttpStatus } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobListingDto } from './dto/create-job-listing.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/v1/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createJob(@Body() createJobListingDto: CreateJobListingDto) {
    try {
      const jobListing = await this.jobsService.createJob(createJobListingDto);
      return {
        message: 'Job listing created successfully',
        status_code: HttpStatus.CREATED,
        data: jobListing,
      };
    } catch (error) {
      return {
        message: 'An error occurred while creating the job listing',
        status_code: HttpStatus.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
