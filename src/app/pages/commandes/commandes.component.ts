import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../core/models/rest.response';
import { CommandeListe } from '../../core/models/commande';
import { CommandeServiceImpl } from '../../core/services/impl/commande.service.impl';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent implements OnInit {
  response?:RestResponse<CommandeListe[]>
  idClient:string|null="all"
  constructor(private service:CommandeServiceImpl,private route:ActivatedRoute){}
   ngOnInit(): void {
       this.idClient =this.route.snapshot.paramMap.get("id")
       this.refresh()
   }
     refresh(page:number=0){
        this.service.findAll(page,this.idClient).subscribe(data=> this.response=data);  
    
    }

   paginate(page: number) {
      this.refresh(page) 
   }

  

}
