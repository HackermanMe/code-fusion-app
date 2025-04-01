import { Type } from "@angular/core";
import { TypeTransaction } from "../../enums/type-transaction";
import { StatutTransaction } from "../../enums/statut-transaction";

export interface TransactionRequest {

    numero: string;
    montant: number;
    date: Date;
    description: string;
    type: TypeTransaction; // "VENTE"
    statut: StatutTransaction; // "ATTENTE"
    stationServiceTrackingId: string;
    restaurantTrackingId: string;
    boutiqueTrackingId: string;
    marqueteurTrackingId: string;

}
