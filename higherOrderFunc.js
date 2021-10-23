const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach... easier way to loop through an array, doesnt return anything, but is nice and elegant

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
// this is synchronous function!
// forEach(el, index, array); Can takes 3 arguments
// companies.forEach(el => console.log(el));

// filter
// // Get ages higher than 21
// Let's us filter things out from an array
// let canDrink = [];
// for(let i = 0; i< ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }

// const canDrink = ages.filter(el => {
//     if (el >= 21) {
//         return true;
//     }
// });

// const canDrink = ages.filter(el => el >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(el => el.category === 'Retail');
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(el => el.start < 1990);
// console.log(eightiesCompanies);

// const longer = companies.filter(el => el.end - el.start > 10);
// console.log(longer);

// //map
// Create array of company names

const companyNames = companies.map(el => el.name);
console.log(companyNames);

// sort
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => a - b);

// reduce

const totalYears = companies.reduce(
    (total, el) => total + (el.end - el.start),
    0
);
console.log(totalYears);
