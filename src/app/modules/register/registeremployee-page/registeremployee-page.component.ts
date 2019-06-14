import { UserService } from './../../../services/user.service';
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
  employee_personalId :number;
  employee_type: string;
  employee_position:string;
  employee_title:string;
  employee_name:string;
  employee_surname:string;
  employee_bd:Date;
  employee_address:string;
  employee_religion:string;
  employee_tel:string;
  username:string;
  password:string;
  type="e";

  constructor(
    private empService: EmployeeService,
    private alert: AlertService,
    private userService : UserService
    ) {}

  async ngOnInit() {
    await this.getEmp();
  }
  
  async getEmp() {
    const result: any = await this.empService.getEmployeeAll();
    if (result.statusCode === 200 && result.rows.length) {
      this.empList = result.rows;
      console.log(this.empList);
    }
  }
  async getEmpInfo(){
    const result: any = await this.empService.getEmployeeInfo(this.employee_personalId);

  }

  async onSave() {
    let result1: any;
    let result2: any;
    
      result1 = await this.empService
      .insertEmp(this.employee_personalId,this.employee_position,
        this.employee_type,
        this.employee_title,this.employee_name,this.employee_surname
        ,this.employee_bd,
        this.employee_address,this.employee_religion,this.employee_tel);

        result2 = await this.userService
      .insertUser(this.username,this.password,this.employee_tel,this.type);
      console.log('insert ', result2);
      await this.getEmp();
      document.location.href="#/main/main";
  }

}
