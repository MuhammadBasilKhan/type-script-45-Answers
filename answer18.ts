function dev(){
let placesToVisit: string[]=["Saudia","Russia","America","canada","swizerland"];
console.log( "original order",placesToVisit);
console.log("Alphabetical order",[...placesToVisit].sort());
console.log("Still in Original order:",placesToVisit);
console.log("Reverse Alphabetical order",[...placesToVisit].sort());
console.log("Still in original order:",placesToVisit);
placesToVisit.reverse();
console.log("Reverse order:",placesToVisit);
placesToVisit.reverse();
console.log("Sorted order Agin:",placesToVisit);
placesToVisit.sort();
console.log("Sorted in ALphabetical order:",placesToVisit);
placesToVisit.sort((a,b)=>b.localeCompare(a));
console.log("sorted in reverse order Alphabetically order",placesToVisit);
}
dev();