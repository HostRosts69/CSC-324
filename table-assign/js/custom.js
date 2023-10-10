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

 // complete with code to select and populate the table
 // grab the currently-empty div:
 const listDiv = document.querySelector("#bhangra");

 // make the inner html:
 let contents = "<tr> <th>Name</th> <th>Date of Birth</th> <th>Link</th> </tr>";
 artists.forEach(function(artist) {
   contents += `<tr>`;
   contents += `<td>${artist.name}</td>`;
   contents += `<td>${artist.birthYear}</td>`;
   contents += `<td><a href= "${artist.link}">${artist.link}<a></td>`;
   contents += "</tr>";
 })
 contents = contents + "</tr>";
 
 //insert unordered list HTML into div:
 listDiv.innerHTML = contents;
 