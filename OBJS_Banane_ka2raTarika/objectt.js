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


 /*
//Factory Function
function createCourse(title){

    return{
        title:title,

        enroll(){
            console.log("U r sucessfully enrolled")
        }

    }
}     

*/


//Constructor Function
function Course(title){ //we hv used here Pascalcase

    //this keyword is pointing to funcn Course
    this.title=title,
     
    //ye Hmara Constructor Funcn Ban Chuka hai
    this.enroll=function(){

        console.log("U R Sucessfully Enrolled ")
    }
}  

//let see here how we use Constructor funcn
const  course = new Course('Javascript')
course.enroll();

/*
  new Keyword-> basiaclly ye krega ki pehle to ye ek empty object banyega
                i.e. {} ---empty object

          or baad me  jo ye "this "  ka refernce hai hai jo ye 
          object haii wo point krega or 
          last me jo ye new keyword hai wo ye this ko return kr 
          kw lega course naam ke const var ke andar or hamara object 
          ban jayega
              
*/