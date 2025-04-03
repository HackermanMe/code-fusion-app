import { StatutTransaction } from "../../enums/statut-transaction";
import { TypeTransaction } from "../../enums/type-transaction";
import { BoutiqueResponse } from "./boutique-response";
import { MarqueteurResponse } from "./marqueteur-response";
import { RestaurantResponse } from "./restaurant-response";
import { StationServiceResponse } from "./station-service-response";

export interface TransactionResponse {

    numero: string;
    montant: number;
    date: Date;
    description: string;
    type: TypeTransaction;
    statut: StatutTransaction;
    stationService: StationServiceResponse;
    restaurant: RestaurantResponse;
    boutique: BoutiqueResponse;
    marqueteur: MarqueteurResponse;

}
