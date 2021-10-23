let a1 = [2, 3, 4];
let b1 = [1, 4];

// let difference = a1.filter(el => !b1.includes(el));

// function sub(a, b) {
//     let res = [];
//     for (i = 0; i < b.length; i++) {
//         res = a.map(el => el - b[i]);
//         return res;
//     }
//     return res;
// }

// Nice!!!
function sub2(a, b) {
    let res = a.map(el => {
        b.forEach(e => {
            return (el = el - e);
        });
        return el;
    });
    return res;
}

console.log(sub2(a1, b1));
