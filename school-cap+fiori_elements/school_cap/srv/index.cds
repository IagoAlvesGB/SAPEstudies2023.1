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
    };

    annotate IndexService.Student with @(
    UI: {
      HeaderInfo: {
        TypeName: '{i18n>Std.TypeName}',
        TypeNamePlural: '{i18n>Std.TypeNamePlural}',
        Title: { $Type: 'UI.DataField', Value: name }
      },    
      SelectionFields: [ identifier, name, rg, cpf],      
      LineItem: [
        {$Type: 'UI.DataField', Value: identifier},
        {$Type: 'UI.DataField', Value: name},
        {$Type: 'UI.DataField', Value: rg},
        {$Type: 'UI.DataField', Value: cpf}
      ],
      HeaderFacets: [       
        {$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#ProductDetail', Label:'{i18n>Std.HeaderFacetDetails}' },
        {$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#SupplierDetail', Label:'{i18n>Std.HeaderFacetSupplier}' },
        {$Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Price'}
      ],
      Facets: [
        {
          $Type: 'UI.CollectionFacet',
          Label: '{i18n>Std.FacetProductInformation}',
          Facets: [
            {$Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Description', Label: '{i18n>Std.FacetSectionDescription}'},
          ]
        }
      ],
      DataPoint#Price: {Value: name, Title: '{i18n>Std.HeaderPrice}'},
      FieldGroup#Description: {
        Data:[
            {$Type: 'UI.DataField', Value: name}
        ]
      },          
      FieldGroup#ProductDetail: {
        Data:[
          {$Type: 'UI.DataField', Value: identifier},
          {$Type: 'UI.DataField', Value: name}
        ]
      }
    }
    );