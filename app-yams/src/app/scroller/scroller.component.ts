import { Component, ElementRef, NgZone } from '@angular/core';
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';
import { Observable, debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent {
  pastries: Array<Pastrie>;
  private _listEnd: number = 4;

  constructor(
    private pastrieService: PastrieService,
    private elementRef: ElementRef,
    private zone: NgZone
  ) {
    this.pastries = this.pastrieService.paginate(0, this._listEnd);
    const wheelObs: Observable<Event> = fromEvent<Event>(this.elementRef.nativeElement, "scroll").pipe(
      debounceTime(250)
      //throttleTime(250)
    );

    wheelObs.subscribe((event) => {
      let scrollTop: number = this.elementRef.nativeElement.scrollTop;
      let scrollHeight: number = this.elementRef.nativeElement.scrollHeight;
      let offsetHeight: number = this.elementRef.nativeElement.offsetHeight;

      if (scrollTop > scrollHeight - offsetHeight - 20) {
        let newPastry: Pastrie | undefined = this.pastrieService.getPastrieByIndex(this._listEnd);
        if (newPastry) {
          this.pastries.push(newPastry);
          this._listEnd++;
        }
      }
      
    })
  }
}


