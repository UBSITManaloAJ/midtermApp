import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  features = [
    { icon: '📝', title: 'Interpolation',    desc: 'Display data with {{ }}',       route: '/interpolation' },
    { icon: '🔗', title: 'Property Binding', desc: 'Bind DOM properties [x]',       route: '/property-binding' },
    { icon: '🖱️', title: 'Event Binding',    desc: 'Handle user interactions (e)',  route: '/event-binding' },
    { icon: '🔄', title: 'Two-Way Binding',  desc: 'Sync view and model [(x)]',     route: '/two-way' },
    { icon: '🏷️', title: 'Attribute',        desc: 'Bind HTML attributes [attr.x]', route: '/attribute' },
    { icon: '🎨', title: 'Class Binding',    desc: 'Toggle CSS classes [class.x]',  route: '/class' },
    { icon: '✨', title: 'Style Binding',    desc: 'Set inline styles [style.x]',   route: '/style' },
  ];
}