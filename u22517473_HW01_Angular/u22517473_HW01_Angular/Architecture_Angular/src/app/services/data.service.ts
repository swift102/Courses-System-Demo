import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://localhost:7049/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' 
    })
  };

  constructor(private httpClient: HttpClient) { }

  GetCourses(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}Course/GetAllCourses`);
  }

  GetCourseById(courseId: any): Observable<Course> {
    return this.httpClient.get<Course>(`${this.apiUrl}Course/GetCourseByID/${courseId}`);
  }

  AddCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(`${this.apiUrl}Course/AddCourse`, course, this.httpOptions);
  }

  UpdateCourse(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.apiUrl}Course/UpdateCourse`, course, this.httpOptions); 
  }

  delete(courseId: any): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}Course/DeleteCourse/${courseId}`, this.httpOptions);
  }

}
