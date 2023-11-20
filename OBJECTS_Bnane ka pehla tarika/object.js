//pehla tarika object banae ka

/*
  Ye itna efficient tarika nahi hai , agr isme hme ek or 
  naya oobject banana hia to  hume pura code jo object 1 
  hai usse copy krke likhna hoga

  or object ka name chaange krke i.e const course_2{

    //or phir andar ke props ko bhi chng krna padega which is lengthy

  }

  //so jo coding ek property hoti hai ki do not repeat urself
  //uss prop ko voilate kr rahi

*/



//Here in variable to deffrentiate we use equal-to and semicolon 
let lecture =10;
let section =3;//declaring variable
let title = 'Javascript'


/*
  const object ={
     hello                   :   'world'
    //Property Name(key)         //property  value
  }
*/
//Declaring object-->To diffrentiate in object we use colon and coma
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


//making function by declaring funcion kword and funcn name
//iss functions ko hm Object ke andr bhi use kr sakte hai
/*
function enroll(){
    console.log('U r Sucessfully Enrolled ');
}
*/


//Ab hm object ke Method(i.e.funcn) ko call kregnge ya acess krenge
//to hm object ka or dot lagake uss  method or funcn ka naam likhenge
//i.e agr method/funcn access krna hai to
course.enroll()

//Agr proprty/var acees krna ho to
console.log(course.title)

//purre object ko bhi console krra sakte hai
console.log(course)



//Object ke andr  ek khaas baat hota hai ki iski prop 
//"DYNAMIC" hoti hai
//i.e.. during runtime pe hm naye naye properties Declare kr skte

//Jaise ek course naam ka obj bn rkha hai,
//or hum nayi prop add krna chhate hai to then
course.price=999;
