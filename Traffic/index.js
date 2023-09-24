/**
 * 
 takes the speed of a car as input e.g 80. 
 If the speed is less than 70, it should print “Ok”. 
 Otherwise, for every 5 km/s above the speed limit (70), 
 it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
 */
let speed= 80
limit =70
let demeritPoints=0
console.log(speed)
if(speed<=70){
    console.log('Ok')
}else{
    //calculate speed above limit
    let overSpeed=speed-limit
    console.log(`you are ${overSpeed}km/h above speed limit`)
    //calculate points given
    let points = Math.floor(overSpeed/5)
    console.log(points)
    demeritPoints+=points
    console.log(demeritPoints)
    if(demeritPoints>=24){
        console.log('License suspended')
        console.log(demeritPoints)
    }

}


function speedCheck(){
    let speed=Number(prompt('Enter your speed','speed in km/hr'))
    console.log(speed)
}


//for every 5 km/s

/**
 * 0-4 0
5 1
5-9 1
10 2
11-14 2
15 3
 */