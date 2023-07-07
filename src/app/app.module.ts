import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './services/user.service';
import { DemandesListComponent } from './demandes-list/demandes-list.component';
import { DahsboardAssistantComponent } from './dahsboard-assistant/dahsboard-assistant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutAffectaionComponent } from './ajout-affectaion/ajout-affectaion.component';
import { InfosComponent } from './infos/infos.component';
import { ListControlComponent } from './list-control/list-control.component';
import { ListAffectationsComponent } from './list-affectations/list-affectations.component';
import { InfosEnginsComponent } from './infos-engins/infos-engins.component';
import { InfosAffectationComponent } from './infos-affectation/infos-affectation.component';
import { ListEnginsComponent } from './list-engins/list-engins.component';
import { ConfirmSuppComponent } from './confirm-supp/confirm-supp.component';
import { UpdateEnginComponent } from './update-engin/update-engin.component';
import { UpdateAffectationComponent } from './update-affectation/update-affectation.component';
import { EntreeEnginComponent } from './entree-engin/entree-engin.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListDemandeComponent } from './list-demandes/list-demandes.component';
import { ControlEntreeComponent } from './control-entree/control-entree.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ForbiddenComponent,
    DemandesListComponent,
    DashboardComponent,
    DahsboardAssistantComponent,
    AjoutAffectaionComponent,
    ListDemandeComponent,
    InfosComponent,
    ListControlComponent,
    ListAffectationsComponent,
    InfosEnginsComponent,
    InfosAffectationComponent,
    ListEnginsComponent,
    ConfirmSuppComponent,
    UpdateEnginComponent,
    UpdateAffectationComponent,
    EntreeEnginComponent,
    ListDetailsComponent,
    ControlEntreeComponent,
    RegistrationComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
