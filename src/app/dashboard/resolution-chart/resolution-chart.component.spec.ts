import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionChartComponent } from './resolution-chart.component';

describe('ResolutionChartComponent', () => {
  let component: ResolutionChartComponent;
  let fixture: ComponentFixture<ResolutionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
