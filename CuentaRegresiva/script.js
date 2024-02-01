const dias=document.getElementById("dias")
const horas=document.getElementById("horas")
const minutos=document.getElementById("minutos")
const segundos=document.getElementById("segundos")


const newYear="1 Jan 2025";

function time(){
  const yearDate=new Date(newYear);
  const actual=new Date();

  const totalSegundos=(yearDate-actual)/1000;

  const diasC= Math.floor(totalSegundos/3600/24);
  const horasC= Math.floor(totalSegundos/3600)%24 ;
  const minutosC= Math.floor(totalSegundos/60)%60;
  const segundosC= Math.floor(totalSegundos%60);

  dias.innerHTML=diasC;
  horas.innerHTML=horasC;
  minutos.innerHTML=minutosC;
  segundos.innerHTML=segundosC;
}

time();
setInterval(time, 1000);
