const h1 = document.querySelector('h1');
const span = document.querySelector('span');

function getDate() {
  let date = new Date();
  const daysWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  let dayWeek = daysWeek[date.getDay()];
  let dayNumber = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  span.innerText = `${dayWeek}, ${dayNumber} de ${month} de ${year}`;
}

function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  h1.innerText = `${hour}:${minutes}:${seconds}`;
}
getDate();
getTime();
setInterval(getTime, 1000);
