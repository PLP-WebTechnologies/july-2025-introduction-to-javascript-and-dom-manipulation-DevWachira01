//Variable declaration
let flavours =["vanila","strawbelly","mint"]
console.log(flavours)

//conditionals
let age = 18
if (age >=18){
    console.log("you can Vote");
}
else
console.log("you can't vote")

//functions
function checkVotingstatus(age){ //function to check voting status based on age
     if (age>=18){
            console.log("You are allowed to vote")
     }
     else{
            console.log("OOPs!! you are too young to vote")
     }
}
checkVotingstatus(20);

function printName(){ //function to print my name 10 times on the console.
    let name ="Dennis"
    for(i=0;i<10;i++)
        console.log(name)
}
printName()

//LOOPS
//for loop to print 'i love javascript 5 times
for(let i= 0;i<5; i++){
    console.log("i love Javascript", i);
}

//While loop to Print values in an array
let fruits= ["banana","oranges","mangoes"]
let count=0;
 
while(count<fruits.length)
    {
    console.log(fruits[count])
    count++
}


//DOM INTERACTIONS

//function to change website body to a dark theme after clicking a button
let dark= document.getElementById("mode");
mode.onclick=function(){
    document.body.classList.toggle("dark-theme");
}
//changes form background color onclick
let form= document.getElementById("form");
form.onclick=function(){
    form.style.backgroundColor="rgb(6, 12, 24)";
}




