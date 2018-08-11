import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selection = new EventEmitter<string>();
  clicked = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.selection.emit(feature);
  }
}
