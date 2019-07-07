import {Component, Input} from '@angular/core';
import {Cont} from "../controlers.component";


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent {

  @Input() item: Cont;
}
