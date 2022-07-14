'use strict';

const day = document.querySelector('#DaysOfWeek');
const workout = document.querySelector('#workoutType');
const time = document.querySelector('#timeStart');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const deleteItem = document.querySelectorAll('.btn-delete'); //arr for all del btns
const mon = document.querySelector('#mon');
const tues = document.querySelector('#tues');
const wed = document.querySelector('#wed');
const thurs = document.querySelector('#thurs');
const fri = document.querySelector('#fri');
const sat = document.querySelector('#sat');
const sun = document.querySelector('#sun');




let createMonTasks = (day) => {
  console.log(day);
  //alert("Howdy");
  //mon.innerHTML = "";
  day.textContent = "Howdy";
};

createMonTasks (mon); 