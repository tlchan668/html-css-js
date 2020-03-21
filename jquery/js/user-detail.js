let saved_user = null;

$().ready( ()=> {

    console.log("Before the get JSON call.");

    $.getJSON("http://localhost:49908/api/users/1")
        .done((user) => {
            //save this user in local variable
            saved_user = user;
            //render this into a table of users
            console.log("User:", user);
            display();
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After the get JSON call.");

});

const display = ()=> {
    //set values of tid
    $("#tid").text(saved_user.id);
    $("#tname").text(`${saved_user.firstname} ${saved_user.lastname}`);
    $("#tphone").text(saved_user.phone);
    $("#temail").text(saved_user.email);
    
};