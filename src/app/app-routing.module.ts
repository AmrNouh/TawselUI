import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./shared/login/login.component";
import {SystemUsersComponent} from "./admin/system-users/system-users.component";
import {ErrorComponent} from "./shared/error/error.component";
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./shared/homepage/homepage.component";
import {ReportsComponent} from "./admin/reports/reports.component";
import {GovernmentsComponent} from "./admin/governments/governments.component";
import {BranchesComponent} from "./admin/branches/branches.component";
import {SettingsComponent} from "./admin/settings/settings.component";
import {OrdersViewerComponent} from "./shared/orders-viewer/orders-viewer.component";
import {UserprivilegesComponent} from "./admin/settings/userprivileges/userprivileges.component";
import {NewcityComponent} from "./admin/settings/newcity/newcity.component";


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomepageComponent},
  {path: "orders", component: OrdersViewerComponent},
  {path: "reports", component: ReportsComponent},
  {path: "governments", component: GovernmentsComponent},
  {path: "branches", component: BranchesComponent},
  {path: "newUser", component: SystemUsersComponent},
  {path: "settings", component: SettingsComponent},
  {path: "settings/privileges", component: UserprivilegesComponent},
  {path: "settings/newCity", component: NewcityComponent},
  {path: "**", component: ErrorComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{})],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
