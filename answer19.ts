function game(){
    let guests: string[]=["basil","shazil","hamza"];
    guests.forEach((guest)=>{
        console.log(`Dear ${guest}, you are invited to diner!`);
    });let placeTovisit:string[]=["paris","Russia","canada","saudia","America"];
    console.log(`Number of people invited to diner :${guests.sort()}`);
    console.log("original order:",placeTovisit);
    console.log("Alphabetical order:",[...placeTovisit].sort());
    console.log("Still in original order:",placeTovisit);
    console.log("Reverse Alphabetically order",[...placeTovisit].sort().reverse());
    console.log("Still in original order:",placeTovisit);
    placeTovisit.reverse();
    console.log("Reversed order",placeTovisit);
    placeTovisit.reverse();
    console.log("original order again",placeTovisit);
    placeTovisit.sort();
    console.log("sort in Alphabetically order",placeTovisit);
    placeTovisit.sort((a,b)=> b.localeCompare(a));
    console.log("sorted in reverse Alphabetically order",placeTovisit);

}
game();