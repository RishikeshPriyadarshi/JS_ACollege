                    //GLOBAL-SCOPE

//the scope is by default-global
var name = 'Amal'//Global-Scope

function sayName(){

    var marks = 10;//Local-Scope
    
    console.log(name);
}

sayName();
  //console.log(marks)  //error
//console.log(marks); //--> it will give error because mark is not global ,n 
                     //we r calling outside the function globally,as it exist locally 
                     //inside the funcn , it will gve Error
                     

 /* 
   hm hum jaante hai ek Execution-Context hota jisme Variable ki memory allocate hoti hai
    
   i.e. sabse pehe ek global-execution-context bana, or ussme hamara name -"Amal"
        declare ho gaya

    
    //fir ek naya execution context banega , function --- sayName() ke andr
      aur uss function ke andr jo hmne variable declare kiya, usske andr hi 
      uski memeory allocate hui, aur use andr hi uski execution hua,
        aur jaise hi call function se bahr aayi, uska variable destroy ho gaya
        
        or since wo destroy  chuka hai, aur hm agr usko access krnr ki kosis krenge
        tou error ayegi

 */                    



                           //LOCAL-SCOPE

//Global Scope
var x= 0;
 
    var x=1;
    console.log(x);

    function childOfFirst (){

        //console.log(x);

        //Local Scope 2
        var x=2;
        console.log(x);

    } 

//Global scope
function second(){

    //Local Scope 3
    console.log(x);
}
second()  //funcn call 



                           //BLOCK-SCOPE

 /* 
 BLOCK--- hb hm funcn banate hai to parenthesis i.e. () then curly-braces i.e {} or uske andr code
          usi curly braces ko hm Block kehte hai
        

          Note:"Curly braces ke andr jo bhi code rehega wo Block-Scope kehlayega"
             Ex:
               {
                var x =1;
                cnsole.log(x)
               }
 */     
     /*
 
     var x2=9;
    {

        var x2 =5;

        console.log(x);
    }
    console.log(x);  //it will give output 1 because we r using var keyword, which is not working
    
     */

    //Var ke jagah hm let keyword ka use krenge to output sahi ayeaga
    let x2=9;
    {
        let x2=5;
        console.log(x2);
    }
    console.log(x2)

    /*
      NOTE: Ye jo Curly-Braces hai hm kaha kaha laga sakte hai ?
           -->hm if block likhte hia,switch block likhte hai, 
               for-block likhte hai usme

                Note: jb bhi for block/for loop use krte ho to
                     "let-keyword ka use krna",
                     agr var-kword use lkr liya to error aane ke bahut chance hai

      //isilye JS-Programmer reccommend krte hi " let use krne ko"       instaed of var          
    */
     /*
      //Var keyword  ko na use kro tyohb accha hai
      e value badal di 1 se
     means usne windows.x tha usko badal diya  1 se,

     so chhhe hm pichle wale aceess krna chhah rahe ho pr, window-object hmare '
     saath hi rahega or usse acess nahi krne dega

   */   





        //Example 
 
              //if stmt
   
   if(true){
    //this 'if' stmt does not create a new scope
    let  foo = 'bar';//it will give error  because let 
   }
   console.log(foo);

   if(true){
    var foo = 'bar'
   }
   console.log(foo)
   
   /*
   foo ko hmne ek Global-Variable ke trh Declare kr diya, kyoki hmne
   block scope me ek var keyword ko use kiya hai jo waha kaam me nahi aataa
   wo usko global-variable ke trh hi treat krega

   so window-object ke saath hamara variable foo jud chuka hai,isilye jb hm isko 
   program me acess krne jayenge , ye hamesa  dikhta rahega


   isilye jb bhi block scope ho tb hm let or const ka use kr sakte hai
   */

             
//__________________________________________________________________________________

                   //LEXICAL-SCOPE
/*
 Lexical scope exactly scope nahi hai, ye ek Inheritane ka concept/method hai

*/    

//Lexical Scope

function Dada(){

    var name = "Love Kumar ";

    //likes is not accessible here
    
    function Papa(){

        console.log(name);

        //name is acessible here
        //likes is not accessible here
        function Beta(){

            //Innermost level of Scope-chain
            //name is also acessible here
            var likes = 'coding'
        }
        Beta() //funcn call -- Papa ne bulaya Beta ko
    }
    Papa() //funcn call -- Dada ne bulaya Papa ko
    
}
Dada() //funcn call