'use strict';

const day = document.querySelector('#DaysOfWeek');
const workout = document.querySelector('#workoutType');
const time = document.querySelector('#timeStart');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const deleteItem = document.querySelectorAll('.btn-delete'); //arr for all del btns
const mon = document.getElementById('mon');
const tues = document.querySelector('#tues');
const wed = document.querySelector('#wed');
const thurs = document.querySelector('#thurs');
const fri = document.querySelector('#fri');
const sat = document.querySelector('#sat');
const sun = document.querySelector('#sun');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	acceptData();
});

reset.addEventListener('click', (e) => {
	e.preventDefault();
	resetForm();
});

document.getElementById('editButton').style.display = "none";
let data = [{}];
let dayDiv; 

//Generate ID for Items
let randomID = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
};


let acceptData = () => {
	try {
		data.push({
			id: randomID(),
			day: day.options[day.selectedIndex].textContent,
			workout: workout.value,
			time: time.value,
		});

	 localStorage.setItem("data", JSON.stringify(data)); 
	 orgDay();

	} catch (error) {
		alert(error);
	}



	// localStorage.setItem("data", JSON.stringify(data)); 
	// createTasks();
	
/* if(day.options[day.selectedIndex].textContent == "Monday"){
		alert("Its Monday"); 
		localStorage.setItem("data", JSON.stringify(data)); 	
		createTasks(mon);

	}else if(day.options[day.selectedIndex].textContent == "Tuesday"){
		alert("Its Tuesday"); 
		localStorage.setItem("data", JSON.stringify(data)); 	
		createTasks(tues);
	}else{
		return true; 
	} */
};

let orgDay = () =>{
try {
	// let theDay = data.map((item) => item.day);
	// console.log(...theDay);
	//let dayDiv; 
	
		if(day.options[day.selectedIndex].textContent == "Monday") {
			alert("Its Monday"); 
			createTasks(mon);
		}else if(day.options[day.selectedIndex].textContent == "Tuesday"){
			alert("Its Tuesday"); 
			createTasks(tues); 
		}else {
			alert('Select a Day');
			return false;
		}
} catch (error) {
	console.log(error);
}

}; 


let createTasks = (dayDiv) => {
'use strict';
console.log("The parameter" + " " + dayDiv);
	//let myDay = dayDiv; 
    //let selectedDay = day.options[day.selectedIndex].textContent;
		//store the key & value items in localStorage
		//document.querySelector('#tues')
	data.map((obj) => {
		return (dayDiv.innerHTML += `
      <tr id="${obj.id}" class="d-flex" style="width: 100%;">
      <th style="width: 20%;" scope="row">${obj.day}</th>
      <td style="width: 30%;">${obj.workout}</td>
      <td style="width: 30%;">${obj.time}</td>
        <td>
          <span class="options">
            <a class="btn" type="button" href="#"><i onClick="editPost(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
            <a class="btn" type="button" href="#"><i onClick="deletePost(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
          </span>
        </td>
      </tr>`);
	});
  

/* 	Object.keys(data).forEach(function(key) {

		console.log(key, data[day]);
	
	});

	let theDay = data.map((item) => item.day);
	console.log("Your Info Below");
	console.log(theDay); */
	//let dayDiv = day; 
	newLoadItems();
	location.reload();
};

let deletePost = (e) => {
	e.parentElement.parentElement.parentElement.parentElement.remove();
	data.splice(e.parentElement.parentElement.parentElement.parentElement.id, 1);
	localStorage.setItem('data', JSON.stringify(data));
	getWorkOutLists();
};



let editPost = (e) => {
    document.getElementById('submit').style.display = "none";
    document.getElementById('editButton').style.display = "";
    document.getElementById('formLabel').textContent = "Edit Your Workout";

    let selectedWorkout = e.parentElement.parentElement.parentElement.parentElement;
    let itemID = e.parentElement.parentElement.parentElement.parentElement.id;

    day.value = selectedWorkout.children[0].innerHTML;
    workout.value = selectedWorkout.children[1].innerHTML;
    time.value = selectedWorkout.children[2].innerHTML;

	  document.getElementById("editButton").addEventListener("click", function() {
        //e.preventDefault();
        acceptData();
        let workOutList = JSON.parse(localStorage.getItem("data"));
        
        for (let i = 0; i < workOutList.length; i++) {
          if (workOutList[i].id === itemID) {
            workOutList.splice(i, 1);
          }
        }

        localStorage.setItem("data", JSON.stringify(workOutList));
        resetNewForm();
        resetForm();
	  });
};


let resetNewForm = () => {
	document.getElementById("formLabel").textContent = "New Product Form";
	document.getElementById('editButton').style.display = "none";
	document.getElementById('submit').style.display = "";
	newLoadItems();
	location.reload();
}

/* let getWorkOutLists = () => {
	let workOutList = JSON.parse(localStorage.getItem("data"));
	//Display result
	for (let i = 0; i < workOutList.length; i++) {
		mon.innerHTML = "";
		workOutList.map((obj) => {
			return (mon.innerHTML += `
        <tr id="${obj.id}" class="d-flex" style="width: 100%;">
        <th style="width: 20%;" scope="row">${obj.day}</th>
        <td style="width: 30%;">${obj.workout}</td>
        <td style="width: 30%;">${obj.time}</td>
        <td>
        <span class="options">
          <a class="btn" type="button" href="#"><i onClick="editPost(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
          <a class="btn" type="button" href="#"><i onClick="deletePost(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
        </span>
        </td>
      </tr>`)
		});
	}
};
 */
let resetForm = () => {
	day.value = "";
	workout.value = "";
	time.value = "";
};





//New Window Load
let workOutList = JSON.parse(localStorage.getItem("data"));	
	let m = [],
			t = [],
			w = [],
			th = [],
			f = [],
			s = [],
			su = []
	let dayCards = [mon, tues];

function newLoadItems (){

	try {
	for (var i = 0; i < workOutList.length; ++i) {
			if (workOutList[i].day == "Monday") {
					m.push([workOutList[i]]);
					orgItems(mon,m);
			} else if (workOutList[i].day == "Tuesday") {
				  t.push([workOutList[i]]);
					orgItems(tues,t);
			}
	};
	console.log("This is M"+ " " + JSON.stringify(m));
 return true;



	// let dayArr = [m,t];
	// console.log(dayArr);

	// var myObject = { name: 'myObject' };
	// dayArr.forEach(function(item){ 
	// 	console.log(item);                     // 1, 2
	// 	console.log(this === myObject, this);  // true  {name: "myObject"}
	// }, myObject)

//console.log(JSON.stringify(m));				
//console.log(JSON.stringify(t));


	} catch (error) {
		console.log(error);
	}




// 	//Display result
// 	workOutList.forEach(callbackFn, thisArg)
// 		data.forEach((element, i) => {
// 		console.log("Data is working");
// 		console.log(workOutList[i].day);
// 				try {
// 					// let theDay = data.map((item) => item.day);
// 					// console.log(...theDay);
// 					//let dayDiv; 
					
// 						if(workOutList[i].day == "Monday") {
// 							orgItems(mon);
// 						}
// 						else if(workOutList[i].day == "Tuesday"){
// 							orgItems(tues); 
// 						}
// 						else {
// 							return false;
// 						}
// 				} catch (error) {
// 					console.log(error);
// 				}
		

// 	});
// }


};

//New Window Load With Arrays
function orgItems (d,list) {

	try {
		d.innerHTML = "";
	// 	let id; 
	// 	let day; 
	// 	let workout; 
	let listArr =  m;

// for (let i = 1; i < list.length; i++){
// 	console.log(list.length);
// 	let html = `
// 	<tr id="${list}" class="d-flex" style="width: 100%;">
// 	<th style="width: 20%;" scope="row">${list.day}</th>
// 	<td style="width: 30%;">${list.workout}</td>
// 	<td style="width: 30%;">${list.time}</td>
// 		<td>
// 			<span class="options">
// 				<a class="btn" type="button" href="#"><i onClick="editPost(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
// 				<a class="btn" type="button" href="#"><i onClick="deletePost(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
// 			</span>
// 		</td>
// 	</tr>`;

// 	return d.innerHTML += html.innerHTML;
// }

	list.map((obj, i) => {
	console.log(m);
	let html = `
      <tr id="${obj.id}" class="d-flex" style="width: 100%;">
      <th style="width: 20%;" scope="row">${obj.i}</th>
      <td style="width: 30%;">${obj.workout}</td>
      <td style="width: 30%;">${obj.time}</td>
        <td>
          <span class="options">
            <a class="btn" type="button" href="#"><i onClick="editPost(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: grey;"></i></a>
            <a class="btn" type="button" href="#"><i onClick="deletePost(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: grey;"></i></a>
          </span>
        </td>
      </tr>`;
		return d.innerHTML += html;
	});

	resetForm();

	} catch (error) {
		console.log(error);
	}

};
	
(() => {
	data = JSON.parse(localStorage.getItem("data")) || [];
	//console.log(data);
	//console.log(Object.keys(data));
	newLoadItems ();
	//createTasks ();
})();

