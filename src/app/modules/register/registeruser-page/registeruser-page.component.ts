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
  prefixList: any[];
  modalEdit = false;
  patient_personalId :number;
  patient_title:string;
  patient_name:string;
  patient_surname:string;
  patient_bd:Date;
  patient_address:string;
  patient_religion:string;

  constructor(private patientService: PatientService,
    private alert: AlertService
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

  async onSave() {
    let result: any;

      result = await this.patientService
      .insertPatient(this.patient_personalId,this.patient_title,
        this.patient_name,
        this.patient_surname,
        this.patient_bd,
        this.patient_address,
        this.patient_religion);
      console.log('insert', result);
      await this.getPatient();

  }
}

