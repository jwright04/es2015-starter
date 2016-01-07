"use strict";
let func = function func(){

    const USERNAME = "jwright";

    let returnedName = "Smith";
    let realName = "Phil";

    class Person{

        constructor(){

        }

        getName(){
            return returnedName;
        }

        setName(newName){
            returnedName = newName;

        }
    }

    let otherPerson = new Person();
    otherPerson.setName("Jacob");
    console.log("Real Name is:", realName);
    console.log("Username is:", USERNAME);
    console.log("Other persons name is:", otherPerson.getName());
}
func();