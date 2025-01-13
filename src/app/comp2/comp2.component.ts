import {Component, inject} from '@angular/core';
import {CardModule} from "primeng/card";
import {appStore} from "../store/store";

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component {
  readonly store = inject(appStore);


}
