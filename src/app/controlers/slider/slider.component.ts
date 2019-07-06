import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cont} from "../controlers.component";

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

	@Output() onChangeSlide = new EventEmitter<Cont>();
	@Input() item: Cont;
	rangeSize: number;

	updateSetting(event) {
		this.rangeSize = event.value;

		this.onChangeSlide.emit({
			title: this.item.title,
			value: this.rangeSize,
			description: this.item.description,
			controler: this.item.controler,
			maxValue: this.item.maxValue,
		})
	}

}
