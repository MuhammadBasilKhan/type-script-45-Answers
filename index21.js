let guest = ['bob', 'Alice', 'charles'];
const guest1 = 'bob';
console.log(`${guest1}cant make it to dinner`);
const newguest = 'David';
const indexofguest = guest.indexOf(guest1);
if (indexofguest !== -1) {
    guest[indexofguest] = newguest;
}
console.log('Good news! we found a bigger dinner table');
guest.unshift("Eve");
const middleIndex = Math.floor(guest.length / 2);
guest.push('Grace');
for (const guests of guest) {
    console.log(`Dear ${guests} you are invited to the dinner`);
}
export {};
