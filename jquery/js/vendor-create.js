let vendor = {
   
    id: 0,
    code: "1119",
    name: "Amazon2",
    address: "111 Amazone way",
    city: "Seattle ",
    state: "WA",
    zip: "98888",
    phone: "2",
    email: "2@amazon"

}


$().ready( ()=> {

    $.ajax({
        method:"POST",
        url: "http://localhost:49908/api/vendors",
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
    
