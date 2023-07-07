import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { DemandesListComponent } from './demandes-list/demandes-list.component';
import { DahsboardAssistantComponent } from './dahsboard-assistant/dahsboard-assistant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutDemandeComponent } from './ajout-demande/ajout-demande.component';
import { ListDemandeComponent } from './list-demandes/list-demandes.component';
import { AjoutAffectaionComponent } from './ajout-affectaion/ajout-affectaion.component';
import { ListEnginsComponent } from './list-engins/list-engins.component';
import { ListAffectationsComponent } from './list-affectations/list-affectations.component';
import { EntreeEnginComponent } from './entree-engin/entree-engin.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes =[
  {path: '', component: LoginComponent},
  {path:'login', component : LoginComponent},
  {path:'registration', component : RegistrationComponent},
  {path: 'forbidden',component: ForbiddenComponent},
  {path: 'demandeur',component: AdminLayoutComponent,canActivate:[AuthGuard],data:{roles:'Demandeur'},
    children: 
    [
      {path: '',loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'addD', component: AjoutDemandeComponent},
      {path: 'listeDem', component: ListDemandeComponent},
      {path: 'listeDetails', component: ListDetailsComponent}
    ]
  },
  {path: 'assistant',component: AdminLayoutComponent,canActivate:[AuthGuard],data:{roles:'Assistant'},
    children: 
    [
      {path: '',loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)},
      {path: 'dashboard', component: DahsboardAssistantComponent},
      {path: 'listeDem', component: DemandesListComponent},
      {path: 'ajoutAff', component: AjoutAffectaionComponent},
      {path: 'listeAff', component: ListAffectationsComponent},
      {path: 'listeEng', component: ListEnginsComponent},
      {path: 'entreeEng', component: EntreeEnginComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
