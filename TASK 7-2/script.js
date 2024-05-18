let ph1 = document.querySelector('.ph1')
let ph2 = document.querySelector('.ph2')
let ph3 = document.querySelector('.ph3')
let ph4 = document.querySelector('.ph4')
let ph5 = document.querySelector('.ph5')
let moon = document.querySelector('.moon')
const label1 = document.querySelector('.label1')
const label2 = document.querySelector('.label2')
const label3 = document.querySelector('.label3')

let starF = document.querySelector('.star1')
let starS = document.querySelector('.star2')
let starT = document.querySelector('.star3')
let starFO = document.querySelector('.star4')
let starFI = document.querySelector('.star5')
let stars =[starF,starS,starT, starFO , starFI ]






ph1.addEventListener('click', () => {
    let content1 = document.querySelector('.content')
    content1.style.backgroundColor = "black";

    let par = document.querySelector('.container1')
    par.style.color = "white";
})

ph2.addEventListener('click', () => {
    let content1 = document.querySelector('.content')
    content1.style.backgroundColor = "green";

    let par = document.querySelector('.container1')
    par.style.color = "white";
})


ph3.addEventListener('click', () => {
    let content1 = document.querySelector('.content')
    content1.style.backgroundColor = "blue";

    let par = document.querySelector('.container1')
    par.style.color = "white";
})

ph4.addEventListener('click', () => {
    let content1 = document.querySelector('.content')
    content1.style.backgroundColor = " rgba(255, 0, 0, 0.959)";

    let par = document.querySelector('.container1')
    par.style.color = "white";
})

ph5.addEventListener('click', () => {
    let content1 = document.querySelector('.content')
    content1.style.backgroundColor = "white";

    let par = document.querySelector('.container1')
    par.style.color = "black";
})

moon.addEventListener('click', () => {

    let content5 = document.querySelector('.content5')
    content5.style.backgroundColor = "black";
    content5.style.color = "white";
    let moo = document.querySelector('.moon')
    moo.style.color = "white";

})



label1.addEventListener ('click' , (Event) =>
{
let parF = document.querySelector('.par21')
parF.style.display = "block" ;
parF.style.padding = "10px" ;
} )

label2.addEventListener ('click' , (Event) =>
{
let parS = document.querySelector('.par22')
parS.style.display = "block" ;
parS.style.padding = "10px" ;
} )

label3.addEventListener ('click' , (Event) =>
{
let parT = document.querySelector('.par23')
parT.style.display = "block" ;
parT.style.padding = "10px" ;
} )



starF.addEventListener('click' , () =>{
    starF.style.color="gold" ;

})

starS.addEventListener('click' , () =>{
    starF.style.color="gold" ;
    starS.style.color="gold" ;
})

starT.addEventListener('click' , () =>{
    starF.style.color="gold" ;
    starS.style.color="gold" ;
    starT.style.color="gold" ;
})


starFO.addEventListener('click' , () =>{
    starF.style.color="gold" ;
    starS.style.color="gold" ;
    starT.style.color="gold" ;
    starFO.style.color="gold" ;
})

starFI.addEventListener('click' , () =>{
    starF.style.color="gold" ;
    starS.style.color="gold" ;
    starT.style.color="gold" ;
    starFO.style.color="gold" ;
    starFI.style.color="gold" ;
})



