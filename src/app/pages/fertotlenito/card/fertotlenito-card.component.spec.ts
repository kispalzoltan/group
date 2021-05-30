import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertotlenitoCardComponent } from './fertotlenito-card.component';

describe('FertotlenitoCardComponent', () => {
  let component: FertotlenitoCardComponent;
  let fixture: ComponentFixture<FertotlenitoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertotlenitoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertotlenitoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
