import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Importing common service from the service layer
 */
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: Array<object>;

  constructor(private service: CommonService, private route: Router) { }

  ngOnInit() {
    this.getDetails();
    }
 /**
  * method for getting the bench resources
  */
  getDetails = () => {
    this.service.getList('http://10.117.189.181:8081/resource/employees').subscribe((data) => {
      this.response = data;
    });
  }
  viewDetails = (employeeId) => {
    this.route.navigate(['employee-detail', employeeId]);

  }
}
