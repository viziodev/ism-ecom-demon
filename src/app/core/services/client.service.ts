import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { CommandeListe } from "../models/commande";
import { ClientListe } from "../models/client";

export interface ClientService {
    findAll(page:number):Observable<RestResponse<ClientListe[]>>;
}
