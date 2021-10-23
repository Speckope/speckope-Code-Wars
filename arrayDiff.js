let a1 = [2, 3, 4];
let b1 = [1, 4];

// Best practice
let difference = a1.filter(el => !b1.includes(el));

// function sub(a, b) {
//     let res = [];
//     for (i = 0; i < b.length; i++) {
//         res = a.map(el => el - b[i]);
//         return res;
//     }
//     return res;
// }
// let tub = function(a,b) {
//     let res = []
//     for(i=0, i< a.length)
// }

console.log(difference);

function array_diff(a, b) {
    return a.filter(function(x) {
        return b.indexOf(x) == -1;
    });
}
console.log(difference);

// console.log(array_diff(a1, b1));
// console.log(difference);
