({
    ({
    callServer : function(component,method,callback,params) {
        var compEvent = component.getEvent("loading");
        compEvent.fire();
        
        var action = component.get(method);
        if (params) {
            action.setParams(params);
        }
        
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") { 
                console.log("SUCCESS");
                // console.log('Inside Base - response : ' + JSON.stringify(response.getReturnValue()));
                callback.call(this,response.getReturnValue());   
            } else if (state === "ERROR") {
                // generic error handler
                var errors = response.getError();
                if (errors) {
                    console.log("Errors", errors);
                    if (errors[0] && errors[0].message) {
                        throw new Error("Error" + errors[0].message);
                    }
                } else {
                    throw new Error("Unknown Error");
                }
            }
            var compEvent = component.getEvent("loadingDone");
            compEvent.fire();
        });
        
        $A.enqueueAction(action);
    },
    
    redirectToRec : function(component){
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": "/" + component.get('v.recordId')
        });
        urlEvent.fire();
    },
    
    showToast : function(component, event, helper, resp, title, message, type) {
        var title, message, type;
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": title,
            "message": message,
            "type" : type
        });
        toastEvent.fire();
        
        window.setTimeout(
            $A.getCallback(function() {
                helper.redirectToRec(component);
            }), 2000
        );
    }
})
    
})