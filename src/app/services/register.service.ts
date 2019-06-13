import {Injectable , Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }
  registerEmployee(){
    return this.http.post("",{})
    .toPromise()
    .then(result => result)
    .catch(error=>error);
  }
}
