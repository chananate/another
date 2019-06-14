import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  userList: any[] = [];
  tel = '0987654321';
  type: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.checkType();
  }

  async checkType() {
    const result: any = await this.userService.checkType(this.tel);
    if (result.statusCode === 200) {
      this.type = result.rows.type;
      console.log('type', this.type);

      if (this.type === 'e') {
        const result1: any = await this.userService.getUserEmp(this.tel);
        if (result1.statusCode === 200 && result1.rows.length) {
          this.userList = result1.rows;
          console.log('user', this.userList);
        }
      } else if (this.type === 'p') {
        const result2: any = await this.userService.getUserPat(this.tel);
        if (result2.statusCode === 200 && result2.rows.length) {
          this.userList = result2.rows;
          console.log('user', this.userList);
        }
      }
    }
  }

  async getUserEmp() {
    const result: any = await this.userService.getUserEmp(this.tel);
    if (result.statusCode === 200 && result.rows.length) {
      this.userList = result.rows;
      console.log('user', this.userList);
    }
  }
  async getUserPat() {
    const result: any = await this.userService.getUserPat(this.tel);
    if (result.statusCode === 200 && result.rows.length) {
      this.userList = result.rows;
      console.log('user', this.userList);
    }
  }

}
