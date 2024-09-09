import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FilterComponent } from "../filter/filter.component";
import { FilterTwoComponent } from '../filter-two/filter-two.component';

@Component({
  selector: 'app-myclients',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, FilterComponent, FilterTwoComponent],
  templateUrl: './myclients.component.html',
  styleUrl: './myclients.component.css'
})
export class MyclientsComponent {
  
}
