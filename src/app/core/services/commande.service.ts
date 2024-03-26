import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { CommandeListe } from "../models/commande";

export interface CommandeService {
    findAll(page:number,idClient:string|null):Observable<RestResponse<CommandeListe[]>>;
}
