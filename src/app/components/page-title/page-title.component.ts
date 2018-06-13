import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title-component',
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
  @Input() title: string = null;
  @Input() imgSrc: any = null;
}
