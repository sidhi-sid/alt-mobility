import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-critical-chart',
  templateUrl: './critical-chart.component.html',
  styleUrls: ['./critical-chart.component.scss']
})
export class CriticalChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  };

  public pieChartLabels = [ [ 'Vehicles offline' ], [ 'Low battery charge' ], 'Deep discharge' ];
  public pieChartDatasets = [ 
   {data: [ 30, 50, 20 ],
    label : 'Critical Alerts'} 
   ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }

}
