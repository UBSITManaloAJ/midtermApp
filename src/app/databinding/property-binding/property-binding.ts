import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  isButtonDisabled: boolean = true;
  imageSource: string       = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  imageAlt: string          = 'Angular Logo';
  imageWidth: number        = 120;
  linkUrl: string           = 'https://www.ubaguio.edu/';
  inputPlaceholder: string  = 'Type your name here...';
  clickCount: number        = 0;
  inputName: string         = '';

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false;
  }
}