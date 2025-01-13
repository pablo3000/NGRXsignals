import { Component } from '@angular/core';
import {Comp2Component} from "../comp2/comp2.component";
import {Button} from "primeng/button";
import {Location} from "@angular/common";

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [
    Comp2Component,
    Button
  ],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.scss'
})
export class Comp3Component {

  constructor(private location: Location) {}

  back() {
    this.location.back();
  }
}
