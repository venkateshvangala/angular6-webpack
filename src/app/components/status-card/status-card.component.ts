import { Component, Input } from '@angular/core';

@Component({
  selector: 'status-card-component',
  templateUrl: './status-card.component.html'
})
export class StatusCardComponent {
  @Input() status: string = "";
  @Input() title: string = "";
  @Input() count: string = "";
  @Input() countPercentage: string = "";
  @Input() totalSpace: string = "";
}
