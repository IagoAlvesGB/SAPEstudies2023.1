using my from '../db/schema';

service Stats {
    @readonly
    entity OrderInfor as projection on my.bookshop.Orders excluding{
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy,
        books
    }
}