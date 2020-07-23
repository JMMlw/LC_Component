({
    doInit : function(component, event, helper) {
        // DO SOME
        
        // CALL APEX METHOD
        this.callServer(component,
            "c.methodName",
            function(response){
                console.log('response : ' + response);
            },
            {
                param1 : 'param', param2 : 1+1
            }
        )
    }
    
})
