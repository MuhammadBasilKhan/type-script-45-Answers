function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}
let magician_names: string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
let magician_names_copy: string[] = magician_names.slice();
let great_magicians = make_great(magician_names_copy);
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nModified Magicians:");
show_magicians(great_magicians);

