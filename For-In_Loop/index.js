

//document.querySelector gets stored in variable NamasteBtn
let namasteBtn= document.querySelector('button');

namasteBtn.addEventListener('click',showMsg);

//showMsg is function

function showMsg(){

    alert("Namaste World")

}

/*

for(let i=0;i<10;i++){

    console.log("hi");
}

for(let i=5;i<51;i=i+5){

button{

    font-family: 'helvetica neue', helvetica,sans-sarif;
    letter-spacing:1px;
    text-transform:uppercase;
    text-align: center;
    border: 2px solid rgb(255, 232, 28);
    background: rgb(255,232,28);
    color: rgba(0,0,200,0.6);
    box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
    border-radius:10px;
    padding: 3px 10px;
    display: inline-block;
    cursor: pointer;
}
    console.log(i);
}
button{

    font-family: 'helvetica neue', helvetica,sans-sarif;
    letter-spacing:1px;
    text-transform:uppercase;
    text-align: center;
    border: 2px solid rgb(255, 232, 28);
    background: rgb(255,232,28);
    color: rgba(0,0,200,0.6);
    box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
    border-radius:10px;
    padding: 3px 10px;
    display: inline-block;
    cursor: pointer;
}

//printing table of 5 in  reverse order
for(let i=50;i>4;i=i-5){
    console.log(i);
}


//printing odd value in console
for(let i=0;i<10;i++){

    if(i%3==0){

        console.log(i);
    }
}



//printing even value in console
for(let i=0;i<10;i++){

    if(i%2==0){

        console.log(i);
    }
    

}


//infinite loop

for(let i=0;i<10;){

    console.log("Namaste World");
}


*/

/*
            //WHILE LOOP

let i=0;
while(i<10){

    console.log("Namaste World");
    i++;
}

let j=10;
while(j>0){

    console.log("HOI");
    j--;
}

          
        //D0-WHILE LOOP
          //it wil run atleast one time

let l=10; //it will print one time supe
do{
    console.log("supe");
    l++;
}
while(l<10)

let k=0;
do{
    console.log("supe");
    k++;
}
while(k<10)

*/

            //FOR-IN Loop


        //for-in loop we hv to make an object(here name is animal)
        
     //object creation
     let animal={

         //name and leg r keys
         name:"Zebra",

         leg: 4
     }

    for(let key in animal){

        console.log(key,animal[key])
        console.log(key)

    }
    
    //we can acess the values in these 2 ways
    console.log(animal.name)//console.log(animal["name"])
    console.log(animal["leg"])


    //ARRAY for FOR-IN LOOP
    let names=["Rahul","Neha","Yash","Harsh"];
    for(let index in names){
        //console.log(index);//to chck numbering of index

        //to check elements presnt on the index
        console.log(index,names[index]);
    }

      //FOR-OF LOOP

      for(let name of names){//it will directly give names without index

        console.log(name)
      }

   




