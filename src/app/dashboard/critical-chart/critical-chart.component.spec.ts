import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalChartComponent } from './critical-chart.component';

describe('CriticalChartComponent', () => {
  let component: CriticalChartComponent;
  let fixture: ComponentFixture<CriticalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
