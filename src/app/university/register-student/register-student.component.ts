import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterStudentComponent {
  student!: Student;

  studentForm: FormGroup;

  constructor(private studentService: StudentService,
    private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      studentId: ['', Validators.required],
      department: [''],
      role: [''],
      acepted: [''],
      logged: [0]
    });
  }

  onSubmit(): void {
    this.studentService.registerStudent(this.student).subscribe(response => {
      alert('Estudiante registrado');
    });
  }
}
