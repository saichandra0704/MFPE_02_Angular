import { CreateconsumerbusinessComponent } from './components/createconsumerbusiness/createconsumerbusiness.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomGuard } from './guards/random.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RandomGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'createcb', component: CreateconsumerbusinessComponent, canActivate: [RandomGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  AppComponent, HomeComponent, LoginComponent, 
  NavbarComponent, CreateconsumerbusinessComponent
]
