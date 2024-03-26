import { Injectable } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientListe } from '../../models/client';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceImpl implements ClientService {
         private apiUrl=`${environment.APIURL}/clients`
         constructor(private http:HttpClient) {  }
 
       findAll(page:number=0):Observable<RestResponse<ClientListe[]>>  {
        return  this.http.get<RestResponse<ClientListe[]>>(`${this.apiUrl}?page=${page}`)
      }
}
