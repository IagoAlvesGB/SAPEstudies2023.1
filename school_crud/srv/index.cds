    using school_crud.db as db from '../db/schema';

    service IndexService {
        
        entity Teacher as projection on db.Teacher {
            ID,
            name, 
            birth, 
            cpf, 
            rg, 
            subject
        }

        entity Subject as projection on db.Subject {
            ID,
            name
        }

        entity Student as projection on db.Student;

        entity TeacherSubject as projection on db.TeacherSubject {
            @cds.UI.Hidden
            subject,
            @cds.UI.Hidden
            teacher
        }
    }