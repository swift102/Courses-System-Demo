import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss'] 
})

export class UpdateCourseComponent implements OnInit {
  courseForm: FormGroup;
  courseId: any;
  course: any; 
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.dataService.GetCourseById(this.courseId).subscribe(res => { 
      this.course = res;
      this.loading = false;
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      let updatedCourse: Course = this.courseForm.value;
      updatedCourse.courseId = this.courseId; 
      this.dataService.UpdateCourse(updatedCourse).subscribe({
        next: (response: any) => {
          console.log("Updated Successfully", response);
          this.router.navigate(['/courses']);
        },
        error: (err: any) => {
          console.error("Something went wrong", err);
          this.router.navigate(['/courses']);
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
