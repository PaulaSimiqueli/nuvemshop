/** 
 * Script to automatically change the mandatory phone number at checkout.
POST / scripts must be done.

*/

(function(){
    /**The script is loaded at the time of loading the page, so, to wait for the attributes to be properly loaded, we are using the setTimeout function, with 5 seconds. */
    setTimeout(function(){  
        // Check the language 
        let phone = "Phone"
        if(LS.langCode.localeCompare("pt")==0)
            phone = "Telefone";
        else if (LS.langCode.localeCompare("es")==0)
            phone = "Teléfono";
        

        document.getElementById("shippingAddress.phone").setAttribute("required", "true");
        document.getElementById('label_shippingAddress.phone').innerHTML = phone;
}, 5000); 
        
})();