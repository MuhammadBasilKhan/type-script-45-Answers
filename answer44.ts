function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!\n");
}
make_sandwich("Turkey", "Cheese", "Lettuce", "Tomato");
make_sandwich("Ham", "Swiss Cheese", "Mustard");
make_sandwich("Peanut Butter", "Jelly");
