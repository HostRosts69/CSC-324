const artists = [
  {
    name: "Ms Scandalous",
    birthYear: 1985,
    link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
  },
  {
   name: "Juggy D",
   birthYear: 1981,
   link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
 },
 {
   name: "Sukhbir Singh",
   birthYear: 1969,
   link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
 },
 {
   name: "Abrar-ul-Haq",
   birthYear: 1989,
   link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
 },
 {
   name: "Rishi Rich",
   birthYear: 1970,
   link: "https://www.youtube.com/watch?v=O95-w2gACuA"
 }
];

let contents = "<tr> <th>Name</th> <th>Date of Birth</th> <th>Link</th> </tr>";// needs data so insert row can work

const table = document.querySelector("#bhangra");
table.innerHTML = contents;
 for(const element of artists){
   var row = table.insertRow(-1);// adds to bottom
   var cell1 = row.insertCell(0);// adds 1st row cell
   var cell2 = row.insertCell(1);// adds 2nd row cell
   var cell3 = row.insertCell(2);// adds 3rd row cell
   cell1.innerHTML = element.name;
   cell2.innerHTML = element.birthYear;
   cell3.innerHTML = `<a href=${element.link}>${element.link}</a>`;
}


//sets up buttons and their functions and ids
const buttons = [
  {
   name: "Sort Name",
   id: 'byName-button',
   function: function() {
      var table, rows, switchTR, row1, row2; // have to declare I up here so it can be used when loop breaks
      table = document.getElementById("bhangra");
      switchTR = true;
    
      // restarts if switching == true
      while (switchTR) {
        switchTR= false;
        rows = table.rows;
        //loops through all the rows
        for (let i = 1; i < (rows.length - 2); i++) {
    
          row1 = rows[i].getElementsByTagName("TD")[0]; //row[i]: first row; 0: first cell: ArtistName
          console.log(rows);
          console.log(rows[i]);
          console.log(row1);
          row2 = rows[i + 1].getElementsByTagName("TD")[0]; //row[i+1]: second row; 0: first cell: ArtistName
          
          if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {// .toLowerCase: makes string lowercase
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
              switching = true; // double checks if they need to be sorted more
            }
        }
      };}
 },
 {
   name: "Sort Birth Year",
   id: 'byYear-button',
   function: function() {
        var table, rows, switchTR, row1, row2; // have to declare I up here so it can be used when loop breaks
        table = document.getElementById("bhangra");
        switchTR= true;
        
        // restarts if switching == true
        while (switchTR) {
          switchTR = false;
          rows = table.rows;
          //loops through all the rows
          for (let i = 1; i < (rows.length - 2); i++) {
      
            // gets elements based on tag <td>
            row1 = rows[i].getElementsByTagName("TD")[1]; //row[i]: first row; 1: second cell; elements within cell
            console.log(rows);
            console.log(rows[i]);
            console.log(row1);
            row2 = rows[i + 1].getElementsByTagName("TD")[1]; //row[i+1]: second row; 2: second cell; elements within cell
            
            if (row1.innerHTML > row2.innerHTML) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
              switchTR = true; // double checks if they need to be sorted more
          }
        }
      };}
  },
  {
  name: "Random Order",
  id: 'random-button',
  function: function() { 
      var table, rows;// have to declare I up here so it can be used when loop breaks
      table = document.getElementById("bhangra");
      rows = table.rows;
      for (let i = 1; i < rows.length - 1; i ++){
        var random = Math.floor(Math.random() * (rows.length - 2));//random number between 0 and 4; -2 so buttons in the table not moved
        if (random == 0){
          random += 1; // adds 1 to 0 so that nothing is added before tile
        }
        rows[random].parentNode.insertBefore(rows[i], rows[random]);//first value:row to insert; second value: refreance node; insertBefore.inserts rows before other rows
      };}
 }
];

// sets up buttons
row = table.insertRow(-1)
for(i = 0; i < buttons.length; i++){
  cell = row.insertCell(i);// adds 1st row cell
  const newButton = document.createElement('button');
  newButton.textContent = buttons[i].name;
  newButton.id = buttons[i].id;
  document.body.appendChild(newButton)
  cell.appendChild(newButton)// appends button to cell
}

// sets buttons functions
for (elm of buttons){
  const randomButton = document.querySelector("#"+elm.id);
  randomButton.addEventListener("click", elm.function);
}


// how functions looks when not in the array
function sortTable_byName() {
  var table, rows, switchTR, row1, row2; // have to declare I up here so it can be used when loop breaks
  table = document.getElementById("bhangra");
  switching = true;

  // restarts if switching == true
  while (switchTR) {
    switchTR= false;
    rows = table.rows;
    //loops through all the rows
    for (let i = 1; i < (rows.length - 2); i++) {

      row1 = rows[i].getElementsByTagName("TD")[0]; //row[i]: first row; 0: first cell: ArtistName
      row2 = rows[i + 1].getElementsByTagName("TD")[0]; //row[i+1]: second row; 0: first cell: ArtistName
      
      if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {// .toLowerCase: makes string lowercase
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
          switching = true; // double checks if they need to be sorted more
        }
    }
  }
}


// what random looks like out of the array
function sortTable_Random (){
  var table, rows;// have to declare I up here so it can be used when loop breaks
  table = document.getElementById("bhangra");
  rows = table.rows;
   for (let i = 1; i < (rows.length - 1); i ++){
    var random = Math.floor(Math.random() * (rows.length - 2));//-2 so that buttons at end of table not affected
    rows[i].parentNode.insertBefore(rows[random], rows[i]);//second value is refreance node
   }
}

function sortTable_byYear(){
  var table, rows, switchTR, row1, row2; // have to declare I up here so it can be used when loop breaks
  table = document.getElementById("bhangra");
  switchTR = true;
  
  // restarts if switching == true
  while (switchTR) {
    switchTR = false;
    rows = table.rows;
    //loops through all the rows
    for (let i = 1; i < (rows.length - 2); i++) {

      // gets elements based on tag <td>
      row1 = rows[i].getElementsByTagName("TD")[1]; //row[i]: first row; 1: second cell; elements within cell
      row2 = rows[i + 1].getElementsByTagName("TD")[1]; //row[i+1]: second row; 2: second cell; elements within cell
      
      if (row1.innerHTML > row2.innerHTML) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
        switchTR = true; // double checks if they need to be sorted more
    }
  }
}
}


 
//  Sources used to help me:
// This code used to help me understand how the subsetting was working
// Similar to data science when table data was scraped from website
// console.log(rows);
// console.log(rows[i]);
// console.log(row1);
//   - https://www.w3schools.com/jsref/coll_table_rows.asp (searched: find out how many rows in table js)
//   - https://www.tutorialspoint.com/how-to-access-tr-element-from-table-using-javascript#:~:text=To%20access%20a%20element,tr%3E%20elements%20within%20the%20table (searched: get elements of rows js)
//   - https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName (searched: getElementsByTagName js)

//   - https://stackoverflow.com/questions/28862402/how-to-move-reorder-an-html-table-row (searched: how to reorder table js; clicked: How to move/reorder an html table row)
//   - https://stackoverflow.com/questions/4515237/add-table-row-before-or-after-a-table-row-of-known-id (searched: add row before js)
//   - https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore (searched: insertBefore js; to get a better understanding)

//   - https://stackoverflow.com/questions/15315315/how-do-i-add-a-button-to-a-td-using-js (searched: how to add button to table js)
//   - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild (searched: appendChild.Js)