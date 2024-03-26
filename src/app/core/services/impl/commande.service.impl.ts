import { Injectable } from '@angular/core';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandeService } from '../commande.service';
import { CommandeListe } from '../../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceImpl implements CommandeService {
         private apiUrl=`${environment.APIURL}/commandes`
         constructor(private http:HttpClient) {  }
          findAll(page: number, idClient:string|null): Observable<RestResponse<CommandeListe[]>> {
            let  url:string=idClient=='all'?`${this.apiUrl}?page=${page}`:`${this.apiUrl}/client/${idClient}?page=${page}`;
             console.log(url);
            return  this.http.get<RestResponse<CommandeListe[]>>(url)
        }
}
