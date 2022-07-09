'use strict'; 

const day = document.querySelector('#DaysOfWeek');
const workout = document.querySelector('#workoutType');
const time = document.querySelector('#timeStart');
const submit = document.querySelector('#submit');
const deleteItem = document.querySelectorAll('.btn-delete'); //arr for all del btns
const mon = document.querySelector('#mon');
const tues = document.querySelector('#tues');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    acceptData();
});

let data = [{}];

let acceptData = () => {
  data.push({
    day: day.options[day.selectedIndex].textContent,
    workout: workout.value,
    time: time.value,
  });
  localStorage.setItem("data", JSON.stringify(data)); //store the key & value items in localStorage
  createTasks();
};

let createTasks = () => {
            mon.innerHTML = "";
            data.map((obj, i) => {
            return (mon.innerHTML += `
              <tr id="${i}" class="d-flex" style="width: 100%;">
              <th style="width: 20%;" scope="row">${obj.day}</th>
              <td style="width: 30%;">${obj.workout}</td>
              <td style="width: 30%;">${obj.time}</td>
              <td>
              <span class="options">
                <a class="btn" type="button" href="#"><i onClick="editPost(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
                <a class="btn" type="button" href="#"><i onClick="deletePost(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
              </span>
              </td>
            </tr>`
          );
});
         resetForm();
};

let deletePost = (e) => {
  e.parentElement.parentElement.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.parentElement.parentElement.id, 1);
  localStorage.setItem('data', JSON.stringify(data));
  //console.log(e.parentElement.parentElement.parentElement.parentElement.id); 
  //e.parentElement.parentElement.parentElement.parentElement.remove();
};



let editPost = (e) => {
  let selectedWorkout = e.parentElement.parentElement.parentElement.parentElement;
  day.value  = selectedWorkout.children[0].innerHTML;
  workout.value = selectedWorkout.children[1].innerHTML;
  time.value = selectedWorkout.children[2].innerHTML;
  submit.innerHTML = "Update Now";
  submit.className = "btn bg-warning";

  submit.addEventListener('click', (e) =>{
    confirm("Do you Want to Update?");
  });
  
  selectedWorkout.remove();
  data.splice(e.parentElement.parentElement.parentElement.parentElement.id, 1);
  localStorage.getItem('data', JSON.stringify(data[e.parentElement.parentElement.parentElement.parentElement.id]));
  console.log("My data" + localStorage.getItem('data', JSON.stringify(data[e.parentElement.parentElement.parentElement.parentElement.id]))); 
};


  let resetForm = () => {
    day.value = "";
    workout.value = "";
    time.value = "";  
  };

  (() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
  })();




  
