import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.scss']
})
export class SendRequestComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  sendRequest() {
    this.students.forEach((student: Student) => {
      if (student && student.studentId) {
        this.studentService.updateStudent(student.studentId, student).subscribe(response => {
          console.log('Request sent', response);
        });
      }
    });
  }
}
