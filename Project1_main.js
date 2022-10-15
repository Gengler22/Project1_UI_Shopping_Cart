 
var listOfItems = ["2 lb Chicken Nuggets", "3 lb Ground Beef", "16 oz Rice", "6 oz Spinach", "1 Gallon milk" ];
var listOfPrices = [8.99, 14.99, 3.99, 3.49, 4.29];
var listOfQuantities = [1, 1, 1, 1, 1];
var listOfItemCalls = ["Item1", "Item2","Item3", "Item4", "Item5"]
var listOfPriceCalls = ["Price1", "Price2","Price3", "Price4", "Price5"]
var listOfQuantityCalls = ["Quantity1", "Quantity2","Quantity3", "Quantity4", "Quantity5"]
var totalId = "Total";
var listOfTotals = [0, 0, 0, 0, 0, 0];

var count = 0;

const origPrice = [0, 8.99, 14.99, 3.99, 3.49, 4.29];

var itemPlaceholder ='';
var pricePlaceholder = 0;
var quantityPlaceholder = 0;
var totalPlaceholder = 0;

var pricePlaceholder1 = 0;

var checkoutPrompt = "Please Insert Card";

var Item = document.getElementById(listOfItemCalls[count]);
var Price = document.getElementById(listOfPriceCalls[count]);
var Quantity = document.getElementById(listOfQuantityCalls[count]);
var totalAmount = 0;
var total = document.getElementById(totalId);



function printItems() {

    itemPlaceholder = listOfItems[count];
    pricePlaceholder = listOfPrices[count];
    quantityPlaceholder = listOfQuantities[count];
 
    Item = document.getElementById(listOfItemCalls[count]);
    Price = document.getElementById(listOfPriceCalls[count]);
    Quantity = document.getElementById(listOfQuantityCalls[count]);
    total = document.getElementById(totalId);

    if(count <= 4) {
        Quantity.innerHTML = quantityPlaceholder;
        Item.innerHTML = itemPlaceholder;
        Price.innerHTML = '$' + pricePlaceholder.toFixed(2);
        totalPlaceholder = listOfTotals[count];
        listOfTotals[count] = pricePlaceholder + totalPlaceholder;
        totalAmount = listOfTotals[0] + listOfTotals[1] + listOfTotals[2] + listOfTotals[3] + listOfTotals[4];
        total.innerHTML = '$' + totalAmount.toFixed(2);
        count += 1;
    }

    else {
        count = 0;
    }


    console.log(Item);
    console.log(Price);
    console.log(Quantity);
    };

function addQuantity() {

    pricePlaceholder1 = pricePlaceholder + origPrice[count];
    pricePlaceholder = pricePlaceholder1;
    quantityPlaceholder += 1;

    listOfTotals[count] = pricePlaceholder - origPrice[count];
    totalPlaceholder = listOfTotals[count];
    totalAmount = listOfTotals[0] + listOfTotals[1] + listOfTotals[2] + listOfTotals[3] + listOfTotals[4];
    
    Price.innerHTML = '$' + pricePlaceholder.toFixed(2);
    Quantity.innerHTML = quantityPlaceholder;
    Item.innerHTML = itemPlaceholder;
    total.innerHTML = '$' + totalAmount.toFixed(2);

};

function deleteItem() {
   
    pricePlaceholder1 = pricePlaceholder - origPrice[count];
    pricePlaceholder = pricePlaceholder1;
    quantityPlaceholder -= 1;
    listOfTotals[count] = pricePlaceholder - origPrice[count];
    totalPlaceholder = listOfTotals[count];
    totalAmount = listOfTotals[0] + listOfTotals[1] + listOfTotals[2] + listOfTotals[3] + listOfTotals[4];

    Price.innerHTML = '$' + pricePlaceholder.toFixed(2);
    Quantity.innerHTML = quantityPlaceholder;
    Item.innerHTML = itemPlaceholder;
    total.innerHTML = '$' + totalAmount.toFixed(2);

    if(quantityPlaceholder == 0) {
        totalAmount = totalAmount - pricePlaceholder;
        itemPlaceholder = '';
        pricePlaceholder = '';
        quantityPlaceholder = '';
        
        Price.innerHTML = pricePlaceholder;
        Quantity.innerHTML = quantityPlaceholder;
        Item.innerHTML = itemPlaceholder;
        total.innerHTML = '$' + totalAmount.toFixed(2);

        itemPlaceholder = listOfItems[count - 1];
        pricePlaceholder = listOfPrices[count - 1];
        quantityPlaceholder = listOfQuantities[count - 1];

        Item = document.getElementById(listOfItemCalls[count - 1]);
        Price = document.getElementById(listOfPriceCalls[count - 1]);
        Quantity = document.getElementById(listOfQuantityCalls[count - 1]);  
        total = document.getElementById(totalId);   
    };

};

function methodOfPayment() {
    var CheckoutId = "CheckoutId";
    var Checkout = document.getElementById(CheckoutId);
    Checkout.innerHTML = checkoutPrompt;
}

function insertCard() {
    var insertCardId = "insertCardId";
    var insertCard = document.getElementById(insertCardId);
    var insertCardPrompt = "Approved, have a nice day!";
    checkoutPrompt = '';
    insertCard.innerHTML = insertCardPrompt;
    Checkout.innerHTML = checkoutPrompt;
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  };
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };

