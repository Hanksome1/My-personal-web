//change photo
var myPicture=document.querySelector('img');
myPicture.onclick=function(){
let mySrc=myPicture.getAttribute('src');
if(mySrc==='picture/A.jpg'){
    myPicture.setAttribute('src','picture/B.jpg');
}
else{
    myPicture.setAttribute('src','picture/A.jpg');
}
}
//Set variable
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
//set user 
function setUser(){
    let myName=prompt('Please enter your user name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML='This is my first web Hello '+myName;
}
//decided when to use
if(!localStorage.getItem(myName))
{
    setUser();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'This is my first web Hello ' + storedName;
}
//onclick
myButton.onclick=function()
{
    setUser();
}


