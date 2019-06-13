import { PatientService } from './../../../services/patient.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  userList: any[] = [];
  
  constructor(
    private userService: PatientService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers(){
    const result : any = await this.userService.getUser();
    if(result.statusCode===200 && result.rows.length){
      this.userList=result.rows;
      console.log(this.userList);
    }
  }


}
