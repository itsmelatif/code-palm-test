import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocilaMediaListComponent } from './socila-media-list.component';

describe('SocilaMediaListComponent', () => {
  let component: SocilaMediaListComponent;
  let fixture: ComponentFixture<SocilaMediaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocilaMediaListComponent]
    });
    fixture = TestBed.createComponent(SocilaMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
