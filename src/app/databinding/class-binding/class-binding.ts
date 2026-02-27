import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css'
})
export class ClassBinding {
  isHighlighted = false;
  isSuccess = false;
  isDanger = false;

  toggle(type: string) {
    if (type === 'highlight') this.isHighlighted = !this.isHighlighted;
    if (type === 'success')   this.isSuccess = !this.isSuccess;
    if (type === 'danger')    this.isDanger = !this.isDanger;
  }
}