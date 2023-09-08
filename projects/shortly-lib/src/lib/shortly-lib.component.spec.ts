import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlyLibComponent } from './shortly-lib.component';

describe('ShortlyLibComponent', () => {
  let component: ShortlyLibComponent;
  let fixture: ComponentFixture<ShortlyLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlyLibComponent]
    });
    fixture = TestBed.createComponent(ShortlyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
