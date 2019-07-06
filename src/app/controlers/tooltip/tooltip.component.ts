import {Component, Input, OnInit} from '@angular/core';
import {Cont} from "../controlers.component";


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent implements OnInit {

  visibility: boolean = true;


@Input() item: Cont;
  constructor() { }

  ngOnInit() {
  }

}
