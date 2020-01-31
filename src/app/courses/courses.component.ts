import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service: CommonService) { }
  response: Array<object>;
  ngOnInit() {
    this.getDetails();
  }

  getDetails = () => {

    this.service.getList('http://10.117.189.181:8081/resource/employeescourse?employeeId='+localStorage.getItem("eid")).subscribe((data) => {
      console.log("xx",data)
      this.response = data;
    });
  }

}
