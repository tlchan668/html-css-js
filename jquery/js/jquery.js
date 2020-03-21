
$().ready(function() {

    console.log("jQuery is ready!");
    

    $("div").html("<h1>Welcome to jQuery</h1>")//pushing string into body tag
        .css("color", "purple").css("font-Family", "Impact")
        .css("font-Size", "2rem");
    
        //hook the button when clicked
    $("button").click(function() {
       console.warn("the button was clicked"); 
    });
    
    
});