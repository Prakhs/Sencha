Ext.define("MVC.controller.LoginController",{
	extend:"Ext.app.Controller",
	config:{
		control:{
			"#button":{
				tap:"onClick"
			}
		}
	},
	onClick:function (){
		console.log("Hello");
		var use=Ext.getCmp("user").getValue();
		var pas=Ext.getCmp("pass").getValue();
		if(use=="admin" && pas=="admin"){
			Ext.Viewport.setActiveItem(1);
		}
	}
})