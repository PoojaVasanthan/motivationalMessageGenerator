//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

/*This variable counts how many times the user clicks the "Next Page" button*/
var counter = 0
var theButton = document.getElementById("theButton");
theButton.addEventListener("click", motivation);
function motivation(){
  counter+=1;
  if(counter ==1)
  {
    motivation1();
  }
  if(counter == 2)
  {
    motivation2();
  }
  if(counter == 3)
  {
    motivation3();
    resetCounter();
  }
}

function motivation1(){
  alert("Every accomplishment starts with the decision to try.");
}
function motivation2(){
  alert("Live in the moment.");
}
function motivation3(){
  alert("Keep smiling and carry on.");
}
function resetCounter()
{
  counter = 0;
}

