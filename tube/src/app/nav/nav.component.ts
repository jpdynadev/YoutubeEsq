import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() newRoute : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  switchRoute(route: string): void {
    this.newRoute.emit(route);
  }

}
