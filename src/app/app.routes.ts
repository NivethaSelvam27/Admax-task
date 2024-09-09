import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BacktologinComponent } from './backtologin/backtologin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AppAlignmentComponent } from './app-alignment/app-alignment.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyclientsComponent } from './myclients/myclients.component';
import { FilterComponent } from './filter/filter.component';
import { FilterTwoComponent } from './filter-two/filter-two.component';
import { CreateCompaignComponent } from './create-compaign/create-compaign.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: ForgotpasswordComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
    ],
  },
  {
    path: 'backtologin',
    component: BacktologinComponent,
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: AppAlignmentComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'header', component: HeaderComponent },
    ],
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'myclients',
    component: MyclientsComponent,
  },
  {
    path: '',
    component: FilterTwoComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'filter-two', component: FilterTwoComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'create-compaign', component: CreateCompaignComponent },
    ]
  },
];
