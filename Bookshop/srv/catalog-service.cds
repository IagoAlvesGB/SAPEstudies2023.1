using my.bookshop as my from '../db/schema';

service CatalogService @(impl: 'srv/impl/catalog-service.js') {
    //Books==============================================
    @Capabilities: {
    InsertRestrictions.Insertable: true,
    UpdateRestrictions.Updatable: true,
    DeleteRestrictions.Deletable: false
    }entity Books as projection on my.Books;

    //Orders==============================================
    entity Orders as projection on my.Orders;

    //Authors==============================================
    @readonly entity Authors as projection on my.Authors;
}
