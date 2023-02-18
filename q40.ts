// NAME : SHARYAR KHAN
// ROLL NO : PIAIC203039


function make_album(artist_name1:string="", album_title1:string="",song:number=0):object
{
    let album : {
        artist_name:string,
        album_title:string,
        number_of_song:number
    }={
        artist_name:"",
        album_title:"",
        number_of_song:0
    }
    album = {
        artist_name:artist_name1,
        album_title:album_title1,
        number_of_song:song
    }
    return album
}
let musician :object = make_album('justen beiber','let me down',3)
let musician1 :object = make_album('sharyar khan','jumo utha sara chaman',3)
console.log(musician)
console.log(musician1)