let nbr=0;

$().ready(function() {

   $("div").css("text-align", "center");

   display();

    $(".inc").click(()=>{
        nbr++;
        display();
    });
    $(".dec").click(()=>{
        nbr--;
        display();
    }) ;   


});    

    const display = ()=>{
        $(".lbl").text(nbr).css("color", "black")
                           .css("font-style", "normal")
                           .css("font-weight", "normal");
    }
