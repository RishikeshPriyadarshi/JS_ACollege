//Q. Find area of Square
   
 let square = {
    side:5,
    
    get area(){  //getter funcn

        //this.side*this.side
        return this.side*this.side //this Kw uss object pe point
                            //krega jispe hm call kra rahe 
                            //or wo hai square object
    }
 }

 square.side =10; 

 square.area = 8;//getter jo hota hai wo immutable hota hai
                  //means can't be changed aur koi area lenge toh
                  //change nahi hoga, 8 kaam nahi krega                  
 
 console.log(square.area);