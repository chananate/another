import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  empList: any[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.getEmp();
  }
  
  async getEmp() {
    const result: any = await this.empService.getEmployeeAll();
    if (result.statusCode === 200 && result.rows.length) {
      this.empList = result.rows;
      console.log(this.empList);
    }
  }
}

