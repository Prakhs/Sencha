Ext.define("MVC.store.LoginStore",{
	extend:"Ext.data.Store",
	storeId:"loginstore",
	xtype:"loginstore",
	config:{
		autoLoad:true,
		model:"MVC.model.LoginModel",
		proxy: {
		   type: "ajax",
		   url: "people",			   
		   reader: {
		    type: "json",
		    rootProperty:"people"
		   }
		}
	}
})