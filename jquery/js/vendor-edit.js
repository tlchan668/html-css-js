let vendor = {
    id: 7,
    code: "1118",
    name: "Target",
    address: "111 Amazone way",
    city: "Seattle ",
    state: "WA",
    zip: "98888",
    phone: "2",
    email: "2@target"

}


$().ready( ()=> {

    $.ajax({
        method:"PUT",
        url: "http://localhost:49908/api/vendors/7",
        data: JSON.stringify(vendor),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log(res);

        })
        .fail((err)=> {
            console.error("Error", err);
        });
});
    
