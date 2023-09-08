import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCtaComponent } from './footer-cta.component';

describe('FooterCtaComponent', () => {
  let component: FooterCtaComponent;
  let fixture: ComponentFixture<FooterCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterCtaComponent]
    });
    fixture = TestBed.createComponent(FooterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
