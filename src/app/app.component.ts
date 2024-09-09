import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { BacktologinComponent } from './backtologin/backtologin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyclientsComponent } from './myclients/myclients.component';
import { FilterComponent } from './filter/filter.component';
import { FilterTwoComponent } from './filter-two/filter-two.component';
import { CreateCompaignComponent } from './create-compaign/create-compaign.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, LoginComponent, ForgotpasswordComponent, BacktologinComponent, ChangepasswordComponent, AppAlignmentComponent, HeaderComponent, SidebarComponent, MyclientsComponent, FilterComponent, FilterTwoComponent, CreateCompaignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admax';
}
