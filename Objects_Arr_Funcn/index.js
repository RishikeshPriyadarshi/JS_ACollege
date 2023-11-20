//OBJECTS
let animal = {
    

    //propertries -- is seperated by comma
    name : "Cow", 
    leg  :4
}; //here curly braces is called object literals

console.log(animal);


console.log(animal.name); //Dot Notation
console.log(animal['name']); //Bracket Notation


console.log(animal.leg);//Dot Notation
console.log(animal["leg"]);//Bracket Notation


//Bracket Notation hum tb use krte hai jb element ko kisi
//variable ke undar store kra dete hai
let legsProperty="legs";
console.log(animal[legsProperty]);


             //ARRAYS

let selectBooks = ["The good book","The check book","invisible book"]
console.log(selectBooks);

//array me dot notation kaam nahi krtr but brace wle notation  kaam krtr hai

//hm hm check krenge kis index pe kon sa book hai
console.log(selectBooks[0]);
console.log(selectBooks[1]);
console.log(selectBooks[2]);




            //FUNCTIONS

//Funtion likhne ke liye hm keyword function ka naam use krte hai
//phir uss function ka naaam likhte hai
function  namaste(name,lastName){  //Declartaion of funcn

    console.log("namaste " +  name + lastName);
    
}     

//calling the function
namaste("gaurav", "mishra");



function addition(a,b){

    return a+b;
}

console.log(addition(5,4));
