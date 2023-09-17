let element=document.querySelector('.element');
let result=document.querySelector(".result");
let random =Math.ceil(Math.random()*100);
  

function findme(){
    let guessednumber= parseInt(element.value);
    if(guessednumber<random){
result.textContent="Too Low👇";
result.style.color="lightskyblue";
}
else if(guessednumber>random){
        result.textContent="Too High!!🫸";
        result.style.color="red";
 }

 else if(guessednumber === random){
    result.textContent="Congrats YoU Won The Game 🫡🤞💢";
    result.style.color="green";
    }

else {
result.textContent="It Is Not A Number🤣";
result.style.color="#white";
    }      

};