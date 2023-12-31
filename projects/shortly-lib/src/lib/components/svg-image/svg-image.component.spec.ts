import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgImageComponent } from './svg-image.component';

describe('SvgImageComponent', () => {
  let component: SvgImageComponent;
  let fixture: ComponentFixture<SvgImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SvgImageComponent]
    });
    fixture = TestBed.createComponent(SvgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
