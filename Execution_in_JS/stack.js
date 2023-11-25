let a = 'namaste world!';

function first(){

    console.log('inside the first function');

}

function second(){

    console.log("inside second function ")
}

function third(){

    console.log('inside the third function ')
}

first(); //Function call
console.log('Global Execution context');


/**
 Note: Jb bhi JS ke andar code eexecute hote hai tb 
       "ek 'EXECUTION CONTEXT' bannte hai "
       
       and EXECUTION CONTEXT has '2-Phases'
        1.Memory Execution Phase-->also called Memory-Allocation-phase
        2.Code  Execution  Phase--> called thread-of-execution

      

    "Code-Execution context gets stored in 'CALL-STACK' "
    
    //pehla-code jo hota hai wo global-execution context me store hota hai


    GEC ke andr hi hamara first-execution-context ban jayega i.e
         First()  ---- jise hm LOCAL-EXECUTION-CONTEXT bhi bolrngr

              ex of STACk

                 log()
                 first()
                 GEC       //pehle ayega

            jaise jaise cheez   execute hote jayenge wo bahar aate ajayenge
             log() me execute hoke wo bahar ajayega   
 */