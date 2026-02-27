import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  imageAlt = 'Angular Logo';
  isDisabled = true;
  inputValue = 'Property Bound Value';
}