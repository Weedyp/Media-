var arr = [
    {name:"Senorita",url:"./songs/Jale 2.mp3",img:"https://images.unsplash.com/photo-1714579340610-88f3a5ce6a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Nervous",url:"./songs/Pehle Bhi Main.mp3",img:"https://images.unsplash.com/photo-1714579340610-88f3a5ce6a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"If i cant have you",url:"./songs/Ram Siya Ram.mp3",img:"https://images.unsplash.com/photo-1714579340610-88f3a5ce6a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},
    {name:"Fallin' all in you",url:"./songs/Arjan vailly.mp3",img:"https://images.unsplash.com/photo-1714579340610-88f3a5ce6a18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"}
]
var clutter=""
arr.forEach(function(elem){
    clutter +=`<div class="song-card">
    <div class="part1">
     <img src=${elem.img}alt="">
     <h2>${elem.name}</h2>
    </div>
    <h6>3:10</h6>
 </div>`
})
//hello
document.querySelector(".all-songs").innerHTML=clutter