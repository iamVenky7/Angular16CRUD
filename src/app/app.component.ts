import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'creditcardadmin';
  sideBarOpen = true;
  toggleSidebar(){
    this.sideBarOpen = this.sideBarOpen ? false : true;
  }
}
