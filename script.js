//global variable
var sushi = {
    type: "",
    plates: 0,
    rate: "",
    amount: 0
}
  
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