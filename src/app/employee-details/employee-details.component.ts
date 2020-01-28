import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common-service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  barChartdata: any;
  pieChartdata: any;
  cibilChartdata: any;
  spinner = false;
  employeeDetail: any;
  constructor(private api: CommonService, private route: ActivatedRoute) {
    this.barChartdata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.pieChartdata = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  private getOverAllPerformance(employeeId: string) {
    const url = '';
    this.spinner =  true;
    this.api.getList(url).subscribe(performance => {
      this.spinner =  false;
      this.barChartdata = performance;
    }, error => {
      this.spinner = false;
    });
  }

  private getYearWiseReport(employeeId: string) {
    const url = '';
    this.spinner =  true;
    this.api.getList(url).subscribe(yearList => {
      this.spinner =  false;
      this.pieChartdata = yearList;
    }, error => {
      this.spinner = false;
    });
  }

  private getCibilScore(employeeId: string) {
    const url = '';
    this.spinner =  true;
    this.api.getList(url).subscribe(cibil => {
      this.spinner =  false;
      this.cibilChartdata = cibil;
    }, error => {
      this.spinner = false;
    });
  }

  private getEmpolyeeDetails(employeeId: string) {
    const url = 'http://10.117.189.144:8081/resource/employees?employeeID=1';
    this.spinner =  true;
    this.api.getList(url).subscribe(detail => {
      this.spinner =  false;
      this.employeeDetail = detail;
    }, error => {
      this.spinner = false;
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.getOverAllPerformance(params.id);
     this.getYearWiseReport(params.id);
     this.getCibilScore(params.id);
     this.getEmpolyeeDetails(params.id);
    });
  }

}
