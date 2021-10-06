'use strict';

let n = Math.floor(Math.random() * 10);
for(let i=0; Math.pow(2,n) > Math.pow(2,i); i++){
    console.log("1. 2^",i," = ",Math.pow(2,i));
}