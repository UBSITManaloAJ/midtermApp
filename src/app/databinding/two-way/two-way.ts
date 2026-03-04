import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../user';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css',
})
export class TwoWay {
  twoWName: string           = 'Juan Dela Cruz';
  twoWayEmail: string        = '';
  twoWayAge: number          = 20;
  twoWayGender: string       = 'male';
  twoWaySubscribed: boolean  = false;
  twoWayLanguage: string     = 'TypeScript';
  twoWayRating: number       = 3;
  twoWayColor: string        = '#3b82f6';
  twoWayName: string         = 'Change me!';
  rangeValue: number         = 50;

  programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];

  selectedId: number | null  = null;
  selectedName: string       = '';
  selectedDepartment: string = '';
  selectedPosition: string   = '';
  selectedRole: string       = '';
  showModal: boolean         = false;

  users: User[] = [
    { id: 1, name: 'John Doe',       position: 'Developer', department: 'IT',         details: { role: [1, 'Admin'] } },
    { id: 2, name: 'Jane Smith',     position: 'Designer',  department: 'Creative',   details: { role: [2, 'Editor'] } },
    { id: 3, name: 'Alice Johnson',  position: 'Manager',   department: 'Management', details: { role: [3, 'Viewer'] } },
  ];

  onClick(u: User): void {
    this.selectedId         = u.id;
    this.selectedName       = u.name       || '';
    this.selectedDepartment = u.department || '';
    this.selectedPosition   = u.position   || '';
    this.selectedRole       = String(u.details?.role[1] || '');
    this.showModal          = true;
  }

  closeModal(): void { this.showModal = false; }

  get profileSummary(): string {
    const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
    return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
           `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
  }

  resetForm(): void {
    this.twoWayName       = '';
    this.twoWayEmail      = '';
    this.twoWayAge        = 18;
    this.twoWayGender     = 'male';
    this.twoWaySubscribed = false;
    this.twoWayLanguage   = 'TypeScript';
    this.twoWayRating     = 3;
  }
}