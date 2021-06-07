(function() {
/***
 * Script to add Order tracking URL on customer order details page.
 * 
 */
    if (window.location.pathname.includes('/account/orders')) {

        var account = document.getElementsByClassName("account-page");
        var section = account.item(0)
        if (section)
            if (section.innerText.indexOf("Frete: Enviado") !== -1) {
                orderDetail = section.children.item(0)
                row = orderDetail.children.item(0)
                details = row.children.item(0)
                box = details.children.item(0)
                //Searching for the order id.
                data_store = orderDetail.getAttribute("data-store")
                ids = data_store.split("-")
                var url = "http://example.com"
                if (ids.length == 4) {
                    url = "http://example.com?tracking-id=" + ids[3]
                }
                //Creating the tag to add the link.
                var link = document.createElement('a');
                var linkText = document.createTextNode("RASTREAR PEDIDO");
                link.appendChild(linkText);
                link.title = "RASTREAR";
                link.href = url;
                link.style = "border: black;border-style: solid;"

                box.appendChild(link)


            }
    }
})();