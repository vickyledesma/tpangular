import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappydogAboutComponent } from './happydog-about.component';

describe('HappydogAboutComponent', () => {
  let component: HappydogAboutComponent;
  let fixture: ComponentFixture<HappydogAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappydogAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappydogAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
