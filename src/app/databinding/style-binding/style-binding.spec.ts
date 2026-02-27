import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBinding } from './style-binding';

describe('StyleBinding', () => {
  let component: StyleBinding;
  let fixture: ComponentFixture<StyleBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
