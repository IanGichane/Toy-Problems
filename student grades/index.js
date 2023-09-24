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
        //Check condition of input based of the given range
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


