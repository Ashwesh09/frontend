import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-display',
  templateUrl: './age-display.component.html',
  styleUrls: ['./age-display.component.css']
})
export class AgeDisplayComponent implements OnInit {
  age = 21;
  constructor() { }

  ngOnInit(): void {
  }

}
