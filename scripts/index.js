'use strict'; 

try {

  
//alert("Howdy");
//const myName = "daniel";
//alert(myName);

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


let deleteTask = (e) => {
  e.parentElement.parentElement.parentElement.parentElement.remove();
  //data.splice(e.parentElement.parentElement.id, 1);
  //localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};

console.log(typeof deleteTask); 

let data = [{}];

let acceptData = () => {
  data.push({
    day: day.options[day.selectedIndex].value,
    workout: workout.value,
    time: time.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  createTasks();
};




let createTasks = () => {
            mon.innerHTML = "";
            data.map((x, y) => {
            return (mon.innerHTML += `

            <tr id="${y}" class="d-flex">
            <th scope="row"></th>
            <td class="col-sm-6">${x.workout}</td>
            <td>${x.time}</td>
            <td>
            <span class="options">
              <a class="btn" type="button" href="#"><i title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
              <i onClick="deleteTask(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i>
            </span>
            </td>
          </tr>`
          );
});
         resetForm();
};

/* let deletePost = (e) => {
  e.parentElement.parentElement.parentElement.parentElement.remove();
}; */



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




let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};


  
} catch (error) {
  alert(error); 
}
