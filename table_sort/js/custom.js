//sets up buttons and their functions and ids
const buttons = [
  {
   name: "Random Order",
   id: 'random-button',
   function: function() { 
              var table, rows;// have to declare I up here so it can be used when loop breaks
              table = document.getElementById("bhangra");
              rows = table.rows;
              for (let i = 1; i < rows.length; i ++){
                var random = Math.floor(Math.random() * (rows.length - 1));//random number between 0 and 4
                if (random == 0){
                  random += 1; // adds 1 to 0 so that nothing is added before tile
                }
                rows[random].parentNode.insertBefore(rows[i], rows[random]);//first value:row to insert; second value: refreance node; insertBefore.inserts rows before other rows
              };}
  },
  {
   name: "Sort By Name",
   id: 'byName-button',
   function: function() {
              var table, rows, switching, row1, i, row2; // have to declare I up here so it can be used when loop breaks
              table = document.getElementById("bhangra");
              switching = true;

              // restarts if switching == true
              while (switching) {
                switching = false;
                rows = table.rows;
                //loops through all the rows
                for (i = 1; i < (rows.length - 1); i++) {

                  row1 = rows[i].getElementsByTagName("TD")[0]; //row[i]: first row; 0: first cell: ArtistName
                  row2 = rows[i + 1].getElementsByTagName("TD")[0]; //row[i+1]: second row; 0: first cell: ArtistName
                  
                  if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {
                      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
                      switching = true; // double checks if they need to be sorted more
                    }
                }
              };}
 },
 {
   name: "Sort By Birth Year",
   id: 'byYear-button',
   function: function() {
    var table, rows, switching, row1, row2, i; // have to declare I up here so it can be used when loop breaks
    table = document.getElementById("bhangra");
    switching = true;
    
    // restarts if switching == true
    while (switching) {
      switching = false;
      rows = table.rows;
      //loops through all the rows
      for (i = 1; i < (rows.length - 1); i++) {
  
        // gets elements based on tag <td>
        row1 = rows[i].getElementsByTagName("TD")[1]; //row[i]: first row; 0: first cell; elements within cell
        row2 = rows[i + 1].getElementsByTagName("TD")[1]; //row[i+1]: second row; 0: first cell; elements within cell
        
        if (row1.innerHTML < row2.innerHTML) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//inserts row needing to be switched, before the second row
          switching = true; // double checks if they need to be sorted more
      }
    }
  };}
}
];

for (const element of buttons){
  const newButton = document.createElement('button');
  newButton.textContent = element.name;
  newButton.id = element.id;
  document.body.appendChild(newButton);
}

for (element of buttons){
  const randomButton = document.querySelector("#"+element.id);
  randomButton.addEventListener("click", element.function);
}

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


// how functions looks when not in the array
function sortTable_byName() {
  var table, rows, switching, row1, i, row2; // have to declare I up here so it can be used when loop breaks
  table = document.getElementById("bhangra");
  switching = true;

  // restarts if switching == true
  while (switching) {
    switching = false;
    rows = table.rows;
    //loops through all the rows
    for (i = 1; i < (rows.length - 1); i++) {

      row1 = rows[i].getElementsByTagName("TD")[0]; //row[i]: first row; 0: first cell: ArtistName
      row2 = rows[i + 1].getElementsByTagName("TD")[0]; //row[i+1]: second row; 0: first cell: ArtistName
      
      if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {
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
    var random = Math.floor(Math.random() * (rows.length - 1));
    rows[i].parentNode.insertBefore(rows[random], rows[i]);//second value is refreance node
   }
}