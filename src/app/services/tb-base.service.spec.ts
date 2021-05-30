import { TestBed } from '@angular/core/testing';

import { TbBaseService } from './tb-base.service';

describe('TbBaseService', () => {
  let service: TbBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TbBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
