import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css'
})
export class TwoWay {
  userName = 'Type here...';
}