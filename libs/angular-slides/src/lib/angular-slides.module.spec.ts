import { async, TestBed } from '@angular/core/testing';
import { AngularSlidesModule } from './angular-slides.module';

describe('AngularSlidesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularSlidesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularSlidesModule).toBeDefined();
  });
});
