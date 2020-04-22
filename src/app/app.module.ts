import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { FormLinkComponent } from './form-link/form-link.component';
import { AdminComponent } from './admin/admin.component';
import { Form1Component } from './form1/form1.component';
import { ServiceService } from './service.service';
import { DyanmicComponent } from './dyanmic/dyanmic.component';
import { Form2Component } from './form2/form2.component';
import { LoginComponent } from './login/login.component';
import { NewPageComponent } from './new-page/new-page.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    TopMenuComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    EmployeeComponent,
    FormLinkComponent,
    AdminComponent,
    Form1Component,
    DyanmicComponent,
    Form2Component,
    LoginComponent,
    NewPageComponent,
    DetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
