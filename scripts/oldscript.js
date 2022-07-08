'use strict'; 


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
              <a class="btn btn-delete" type="button" href="#"><i title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
            </span>
            </td>
          </tr>`
            
            
            );
            });

            /*    
*/
            resetForm();

    };

/*




    if (day == "1"){
        mon.innerHTML = "";
        data.map((x, y) => {
          return (mon.innerHTML += `
          <div class="content-flex" id=${y}>
                <span class="fw-bold">${x.day}</span>
                <span class="small text-secondary">${x.workout}</span>
                <p>${x.time}</p>

                <span class="options">
                  <i onClick= "editTask(this)" data-bs-toggle="modal"
data-bs-target="#form" class="fas fa-edit"></i>
                  <i onClick ="deleteTask(this);createTasks()" class="fas
fa-trash-alt"></i>
                </span>
            </div>
          `);
        });

    resetForm();
    }else if (day == "2" ) {
        tues.innerHTML = "";
        data.map((x, y) => {
          return (tues.innerHTML += `
          <div class="content-flex" id=${y}>
                <span class="fw-bold">${x.day}</span>
                <span class="small text-secondary">${x.workout}</span>
                <p>${x.time}</p>

                <span class="options">
                  <i onClick= "editTask(this)" data-bs-toggle="modal"
data-bs-target="#form" class="fas fa-edit"></i>
                  <i onClick ="deleteTask(this);createTasks()" class="fas
fa-trash-alt"></i>
                </span>
            </div>
          `);
        });

    resetForm();
    }else {
        return result;;
    } */



  let resetForm = () => {
    day.value = "";
    workout.value = "";
    time.value = "";
  };

/*   let resetDay = (form) => {
    form.innerHTML = "";
  };
 */

  (() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
  })();






/*

submit.addEventListener('click', (e) =>{
    acceptData();
});

let acceptData = () => {
    data["text"] = day.input;
    createPost();
};


let createPost = () => {
    mon.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="f fa-edit"></i>
        <i onClick="deletePost(this)" class="fa fa-trash-alt"></i>
      </span>
    </div>
    `;
    dayy.value = "";
}; */


/*  function createPost () {
    return mon.textContent += `<p>hello</p>`;
  };
 */

  /*     <div>
      <p>${day.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div> */


deleteItem.forEach( button => {
  button.addEventListener('mouseover', removeMe); // add the event listener to each button
});

function removeMe() {
  alert('Howdy');
   //this.closest('tr').remove(); // this is the button, from there you want to move up in DOM and find the closes <li> to remove
}




let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};




/* 

            <div class="content-flex" id=${y}>
                    <span class="fw-bold">${x.day}</span>
                    <span class="small text-secondary">${x.workout}</span>
                    <p>${x.time}</p>

                    <span class="options">
                    <i onClick= "editTask(this)" data-bs-toggle="modal"
data-bs-target="#form" class="fas fa-edit"></i>
                    <i onClick ="deleteTask(this);createTasks()" class="fas
fa-trash-alt"></i>
                    </span>
                </div>
            `*/