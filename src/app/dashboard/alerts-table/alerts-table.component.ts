import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { HttpClientService } from '../../services/http-client.service';

@Component({
  selector: 'app-alerts-table',
  templateUrl: './alerts-table.component.html',
  styleUrls: ['./alerts-table.component.scss']
})

export class AlertsTableComponent implements OnInit {
  displayedColumns: string[] = ['alertMessage','severity','vehicleId','status','createdAt','resolvedAt'];
  showDialog = false;
  resolutionRemark : string = '';
  data = [
    {
      "id": 326254,
      "alert_type": "InsuranceRenewal",
      "vehicle_id": "AB93EF6RFPB545339",
      "message": "Insurance Expiry",
      "value": "2024/08/08",
      "status": "resolved",
      "created_at": "2024-08-06 11:47:25.349 +0530",
      "updated_at": "2024-09-04 22:13:47.162 +0530",
      "additional_fields": {
        "insurance_provider": {
          "insurer": "Royal Sundaram General Insurance Co. Limited"
        },
        "due_date": "2024-08-08T00:00:00.000Z",
        "renewal_status": true,
        "time_due": 1,
        "policy_number": "VGC0987155000100"
      },
      "latitude": "",
      "latitude_direction": "",
      "longitude": "",
      "longitude_direction": "",
      "severity": "Normal",
      "service_request_id": "",
      "date_value": "2024-08-08 00:00:00.000",
      "freshdesk_ticket_id": "",
      "threshold_id": ""
    },
    {
      "id": 329056,
      "alert_type": "VehicleOffline",
      "vehicle_id": "AB93EF6RFPB545339",
      "message": "Vehicle Offline",
      "value": "27-08-2024",
      "status": "active",
      "created_at": "2024-08-29 19:50:17.827 +0530",
      "updated_at": "2024-08-29 19:50:17.827 +0530",
      "additional_fields": {
        "offline_days": 2,
      },
      "latitude": "",
      "latitude_direction": "",
      "longitude": "",
      "longitude_direction": "",
      "severity": "Normal",
      "service_request_id": "",
      "date_value": "2024-08-27 14:15:32.679",
      "freshdesk_ticket_id": "",
      "threshold_id": ""
    },
    {
      "id": 328583,
      "alert_type": "DeepDischarge",
      "vehicle_id": "AB93EF6RFPB545339",
      "message": "Vehicle In Deep Discharge",
      "value": "21-06-2010",
      "status": "resolved",
      "created_at": "2024-08-27 19:05:18.585 +0530",
      "updated_at": "2024-08-27 19:30:20.810 +0530",
      "additional_fields": {
        "idle_days": 5180,
        "min_cell_voltage": 0,
        "last_soc": 0
      },
      "latitude": "",
      "latitude_direction": "",
      "longitude": "",
      "longitude_direction": "",
      "severity": "Normal",
      "service_request_id": "",
      "date_value": "2010-06-21 14:12:21.909",
      "freshdesk_ticket_id": "",
      "threshold_id": ""
    },
    {
      "id": 340981,
      "alert_type": "LowCharge",
      "vehicle_id": "AB93EF6RFPB545339",
      "message": "Low Battery",
      "value": "9%",
      "status": "resolved",
      "created_at": "2024-09-04 18:15:02.595 +0530",
      "updated_at": "2024-09-04 18:51:04.894 +0530",
      "additional_fields": {
        "min_cell_voltage": 51.1,
        "last_seen": "2024-09-04T12:43:56.017Z",
        "days_since": 0
      },
      "latitude": "",
      "latitude_direction": "",
      "longitude": "",
      "longitude_direction": "",
      "severity": "Normal",
      "service_request_id": "",
      "date_value": "2024-09-04 12:43:56.017",
      "freshdesk_ticket_id": "",
      "threshold_id": ""
    }
  ]

  resultsLength = this.data.length;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  

  constructor(
    private httpService : HttpClientService,
    public dialog: MatDialog
    ) { }
  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
  }
 
  onRowClick(row: any){
    this.dialog.open(this.dialogTemplate, {
      data: row,
      width: '400px'
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  submitResolution(){
    this.httpService.postData('',{remarks : this.resolutionRemark}).subscribe((response)=>{

    }, (error)=>{

    });
  }

}


