namespace school_crud.db;
using { managed, cuid } from '@sap/cds/common';

type Person {
    name: String; 
    identifier      : String @Common.Label : 'ID';
    birth: Date; 
    rg: String(10);
    cpf:String(11);
}

entity Subject : cuid, { 
    name: String;
    teacher: Association to many TeacherSubject on teacher.subject = $self;
    student: Association to many Student on student.subject = $self;
}

entity TeacherSubject {
    key subject: Association to Subject @odata.ignore;
    key teacher: Association to Teacher @odata.ignore;
}

entity Teacher : cuid, Person { 
    subject: Association to many TeacherSubject on subject.teacher = $self;
}

entity Student : cuid, Person { 
    grade: Integer @title:'º Grade'; // Serie do Aluno
    subject: Association to Subject
 }

