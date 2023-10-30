function myfunc() {
    var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
        var numbers = numbers1_1[_i];
        var ordinal = void 0;
        if (numbers === 1) {
            ordinal = '!st';
        }
        else if (numbers === 2) {
            ordinal = "2nd";
        }
        else if (numbers === 3) {
            ordinal = "3nd";
        }
        else {
            ordinal = numbers.toString() + "th";
        }
        console.log(ordinal);
    }
}
myfunc();
