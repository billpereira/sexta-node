// node myFile.js

const pendingTimers = []
const pendingOSTasks =[]
const pendingOperations =[]

//New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    //Check one: Any pending setTimeout, setInterval, setImmediate?

    //Check two: Any pending OS tasks? (server listening to port)

    //Check three: Any pending long running operations?(like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations
}

// Entire body executes in one 'tick'
while(shouldContinue()){

    //Node looks at pendingTimers and sees if any functions are ready to be called - timeout intervals

    //Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    //Pause execution . Continue when...
    //  - a new pendingOStask is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete

    //look at pendingTimers - Immediate

    //handle any close events
}



// exit back to terminal