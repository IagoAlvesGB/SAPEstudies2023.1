sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.schoolproject',
            componentId: 'TeacherObjectPage',
            entitySet: 'Teacher'
        },
        CustomPageDefinitions
    );
});