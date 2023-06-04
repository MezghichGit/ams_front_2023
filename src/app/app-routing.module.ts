import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/app-navbar" },
  { path: "listProvider", component: ListProviderComponent, canActivate: [AuthGaurdService] },
  { path: "addProvider", component: AddProviderComponent, canActivate: [AuthGaurdService] },
  { path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGaurdService] },
  //{ path: '**', component: PageNotFoundComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
