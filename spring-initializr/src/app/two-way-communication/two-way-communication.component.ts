import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-communication',
  templateUrl: './two-way-communication.component.html',
  styleUrls: ['./two-way-communication.component.css'],
})
export class TwoWayCommunicationComponent implements OnInit {
  artifact: string = '';
  name: string = '';
  packageName: string = `com.example.${this.artifact}`;
  constructor() {}

  ngOnInit(): void {}

  setValue() {
    this.packageName = `com.example.${this.artifact}`;
  }
}
