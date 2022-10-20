// this is for changing the color and size of the h1 tag when we click on the button called change the color
function changeColor(){
    let text=document.getElementById('title')
    text.style.color='red'
}
function yes(){
    let text1=document.getElementById('title1')
    let gone=document.getElementById('no')
    let nothing=document.getElementById('yes')
    text1.innerHTML='thanks for joining...'
    text1.style.color='tomato'
    gone.style.display='none'
    nothing.style.display='none'
}
function no(){
    let text1=document.getElementById('title1')
    let gone=document.getElementById('no')
    let nothing=document.getElementById('yes')
    text1.innerHTML='plz!!! watch recordings...'
    text1.style.color='green'
    gone.style.display='none'
    nothing.style.display='none'
}
function cube(){
    let value=document.getElementById('value').value
    result= value*value*value
    console.log(result)
    document.getElementById('value').value=''
}