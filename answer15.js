var alien_color = 'green';
// version that passes the if test
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
function nam() {
    var alien_color = 'red';
    // version that fails the if test (no output)
    if (alien_color === 'green') {
        console.log("The player just earned 5 points.");
    }
}
nam();
