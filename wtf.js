
let total=0; count=1;

while (count<=10){
    total+=count;
    count+=1;
}

console.log(total);


console.log((2+2) && (234*234));



let one=1 , two = 2 , panda = 9;

console.log(one+two+panda);



const folk = "mustang";

var year = 1998; 

console.log(folk +" "+ year);

let auto = {line:folk , year:year};

console.log(auto);


let number = 0;

while ( number<=100) {
    console.log(number);
    number = number + 3
};


let result=1 ; count=0;

while (count<10) {
    result = result*2;
    count += 1; }

console.log(result)





let nNumber = Number (prompt ("dime un numero del 10 al 100"))

if (nNumber<10){console.log("ese numero es muy chico")}

else if (nNumber>100){console.log("ese numero es muy grande")}

else {console.log("segun el horoscopo chino te va morder un perro")};





let theNumber = Number(prompt("dame el radio y te doy el area"));

if (!Number.isNaN(theNumber)) {
console.log ("el area es"+ " "+((theNumber*theNumber)*3.1416));}

else if (theNumber>1000) { console.log("numba 2 big")}

else {console.log("were ma numba bitch?")}


let yourNamo = prompt("escribe tu nombre");

    console.log(yourNamo);




let yourName 

do {yourName =prompt("escribe tu nombre");}

while (!yourName ) {
    console.log(yourName);
}



let merca = "#" ;  count = 0;

while (count<7){
    console.log(merca);
    count = count + 1;
    merca = merca + "#";
}


let marco = (" ####"); cuenta = 0;
while (cuenta<4){
    console.log(marco);
    marco = "####";
    console.log (marco);
    marco = " ####";
    cuenta = cuenta + 1;
}


let exceptor = 1 ;

while (exceptor<100){

    if (exceptor%3===0 && exceptor%5===0) {
        console.log("fizzbuzz");
    }


    else if (exceptor%3===0) {
        console.log("fizz");
    }

    else if (exceptor%5===0) {
        console.log("buzz");
    }

    else { console.log(exceptor)};

    exceptor = exceptor +1;

}

for (let current =18; ; current+=1) {
console.log(current);

    if(current%7==0){
        break
    }
}