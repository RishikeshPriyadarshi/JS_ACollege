/*
 
 Objecct Banane ka Dusra Tarika (i.e.2nd Method)
            |
            |
            |
Basically hm "factory-funcn & constructor-funcn", bana lete hai 
or wo hme madad krenge Nayi Nayi Objects ko banane me

*/

/*  

            //FACTORY FUNCTION

//FACTORY Function
function createCourse(){

    //Declaring Object
    const course ={
        //variable ko hm object ke undar use krte hai to hm use "Property" kehte hai
        //Prpoperties
        lectures: 10,
        section: 3,
        title: 'javascript',
    
        //"Objects ke andar hm alg alg objects ko bhi sore kra skte hai
        //Hm ke object banyenge (i.e.notes:) or uske andr nesting(i.e.{}) krenge
        notes:{
            //kisi bhi chhez ke andar hm dusri chhez kre hai use nesting kehte hai
            //means hm ek objec kke andr ek other objec bana rahe i.e. nesting
            
            //lets say hume koi propery declare krni hai
            introduction:"Welcome to JS course"
        },
    
        //Funcns ko hm agr Objects ke andr use krte ha to usse "Method" kehte hai
        enroll(){
    
            console.log("U r Sucessfully Enrolled ");
        }
    }
    //funcn createCourse hme kuch return krke dega
    //returning object
    return course

}



 // Bacially jiis bhi var ke andr hm iss funcn i.e. funcn createCourse()
  //use krenge wo uske andar iss object (i.e. couse) ko paas kr dega



const course = createCourse();
course.enroll();
*/


/* 

//FACTORY Function
function createCourse(){

    
    return{
        //variable ko hm object ke undar use krte hai to hm use "Property" kehte hai
        //Prpoperties
        lectures: 10,
        section: 3,
        title: 'javascript',
    
        //"Objects ke andar hm alg alg objects ko bhi sore kra skte hai
        //Hm ke object banyenge (i.e.notes:) or uske andr nesting(i.e.{}) krenge
        notes:{
            //kisi bhi chhez ke andar hm dusri chhez kre hai use nesting kehte hai
            //means hm ek objec kke andr ek other objec bana rahe i.e. nesting
            
            //lets say hume koi propery declare krni hai
            introduction:"Welcome to JS course"
        },
    
        //Funcns ko hm agr Objects ke andr use krte ha to usse "Method" kehte hai
        enroll(){
    
            console.log("U r Sucessfully Enrolled ");
        }
    }
    //funcn createCourse hme kuch return krke dega
    //returning object
    return course

}



 // Bacially jiis bhi var ke andr hm iss funcn i.e. funcn createCourse()
  //use krenge wo uske andar iss object (i.e. couse) ko paas kr dega



const course = createCourse();
course.enroll();

*/

/*

//Factory Function
function createCourse(title){ //Here we hv used camelCase
thedarshi91@gmail.com
    return{
        title: title,

        //function or method
        enroll(){
            console.log("Sucessfully Enrolled ")

        }
    }
}

const course = createCourse('JavaScript');


course.enroll();
console.log(course)

*/



              //CONSTRUCTOR-FUNCTION


 
//Factory Function
function createCourse(title){

    return{
        title:title,

        enroll(){
            console.log("U r sucessfully enrolled")
        }

    }
}   


const newCourse = createCourse('javascript');



//Constructor Function
function Course(title){ //we hv used here Pascalcase

    //this keyword is pointing to funcn Course
    this.title=title,
     
    //ye Hmara Constructor Funcn Ban Chuka hai
    this.enroll=function(){

        console.log("U R Sucessfully Enrolled ")
    }
}  

/*

//let see here how we use Constructor funcn
const  course = new Course('Javascript')

//delete keyword is used to delete 
delete course.title;

//we can make new function here also
course.checkEnrollment = function(){
    console.log('30 users r enrolled ');
}
course.enroll();

*/

/*
  new Keyword-> basiaclly ye krega ki pehle to ye ek empty object banyega
                i.e. {} ---empty object

          or baad me  jo ye "this "  ka refernce hai hai jo ye 
          object haii wo point krega or 
          last me jo ye new keyword hai wo ye this ko return kr 
          kw lega course naam ke const var ke andar or hamara object 
          ban jayega
              
*/  

/*
         //PRIMITIVE DATA TYPE          

//all the "primitive data-types comes under object only "

//there is method called constructor method which is predefinned in
//all the objects


// making new object course
const course = new Course('javascript');

console.log(course.constructor)
console.log(newCourse.constructor)

*/ 

/*

//string inside inverted comma is called striung literal
// 'jwefn' is string literal
//and curse will become object of string

const course = 'jwefn'

//since it is pre-defined data-type(PRIMITIVE) it will be diffrent from 
//the referenced data type


//means "Objects of pre-defined data type r immutable"

//like we said objects r dynamic in nature meaning
//it cn be changed at runtime

//But PRIMITIVE-DATA-TYPE sare ke sare hai to objects hi but
//but kyoki wo pre-defined  hai, uske andr jo properties hai
//jo ki pehle se aa rahi hai hum unhi ko access kr sakte hai
//hum koi property koi khujd se define nahi kr sate
//isilye wo immutable hai

*/ 

     //REFERENCED DATA TYPE -- Mutable
     

/*
   
-> Refrenced data type is allso an object
 
>jb hm console me --- Course.constructor likhenge
 then it will give function

 NOTE:Means hm jb vi koi function banate hai uska constructor
     hota hai function


*/

//hm ek variable banyenge jo ki constructor function hoga

/*
 Hm pehle argument me pehle title denge phir function Course ke 
 andar ka pura code hume dena hoga

 or "code ko hm string-literal(i.e. '') me nahi daal skte ",
 isilye hm "template-literal(i.e. backstick(``) esc button ke niche) 
  ka use krenge  i.e ``" 

  NOTE:`` (Bacstick) ke andar hm multiple line kle code ko le sakte


*/

//this constructor funcn below is done or made internally by java script

const Course_1 = new Function('title',`this.title=title,

this.enroll=function(){

   console.log("U R Sucessfully Enrolled ")
}
`)
/*
const course_2 = new Course_1('javascript');
course_2.enroll();

//so we hv seen here "Function isa also type of object "
*/


//Now we will see Differenc e b/w REFRNCEED & PRIMITIVE Data-Type
     
     //PRIMITIVE DATA-TYPE
    
  //making new variable
  let number =10;
  let number_2= number;//PASS-BY-VALUE

  number = 15;

  console.log(number);
  console.log(number_2);


         //REFERENCED DATA-TYPE


      /*
       >Refrence Data-Type me pass-by-value nahi hota
        "PASS BY REFRENCE hota hai"
      */   


   //Hum object,funcn or array se means in me se kisi ka use kr dekh skte
   
   //hum pehle object banake or we can say object ka use krke dekhenge
   let obj = {number:10};//number is key , 10 is property
   let obj2=obj;//PASS-BY-REFERENCE

   obj.number = 15;//since object ki memmory loction same dono
                  //variable ke andar isilye value of both variable
                  //will change with same value becuse of same 
                  //memory location


   console.log(obj);
   console.log(obj2);
     

    //EXAMPLE OF "PASS BY VALUE"
  
   //niche hum dekhenge Pass By Value kaise kr sakte hai
   //hum kisi object ke undar
 
   const subject={
    title:'JS',
    enroll(){
        console.log("U R SUCESSFULLY ENROLLED")
    }
   }
   //clone ke lie hm naya variable banayenge
   //Uske baad me hm copy krenge R.HS me, uske liye
   //Object literal ka use krenge
   //pehle hum dot dot dot likhenge phir jo obj hai jisko 
   //copy krna hia uska naaam
   const course_1 = { ...subject}//same to same val clone ho jayegi console mein

   course_1.title="c++";

   //SO kuch iss tarah se "Spread-Operator " ka use krke
    // hum value copy krte hai jo humne upr dekha

    
    //dusra tarika "dot-assign opertor" ka use krke
    //jo ki hum niche dekhenge
    //ye operteor pre-ddefined hota hai JS ke andar

    const text_1 = Object.assign({},subject)
    text_1.title='java';


    
    //3ra Tarika using for loop
 //for-in loop
for(let key in subject)
console.log(key,subject[key]);

//for-of loop--ye "array ke liye bana hai"
for(let value of Object.keys(subject)){
    console.log(key,subject[key])
}

   