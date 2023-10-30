function arr() {
    var current_user = ['jhon', 'jane', 'basil', 'bob', 'eve'];
    var newuser = ['mary', 'shazil', 'hamza', 'jhon', 'kate'];
    for (var _i = 0, newuser_1 = newuser; _i < newuser_1.length; _i++) {
        var newusers = newuser_1[_i];
        var isDuplicate = false;
        for (var _a = 0, current_user_1 = current_user; _a < current_user_1.length; _a++) {
            var current_users = current_user_1[_a];
            if (newusers.toLowerCase() === current_users.toLowerCase()) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) {
            console.log("The  username ".concat(newuser, " is not available please enter a new  username"));
        }
        else {
            console.log("The username ".concat(newuser, " is available"));
        }
    }
}
arr();
