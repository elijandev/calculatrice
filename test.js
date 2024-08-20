
function calc(){
  var san1=parseFloat(document.getElementById('san1').value);
  let san2=parseFloat(document.getElementById('san2').value);
  let operator=document.getElementById('operator').value;
 

let netije=0
  if(isNaN(san1)||isNaN(san2)){
    alert('numbre');
    return
  }
  switch(operator){
    case"+":
    netije=san1+san2;
    break;
  
    case"-":
    netije=san1-san2;
    break;
  
    case"*":
    netije=san1*san2;
    break;
  
    case"/":
    netije=san1/san2;
    break;
  }
  let result=document.getElementById('netije')
  result.value=netije
}
function effacer(){
  var san1=document.getElementById('san1');
  let san2=document.getElementById('san2');
  let result=document.getElementById('netije')
  san1.value=""
  san2.value=""
  result.value=''
}