import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolution-chart',
  templateUrl: './resolution-chart.component.html',
  styleUrls: ['./resolution-chart.component.scss']
})
export class ResolutionChartComponent implements OnInit {
  public SystemName: string = "MF1";
  firstCopy = false;

  // data
  public lineChartData: Array<number> = [ 1,8,49, 8];
 
  public labelMFL: Array<any> = [
      { data: this.lineChartData,
        label: 'Average response time'
      }
  ];
  // labels
  public lineChartLabels: Array<any> = ["Vehicles offline", "Low battery", "Deep discharge","Insurance renewal" ];

  constructor() { }

  ngOnInit(): void {
  }

  public lineChartOptions: any = {
    responsive: true,
      plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        //color: "#2756B3",
        color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },
      
      },
      deferred: false

    },

  };

   _lineChartColors:Array<any> = [{
       backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red' 
      }];



  public ChartType = 'bar';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }

}
