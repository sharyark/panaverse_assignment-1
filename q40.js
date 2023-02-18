// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039
function make_album(artist_name1, album_title1, song) {
    var album = {
        artist_name: "",
        album_title: "",
        number_of_song: 0
    };
    album = {
        artist_name: artist_name1,
        album_title: album_title1,
        number_of_song: song
    };
    return album;
}
var musician = make_album('justen beiber', 'let me down', 3);
var musician1 = make_album('sharyar khan', 'jumo utha sara chaman', 3);
console.log(musician);
console.log(musician1);
