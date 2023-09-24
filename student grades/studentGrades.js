//let num = 1
//num should always be a number between 1 and 100
//const studentGrade =Number(prompt('Enter your Grade','0-100'))//make prompt accept a number
//let msg=document.getElementById('message').innerHTML
function evaluateGrade(){
    let studentGrade =Number(prompt('Enter your Grade','0-100'))//make prompt accept a number

    if(studentGrade>=0 && studentGrade<=100){
        //execute block of code
        console.log('You have entered a valid input')
        let msg;

        //For loop to test out conditions provided
        if(studentGrade>79){
            msg='You got an A'
        }else if(studentGrade>=60 && studentGrade<79){
            msg='You got an B'
        }else if(studentGrade>=49 && studentGrade<=59){
            msg='You got an C'
        }else if(studentGrade>=40 && studentGrade<49){
            msg='You got an D'
        }else{
            msg='You got an E'
        }
        //Accessing the dom to print out in the browser
        document.getElementById("message").innerHTML = msg;
    }else{
        console.log('Enter a valid grade')
    } 
   // document.getElementById("message").innerHTML = msg;

}
evaluateGrade()






/**
 * 
 * if(num>79){
    console.log('A')
}else if(num>=60 && num<79){
    console.log('B')
}else if(num>=49 && num<=59){
    console.log('C')
}else if(num>=40 && num<49){
    console.log('D')
}else{

}
 */

/**
 * 
 * 
 * switch(num){
    case(>79):
    msg='You got an A'
    break;
    case(>=60 &&<79):
    msg='You got an B'
    break;
    case(>=49 && <=59 ):
    msg='You got an C'
    break;
    case(>=40 && <49 ):
    msg='You got an D'
    break;
    case(<40):
    msg='You got an E'
    break;
}
 */
/**
 * 
let num =79

switch(true){
    case(num>79):
        console.log('You got an A')
    break;
    case(num>=60 && num<79):
    console.log('You got an A')
    break;
    case(num>=49 && num<=59 ):
    console.log('You got an A')
    break;
    case(num>=40 && num<49 ):
    console.log('You got an A')
    break;
    case(num<40):
    console.log('You got an A')
    break;
}
//Does not offer much of a difference to use the switch case alt
//console.log(msg)

/**
 * 
if(num>79){
    console.log('A')
}else if(num>=60 && num<79){
    console.log('B')
}else if(num>=49 && num<=59){
    console.log('C')
}else if(num>=40 && num<49){
    console.log('D')
}else{

}
 */
 */