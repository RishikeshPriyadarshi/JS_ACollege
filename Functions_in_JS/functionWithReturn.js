let bread1 = prompt("which bread would u like to have :-");
let veggies1= prompt("which r ur faviourite veggies ");
let sauce1 = prompt("Which sauce would u like to have :-");


function makeSandwich(bread,veggies,sauce){

    let sandwich = bread + " bread " + veggies + " " + sauce + "sandwich" ;

    return sandwich;
}

//making variable called vegsandwich
let vegSandwich= makeSandwich(bread1,veggies1,sauce1);
console.log(vegSandwich);