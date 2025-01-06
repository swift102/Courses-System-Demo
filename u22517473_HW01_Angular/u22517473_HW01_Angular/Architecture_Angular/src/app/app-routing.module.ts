import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './course/courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'update-course/:id', component: UpdateCourseComponent },
  { path: 'delete-course/:id', component: DeleteCourseComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path:'Delete-course', component: CoursesComponent},
  {path: '', redirectTo:'/courses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
