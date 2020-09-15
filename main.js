/* the button variable responsible for capturing all buttons 
   the variable textview is where will be displayed our calculation 
*/ 
var numbers = document.querySelectorAll('.button');
var display = document.querySelector('.textview');
/*  this function will display the our numbers on our screen */
function addNumber(event){
     display.value += event.target.value;
}
//this function clean our screen
function clean(){
      display.value = "";
}
//this function is used for delete number by number
function cleanNumber(){
      display.value = display.value.slice(0,-1);
}
//this function is for when to press in = show our result
function result(){
   display.value = eval(display.value);
}
(function(){
alert(1);
});
//this is a event when i press result he show result
     document.querySelector('.resul').addEventListener('click',result);
//this is a event that clean our screen
      document.querySelector('.clean').addEventListener('click',clean);
//this is a event that clean number by number of our screen
      document.querySelector('.cleanNumb').addEventListener('click',cleanNumber);
//this is a forEach that read all numbers of my html and show when click in number
      numbers.forEach(function(numbers){        
      numbers.addEventListener('click',addNumber);
});