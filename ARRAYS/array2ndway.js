/*
 Aur Arrays ko declare krne ka sirf yahi ek tarika nahi hai
 or bhi bahut hai 

 jinme se ek hm object ka use krle jo hai ki array
 --to hum kya krte hai jb bhi hm koi object banate hai ,to uska 
   "constructor ka use krte hai to "new" keyword ka use krte hai"
   or phir new ke aage jo bhi uss object ka nnamm hai wo likhenge
 */

      //2nd way to Declare an array

      const num = new Array(1,2,3,4,5,6,7,8,9);

      //push
       //num.push(10);
       console.log(num.push(10));

      //unsift---it will put values at start
       //num.unshift(0)
      console.log(num.unshift(0));
      
      //pop---- it will automatically remove the value
       //num.pop();
       console.log(num.pop()); 

      //shift--- it will remove the value from start
      //num.shift()
      console.log(num.shift())


      //changing the value of index
        //num[0]=10
        //num[0]='yash'
        //num[0]=true

        num[0]={num:80}


      console.log(num[num.length-1])


      ///other example of array
      const names = ['Amal','kroya','Firaqi','Rama','Rohan','Yaara','kroya']

      //indexOf()--it will tell the first occurence of val in array
       //names.indexOf();
       console.log(names.indexOf('kroya',2))

       //lastIndexOf()
        //names.lastIndexOf()
        console.log(names.lastIndexOf('kroya'))


        //includes--- it will search if the val exist or not
           // it will simply return true or false 
        names.includes('Amal')
        //console.log(names.includes('Amal'))
        console.log(names.includes('Amal',2)); //2 means will start from serachin 0  
    

    //upar jo bhi humne opns dekhe wo primitive data-type pe work kr rahe
     //like strings,number,boolean etc
 //--------------------------------------------------------------------
    //pr maan lo hum ek array ke andar ya ek object ka use kr rahe
       //phir use kaie use krenge?
   
       //Example of REFERENCED-DATA-TYPE

         //"includes NOT WORK on Referenced Data Type"

     //making an array
     let channels = [{
          
      name:'code.org',
      subscriber:10000
   }, {
      name:'Harvard',
      subscriber:50000,
  }, {
      name:'Mit',
      subscriber:80000

  }];  
     console.log(channels.includes({
          name:'code.org',
          subscriber:10000
     })) ///it will return false

     //Note: "includes " only work on "primitive-data-type" only

      //includes does not work on "refernced-data-type"
          //________________________

    
      //In Refrenced Data Type : we use "find"
             //by making predicate function

      //find
      //inline call back function
      console.log(channels.find(function(element){ //inline-callBack F
        return element.subscriber === 50000

        //return element.name === 'Mit'

      }))       
      

      //Arrow function
      console.log(channels.find((element)=>{
            
            return element.name === 'Mit';
      }))

           //when there is single element
      console.log(channels.find(element => element.name === 'code.org'))

    
      //Now we will be seeing "CONCATENATION METHOD"
      let names1=['Ram','Shayam','Kapu','Lapu']
      let names2=['Ajay','Amit','Amrit','Aman']
      let names3 = names1.concat(names2)
      console.log(names1.concat('Yash','Suraj'))
      console.log(names1.concat(names2))


      //"SLICE-METHOD"  
      console.log(names3.slice(3,5))


      ///"SPREAD OPERATORS(...)"
      //concatenation using Spread-Operators
      let names4=[...names1,...names2]
      console.log(names4)

     //---------------------------------------------------
      //Arrays jo value hoti hai usko hm ek-ek baar kaise use 
      //krte hai loop me usse dekhenge
    //---------------------------------

            //for loop
    for( let i=0;i<names.length;i++){
      console.log(names[i]);
    }

             //for-of loop
    for(let name of names2){
      console.log(name)
    }        

            
             //for-each loop
             names.forEach(function(name,index){

              console.log(name,index);
             })      

  //"JOIN" Operation
  let student = ['s','h','i','v','a']
    //student.join()
  console.log(student.join());
  
      //if we want to remove comma from above string
      //we hv to give comma seperator
  console.log(student.join(''))

  console.log(student.join('-'));



  //"SPLIT" Method
  let student2 = ['v','a','r','s','a']
  student2 = student2.join('_')
  console.log(student2.split('_'));



  //"FILTER" Method
    //making var named cities
   let cities = [
       {name:'mumbai', rank:1},
       {name:'delhi', rank:2},
       {name:'patna', rank:3},
       {name:'up', rank:10}
   ];
   
   console.log(cities.filter(city => {
       return city.rank > 1;
   }))



   //"MAP" Method
   console.log(cities.map(city => city.rank * 2))


      //console.log(names);


