import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterStudentComponent {

  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
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
    const name = this.studentForm.get('name')?.value;
    const email = this.studentForm.get('email')?.value;
    const password = this.studentForm.get('password')?.value;
    const studentId = this.studentForm.get('studentId')?.value;
    const department = this.studentForm.get('department')?.value;
    const role = (this.studentForm.get('role')?.value).toLowerCase();
    const acepted = 'No';
    const logged = 0;

    const studentData = {
      name,
      email,
      password,
      studentId,
      department,
      role,
      acepted,
      logged
    };

    this.studentService.registerStudent(studentData).subscribe(response => {
      alert('Estudiante registrado');
    });
  }

  logout(): void {
    this.router.navigate(['']);
  }
}
