//Exercise Using OBJECTS

//item name
//price
//discount
//itemCode


  //lets make object

  //firstly we will make variable inside it we will define obj
  const product = {

    //objects
    itemName: 'flower',
    price:  50,
    discount: 20,
    itemCode: 'F40'
  }

  //making the same above objects using Factory-Funcn and Constructor-Funcn

  //Factory-Function
  function createProduct(name,price,discount,itemCode){
    return{
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
  }

  const football = createProduct('football',400,10,'F40')


  //Constructor-Function -- isme hamesa hum Pascal case ka use krte hai
          //Pascal case mean strting letter should be capital
          //in Constructor-funcn , we use the "this " keyword
   
   //whenever make above funcn use keyword ---new
          
function Product(name,price,discount,itemCode){

    this.itemName=name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
    
    //for calculating or getting the value of discounr
    this.discountValue = function(){

        return price*discount/100;
    }
}

const mobile = new Product('LG',5000,15,'L30');