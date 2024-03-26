import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../core/models/rest.response';
import { ClientListe } from '../../core/models/client';
import { ClientServiceImpl } from '../../core/services/impl/client.service.impl';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormClientComponent } from './form.client/form.client.component';
import { ListeClientComponent } from './liste.client/liste.client.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RouterOutlet,FormClientComponent,ListeClientComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{

  response?:RestResponse<ClientListe[]>
  constructor(private clientService:ClientServiceImpl){}
   ngOnInit(): void {
       this.refresh()
   }
     refresh(page:number=0){
      this.clientService.findAll(page).subscribe(data=> this.response=data);
    }

   paginate(page: number) {
      this.refresh(page) 
   }
}
