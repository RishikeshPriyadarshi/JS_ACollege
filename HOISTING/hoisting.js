function sayHello (){

    console.log("Hello");

}

var i=10;
 
sayHello()   //Funcn call

console.log(i);

//output--Hello ,10

//__________________________________________________________

sayHi(); //Funcn-Call
console.log(s);

function sayHi(){

    console.log('HI');
}

var s =10; 

//Output-Hi, undefined


/**
 Jb bhi hamara memory allocation phase chalta hai , then 
 in case of function uss ka code ayega
 but in case of variable undefined ayega uska value nahi ayega

 so ye dono Hoisting ka part hai

 so yaha jo do values hai funcion ke and variable ke wo Hoist
 ho chuki hai i.e sayHello and i r Hoisted
 kyoki unki memeory allocate ho chuki hai

 
 */

/*
 //Diffrenece between "let" "const" and "var"
  
 >1st main diffrence is that "let nd const keyword was introduced
 with ES-6" i.e. 2017 k baad ayi

>"Before ES-6 there was only one keyword that was var"

>but the "main thing with let and const is taht they r Hoisted
bt whwn we go to access the value it gives the error"

*/

/*

sayOla();
console.log(f);
function sayOla(){
    console.log("Ola");
}

let f=8; */
//it will give error --hoisting.js:58 
//Uncaught ReferenceError: Cannot access 'f' before initialization

//Because jo hmara varible hai jo ki let se declare kr rahe hai wo
//ek "TEMPORAL-DEAD-ZONE" ke andr para hai

/*
 TEMPORAL-DEAD-ZONE---->Means jo hamara variable hota hai 
                       jo ki hm let,const se declare krte hai
                       unko jb tk hm intalize nahi krte means jb tk
                       hm usme koi value nahi daalte tb tk wo unaccessible rahega


 */


//
/*
sayOp();
console.log(h);

var sayOp = function (){
    console.log("Op");
}
var h =10;
*/
//it will hive error
//Uncaught TypeError: sayOp is not a function

//because we hv used var Kword , because jb hm var Kword ko ddeclare
//krte hai then uske andr ek undefined value hai place-holder
//or jb iss undefined-place holder ko call krenge then , yahi 
//output ayega it is not a function

/*

var sayOp = function (){
    console.log("Op");
}
var h =10;
console.log(h);

//Though it will give no error nd will give correct value
 */


//Creating the same error as abob=ve with difrrent Syntax
            /*
            console.log(h)
            var sayOp = undefined;

            sayOp();
            var h =10;
            */



//_____________________________________________________________

//SCOPE kaise kaam krta hai let aur const ke andr

//Ex:

let foo = 'bar';

if (true){

    let foo = 'baz';
    console.log(foo);
}
console.log(foo);

//The above example called "VARIABLE-SHADOWING"

/*
  VARIABLE-SHADOWING--> Jb hm ek variable banate hai aur uske saath
                       me hi ek aur doosra variable banate hai lekin
                       doosre scope me lekin same naam ka with
                        diffrent value

             means varible ka naam same hai but scope change hogayi 
             means hmne ek varible ko shadow kr diya other variable se

*/
                 //BLOCK-SCOPE
let soo='jar';
var jar = 'soo';

if(true){
    let soo='dar'
    var jar = 'soobar';

    console.log(soo);
    console.log(jar);
}

console.log(soo);
console.log(jar);

//dono jgh output  me soobar ayega because usne block komignore 
//krdiya
/*
Because ye jo var keyword hai wo block-Scope me chalta hi nahi hai
means wo scope ko dekhega ki nahi aur aise hi aage hi badhte jayega

 */

                  //FUNCTION-SCOPE

//Ab same example me block-scope ko hatake functiuon-scope daal dete hai
let koo='bar';
var bar = 'koo';

function sayOye(){

    let koo = 'baz';
    var bar = 'koobar'

    console.log(koo)
    console.log(bar);

}
sayOye();
console.log(koo);
console.log(bar);


         //ILLEGAL-SHADOWING

/*
   ILLEGAL-SHADOWING
     |
   Agr hm ek varible ko let say declare krte hai,
   then agr hm varible ko phir se block ke andr var keyword se 
   redeclare krenge to nahi chalega,t will give error

   ex:

   let foo = 'bar';
   let bar = 'foo'

   if(true){
    var foo = 'baz'; //redeclaration of variable with varKeyword
                     //will not work inside block-keyword
    var bar = 'foobar'

    console.log(foo);
    console.log(bar);
   }

   console.log(foo);
   console.log(bar)
*/         


let coo;
var kar;
//const bax; //it will give error because const wale variable 
            //ke saath uski value declare honi jaruri hoti hai
const bax=10;            

