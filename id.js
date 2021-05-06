(function(){
    var ids= {
        "store_id": "store",
        "product_id": "product", 
        "cart_id": "cart",
        "order_id": "order",
        "customer_id": "customer"
    } 
    
    var str = "Alguns IDs importantes: \n"
    for (const key in ids) {
        if (ids.hasOwnProperty(key)) {
            if(LS[ids[key]]){
                if(LS[ids[key]].id){
                    str  = str + key + ": " + LS[ids[key]].id + "\n"
                
                }
                
            }
            
        }
    }
    alert(str)
    
})();
