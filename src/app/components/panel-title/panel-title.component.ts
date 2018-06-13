import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel-title',
  templateUrl: './panel-title.component.html'
})
export class PanelTitleComponent {
  @Input() title: string = null;
  @Input() classAttr: any = null;
}
