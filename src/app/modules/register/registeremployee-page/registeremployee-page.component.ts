import { PatientService } from './../../../services/patient.service';
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
  perId :number;
  type: string;
  position:string;
  title:string;
  name:string;
  surname:string;
  bdate:Date;
  address:string;
  religion:string;

  constructor(private empService: EmployeeService,
    private alert: AlertService
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

  async onSave() {
    let result: any;

      result = await this.empService.insertEmp(this.perId,this.position,this.type,
        this.title,this.name,this.surname,this.bdate,
        this.address,this.religion);
      console.log('insert ', result);
      await this.getEmp();

  }

}
