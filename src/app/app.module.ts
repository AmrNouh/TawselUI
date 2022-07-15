import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './shared/login/login.component';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SidemenuComponent} from './shared/sidemenu/sidemenu.component';
import {SystemUsersComponent} from './admin/system-users/system-users.component';
import {ReportsComponent} from './admin/reports/reports.component';
import {BranchesComponent} from './admin/branches/branches.component';
import {AddCityComponent} from './admin/governments/add-city/add-city.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './shared/error/error.component';
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './admin/settings/settings.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import {DataTablesModule} from "angular-datatables";
import { GovernmentsComponent } from './admin/governments/governments.component';
import { OrdersViewerComponent } from './shared/orders-viewer/orders-viewer.component';
import { UserprivilegesComponent } from './admin/settings/userprivileges/userprivileges.component';
import { NewcityComponent } from './admin/settings/newcity/newcity.component';
import { ShippingCostComponent } from './admin/settings/shipping-cost/shipping-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    SystemUsersComponent,
    ReportsComponent,
    BranchesComponent,
    AddCityComponent,
    ErrorComponent,
    SettingsComponent,
    HomepageComponent,
    GovernmentsComponent,
    OrdersViewerComponent,
    UserprivilegesComponent,
    NewcityComponent,
    ShippingCostComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
