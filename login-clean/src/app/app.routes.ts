import { Routes } from '@angular/router';
import { DashboardComponent } from './infrastructure/ui/components/dashboard/dashboard.component';
import { LoginComponent } from './infrastructure/ui/components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component: DashboardComponent},
    {path: 'iniciar-sesion', component: LoginComponent},
];
