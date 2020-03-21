let saved_vendors = null;

$().ready( ()=> {

    console.log("Before the get JSON call.");

    $.getJSON("http://localhost:49908/api/vendors")
        .done((vendors) => {
            //save this user in local variable
            saved_vendors = vendors;
            //render this into a table of users
            console.log("Vendors:", vendors);
            display();
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After the get JSON call.");

});

const display = ()=> {
    //get access to tbody tag
    let tbody =  $("#vendortbody");
    //make sure nothing else in the body of this routine
    tbody.html("");   
    console.log("indisplay");
    //iterate through our saved users to add rows to body of table
    for(let vendor of saved_vendors){
        console.log("for loop");
        //construct our entire row in our table
        let tr = $("<tr></tr>");
        let tdId = `<td>${vendor.id}</td>`;
        //add to tr tag to inner html of tdId
        let tdCode = `<td>${vendor.code}</td>`;
        let tdName = `<td>${vendor.name}</td>`;
        let tdAddress = `<td>${vendor.address} ${vendor.city} ${vendor.state} ${vendor.zip}</td>`;
        let tdPhone = `<td>${vendor.phone}</td>`;
        let tdEmail = `<td>${vendor.email}</td>`;
        tr.html(tdId + tdCode + tdName +  tdAddress + tdPhone + tdEmail);
        tbody.append(tr);
        //call our dispaly routine in done after save
    }
};