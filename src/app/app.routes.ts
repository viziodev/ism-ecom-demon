import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
     {
         path:"clients",
         component:ClientsComponent,
          children:[
             {
               path:"liste",
               component:ClientsComponent
             },
             {
              path:"form",
              component:ClientsComponent
            },
        ]
     },
     {
       path:"commandes/:id",
       component:CommandesComponent
     },
     { path: '',   redirectTo: '/clients', pathMatch: 'full' }, 
    
     { 
        path: '**', 
        component: PageNotFoundComponent
     },
   
];
