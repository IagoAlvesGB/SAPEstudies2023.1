using { myCompany.hr.lms } from '../db/Students';


service mysrvdemo {
    
    @readonly entity Students as projection on lms.Students;

    function myfoobar(msg:String) returns String;
    
}

