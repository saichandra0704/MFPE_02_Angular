import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateconsumerbusinessComponent } from './components/createconsumerbusiness/createconsumerbusiness.component';
import { GetPolicyComponent } from './components/get-policy/get-policy.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ShowQuotesComponent } from './components/show-quotes/show-quotes.component';
import { ViewconsumerbusinessComponent } from './components/viewconsumerbusiness/viewconsumerbusiness.component';
import { AuthGuard } from './guards/auth.guard';
import { RandomGuard } from './guards/random.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [RandomGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'consumer', component: ViewconsumerbusinessComponent, canActivate: [RandomGuard]},
  {path: 'createcb', component: CreateconsumerbusinessComponent, canActivate: [RandomGuard]},
  {path: 'quotes', component: ShowQuotesComponent, canActivate: [RandomGuard]},
  {path: 'policy', component: GetPolicyComponent, canActivate: [RandomGuard]},
  {path: '**', component: PagenotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  AppComponent, HomeComponent, LoginComponent, PagenotfoundComponent, 
  NavbarComponent, ViewconsumerbusinessComponent, CreateconsumerbusinessComponent,
  ShowQuotesComponent, GetPolicyComponent
]
