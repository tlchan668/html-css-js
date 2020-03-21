const c2f = ()=>{
    
    let ctrl = +(document.getElementById("c2f").value);
    
    let ans = (ctrl*9)/5 +32;
    
    document.getElementById("c2f").value=ans;
    
}
const f2c = ()=>{
    
    let ctrl2 = +(document.getElementById("f2c").value);
    let ans2 = 5/9 * (ctrl2 - 32);
    document.getElementById("f2c").value=ans2;
   
}
