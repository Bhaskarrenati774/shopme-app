// creating for automatic slides

var counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 2000)







// function to create the cards
var clothing_session = document.createElement("div")
clothing_session.className = "grid_container";
clothing_session.id = "cloths_container"
$("#clothing").append(clothing_session)

// accesories container
var accesories_session = document.createElement("div")
accesories_session.className = "grid_container";
accesories_session.id = "cloths_container"
$("#accesories").append(accesories_session)


let productData;
let cartIcon= document.getElementById("addBtn");
let count = document.getElementById("count")

$(document).ready(function () {

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (data) {

        for (var i = 0; i < data.length; i++) {




            var card = document.createElement("a")
            card.href = 'products.html?p=' + data[i].id
            card.id = data[i].id;
            card.className = "card";



            // innersection of cards
            // image_session
            var picture = document.createElement("img");
            picture.id = "image" + data.id
            picture.className = "image";
            picture.src = data[i].preview
            picture.alt = "image-photo"

            card.append(picture);

            // text_session
            var text_area = document.createElement("div")
            text_area.className = "text_session";

            card.append(text_area)


            // inner_text
            var titleName = document.createElement("h1");
            titleName.className = "title";
            titleName.innerHTML = data[i].name

            var brandName = document.createElement("h3");
            brandName.className = "brand"
            brandName.innerHTML = data[i].brand;

            var itemPrice = document.createElement("p");
            itemPrice.className = "price"
            itemPrice.innerHTML = "Rs " + data[i].price;


            text_area.append(titleName, brandName, itemPrice)






            // appending cards
            // if condition 
            if (data[i].isAccessory === true) {
                accesories_session.append(card)

            } else {
                clothing_session.append(card)

            }







        }
        localStorage.setItem("productData",JSON.stringify(data))
    });

    // let product=JSON.parse(localStorage.getItem("productData"))
    // console.log(product)






     

    







})



