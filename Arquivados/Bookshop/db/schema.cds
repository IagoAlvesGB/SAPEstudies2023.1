namespace my.bookshop;

using { cuid, managed } from '@sap/cds/common';

entity Books {
 Key ID : Integer;
 title : String;
 stock : Integer;
 authors : Association to Authors;
 price : Decimal;
} 

entity Authors {
    Key ID : Integer;
    name : String;
    books : Association to many Books on books.authors = $self;
}

entity Orders : cuid, managed {
books : Association to Books;
quantity : Integer;
}

