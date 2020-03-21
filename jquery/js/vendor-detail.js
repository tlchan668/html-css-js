let saved_vendor = null;

$().ready( ()=> {

    console.log("Before the get JSON call.");

    $.getJSON("http://localhost:49908/api/vendors/7")
        .done((vendor) => {
            //save this user in local variable
            saved_vendor = vendor;
            console.log("vendor: ", vendor);
            display();
        })
        .fail((err) => {
            console.error("ERROR:", err);
        });
    console.log("After the get JSON call.");

});

const display = ()=> {
        console.log("display",saved_vendor.id);
        $("#tid").text(saved_vendor.id);
        $("#tcode").text(saved_vendor.code);
        $("#tname").text(saved_vendor.name);
        $("#taddress").text(`${saved_vendor.address} ${saved_vendor.city} ${saved_vendor.state} ${saved_vendor.zip}`);
        $("#tphone").text(saved_vendor.phone);
        $("#temail").text(saved_vendor.email);

    
};