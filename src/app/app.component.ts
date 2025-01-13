import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgrxSignals';
}
