let dnaPieces = ["A", "C", "G", "T"]; 
let myDNA = [];
for (let i = 0; i < 24; i++)
{
  let j = Math.floor(Math.random() * 4);
  let k  = Math.floor(Math.random() * 4);
  let l = Math.floor(Math.random() * 4);
  let string = dnaPieces[j] + dnaPieces[k] + dnaPieces[l];
  myDNA.unshift(string);
}
console.log(myDNA);