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

// sort the artists by name

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

// first a function to sort by name:
function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
 }

 // now, sort:
 console.log(artists.sort(byName));

// pick a random artist
function pickArtist() {
  const randomIndex = Math.floor(Math.random() * artists.length);
  return artists[randomIndex].name;
}

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

// Shuffle the artists randomly:

// first, a shuffling method adapted from
 // https://www.kirupa.com/html5/shuffling_array_js.htm

 Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1));
    let itemAtIndex = input[randomIndex];
    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
 return input;
};

// Suppose that this js file gets loaded by
// the browser when it parses some html file,
// and suppose that the html file has a button
// as in the table-sort assignment.
// Then you could use the above ideas to add
// an event-listener to the button
// to show a randomly-selected artist:
const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", showRandomArtist);

function showRandomArtist() {
  const artist = document.querySelector("#bhangra");
  artist.innerHTML = artists.shuffle();
}