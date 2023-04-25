using sap.nfeecomm as nfe from '../db/schema';

service CatalogService @(impl: 'srv/impl/catalog-service.js') {
    entity Nfdoc as projection on nfe.Nfdoc
    entity Nflin as projection on nfe.Nflin
    entity Mara as projection on nfe.Mara
    entity T001 as projection on nfe.T001
    entity Vbrp as projection on nfe.Vbrp
}