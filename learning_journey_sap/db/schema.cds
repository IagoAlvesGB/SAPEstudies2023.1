namespace hc450.officesupplies;

using {Currency} from '@sap/cds/common';

entity Products {
    @Common.Label : 'UUID'
    key ID : UUID;
    identifier : String @Common.Label : 'ProductID';
    title : localized String @(Common.Label : 'Name');
    description : localized String;
    availability : Integer;
    storage_capacity : Integer;
    criticality : Integer;
    price: Decimal(9, 2);
    Currency : Currency;
    image_url : String;
    supplier : Association to Suppliers
} 

entity Suppliers {
     key ID : UUID;
     identifier : String;
     name : String;
     phone : String;
     building : String;
     street : String @multiline;
     postCode : String;
     city : String;
     country : String;
     products : Composition of many Products
                    on products.supplier = $self;
    
}
