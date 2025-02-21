import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent {
  student: Student = { name: '', email: '', studentId: '', department: '', accepted: 'No' };

  constructor(private studentService: StudentService) {}

  register() {
    this.studentService.registerStudent(this.student).subscribe(response => {
      console.log('Student registered', response);
    });
  }
}
