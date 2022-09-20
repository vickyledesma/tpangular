import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappydogFoodComponent } from './happydog-food.component';

describe('HappydogFoodComponent', () => {
  let component: HappydogFoodComponent;
  let fixture: ComponentFixture<HappydogFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappydogFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappydogFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
