// String.prototype.splice = function(idx, rem, str) {
//     return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
// };

// let str = "Please locate where 'locate' occurs!";
// let pos = str.indexOf('locate');
// console.log(pos);
// let mod = str.slice(0, pos) + ' ' + str.slice(pos + 3);
// console.log(mod);

function songDecoder(song) {
    let dec = song;
    let ind;
    while (dec.indexOf('WUB') >= 0) {
        ind = dec.indexOf('WUB');
        dec = dec.slice(0, ind) + ' ' + dec.slice(ind + 3);
    }
    dec = dec.replace(/\s+/g, ' ');
    dec = dec.trim();
    return dec;
}

// Best solution
function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim();
}
