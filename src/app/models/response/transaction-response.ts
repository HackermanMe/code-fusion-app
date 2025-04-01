import { BoutiqueResponse } from "./boutique-response";
import { MarqueteurResponse } from "./marqueteur-response";
import { RestaurantResponse } from "./restaurant-response";
import { StationServiceResponse } from "./station-service-response";

export interface TransactionResponse {
    trackingId: string;
    numero: string;
    montant: number;
    date: Date;
    description: string;
    type: string; // "VENTE"
    statut: string; // "ATTENTE"
    restaurant: RestaurantResponse;
    boutique: BoutiqueResponse;
    marqueteur: MarqueteurResponse;
    stationService: StationServiceResponse;
}

