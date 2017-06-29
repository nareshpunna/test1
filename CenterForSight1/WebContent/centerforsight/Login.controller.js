jQuery.sap.require("sap.m.MessageBox");
sap.ui.controller("centerforsight.Login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf centerforsight.Login
*/
	onInit: function() {
		
			
			
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf centerforsight.Login
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf centerforsight.Login
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf centerforsight.Login
*/
//	onExit: function() {
//
//	}
onLogin:function(oEvent)
{
	debugger;
	var oView = this.getView();
	var oUsername = oView.byId("username");
	var oPassword = oView.byId("password");
	if(oUsername.getValue() === "centerforsight" && oPassword.getValue() === "centerforsight")
		{
//	 Navigate to next page	
		var oCenterForSight = sap.ui.getCore().byId("centerforsight");
		oCenterForSight.to("idMain");
		}
	else
		{
		sap.m.MessageBox.show("Invalid credentials",
				"Error",
				sap.m.MessageBox.Icon.Error);
		}
	},
	onSignUp:function(oEvent)
	{
		debugger;

			var oCenterForSight = sap.ui.getCore().byId("centerforsight");
			oCenterForSight.to("idSignUp");

	}
});