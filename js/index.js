function clickme1(){

}
let clickme2 = function(){

}
const clickme3 = ()=>{
    //button will execute
    let ctrl = document.getElementById("inp");//this is an object that points to input box
    //input box has a value and can access and read or set that value in input box
    //read whats in input box
    let val = ctrl.value;
    //take val and put in the label
    let lblctrl = document.getElementById("lbl");//get control of label
    //take this val and put in label
    //if want text into something use inner text
    //if want html use inner htlm so it is bigger and bold because h3
    lblctrl.innerHTML="<h3>"+val+"</h3>";

}