import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-grid-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('Initial App State');
  }
}
