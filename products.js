

var queryParams = location.search;
var productId = queryParams.substring(queryParams.lastIndexOf("=") + 1)
// console.log(productId)

var innerDiv = document.createElement("div");
innerDiv.id = "innerDiv"
document.body.append(innerDiv)

var innerWrapper = document.createElement("div");
innerWrapper.className = "innerWrapper"
innerDiv.append(innerWrapper)




let count=document.getElementById("count")
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId, function (data) {
    console.log(data)

    var innerBigImage = document.createElement("img");
    innerBigImage.src = data.preview;
    innerBigImage.alt = "big image";
    innerBigImage.id = "bigImage"

    // text_container
    var innerTextArea = document.createElement("div");
    innerTextArea.id = "Text"

    innerWrapper.append(innerBigImage, innerTextArea);

    // inside the text container

    var innerTitle = document.createElement("h1");
    innerTitle.id = "innerTitle"
    innerTitle.innerHTML = data.name;

    var innerBrand = document.createElement("h1");
    innerBrand.id = "innerBrand";
    innerBrand.innerHTML = data.brand;


    var innerPriceTitle = document.createElement("h3");
    innerPriceTitle.innerHTML = "Price : Rs "
    var innerPrice = document.createElement("span");
    innerPrice.id = "innerPrice";
    innerPrice.innerHTML = data.price
    innerPriceTitle.append(innerPrice)

    var descriptionTitle = document.createElement("h1")
    descriptionTitle.id = "description"
    descriptionTitle.innerHTML = "Description";


    var description = document.createElement("p");
    description.id = "innerDescription"
    description.innerHTML = data.description;


    var products = document.createElement("div");
    products.id = "products"

    var productPreview = document.createElement("p");
    productPreview.id = "product"
    productPreview.innerHTML = "PRODUCT PREVIEW"
    var productImages = document.createElement("div");
    productImages.id = "productImages"

    products.append(productPreview, productImages);

    // here the for loop goes for images
    for (var j = 0; j < data.photos.length; j++) {
        var smallImage = document.createElement("img");
        smallImage.className = "smallImages";
        smallImage.src = data.photos[j]
        productImages.append(smallImage)
    }



    var addBtn = document.createElement("button");
    addBtn.id = "addBtn";
    addBtn.innerHTML = "Add to cart";


    innerTextArea.append(innerTitle, innerBrand, innerPriceTitle, descriptionTitle, description, products, addBtn)



    var biggerImage = document.getElementById("bigImage")
    var images = document.getElementsByClassName("smallImages")
    // console.log(images)

    for (let i = 0; i < images.length; i++) {
        // console.log(images[i])
        images[i].addEventListener("click", function () {
            innerBigImage.src = images[i].src

        })
        images[i].addEventListener("click", function () {
            images[i].style.border = "2px solid #6096B4";
            images[i].style.padding = "5px";
            images[i].style.borderRadius = "10px"

        })
        images[i].addEventListener("mouseleave", function () {
            images[i].style.border = "none"
            images[i].style.padding = "0"
            images[i].style.borderRadius = "0px"
        })
        images[i].addEventListener("load", function () {
            biggerImage.src = biggerImage.src
        })
    }


    // add to btn click event
    let tempCart = {
        id:String(data.id),
        name: `${data.name}`,
        count: 1,
        amount: `${data.price}`,
        preview: `${data.preview}`,
    };
    let tempCount=localStorage.getItem("cart-count") 
    console.log(tempCount)
    $("#addBtn").click(function () {
        var flag = 1
        console.log("clicked")
        tempCount++;
        count.innerHTML = tempCount
        localStorage.setItem("count", `${tempCount}`)
        cartItem = JSON.parse(localStorage.getItem("cart-item"));
        if(cartItem[0]===undefined){
            cartItem.push(tempCart)
        }else{
            for(var i=0;i<cartItem.length;i++){
                if(cartItem.id===String(data.id)){
                    cartItem[i].count++;
                    flag=1;
                    break;

                }else{
                    flag=0
                }
              

            }

        }
        if(flag===0){
            cartItem.push(tempCart)
        }
    localStorage.setItem("cart-item",JSON.stringify(cartItem))
    alert("item added succesfully")

   
    
   
  
  




    })

})