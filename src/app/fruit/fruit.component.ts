import {Component, inject} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {Button, ButtonDirective} from "primeng/button";
import {TableModule} from "primeng/table";
import {appStore} from "../store/store";
import {CurrencyPipe} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {FormsModule} from "@angular/forms";
import {Ifruit} from "../../models/ifruit";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'app-fruit',
  standalone: true,
  imports: [
    InputTextModule,
    InputNumberModule,
    Button,
    TableModule,
    CurrencyPipe,
    ButtonDirective,
    Ripple,
    FormsModule,
    ToolbarModule
  ],
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.scss'
})
export class FruitComponent {
  readonly store = inject(appStore);

  fruits = this.store.fruits;
  total = this.store.totalPrice;
  inputName: string | undefined;
  inputPrice: number | undefined;


  addFruit() {
    if (this.inputName && this.inputPrice) {
      let out: Ifruit = {name: this.inputName, price: Number(this.inputPrice)};
      this.store.addFruit(out);
    }
  }

  deleteFruit(fruit: Ifruit) {

    this.store.deleteFruit(fruit);
  }

}
