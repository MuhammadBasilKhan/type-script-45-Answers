function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        car[option[0]] = option[1];
    });
    return car;
}
var car = car_info("Toyota", "Camry", ["color", "silver"], ["year", 2022]);
console.log(car);
