import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyclientsComponent } from "../myclients/myclients.component";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MyclientsComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

}
