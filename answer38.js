function describe(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe("karachi", "pakistan");
describe("New york");
describe("london", "united kingdom");
