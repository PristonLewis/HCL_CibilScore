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
  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 0.1,
          beginAtZero: true
        }
      }]
    }
  }
  constructor(private api: CommonService, private route: ActivatedRoute) {
    this.barChartdata = {
      labels: ['Java', 'Dot net', 'Js', 'Html', 'Springboot', 'Css', 'Python'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
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
    const url = 'http://10.117.189.78:8081/resource/employees/'+employeeId+'/charts?chartType=TECHBAR';
    this.spinner =  true;
    this.api.getList(url).subscribe(performance => {
      let values = [];
      let keys = [];
      performance.data.forEach(element => {
        keys.push(element.skillName)
        values.push(element.percentage)
      });
      this.spinner =  false;
      this.barChartdata.labels = [1,2,3,4];
      this.barChartdata.datasets[0].data = [1,2,3,4];
      // this.barChartdata = performance.data;
      this.barChartdata = {
        labels: keys,
        
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: values
          }
        ]
      };
    }, error => {
      this.spinner = false;
    });
  }

  private getYearWiseReport(employeeId: string) {
    const url = 'http://10.117.189.78:8081/resource/employees/'+employeeId+'/charts?chartType=OVERALL';
    this.spinner =  true;
    this.api.getList(url).subscribe(yearList => {
      this.spinner =  false;
      // this.pieChartdata = yearList;
      let values = [];
      let keys = [];
      yearList.data.forEach(element => {
        keys.push(element.skillName)
        values.push(element.percentage)
      });
      this.pieChartdata = {
        labels: keys,
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 2,
              beginAtZero: true
            }
          }]
        },
        datasets: [
          {
            data: values,
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
    const url = 'http://10.117.189.78:8081/resource/employees/'+employeeId;
    
    this.spinner =  true;
    this.api.getList(url).subscribe(detail => {
      this.spinner =  false;
      this.employeeDetail = detail;
      console.log("Emp", this.employeeDetail)
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
