//make prompt accept a number
function studentGrade(){
    return Number(prompt('Enter your grade'))
    
}
//studentGrade()
function evaluateGrade(){
  //  let studentGrade =Number(prompt('Enter your Grade','0-100'))
let x=studentGrade()
    if(x>=0 && x<=100){
        msg='You have entered a valid input'
        if(x>79){
            mssg='You got an A'
        }else if(x>=60 && x<79){
            mssg='You got an B'
        }else if(x>=49 && x<=59){
            mssg='You got an C'
        }else if(x>=40 && x<49){
            mssg='You got an D'
        }else{
            mssg='You got an E'
        }

      
    }else{
        msg = 'Enter a valid grade'
    } 
    document.getElementById("message").innerHTML = msg;
    document.getElementById("grade").innerHTML = mssg;

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