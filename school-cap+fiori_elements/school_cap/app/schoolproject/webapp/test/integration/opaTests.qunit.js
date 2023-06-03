sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'br/com/schoolproject/test/integration/FirstJourney',
		'br/com/schoolproject/test/integration/pages/TeacherList',
		'br/com/schoolproject/test/integration/pages/TeacherObjectPage',
		'br/com/schoolproject/test/integration/pages/TeacherSubjectObjectPage'
    ],
    function(JourneyRunner, opaJourney, TeacherList, TeacherObjectPage, TeacherSubjectObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('br/com/schoolproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTeacherList: TeacherList,
					onTheTeacherObjectPage: TeacherObjectPage,
					onTheTeacherSubjectObjectPage: TeacherSubjectObjectPage
                }
            },
            opaJourney.run
        );
    }
);