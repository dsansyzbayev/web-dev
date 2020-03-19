import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observe';
  students: Student[]=[];
  
  constructor(private studentService: StudentService){}

  ngOnInit() {
    const studentObservable = this.studentService.getStudents();
    studentObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    });
  }
}
