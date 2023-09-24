
let x=888

function deductions(nhif){

if(x<24999){
    nhif=750;
}else if(x>=25000 && x<30000){
    nhif=850;
}else if(x>=30000 && x<35000){
    nhif=900;
}else if(x>=35000 && x<40000){
    nhif=950;
}else if(x>=45000 && x<50000){
    nhif=1000;
}else if(x>=50000 && x<55000){
    nhif=1100;
}else if(x>=55000 && x<60000){
    nhif=1200;
}else if(x>=60000 && x<70000){
    nhif=1300;
}else if(x>=70000 && x<80000){
    nhif=1400;
}else if(x>=80000 && x<90000){
    nhif=1500;
}else if(x>=90000 && x<=100000){
    nhif=1600;
}else if(x>=100000){
    nhif=1700;
}
return nhif
}
console.log(deductions(x))



let x=yourSalaryPerMonth()
function payAsYouEarn(payee){
    
    if(x<=24000){
        payee=0.1*x;
    }else if(x>=24001 && x<=32333){
        payee=x*0.25; 
    }
    else if(x>=32334 && x<=500000){ 
        payee=x*0.3;
    }
    else if(x>=500001 && x<=800001){ 
        payee=x*0.325;
    }else{
        payee=x*0.35;
    }
return payee;
}
function housingLevy(){
return 0.015*x
}
function nssfDeductions(nssf){
    if(x<18000){
        nssf=0.06*6000
    }else if(x>18000){
        nssf=0.06*18000
    }
    return nssf; 
}
function deductions(nhif){
    if(x<24999){
        nhif=750;
    }else if(x>=25000 && x<30000){
        nhif=850;
    }else if(x>=30000 && x<35000){
        nhif=900;
    }else if(x>=35000 && x<40000){
        nhif=950;
    }else if(x>=45000 && x<50000){
        nhif=1000;
    }else if(x>=50000 && x<55000){
        nhif=1100;
    }else if(x>=55000 && x<60000){
        nhif=1200;
    }else if(x>=60000 && x<70000){
        nhif=1300;
    }else if(x>=70000 && x<80000){
        nhif=1400;
    }else if(x>=80000 && x<90000){
        nhif=1500;
    }else if(x>=90000 && x<=100000){
        nhif=1600;
    }else if(x>=100000){
        nhif=1700;
    }
    return nhif
    }

function updateWindow(){
    
    
    document.getElementById("totalPoints").innerHTML =
    document.getElementById("totalPoints").innerHTML =
    document.getElementById("totalPoints").innerHTML =
}