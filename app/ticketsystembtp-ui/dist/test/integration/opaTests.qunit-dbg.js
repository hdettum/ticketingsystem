sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ticketingsystem/test/integration/FirstJourney',
		'ticketingsystem/test/integration/pages/UserSetList',
		'ticketingsystem/test/integration/pages/UserSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserSetList, UserSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ticketingsystem') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserSetList: UserSetList,
					onTheUserSetObjectPage: UserSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);