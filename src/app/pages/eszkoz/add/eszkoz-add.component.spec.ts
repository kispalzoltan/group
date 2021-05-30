import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EszkozAddComponent } from './eszkoz-add.component';

describe('EszkozAddComponent', () => {
  let component: EszkozAddComponent;
  let fixture: ComponentFixture<EszkozAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EszkozAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EszkozAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
