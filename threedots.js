const ages = [12, 15, 16, 18, 20];
const ages2 = [11, 13, 17];
const allAges = ages.concat(ages2);

const allAges2 = [...ages, ...ages2, 6];

console.log(allAges2);


const business = 550;
const job = 270;
const sochib = 800;
const takapoisa = [1200, 540, 2000];
const max = Math.max(...takapoisa);
console.log(max);