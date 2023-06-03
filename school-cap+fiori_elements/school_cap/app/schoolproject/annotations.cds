using IndexService as service from '../../srv/index';

annotate service.Teacher with @(

    HeaderInfo: {
        $Type : 'UI.HeaderInfoType',
        TypeName: 'Teacher',
        TypeNamePlural: 'Teacher',
        Title: { $Type: 'UI.DataField', Value: name },
        Description: { $Type: 'UI.DataField', Value, subject.subject.name }

    },

    UI:{
        LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'birth',
            Value : birth,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cpf',
            Value : cpf,
        },
        {
            $Type : 'UI.DataField',
            Label : 'rg',
            Value : rg,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Materia',
            Value : subject.subject.name,
        },
        ]
    }
);
annotate service.Teacher with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'birth',
                Value : birth,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cpf',
                Value : cpf,
            },
            {
                $Type : 'UI.DataField',
                Label : 'rg',
                Value : rg,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Subject',
                Value : subject.subject.name,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
