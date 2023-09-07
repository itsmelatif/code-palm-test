import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticListComponent } from './statistic-list.component';

describe('StatisticListComponent', () => {
  let component: StatisticListComponent;
  let fixture: ComponentFixture<StatisticListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticListComponent]
    });
    fixture = TestBed.createComponent(StatisticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
