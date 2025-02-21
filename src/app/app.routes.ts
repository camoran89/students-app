import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterStudentComponent } from './university/register-student/register-student.component';
import { StudentListComponent } from './hospital/student-list/student-list.component';
import { RequestApprovalComponent } from './hospital/request-approval/request-approval.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'universidad/registrar', component: RegisterStudentComponent },
    { path: 'hospital/lista', component: StudentListComponent },
    { path: 'hospital/aprobados', component: RequestApprovalComponent },
];
