const splitter = (string, x) => {
    return string
        .split('')
        .filter((el, i) => {
            return (i + 1) % 2 === x;
        })
        .join('');
};

function encrypt(text, n) {
    if (text === null) return null;
    // repeat n times
    for (let l = 0; l < n; l++) {
        // Take every 2nd char from string and save it as string
        let p1 = splitter(text, 0);
        // Take other chars, save it as a string
        let p2 = splitter(text, 1);
        // Concat those strings
        text = p1.concat(p2);
    }
    return text;
}

function decrypt(encryptedText, n) {
    // Get middle of an array
    if (encryptedText === null) return null;
    const half = Math.floor(encryptedText.length / 2);
    let en = encryptedText.split('');

    for (let l = 0; l < n; l++) {
        for (let i = half; i < half * 2; i++) {
            // Gradually move elements to beginning. 2nd array is always from odd!
            let move = en.shift();
            // Put el form beginning after last from first half, bc thenit will be in order
            en.splice(i, 0, move);
        }
    }
    return en.join('');
}

let text = '123456789';
let pray = encrypt(text, 5);
console.log(pray);
let toGod = decrypt(pray, 5);
console.log(toGod);
