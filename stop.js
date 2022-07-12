let seconds = 00
let minutes = 00
let mini = 00
let interval;
const outputmini = document.getElementById('mini')
const outputseconds = document.getElementById('seconds')
const outputminutes = document.getElementById('minutes')
const start = document.getElementById('start')
const stp = document.getElementById('stop')
const reset = document.getElementById('reset')

start.addEventListener('click',starting)
stp.addEventListener('click',stopping)
reset.addEventListener('click',reseting)

function starting(){
   
   clearInterval(interval)
   interval = setInterval(starttime,10)
    
}

function stopping(){
   clearInterval(interval)
}

function reseting(){
   clearInterval(interval)
   mini = 0
   seconds = 00
   minutes = 00
   outputseconds.innerText = '0'+ seconds
   outputminutes.innerText = '0'+ minutes
   outputmini.innerText = '0'+ mini
}

function starttime(){
    mini++
    outputmini.innerText = mini
    if(mini <= 9){
      outputmini.innerText = '0'+ mini
    }
    if(mini == 100){
      mini = 0
      seconds++
      outputseconds.innerText = seconds
      if(seconds <= 9){
         outputseconds.innerText = '0'+ seconds
       }
       
    }
    if(seconds == 60){
      seconds = 0
      minutes++
      outputminutes.innerText = minutes
      if(minutes <= 9){
         outputminutes.innerText = '0'+ minutes
       }
    }
}


