function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

let album1 = make_album("Artist1", "Title1");
let album2 = make_album("Artist2", "Title2", 12);
let album3 = make_album("Artist3", "Title3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
