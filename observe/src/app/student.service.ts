import { Injectable } from '@angular/core';
import {Student} from './student.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Daniyar',
    enrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 2,
    name: 'Damir',
    enrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
},
{
    id: 3,
    name: 'Rus',
    enrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
}];
  constructor() { }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
        setTimeout(()=> {
          observer.next(this.students);
        }, 1000);
    });

    return studentsObservable;
  }
}
