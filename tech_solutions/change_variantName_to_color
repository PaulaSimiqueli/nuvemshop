function find(val, list) {
    for (let i = 0; i < list.length; i++) 
        if (list[i] == val) return true
    

    return false;
}

refColors = {	
    "Areia": {"r": 220, "g":203, "b":181},
    "azul marinho": {"r": 18, "g":10, "b":143},
    "Chocolate": {"r": 132, "g":86, "b":60}
}

color = []
personalizacao = []
for (let i = 0; i < LS.variants.length; i++) {
    if (!find(LS.variants[i].option0, color))
        color.push(LS.variants[i].option0);
    if (!find(LS.variants[i].option1, personalizacao))
        personalizacao.push(LS.variants[i].option1);
}
var dataStore = '[data-store="product-form-'+LS.product.id+'"]'
const form = document.querySelector(dataStore);
let variants = form.getElementsByClassName("js-product-variants");
let color1 = variants[0].firstElementChild
select1 = color1.getElementsByClassName("form-select")
select1Icon = color1.getElementsByClassName("form-select-icon")
select1[0].remove()
select1Icon[0].remove()

//Create and append select list
var selectVar1 = document.createElement("select");
selectVar1.id = "variation_1";
selectVar1.style.overflow = "auto";
selectVar1.style.width = "150px";
selectVar1.size = "4";
color1.appendChild(selectVar1);

//Create and append the options
for (var i = 0; i < color.length; i++) {
    var option = document.createElement("option");
    option.value = color[i];
    option.text = color[i];
    option.style.background = "rgb("+refColors[color[i]]["r"]+","+refColors[color[i]]["g"]+","+refColors[color[i]]["b"]+")"
    selectVar1.appendChild(option);
}



