import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotszerCardComponent } from './kotszer-card.component';

describe('KotszerCardComponent', () => {
  let component: KotszerCardComponent;
  let fixture: ComponentFixture<KotszerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotszerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotszerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
