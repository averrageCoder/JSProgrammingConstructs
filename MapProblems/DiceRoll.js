let diceRolls = new Map();

while(true) {
    let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    if(diceRolls.has(diceNumber)) {
        let rolls = diceRolls.get(diceNumber);
        rolls++;
        diceRolls.set(diceNumber,rolls);
        if(rolls==10) break;
    }
    else {
        diceRolls.set(diceNumber,1)
    }
}

console.log("Dice Rolls: ",diceRolls)
const mapSort1 = new Map([...diceRolls.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);

console.log("MAXIMUM ROLLS: ",Array.from(mapSort1.keys()).at(0), "=> ",mapSort1.get(Array.from(mapSort1.keys()).at(0)));
console.log("MINIMUM ROLLS: ",Array.from(mapSort1.keys()).at(-1), "=> ",mapSort1.get(Array.from(mapSort1.keys()).at(-1)));