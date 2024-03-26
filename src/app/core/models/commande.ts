export interface CommandeListe {
    dateComd: string,
    montant: number,
    etat: EtatCommande
    etatSuivant: EtatCommande,
    adresse:AdresseCommande
}
export interface AdresseCommande {
      quartier: string,
      ville:string,
      numVilla: string
}
export enum EtatCommande{
    Encours,
    Terminer
}


