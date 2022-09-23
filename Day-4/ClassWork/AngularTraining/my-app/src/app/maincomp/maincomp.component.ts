import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

userdata
departmentdata


  constructor(private us:UserserviceService, private ds:DepartmentService) {

    this.userdata=this.us.userdata()
    this.departmentdata=this.ds.departmentdata()
  }

  ngOnInit(): void {
  }

}
