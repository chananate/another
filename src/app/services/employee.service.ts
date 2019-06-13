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
  insertEmp(perId,position,type,title,name,surname,bdate,address,religion){
    return this.http.post("http://localhost:3000/emp-info/employee-insert",{perId,position,type,title,name,surname,bdate,address,religion})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
}