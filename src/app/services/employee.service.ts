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
  getEmployeeInfo(){
    return this.http.post("http://localhost:3000/emp-info/employee-info",{})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
  employeeInsert(){
    return this.http.post("http://localhost:3000/emp-info/employee-insert",{})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
}