let user = {
    id: 0,
    username: "newuser2",
    password: "password",
    firstname: "New2",
    lastname: "User",
    phone: "8888",
    email: "8888",
    isReviewer: true,
    isAdmin: true

}


$().ready( ()=> {

    $.ajax({
        method:"Delete",
        url: "http://localhost:49908/api/users/6",
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log(res);

        })
        .fail((err)=> {
            console.error("Error", err);
        });
});
    
