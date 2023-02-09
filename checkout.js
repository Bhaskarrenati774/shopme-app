$(() => {
  let item = JSON.parse(localStorage.getItem("cart-item"))
  console.log(item)



  function createCartElement(key) {
    return `<div class="checkOutCard">
    <img src=${item[key].preview}>
    <div id="checkOutText">
    <h3 class="checkOutTitle>${item[key].name}</h3>
     <p style="font-size:15px">x${item[key].count}</p>
   <p style="font-size:16px">Amount: ${item[key].amount}</p>
    </div>
    </div>`
  }
  let totalAmount=0;
  if(item[0]!==undefined){
    for(var i=0;i<item.length;i++){
      totalAmount +=item[i].count * item[i].amount;
      $(".items").append(createCartElement(i))
    }
    $("#itemsCount").html(item.length)
    $("#totalAmount").html(totalAmount)
  }




  $("#proceedBtn").click(() => {
    let cart = [];
    localStorage.setItem("cart-count", "0");
    localStorage.setItem("cart-item", JSON.stringify(cart));
  });

})




