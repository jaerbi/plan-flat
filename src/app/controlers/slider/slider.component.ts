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
	showValue: boolean = false;
	textOnOff: string = 'Вкл';
	showOnOff: boolean = false;

	updateSetting(event) {
		this.showValue = true;
		if (this.item.maxValue === 1) {
			this.showValue = false;
			this.showOnOff = true;
		}
		this.textOnOff = (event.value === 1) ? 'Вкл' : 'Викл';
		this.rangeSize = event.value;

		if (this.item.title === 'visibility') {
		}

		this.onChangeSlide.emit({
			title: this.item.title,
			value: this.rangeSize,
			description: this.item.description,
			controler: this.item.controler,
			maxValue: this.item.maxValue,
			minValue: this.item.minValue
		})
	}
}
