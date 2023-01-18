const screen1= document.querySelector(".screen1")
const screen2= document.querySelector(".screen2")
let randomNumber= Math.round(Math.random() *10)

let attempts=1
function tryClick(e){
e.preventDefault()
const guessedNumber= document.querySelector(".counter")

if(Number(guessedNumber.value)==randomNumber){
screen1.classList.add("hide")
   screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerHTML="Você acertou em "+attempts+" tentativas"
}
if( attempts>=1){
  document.querySelector('.erro').classList
  .remove('hide')
}

attempts++
guessedNumber.value=""

}

const btnTry= document.querySelector("#btnTry")
const btnAgain= document.querySelector("#btnAgain")

btnTry.addEventListener('click', tryClick)
btnAgain.addEventListener('click', function(ev){
  ev.preventDefault()
screen1.classList.remove('hide')
screen2.classList.add('hide')
attempts=1
randomNumber=Math.round(Math.random() *10)
   document.querySelector('.erro').classList
  .add('hide')
})
