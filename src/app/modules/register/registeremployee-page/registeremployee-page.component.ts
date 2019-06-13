import { Component, OnInit } from "@angular/core";
import { AlertService } from 'src/app/services/alert.service';
import { EmployeeService } from "./../../../services/employee.service";

@Component({
  selector: "app-registeremployee-page",
  templateUrl: "./registeremployee-page.component.html",
  styleUrls: ["./registeremployee-page.component.scss"]
})
export class RegisterEmployeePageComponent implements OnInit {
  empList: any[] = [];
  prefixList: any[];
  modalEdit = false;
  currentRow: any;

  constructor(private empService: EmployeeService,
    private alert: AlertService
    ) {}

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

  async onAdd() {
    this.currentRow = { prefix: "", dep: 0, mode: "add" };
    this.modalEdit = true;
  }

}
