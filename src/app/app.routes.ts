import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterStudentComponent } from './university/register-student/register-student.component';
import { StudentListComponent } from './hospital/student-list/student-list.component';
import { RequestApprovalComponent } from './hospital/request-approval/request-approval.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'universidad/registrar', component: RegisterStudentComponent, canActivate: [AuthGuard] },
    { path: 'hospital/lista', component: StudentListComponent, canActivate: [AuthGuard] },
    { path: 'hospital/aprobados', component: RequestApprovalComponent, canActivate: [AuthGuard] },
];
