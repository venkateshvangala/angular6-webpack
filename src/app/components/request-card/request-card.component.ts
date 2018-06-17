import { Component, Input } from '@angular/core';

@Component({
  selector: 'request-card',
  templateUrl: './request-card.component.html'
})
export class RequestCardComponent {
  @Input() status: string = "";
  @Input() cardTitle: string = "";
  @Input() cardTotal: string = "";
  @Input() cardTotalSpace: string = "";
  @Input() stage1Count: string = "";
  @Input() stage2Count: string = "";

}
