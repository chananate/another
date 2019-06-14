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

  getPatient(){
    return this.http.get("http://localhost:3000/pat-info/user-all",{})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }

  getPatientInfo(Patient_personalId){
    return this.http.post("http://localhost:3000/pat-info/employee-info",{Patient_personalId})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }

  insertPatient(Patient_personalId
    ,Patient_title,Patient_name,Patient_surname
    ,Patient_bd,Patient_address,Patient_religion){
    return this.http.post("http://localhost:3000/pat-info/patient-insert"
    ,{Patient_personalId
      ,Patient_title,Patient_name,Patient_surname
      ,Patient_bd,Patient_address,Patient_religion})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
}
