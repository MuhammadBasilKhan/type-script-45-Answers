function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, ". The message on the shirt is: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "this is my shirt");
