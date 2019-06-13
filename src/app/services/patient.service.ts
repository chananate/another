import { Injectable , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }

  getUser(){
    return this.http.get("http://localhost:3000/user-info/user-all",{})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }
}
