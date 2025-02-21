import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data.filter(d => d.role === 'estudiante');
    });
  }

  approve(): void {
    this.router.navigate(['hospital/aprobados']);
  }

  logout(): void {
    this.router.navigate(['']);
  }
}
