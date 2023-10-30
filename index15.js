// Initial guest list
let guestList = ["Alice", "Bob", "Charlie"];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = "Bob";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new guest
const newGuest = "David";
const indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guestList[indexOfGuestWhoCantMakeIt] = newGuest;
}
// Send out new invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, You are invited to the dinner!`);
}
export {};
