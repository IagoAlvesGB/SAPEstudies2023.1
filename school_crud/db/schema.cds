namespace school_crud.db;
using { managed, cuid } from '@sap/cds/common';

type Person : cuid, managed {
    name: String; 
    birth: Date; 
    rg: String(10);
    cpf:String(11);
}

entity Subject : cuid, { 
    name: String;
    teacher: Association to Teacher;
}

entity Teacher : Person { 
    subject: Association to many Subject on subject.teacher = $self;
}

entity Student : Person { 
    grade: Integer @title:'º Grade'; // Serie do Aluno
 }

