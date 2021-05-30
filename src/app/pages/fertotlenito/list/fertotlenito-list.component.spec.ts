import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertotlenitoListComponent } from './fertotlenito-list.component';

describe('FertotlenitoListComponent', () => {
  let component: FertotlenitoListComponent;
  let fixture: ComponentFixture<FertotlenitoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertotlenitoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertotlenitoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
