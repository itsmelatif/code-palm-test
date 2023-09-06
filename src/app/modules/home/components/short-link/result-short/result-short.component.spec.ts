import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultShortComponent } from './result-short.component';

describe('ResultShortComponent', () => {
  let component: ResultShortComponent;
  let fixture: ComponentFixture<ResultShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultShortComponent]
    });
    fixture = TestBed.createComponent(ResultShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
