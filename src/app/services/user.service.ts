import { Injectable , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }

  getUserAll(){
    return this.http.get("http://localhost:3000/user-info/user-all",{})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  getUserInfo(username){
    return this.http.post("http://localhost:3000/user-info/user",{username})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  getUserEmp(tel){
    return this.http.post("http://localhost:3000/user-info/user-emp-info",{tel})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  getUserPat(tel){
    return this.http.post("http://localhost:3000/user-info/user-pat-info",{tel})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  insertUser(username,password,tel,type){
    return this.http.post("http://localhost:3000/user-info/user-insert"
    ,{username,password,tel,type})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  updateUser(username){
    return this.http.post("http://localhost:3000/user-info/user-update",{username})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
  
  delUser(username){
    return this.http.post("http://localhost:3000/user-info/user-delete",{username})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  checkType(tel){
    return this.http.post("http://localhost:3000/user-info/check-type",{tel})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

}
