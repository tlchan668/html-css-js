let saved_products = null;

$().ready( ()=> {

    console.log("Before the get JSON call.");

    $.getJSON("http://localhost:49908/api/users")
        .done((products) => {
            //save this user in local variable
            saved_prods = products;
            //render this into a table of users
            console.log("products:", products);
            display();
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After the get JSON call.");

});

const display = ()=> {
    //get access to tbody tag
    let tbody =  $("#prodtbody");
    //make sure nothing else in the body of this routine
    tbody.html("");   
    console.log("indisplay");
    //iterate through our saved users to add rows to body of table
    for(let user of saved_users){
        console.log("for loop");
        //construct our entire row in our table
        let tr = $("<tr></tr>");
        let tdId = `<td>${user.id}</td>`;
        let tdName = `<td>${user.firstname} ${user.lastname}</td>`;
        let tdPhone = `<td>${user.phone}</td>`;
        let tdEmail = `<td>${user.email}</td>`;
        tr.html(tdId + tdName + tdPhone + tdEmail);
        tbody.append(tr);
        //call our dispaly routine in done after save
    }
};