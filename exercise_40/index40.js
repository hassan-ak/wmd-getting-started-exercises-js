/*
    Album: 
    Write a function called make_album() that builds a Object describing a music album. 
    The function should take in an artist name and an album title, 
    and it should return a Object containing these two pieces of
    information. 
    Use the function to make three dictionaries representing different albums. 
    Print each return value to show that Objects are storing the album information correctly.
    Add an optional parameter to make_album() that allows you to store the
    number of tracks on an album. If the calling line includes a value for the number
    of tracks, add that value to the album’s Object. Make at least one new
    function call that includes the number of tracks on an album.
*/

function make_album(artistName, albumTitle, numTracks) {
  if (numTracks) {
    let album = { Name: artistName, Title: albumTitle, Tracks: numTracks };
    return album;
  } else {
    let album = { Name: artistName, Title: albumTitle };
    return album;
  }
}

var album1 = make_album('Nusrat Fateh Ali Khan', 'Shahbaaz');
var album2 = make_album('Atif Aslam', 'Meri Kahani');
var album3 = make_album('Junaid Jamshed', 'Yad-e-Haram');

console.log(album1);
console.log(album2);
console.log(album3);

var album4 = make_album('Faakhir', 'Mantra', 18);
console.log(album4);
