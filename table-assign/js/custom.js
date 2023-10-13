/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
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
 ]

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
 