import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cont} from "../controlers.component";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() item: Cont;

  rangeSize: number;
  @Output() onChangeSlide = new EventEmitter<Cont>();

  updateSetting(event) {
    this.rangeSize = event.value;

    this.onChangeSlide.emit({
      title: this.item.title,
      value: this.rangeSize
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
