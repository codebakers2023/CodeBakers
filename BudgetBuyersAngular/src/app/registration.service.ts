import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient :HttpClient) { }

  public loginUserFromRemote(customer :Customer):Observable<any>{
    return this.httpClient.post("http://localhost:8080/login",customer);
  }

  public registerUserFromRemote(customer:Customer):Observable<any>{
    return this.httpClient.post("http://localhost:8080/registeruser",customer);
  }
    
  }

