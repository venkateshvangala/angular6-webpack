import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-grid-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public ngOnInit() {
    console.log('Initial App State');
  }
}
