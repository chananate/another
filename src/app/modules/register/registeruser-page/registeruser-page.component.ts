import { UserService } from './../../../services/user.service';
import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from "@angular/core";
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-registeruser-page',
  templateUrl: './registeruser-page.component.html',
  styleUrls: ['./registeruser-page.component.scss']
})
export class RegisterUserPageComponent implements OnInit {
  patientList: any[] = [];
  modalEdit = false;
  patient_personalId :number;
  patient_title:string;
  patient_name:string;
  patient_surname:string;
  patient_bd:Date;
  patient_address:string;
  patient_religion:string;
  username:string;
  password:string;
  patient_tel:string;
  type="p";

  constructor(
    private patientService: PatientService,
    private alert: AlertService,
    private userService: UserService
    ) {}

  async ngOnInit() {
    await this.getPatient();
  }
  
  async getPatient() {
    const result: any = await this.patientService.getPatient();
    if (result.statusCode === 200 && result.rows.length) {
      this.patientList = result.rows;
      console.log(this.patientList);
    }
  }

  async onSave() { //เวลา submit 
    let result: any;

      result = await this.patientService
      .insertPatient(
        this.patient_personalId,
        this.patient_title,
        this.patient_name,
        this.patient_surname,
        this.patient_bd,
        this.patient_address,
        this.patient_religion,
        this.patient_tel);
    let result2:any;    
      result2 = await this.userService
      .insertUser(this.username,this.password,this.patient_tel,this.type);
      console.log('insert', result);
      await this.getPatient();
      document.location.href="#/main/main";
  }
}

