using from './catalog-service';

annotate CatalogService.Books with @(
    UI: {
        Identification: [ {Value: title} ],
        SelectionFields: [ title ],
        LineItem: [ // Campos das colunas: table
            {Value: ID},
            {Value: title},
            {Value: authors.name}, //Associacao
//            {Value: authors_ID},
            {Value: stock},
            {Value: price}
        ],
        HeaderInfo: {
            TypeName: '{i18n>Book}',
            TypeNamePlural: '{i18n>Books}',
            Title: {Value: title},
            Description: {Value: authors.name}
        }
    }
);

annotate CatalogService.Books with {
    ID @title:'{i18n>ID}' @UI.HiddenFilter;
    title @title:'{i18n>Title}';
//    author @title:'{i18n>AuthorID}';
    stock @title:'{i18n>Stock}';
    price @title:'{i18n>Price}';
}

annotate CatalogService.Authors with {
    ID @title:'{i18n>ID}' @UI.HiddenFilter;
    name @title:'{i18n>AuthorName}';
}