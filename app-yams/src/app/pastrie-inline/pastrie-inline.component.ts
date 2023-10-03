import { Component, Input } from '@angular/core';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastrie-inline',
  templateUrl: './pastrie-inline.component.html',
  styleUrls: ['./pastrie-inline.component.scss']
})
export class PastrieInlineComponent {
  @Input() pastrie?: Pastrie;

}
