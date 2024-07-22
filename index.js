var cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph)
{cats.push(Ralph)};
function destructivelyPrependCat(Ralph){
    cats.unshift(Ralph);
}
function destructivelyRemoveLastCat(){
    cats.splice(2);
}
function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
}
 function appendCat(){
const apnd=[...cats,"Broom"];
return apnd;
 }
 {[...cats,"Broom"];
 }
 function prependCat(Arnold){
    const prep=["Arnold",...cats];
    return prep;
 }
 function removeLastCat(){
   const newcats=cats.slice(0,cats.length -1)
   return newcats;
 }
 function removeFirstCat() {
    const [, ...remainingCats] = cats;
    return remainingCats;
  }