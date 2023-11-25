//Declaring a CLASS


   /*
     GETTER & SETTER
      --------------

      GETTER---->Means hume koi variable dekhna hai or hume 
               ek funcn milega , uske madad se hum var ka
               jo value wo hum  access kr skte hai
    

    SETTER-METHOD->Means hum kisi bhi var ko nset kr sakte hai 
                  uss particulr method se

    */
class product{

    constructor(itemName,price,discount,itemcode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.itemcode=itemcode;


    }
}

let pencil = new product('apsara',20,2,'A9')


//Abb Hum expression use krke OBJect banate hai
class product1{

    constructor(itemName,price,discount,itemcode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.itemcode=itemcode;
    }

    //making a GETTER
    get getDiscountValue(){

        return this.discount;
    }

    //making a SETTER
    set setDiscountValue(value){

        return this.discount = value;
    }

    //agr hm koi method banana chhate hai to bana skt hai
    //making discount method
    discountValue(){ //it is afunction
       
        return this.discount*this.price/100;
    }
    
    //making discount using getter
    /**
     get discountValue(){
        return this.discount*this.price/100;
     }
     */

}

let chair = new product1('Mangalam',499,15,'M40');
