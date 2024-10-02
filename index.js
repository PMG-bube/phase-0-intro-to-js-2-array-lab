const cats= ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push('Ralph')
};
function destructivelyPrependCat(name){
return cats.unshift("Bob")
};
function destructivelyRemoveLastCat(){
     cats.splice(-1)
    return cats;
};
function destructivelyRemoveFirstCat(){
    return cats.shift()
};
function appendCat(name){
    const append =[...cats,"Broom"]
    return append;
};
function prependCat(name){
    const prepend=["Arnold",...cats]
    return prepend;
};
function removeLastCat(){
    const newCat=cats.slice(0,cats.length -1)
    return newCat;
};
function removeFirstCat(){
    const remove= cats.slice(1)
    return remove;
};


