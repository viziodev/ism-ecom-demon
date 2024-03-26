import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';



@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,ClientsComponent,CommandesComponent
    ,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  
  }
  title = 'ism-ecom';
 





  

}
