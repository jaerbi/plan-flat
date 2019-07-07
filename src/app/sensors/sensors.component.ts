import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Cont} from "../controlers/controlers.component";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  @Input() item: Cont;
  @Input() sensorElement: ElementRef;

  tv: boolean = false;

  ngOnInit() {
    if (this.item.title === 'live_tv') {
      this.tv = this.item.value ? true : false;
    }
  }
}
