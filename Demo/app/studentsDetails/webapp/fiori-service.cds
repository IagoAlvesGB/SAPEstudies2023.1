
using { myCompany.hr.lms.Students } from '../../../srv/mysimplesrv';


annotate mysrvdemo.Students with @(
    UI: {

      SelectionFields: [ ],
        LineItem: [
            {Value: email,
            Label:'email'},
            {Value: first_name,
            Label:'first_name'},
            {Value: last_name,
            Label:'last_name'},
            {Value: date_sign_up,
            Label:'date_sign_up'}
        ],
        //To add header info
    HeaderInfo: {
      TypeName: 'email', TypeNamePlural: 'Emails',
      Title: { Value: email },
      Description: { Value: first_name }
    }
}
);