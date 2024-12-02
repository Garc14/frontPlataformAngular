import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path : "login",
        component : LoginComponent
    },
    {
        path : "home",
        component: HomeComponent
    }

];