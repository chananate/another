import { Injectable,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }
  getEmployeeAll(){
    return this.http.get("http://localhost:3000/emp-info/employee-all",{})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
  getEmployeeInfo(perId){
    return this.http.post("http://localhost:3000/emp-info/employee-info",{perId})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
  insertEmp(employee_personalId,employee_position,employee_type
    ,employee_title,employee_name,employee_surname
    ,employee_bd,employee_address,employee_religion){
    return this.http.post("http://localhost:3000/emp-info/employee-insert"
    ,{employee_personalId,employee_position
      ,employee_type,employee_title,employee_name,employee_surname
      ,employee_bd,employee_address,employee_religion})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
}