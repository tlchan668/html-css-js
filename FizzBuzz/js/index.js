const fizzbuzz = ()=> {
    for(var i=1; i<101;i++){
        if((i%3==0)&&(i%5==0)){
            //console.log("Fizzbuzz");
            let pCtrl=document.getElementById("out");
            pCtrl.innerText +=" FizzBuzz ";
        
        } else if (i%5== 0){
            //console.log("Buzz");
            let pCtrl=document.getElementById("out");
            pCtrl.innerText+=" Buzz ";
            
        }
        else if (i%3==0){
            //console.log("Fizz");
            let pCtrl=document.getElementById("out");
            pCtrl.innerText+=" Fizz ";
        
        }else {
            //console.log(i);
            let pCtrl=document.getElementById("out");
            pCtrl.innerHTML+=i+"      ";
        }

        //would have been better to do if and use continue
        
        
    }
  
}
//const out = (output) => {
  //  let pCtrl=document.getElementById("out");
    //pCtrl.innterHtml +=
//}