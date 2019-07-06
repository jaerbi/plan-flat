import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

export interface Cont {
  title: string
  description: string
  controler: string
  value: number
  maxValue: number
}

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.scss']
})
export class ControlersComponent implements OnInit {

  isLoading: boolean = false;
  cont: Cont[];

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
    this.isLoading = true;
    this.fb.loadAll().subscribe((resp) => {
      this.cont = resp;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    })
  }

  updateControlers(cont: Cont) {
    console.log(cont);
  }

}
