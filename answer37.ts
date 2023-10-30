function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size}. The message on the shirt is: "${message}".`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "this is my shirt");
