import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  isButtonDisabled: boolean        = true;
  buttonLabel: string              = 'Disabled';
  clickCount: number               = 0;
  lastKeyPressed: string           = '';
  selectedColor: string            = '#3b82f6';
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  isHovered: boolean               = false;
  typedInput: string               = '';
  inputValue: string               = '';
  formMessage: string              = '';
  eventLog: string[]               = [];
  selectedFramework: string        = 'angular';

  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react',   value: 'React' },
    { name: 'vue',     value: 'Vue' }
  ];

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false;
    this.buttonLabel = 'Enabled';
    this.logEvent(`Button clicked (${this.clickCount}x)`);
  }

  onKeyPress(event: KeyboardEvent): void {
    this.lastKeyPressed = event.key;
  }

  onMouseMove(event: MouseEvent): void {
    this.mousePosition = { x: event.offsetX, y: event.offsetY };
  }

  onInputChange(event: Event): void {
    this.typedInput = (event.target as HTMLInputElement).value;
  }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

  onSelectionChange(value: string): void {
    this.selectedFramework = value;
    this.logEvent(`Framework changed to: ${value}`);
  }

  onColorChange(event: Event): void {
    this.selectedColor = (event.target as HTMLInputElement).value;
    this.logEvent(`Color changed to: ${this.selectedColor}`);
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.formMessage = `Submitted: "${this.inputValue}"`;
    this.logEvent(`Form submitted: "${this.inputValue}"`);
    this.inputValue = '';
  }

  onDoubleClick(): void {
    this.logEvent('Double-click detected!');
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    this.logEvent(`Right-click at (${event.clientX}, ${event.clientY})`);
  }

  private logEvent(msg: string): void {
    this.eventLog.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}