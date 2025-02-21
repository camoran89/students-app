import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.scss']
})
export class RequestApprovalComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  approveRequest(id: string) {
    let filteredStudent = this.students.find((student: Student) => student.studentId?.toLowerCase() == id.toLowerCase());
    
    if (filteredStudent) {
      filteredStudent.accepted = 'Si';
    }

    this.studentService.updateStudent(id, filteredStudent).subscribe(() => {
      console.log('Request approved');
    });
  }

  rejectRequest(id: string) {
    let filteredStudent = this.students.find((student: Student) => student.studentId?.toLowerCase() == id.toLowerCase());
    
    if (filteredStudent) {
      filteredStudent.accepted = 'No';
    }

    this.studentService.updateStudent(id, filteredStudent).subscribe(() => {
      console.log('Request rejected');
    });
  }
}
