// Code your solutions in this file

function writeCards(names, eventName) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return messages;
}

function countDown() {
    let positiveInt = 10;
    while (positiveInt >= 0) {
        console.log(positiveInt--);
    }

}