import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/course';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
    courses:Course[] = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.GetCourses()
    console.log(this.courses)
  }

  GetCourses() {
    this.dataService.GetCourses().subscribe(result => {
      let courseList:any[] = result;
      courseList.reverse().forEach((element) => {
        this.courses.push(element);
      })
    });
  }
  

  onDeleteCourse(courseId: any): void {
    if (confirm("Are you sure you want to delete this course?")) {
      this.dataService.delete(courseId).subscribe(() => {
        this.courses = this.courses.filter(course => course.courseId !== courseId);
        this.GetCourses();
        
      }, 
      ()  => {
        location.reload();
      }
      );
    }
  }
  
}



