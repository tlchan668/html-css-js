let user = {
    id: 6,
    username: "newuser2",
    password: "password",
    firstname: "Traci",
    lastname: "Chan",
    phone: "8888",
    email: "8888",
    isReviewer: true,
    isAdmin: true

}


$().ready( ()=> {

    $.ajax({
        method:"PUT",
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
    
