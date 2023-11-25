const characters = [
    {
        name:'Tarak',
        height:'172',
        mass:'77',
        eye_color:'brown',
        gender:'male',  

    },

    {
        name:'Ram',
        height:'179',
        mass:'79',
        eye_color:'brown',
        gender:'male',
    },

    {
        name:'Raj',
        height:'180',
        mass:'80',
        eye_color:'blue',
        gender:'male',
    },

    {
        name:'Kriti',
        height:'169',
        mass:'90',
        eye_color:'grey',
        gender:'women',
    }


];

//Q.get an array of all names
 const names = characters.map((ch,index) => {

    return {
        name:ch.name,
        id:index
    };
    
});
 
console.log(names);


// 
const names3= characters.map((ch,index) => (

   {
    name:ch.name,id:index
   }
));
 
console.log(names3);



         //or
//    writing the above map function in shorter way
const names1 = characters.map(ch => ch.name)
console.log(names1);



//Q.get an array of objects with just name and height properties
const propertiesOfCh = characters.map(ch => {
                 
                
    return{           //object banaya humne curly braces use krke
                      //object ke andar key or value pass krenge
          name:ch.name,
          height:ch.height             
                
    }       
                    
})  

console.log(propertiesOfCh);


//Q.get the heights of all the characters
const totalHeights = characters.reduce((prevHeight,character) =>{
    return prevHeight+character.height;
})

console.log(totalHeights);
                  
                  //
const totalHeights1 = characters.reduce((prevHeight,character) =>{
    return prevHeight + Number(character.height);
},0);//here we hv given prevHeight intially 0

console.log(totalHeights1);


//Q.Get characters with mass 100
const greaterThanMass = characters.filter((character) => {

    return character.mass>100;
     
})
console.log(greaterThanMass);


//Get all male characters 
const allMaleCharacters = characters.filter((character) => {

    return character.gender == 'male';
})
console.log(allMaleCharacters);
        
          //or

const allMaleCharacters1=characters.filter( character => character.gender=='male')
console.log(allMaleCharacters1);          


//Q.sort gender
const sortByName = characters.sort((character1,character2) => {

    if(character1.name < character2.name){
        return -1;
    }
    else if(character1.name>character2.name){
        return 1
    }
    else{
        return 0
    }
})
console.log(sortByName);


//Q.Sort by gender
const sortByGender = characters.sort((character1,character2) => {
       
     if(character1.gender<character2.gender){
        return -1;
     }
     if(character1.gender>character2.gender){
        return 1;
     }
     return 0
})
console.log(sortByGender)


//Q.Does every character has mass more than 40

   //since it is boolean instead of putting in const variable
   ///we will directly console it
console.log(characters.every((character) =>{

    return character.mass >40;

}))

          //or

 console.log(characters.every((character) => character.mass <40))         




 //Q Does every character has blue eye color 
 console.log(characters.every(character => character.eye_color == 'blue'))

 
 //Q. is there at least one male character
 console.log(characters.some(character => character.gender))

 //Q. is there at least one character taller than 200 
 console.log(characters.some(character => character.height > 200))