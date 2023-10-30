function lis() {
    let guest = ["Basil", "fans", "arian", "mangos", "changaiz"];
    console.log("I can invite only two people for dinner");
    while (guest.length > 2) {
        const removedGuest = guest.pop();
        if (removedGuest) {
            console.log(`sorry, ${removedGuest}, I can't invite you ti dinner `);
        }
    }
    guest.forEach((guest) => {
        console.log(`Dear ${guest},you're still invited to the dinner`);
    });
    guest.pop();
    guest.pop();
    console.log("final list n of guests ", guest);
}
lis();
export {};
