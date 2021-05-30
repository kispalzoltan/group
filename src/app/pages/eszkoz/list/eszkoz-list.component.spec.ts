import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EszkozListComponent } from './eszkoz-list.component';

describe('EszkozListComponent', () => {
  let component: EszkozListComponent;
  let fixture: ComponentFixture<EszkozListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EszkozListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EszkozListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
