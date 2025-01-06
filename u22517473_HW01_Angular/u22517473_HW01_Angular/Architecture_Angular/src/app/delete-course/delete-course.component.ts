import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {
  courseId: any;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.deleteCourse();
  }

  deleteCourse(): void {
    this.dataService.delete(this.courseId).subscribe({
      next: () => {
        console.log("Course deleted successfully");
        this.router.navigate(['/courses']); 
      },
      error: (err: any) => {
        console.error("Error deleting course", err);
 
      }
    });
  }
}
