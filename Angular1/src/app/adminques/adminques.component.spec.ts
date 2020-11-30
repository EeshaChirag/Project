import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminquesComponent } from './adminques.component';

describe('AdminquesComponent', () => {
  let component: AdminquesComponent;
  let fixture: ComponentFixture<AdminquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
