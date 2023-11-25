//Note: Extending is not possible in functional programming
/**
 i.e Factory function ya Constructor Function , jo hm likhte hai
 usme possible nahi hai

 similarly extend bhi hm functinal programming nahi kr sate


 ":OBJECT ORIENTED PROGRAMMING isilye use krte hm JS ke andr
 kyoki hm class ko extend kr sakte hai"
 */

 //DEclaring class
 class Product{

    constructor(itemName){

        this.itemName=itemName;
    }

    //getter
    getItemName(){

        return this.itemName + "is a product" ;

    }
 }

 //extending the class -> means we r making the sub-class of 
                         // main-class
 class Furniture extends Product{

    constructor(itemName){


        //now we call the funcntion super
        super(itemName)
    }

    getItemName(){

        return this.itemName + "is a furniture";
    }
 }                     


 let pencil = new Product('pencil',20,2,'P10');
 let chair = new Furniture('chair',499,15,'C10');



 /*
      SUPER-FUNCTION
      --------------
      
      >Super-Function is that which calls the constructor of 
      the parent class


      
      
  */