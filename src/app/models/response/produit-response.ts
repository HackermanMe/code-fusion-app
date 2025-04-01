export interface ProduitResponse {

    trackingId: string;
    libelle: string;
    prixVente: number;
    prixAchat: number;
    marqueter: string;
    categorie: string;

    marqueterTrackingId: string;
    marqueterName: string;

    categorieTrackingId: string;
    categorieName: string;

    createdAt: Date;
    updatedAt: Date;
}
