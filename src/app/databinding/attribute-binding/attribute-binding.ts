import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding.html',
  styleUrl: './attribute-binding.css'
})
export class AttributeBinding {
  colspan = 3;
  ariaLabel = 'Close button';
}