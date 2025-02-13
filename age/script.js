let btn = document.getElementById('btn');
let text = document.getElementById('val');
let result =  document.getElementById('result');

btn.addEventListener('click', myFunction);

function myFunction(){
  // Convert the input value to a number
  let age = parseInt(text.value);

  if(age <= 12){
    result.textContent = "Child";
  }
  else if(age >= 13 && age <= 19){
    result.textContent = "Teenager";
  }
  else if(age >= 20 && age <= 29){
    result.textContent = "YoungAge";
  }
  else if(age >= 30){
    result.textContent = "Senior Citizen";
  } else {
    result.textContent = "Please enter a valid age";
  }
}
