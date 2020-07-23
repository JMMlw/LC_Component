({
    doInit : function(component, event, helper) {
        // DO SOME
        
        this.callServer(component,
            "c.isCadreR2Fige",
            function(response){
                console.log('response : ' + response);
            },
            {
                opportunityId : oppId
            }
        )
    }
    
})
