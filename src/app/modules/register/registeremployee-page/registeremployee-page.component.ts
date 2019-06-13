import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./../../../services/employee.service";

@Component({
  selector: "app-registeremployee-page",
  templateUrl: "./registeremployee-page.component.html",
  styleUrls: ["./registeremployee-page.component.scss"]
})
export class RegisterEmployeePageComponent implements OnInit {
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
