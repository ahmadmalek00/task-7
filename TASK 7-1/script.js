let inPutF = document.querySelector('.input-F')
let inPutS = document.querySelector('.input-S')
let inPutT = document.querySelector('.input-T')
let buttonF = document.querySelector('.buttonF')

let inPutFO = document.querySelector('.input-FO')
let buttonS = document.querySelector('.buttonS')
let inPutFI = document.querySelector('.input-FI')
let buttonT = document.querySelector('.buttonT')
let inPutSI = document.querySelector('.input-SI')
let buttonFO = document.querySelector('.buttonFO')

let inPutSIV = document.querySelector('.input-SIV')
let inPutA = document.querySelector('.input-A')
let inPutN = document.querySelector('.input-N')
let inPutH = document.querySelector('.input-H')
let inPutX = document.querySelector('.input-X')
let buttonFI = document.querySelector('.buttonFI')










const theMax = (n1 , n2 , n3) => {

  
    if ( n1> n2){
      if (n1 > n3){
        console.log('the max :',n1)
      } 

      else {
        console.log('the max : ' , n3)
      }
}
else if( n2 > n3 ) {
    console.log('the max :',n2)
}

else {
    console.log('the max :',n3)
}

}

const theMin = (a1 , a2 , a3) => {

  
    if ( a1 < a2){
      if (a1 < a3){
        console.log('the min :',a1)
      } 
      else {
console.log('the min :' , a3)
      }
}
else if( a2 < a3 ) {
    console.log('the min :',a2)
}

else {
    console.log('the min :',a3)
}

}

buttonF.addEventListener('click' , () =>  {
     theMax (inPutF.value,inPutS.value,inPutT.value )

})

buttonF.addEventListener('click' , () =>  {
    theMin (inPutF.value,inPutS.value,inPutT.value )

})


const vowel = (ch) => {
let i = '';
if ( ch == 'a'){
    i = ch
    console.log ('vowel:' ,i)
}
else if ( ch == 'o  '){
    i = ch
    console.log ('vowel:' ,i)
}
else if ( ch == 'i'  ){
    i = ch
    console.log ('vowel:',i)
}
else if ( ch == 'e'  ){
    i = ch
    console.log ('vowel:',i)
}
 else if ( ch == 'u ' ){
    i = ch
    console.log ('vowel:',i)
}
else {
    i = ch
    console.log('consonant:',i)
}
}

buttonS.addEventListener('click' , () =>  {
    vowel(inPutFO.value)
})


 const loop = (n4) => {

for( let i = 0 ; i < 12 ; i++){
  
n4 += n4 

console.log(n4)
 }

}

buttonT.addEventListener('click' , () =>  {
    loop(inPutFI.value)
})





const print = (s) => {

    for(let i = 0 ; i < s ; i ++ )
    {
        if (i%2==0){
            console.log(i)
        }
        else
        {
            console.log('      ')
        }
    }



}




buttonFO.addEventListener('click' , () =>  {
  print(inPutSI.value)
})




















const sum =  (v1 , v2 , v3 , v4 , v5) => {
let sum1 = [v1 , v2 , v3 , v4 ,v5 ] 
sum1.forEach = (item) => {
item += item
console.log(item)
}

}                             












buttonFI.addEventListener('click' , () =>  {
    sum(inPutSIV.value , inPutA.value , inPutN.value , inPutH.value , inPutX.value)
  })
