({
	doInit : function(component, event, helper) {
		helper.doInit(component, event, helper);
	},

     spinnerShow : function (component, event, helper) {
        var m = component.find('modalspinner');
        $A.util.removeClass(m, "slds-hide");
    },

    spinnerHide : function (component, event, helper) {
        var m = component.find('modalspinner');
        $A.util.addClass(m, "slds-hide");
    }
})