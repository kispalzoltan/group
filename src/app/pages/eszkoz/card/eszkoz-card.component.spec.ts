import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EszkozCardComponent } from './eszkoz-card.component';

describe('EszkozCardComponent', () => {
  let component: EszkozCardComponent;
  let fixture: ComponentFixture<EszkozCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EszkozCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EszkozCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
