import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routerPath = 'Contact';

  constructor() { }

  ngOnInit(): void {
  }

  writeRouterPath(value:string) {
    this.routerPath = value;
    console.log(value);

  }

}
