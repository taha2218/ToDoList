const list = document.querySelector(".list");
const addButton = document.getElementById("add");
const inputValue = document.getElementById("activity");
var count = 0 ;

addButton.addEventListener('click',function(){
    if (count <3)
    {
        if(inputValue.value === ''){
            alert("Enter an Activity to Add !")
        }else{
            ++count ;
            const newLi = document.createElement("li");
            const liValue = document.createTextNode(inputValue.value);
            newLi.appendChild(liValue);
            list.appendChild(newLi);
            console.log(inputValue.value);
        }    
    }else{
        alert("Unable to add Activity to List !");
        console.log("Limit Reached !");
    }
    inputValue.value=''})