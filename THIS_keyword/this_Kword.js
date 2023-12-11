//sabse pehle hm variable declare krenge, then object literal
//i.e.{} khol denge aur uske andr object ke properties likhenege
   //countr is declaerd varaible also is an object

   /*
let counter = {
    count:0,

    increment: function() {

        //agr hame kisi prop ko access  krna ho to object ka naam likhke
        //dot laga ke prop likh ke usse access krte the drkht hai kya hota hai
        counter.count++;
    }
}

//ab increment function ko call kr lenge
counter.increment();

//jitni baar funcn call hoga utni baar increment hogi
counter.increment();
counter.increment()
counter.increment();
counter.increment();

console.log(counter.count);

*/

//instaed of writing like above hm factory funcn ki trh likhna chhate hai
       
             //Factory-Function
/*
  //object 1
let counter =  createCounter(); 
   
//maan lo ab hme ek nahi ek se jayda object banane hai then
  //object2
let counter1 = createCounter();
//object 3
let counter2 = createCounter(); //ab it will return wrong value
                             //wtht using this keyword

    function createCounter() {

        return{

            count:0,
            increment: function(){
                counter.count++;
            }
        }
    }

counter.increment();
counter.increment();
counter.increment();



console.log(counter);

console.log(counter1);//they will return wrong val if we do
console.log(counter2);//it without "this " keyword

*/

/*
Ek objects ke bahut saare copies ho sake hai jo bhi hmara code hai uske andr
lekin iss function ke andr jb count ko increase kr rahe hai then 
humko waha pe particular object ka naam dena pad raha hai,

to aisa ho sakta hai kya ki hm un copies ke andr bhi funcn ko call kre
or jaise hm unn funcn ko call ke=renge wo automatically hi counter 
badha de


for that we use "this keyword"
 */

   /*

       //this Kword
    
    //obj0   
    let counter = createCounter()

   //obj1
   let counter1 = createCounter();
   
   //obj2
   let counter2 = createCounter();


   function createCounter () {

      return{  //Factory function

        count: 0,
        increment: function(){

            this.count++;//it will increase the counter of any obj
                          //we want to call
        }
      }
   }

counter.increment();
counter.increment();


counter1.increment();
counter1.increment();

counter2.increment();

console.log(counter)
console.log(counter1);
console.log(counter2)

*/

 /*

//ab jo hmne action perform krra hai object ke andr wo
//bahar perform krke dejte hai using "this" keyword


   //'this kword ko hm Global-Context me bhi use kr skte hai'

var count=0;
function incrementCounter(counter){

    //count++;
    this.count++;
    

    console.log(this);
}
incrementCounter();  //funcn-call
incrementCounter();
incrementCounter()

console.log(count);


//"global-context me hamara this hota hai window"
//console.log(this) //o/p-Window

//or node js ke context me --> //o/p-Global

*/
 


 
    //'this' Kword using "COnstructor Function"

function Car(name){

    this.name = name;

    this.start = function(){
        
        console.log(this.name + 'started');

        //
        console.log(this);
    }
}

//const-funcn me hm "new" Kword ka us krte hai

let swift = new Car('Swift');

console.log(swift);

swift.start();