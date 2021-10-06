function randomDate(start, end) {
    var date = new Date(+start + Math.random() * (end - start));
    return date;
  }

let birthdayMapping = new Map();
let together = new Array();

for(let i =1; i<=50; i++) {
    birthdayMapping.set(i, randomDate(new Date('1992-01-01'), new Date('1993-12-31')));
}

//console.log(birthdayMapping);

for(let i =1; i<=50; i++) {
    for(let j =1; j<=50; j++) {
        if(i!=j) {
            let date1 = birthdayMapping.get(i);
            let date2 = birthdayMapping.get(j);
            if(date1.getMonth() == date2.getMonth()) {
                together.push([i,j]);
            }
        }
    }
}

console.log("together: ",together)