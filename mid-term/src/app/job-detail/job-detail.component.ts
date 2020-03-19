import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {
  @Input() job: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getJob();
  }
  
  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.jobService.getJob(id)
      .subscribe((job) => {
        this.job = job;
        console.log(this.job);
      });
  }

  like(): void {
    this.job.like_count++;
    console.log(this.job.like_count);
  }

}
