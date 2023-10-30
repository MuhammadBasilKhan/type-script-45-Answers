var usernames = ['john', 'jane', 'admin', 'alice', 'bob'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
function devlop() {
    var username = ['jhon', 'janes', 'basil', 'alice', 'kaggle'];
    for (var i = 0; i < username.length; i++) {
        if (username[i] === 'basil') {
            console.log("Hello basil welcome to my program");
        }
        else {
            console.log("Hello ${username[i]},thanks for looking our program");
        }
    }
}
devlop();
