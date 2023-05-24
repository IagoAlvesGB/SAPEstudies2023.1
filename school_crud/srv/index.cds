using school_crud.db as db from '../db/schema';

service IndexService {
    entity Teacher as projection on db.Teacher;
    entity Student as projection on db.Student;
    entity Subject as projection on db.Subject;
}