import { Component , OnInit} from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'c:/Users/vince/Downloads/UP/3rd Year/INF 354/Pracs/Prac 1/Architecture_Angular/frontend/src/app/services/data.service';
import { Course } from '../shared/course';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})

export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  


  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  async onSubmit(): Promise<void> {
    if (this.courseForm.valid) {
      let course: Course = this.courseForm.value;
      try {
        const result: any = await this.dataService.AddCourse(course).toPromise();
        if (result.CourseId == 0) {
          console.error("Something went wrong");
        } else {
          console.log("Added Successfully");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      this.router.navigate(['/courses']);
    }
  }
  
  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
