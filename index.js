const dia = document.getElementById ('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const lancamento = "17 oct 2024"

function countDown(){
   const dateLanc = new Date(lancamento)
   const hoje =  new Date()

   const segTotal = (dateLanc - hoje)/1000;

   const finalDias = Math.floor(segTotal / 60 / 60 / 24); 
   const finalHoras = Math.floor(segTotal / 60 /60) % 24;
   const finalMinutos = Math.floor(segTotal / 60 ) % 60;
   const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = formatoTempo(finalDias, "D");
  hora.innerHTML = formatoTempo(finalHoras, "H");
  minuto.innerHTML = formatoTempo(finalMinutos, "M");
  segundo.innerHTML = formatoTempo(finalSegundos, "S");
}
function formatoTempo(tempo, unidade) {
    return tempo < 10 ? `0${tempo} ${unidade}` : `${tempo} ${unidade}`;
  
}

countDown();
setInterval(countDown, 1000)