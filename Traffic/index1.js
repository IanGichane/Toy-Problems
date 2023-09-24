let countPoints=0
function speedCheck(){
    let speed=Number(prompt('Enter your speed','speed in km/hr'))
    let limit=70
  
    
    let msg='Your speed is '+ speed ;
    let msgOk;
    let tpoints;

    if(speed<=70){
        
        msgOk='Your speed is okay'
        dPoints=`you have ${countPoints} points`
        
        

        
    }else{
        let overSpeed=speed-limit
        let points = Math.floor(overSpeed/5)
        msgOk=`you are ${overSpeed} km/h above speed limit`
        dPoints=`you have received ${points} point(s)`
        countPoints = countPoints+points
        if(countPoints>=12){
            license='License suspended'
            
        }else{
            license='License not suspended'
        }
        tpoints=`you have a total of ${countPoints} demerit point(s)`
      
    
    }
    //countPoints = countPoints+points
    //tpoints=`you have a total of ${countPoints} point(s)`
 


    document.getElementById("message").innerHTML = msg;
    document.getElementById("okay").innerHTML = msgOk;
    document.getElementById("driverPoints").innerHTML = dPoints;
    document.getElementById("totalPoints").innerHTML = tpoints;
    document.getElementById("license").innerHTML = license;
    
}


speedCheck()