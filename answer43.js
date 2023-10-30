function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("The Great ".concat(magician));
    }
    return great_magicians;
}
var magician_names = ["Harry Houdini", "David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
var magician_names_copy = magician_names.slice();
var great_magicians = make_great(magician_names_copy);
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nModified Magicians:");
show_magicians(great_magicians);
