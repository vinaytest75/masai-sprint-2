//global variable
var sushi = {
    type: "",
    plates: 0,
    rate: "",
    amount: 0
}
var total = 0;
  
window.onload = function(){
    
    var form = document.querySelector("#form")
    form.addEventListener("submit", function(){
    event.preventDefault();
      
    var type = document.getElementById("type").value;
    sushi.type = type;
      
    var plates = document.getElementById("plates").value;
    sushi.plates = plates;
      
    var rate = document.getElementById("rate").value;
    sushi.rate = rate;

    // var amount = document.getElementById("amount").value;
    sushi.amount = rate*plates;
    
    total = total + (rate*plates);
    var totalAmt = document.getElementById('result');
    totalAmt.textContent = "Total Amount "+"$"+total
    
    var tax = (0.05*total);                        // Added 5% tax
    var resTax = document.getElementById('tax');
    resTax.textContent = "Tax "+"$"+tax
    
    var tip = (0.01*total);                               // Added 1% Tip
    var resTip = document.getElementById('tip');
    resTip.textContent = "Tip "+"$"+tip
      
    var totalBill = total + tax + tip;                  //Added total bill  
    var resTotalBill = document.getElementById('totalBill');
    resTotalBill.textContent = "Total Bill to be paid $"+(totalBill);
    
    displayTable();
    })
}
  
  // Creating the Table
  function displayTable() {
    var row = document.createElement('tr');

    var type_col = document.createElement('td');
    type_col.textContent = sushi.type;
    
    var plates_col = document.createElement('td');
    plates_col.textContent = sushi.plates;
    
    var rate_col = document.createElement('td');
    rate_col.textContent = sushi.rate;

    var amount_col = document.createElement('td');
    amount_col.textContent = sushi.amount;
    
    row.appendChild(type_col);
    row.appendChild(plates_col);
    row.appendChild(rate_col);
    row.appendChild(amount_col);
    
    var table = document.getElementById("records");
    table.appendChild(row);
}
