import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLinksComponent } from './widget-links.component';

describe('WidgetLinksComponent', () => {
  let component: WidgetLinksComponent;
  let fixture: ComponentFixture<WidgetLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetLinksComponent]
    });
    fixture = TestBed.createComponent(WidgetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
