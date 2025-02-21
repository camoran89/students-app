import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterStudentComponent } from './university/register-student/register-student.component';
import { SendRequestComponent } from './university/send-request/send-request.component';
import { StudentListComponent } from './hospital/student-list/student-list.component';
import { RequestApprovalComponent } from './hospital/request-approval/request-approval.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'university/register-student', component: RegisterStudentComponent },
    { path: 'university/send-request', component: SendRequestComponent },
    { path: 'hospital/student-list', component: StudentListComponent },
    { path: 'hospital/request-approval', component: RequestApprovalComponent },
];
