import {Component, inject, signal, WritableSignal} from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {Countries} from "../../util/Const";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {Icountry} from "../../models/icountry";
import {JsonPipe} from "@angular/common";
import {appStore} from "../store/store";
import {Comp2Component} from "../comp2/comp2.component";
import {Button, ButtonDirective} from "primeng/button";
import {Comp3Component} from "../comp3/comp3.component";
import {RouterLink} from "@angular/router";
import {FruitComponent} from "../fruit/fruit.component";

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    CardModule,
    JsonPipe,
    Comp2Component,
    Button,
    RouterLink,
    ButtonDirective,
    FruitComponent
  ],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

  protected readonly Countries = Countries;
  readonly store = inject(appStore);

  country= this.store.seletedCountry();



  public onDropDownChange(value:any){
    this.store.changeValue(value.value);
    this.country = this.store.seletedCountry();
  }

  protected readonly Comp3Component = Comp3Component;
}
