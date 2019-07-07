import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

export interface Cont {
  title: string
  description: string
  controler: string
  value: number
  maxValue: number
  minValue: number
}

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.scss']
})
export class ControlersComponent implements OnInit {

  @ViewChild('sensorElement', { static: false }) sensorElement: ElementRef;
  isLoading: boolean = false;
  cont: Cont[];

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
    this.isLoading = true;
    this.fb.loadAll().subscribe((resp) => {
      this.cont = resp;
      Object.keys(this.cont).map((item) => {
        this.updateControlers(this.cont[item]);
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    })
  }

  light(val) {
    return this.sensorElement.nativeElement.style.setProperty('--light', val);
  }

  setStyle(name, value) {
    return this.sensorElement.nativeElement.style.setProperty(name, value);
  }

  updateControlers(cont: Cont) {
    if(cont.title === 'visibility') {
      this.light(cont.value);
    } else if (cont.title === 'brightness_6') {
      if (cont.value <= 20) {
        this.cont[4].value = 100;
        this.cont[5].value = 100;
        this.light(this.cont[4].value);
        this.setStyle('--wb', this.cont[5].value);
      } else if (cont.value >= 80) {
        this.cont[4].value = 0;
        this.cont[5].value = 0;
        this.setStyle('--wb', this.cont[5].value);
        this.light(this.cont[4].value);
      }
      this.setStyle('--bright', cont.value);
    } else if (cont.title === 'live_tv') {
      if (cont.value) {
        this.setStyle('--tv', 50);
      } else {
        this.setStyle('--tv', 0);
      }
    } else if (cont.title === 'wb_incandescent') {
      if (cont.value) {
        this.setStyle('--wb', 100);
      } else {
        this.setStyle('--wb', 0);
      }
    } else if (cont.title === 'wifi') {
      if (cont.value) {
        this.setStyle('--wifi',125);
      } else {
        this.setStyle('--wifi', 265);
      }
    } else if (cont.title === 'fastfood') {
      this.setStyle('--food', cont.value);
    } else if (cont.title === 'ac_unit') {
      this.setStyle('--unit', cont.value);
    }

    this.fb.update(cont).subscribe(() => {}, error => console.log(error));
  }
}
