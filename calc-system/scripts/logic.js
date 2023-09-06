// DOM 
// Attach/Binding Event on Each Button
window.addEventListener('load', binding);
function binding(){

var buttons = document.getElementsByTagName('button');
console.log("All Buttons ", buttons.length);
for(let i = 0; i<buttons.length; i++){
    if(buttons[i].innerText =='='){
        continue;
    }
    buttons[i].addEventListener('click', printIt);
}
document.getElementById('result').addEventListener('click', computeIt);
}
function computeIt(){
    const txtValue = document.getElementById('output').value;
    document.getElementById('output').value = eval(txtValue);
}
function printIt(){
    console.log('Print it call ', this);
    const buttonValue = this.innerText ;
    document.getElementById('output').value = document.getElementById('output').value +  buttonValue;

}