let ans = 0;
const add = ()=>{
       
    let ctrl2 = document.getElementById("inp2");
    let val2=  ctrl2.value;
    ans += +val2;
    display();

}
const subtract = () =>{
    let val2=document.getElementById("inp2").value;
    ans -= +val2;
    display();
}
const multiply = ()=>{
    let val2=document.getElementById("inp2").value;
    ans *= +val2;
    display(); 
}
const divide = ()=>{
    let val2=document.getElementById("inp2").value;
    ans /= +val2;
    display();
}
const cl = ()=>{
    ans = 0;
    display();
    
}
const display = ()=>{
    
    document.getElementById("ans").value=ans;
    document.getElementById("inp2").value="";
    if(ans % 3 == 0){
        document.getElementById("ans").style.color = "green";
    }else {
        document.getElementById("ans").style.color = "black";
    }
    //gregs way
    //var ansCtrl = document.getElementById("ans");
    //ansCtrl.value = ans;
    //var ansStyle = ansCtrl.style;
    //if (ans %3 == 0){
        //ansStyle.color = "green";
    //}else{
        //ansStyle.color = "black";
    //}    
       
    
}