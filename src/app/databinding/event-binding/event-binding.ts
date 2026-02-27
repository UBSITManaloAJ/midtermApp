import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  clickMessage = '';
  counter = 0;

  onClick() {
    this.clickMessage = 'Button was clicked!';
  }

  increment() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
    this.clickMessage = '';
  }
}