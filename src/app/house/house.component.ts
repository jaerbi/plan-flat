import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  rangeSize: number = 30;

  updateSetting(event) {
    this.rangeSize = event.value;
  }

}
