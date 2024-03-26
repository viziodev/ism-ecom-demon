import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { ClientListe } from '../../../core/models/client';
import { ClientServiceImpl } from '../../../core/services/impl/client.service.impl';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-liste.client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './liste.client.component.html',
  styleUrl: './liste.client.component.css'
})
export class ListeClientComponent implements OnInit{

 
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
