function car_info(manufacturer: string, model: string, ...options: [string, any][]): Record<string, any> {
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        car[option[0]] = option[1];
    });

    return car;
}

let car = car_info("Toyota", "Camry", ["color", "silver"], ["year", 2022]);

console.log(car);
