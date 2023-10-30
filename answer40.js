function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Title1");
var album2 = make_album("Artist2", "Title2", 12);
var album3 = make_album("Artist3", "Title3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
