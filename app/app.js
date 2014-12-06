Ext.application({
    name: 'MVC',

	controllers : [
		"LoginController"
	],
    views: [
        "LoginView","LoginScreen"
    ],
    models:[
        "LoginModel"
    ],
    stores:[
        "LoginStore"
    ],
  

    

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.Viewport.add({xtype:"loginview"});
        Ext.Viewport.add({xtype:"welcomescreen"});
     },
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});