

//document.querySelector gets stored in variable NamasteBtn
let namasteBtn= document.querySelector('button');

namasteBtn.addEventListener('click',showMsg);

//showMsg is function

function showMsg(){

    alert("Namaste World")

}



for(let i=0;i<10;i++){

    console.log("hi");
}

for(let i=5;i<51;i=i+5){


    console.log(i);
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
/*
for(let i=0;i<10;){

    console.log("Namaste World");
}
*/







