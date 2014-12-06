Ext.define("MVC.view.LoginScreen",{
	extend:"Ext.Panel",
	xtype:"welcomescreen",
	config:{
		items:[
			{
				xtype:"titlebar",
				title:"Welcome",
				height:"5%"
			},
			{
				xtype:"list",
				id:"listView",
				store:"LoginStore",
				itemTpl:"<b>Name:{name}</b>,<b>Age:{age}</b>,<b>Hobbies:{hobbies}</b>"
			}


		]
	}
})