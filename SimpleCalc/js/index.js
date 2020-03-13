const clickme = ()=>{
    //button will execute
    let ctrl = document.getElementById("inp1");
   
    let ctrl2 = document.getElementById("inp2");
    
    let val1 = ctrl.value;
    let val2=  ctrl2.value;
    let val3 = +val1 + +val2;

    let lblctrl = document.getElementById("lbl");//get control of label
    lblctrl.innerHTML=val3;

    //gregs way
    //let ctrl = document.getElementById("inp1");
    //let ctrl2 = document.getElementById("inp2");
    //let val1 = ctrl1.value;
    //let val2=  ctrl2.value;
    //let ansctrl = document.getElementById("ans");
    //ansctrl.value = +val1 + +val2;
    //or could be Number(val2)

}