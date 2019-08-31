import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { MatIconModule } from '@angular/material/icon';

fdescribe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      imports: [MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rate', () => {
    component.rates = [];
    component.calculateRates(8);
    fixture.detectChanges();
    expect(component.rates).toEqual([
      'star',
      'star',
      'star',
      'star',
      'star_border'
    ]);
  });
});
