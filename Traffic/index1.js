let countPoints=0
//function to prompt user input
function speedCheck(){
    //variable declaration
    let speed=Number(prompt('Enter your speed','speed in km/hr'))
    let limit=70
    let msg='Your speed is '+ speed ;
    let msgOk;
    let tpoints;
//Conditional to check the speed and calculate whether the driver is above or below the speed limit
    if(speed<=70){
        
        msgOk='Your speed is okay'
        dPoints=`you have ${countPoints} points`
        
        

        
    }else{
        let overSpeed=speed-limit
        let points = Math.floor(overSpeed/5)
        msgOk=`you are ${overSpeed} km/h above speed limit`
        dPoints=`you have received ${points} point(s)`
        countPoints = countPoints+points
        //Condition to check state of the licence based of demerit points
        if(countPoints>=12){
            license='License suspended'
            
        }else{
            license='License not suspended'
        }
        tpoints=`you have a total of ${countPoints} demerit point(s)`
    
    }
    //countPoints = countPoints+points
    //tpoints=`you have a total of ${countPoints} point(s)`
    //Accessing the DOM using the getelement by id to update the browser

    document.getElementById("message").innerHTML = msg;
    document.getElementById("okay").innerHTML = msgOk;
    document.getElementById("driverPoints").innerHTML = dPoints;
    document.getElementById("totalPoints").innerHTML = tpoints;
    document.getElementById("license").innerHTML = license;
    
}
//Calling the function
speedCheck()