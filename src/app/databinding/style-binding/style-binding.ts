import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css'
})
export class StyleBinding {
  fontSize = 16;
  textColor = '#3f51b5';
  bgColor = '#ffffff';

  bigger()  { this.fontSize += 2; }
  smaller() { if (this.fontSize > 8) this.fontSize -= 2; }
}