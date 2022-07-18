'use strict';
const day = document.querySelector('#DaysOfWeek');
const workout = document.querySelector('#workoutType');
const workoutTitle = document.querySelector('#workoutTitle');
const time = document.querySelector('#timeStart');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const deleteItem = document.querySelectorAll('.btn-delete'); //arr for all
const mon = document.querySelector('#Monday');
const tues = document.querySelector('#Tuesday');
const wed = document.querySelector('#Wednesday');
const thurs = document.querySelector('#Thursday');
const fri = document.querySelector('#Friday');
const sat = document.querySelector('#Saturday');
const sun = document.querySelector('#Sunday');



submit.addEventListener('click', (e) => {
	e.preventDefault();
	formInput();
});

reset.addEventListener('click', (e) => {
	e.preventDefault();
	resetForm();
});

document.getElementById('editButton').style.display = "none";
let data = [{}];	
let m = [{}],
			t = [{}],
			w = [{}],
			th = [{}],
			f = [{}],
			s = [{}],
			su = [{}]
let dayDiv;

//Generate ID for Items
let randomID = () => {
	return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
};


let formInput = () => {
try {
				data.push({
								id: randomID(),
								day: day.options[day.selectedIndex].textContent,
								workoutTitle: workoutTitle.value,
								workout: workout.value,
								time: time.value,
				});

	localStorage.setItem("data", JSON.stringify(data));
	location.reload();
} catch (error) {
				alert(error);
}

};

//New Window Load
//let workOutList = localStorage.getItem("data", JSON.stringify(data));     
let newLoadItems = () =>{
  try {

  for (var i = 0; i < data.length; ++i) {
      if (data[i].day == "Monday") {
          m.push([data[i]]);
          orgItems(mon,m);
          let icon = document.getElementById('monNum'); 
          if(m.length > 0){
						icon.textContent = m.length;
						icon.classList.add("bg-primary");
          }else{
						break;
          }
      } 
      else if (data[i].day == "Tuesday") {
          t.push([data[i]]);
          orgItems(tues,t);
					let icon = document.getElementById('tuesNum'); 
					if(t.length > 0){
						icon.textContent = t.length;
						icon.classList.add("bg-primary");
          }else{
          	break;
          }
      }
      else if (data[i].day == "Wednesday") {
          w.push([data[i]]);
          orgItems(wed,w);
					let icon = document.getElementById('wedNum'); 
					if(w.length > 0){
						icon.textContent = w.length;
						icon.classList.add("bg-primary");
          }else{
						break; 
          }

      }						
      else if (data[i].day == "Thursday") {
        th.push([data[i]]);
        orgItems(thurs,th);
				let icon = document.getElementById('thursNum'); 
				if(th.length > 0){
					icon.textContent = th.length; 
					icon.classList.add("bg-primary");
				}else{
					icon.classList.add("hide");
				}

      }						
      else if (data[i].day == "Friday") {
        f.push([data[i]]);
        orgItems(fri,f);
				let icon = document.getElementById('friNum'); 
				if(f.length > 0){
					icon.textContent = f.length; 
					icon.classList.add("bg-primary");
				}else{
					icon.classList.add("hide");
				}

      }
      else if (data[i].day == "Saturday") {
        s.push([data[i]]);
        orgItems(sat,s);
				let icon = document.getElementById('satNum'); 
				if(s.length > 0){
					icon.textContent = s.length; 
					icon.classList.add("bg-primary");
				}else{
					icon.classList.add("hide");
				}

      }
      else if (data[i].day == "Sunday") {
        su.push([data[i]]);
        orgItems(sun,su);
				let icon = document.getElementById('sunNum'); 
				if(su.length > 0){
					icon.textContent = su.length; 
					icon.classList.add("bg-primary");
				}else{
					icon.classList.add("hide");
				}
      }
      else {
        alert('Select Day'); 
      }
  };
  console.log("This is M"+ " " + m);
  } catch (error) {
          console.log(error);
  }
};

//New Window Load With Arrays
let orgItems = (d,list) => {
'use strict';
try {
	console.log(m.length); 
	d.innerHTML = "";
    list.map(function(obj) {
		//console.log(list);
    return d.innerHTML +=  (`<tr id="${obj[0].id}" class="d-flex" style="width: 100%;">
      <th style="width: 20%;" scope="row">${obj[0].workoutTitle}</th>
      <td style="width: 30%;">${obj[0].workout}</td>
      <td style="width: 30%;">${obj[0].time}</td>
        <td>
          <span class="options">
            <a class="btn" type="button" href="#"><i onClick="editWorkout(this);" title="Edit Item" class="fa fa-edit pe-2" style="color: orange;"></i></a>
            <a class="btn" type="button" href="#"><i onClick="deleteWorkout(this);" type="button" title="Delete Item" class="fa fa-trash-alt" style="color: red;"></i></a>
          </span>
        </td>
      </tr>`);
   
	});
//newLoadItems ();
//location.reload();
 //resetForm();
 resetForm();
} catch (error) {
    document.getElementById('error').innerHTML = error;
    console.log(error);
        }
};

let deleteWorkout = (e) => {
	e.parentElement.parentElement.parentElement.parentElement.remove();
	let itemID = e.parentElement.parentElement.parentElement.parentElement.id;
	let workOutList = JSON.parse(localStorage.getItem("data"));
	for (let i = 0; i < workOutList.length; i++) {
		if (workOutList[i].id === itemID) {
			workOutList.splice(i, 1); //remove the item selected from localStorage
		}
	}
	localStorage.setItem("data", JSON.stringify(workOutList));
	setTimeout(function (){		
		location.reload();
	}, 200);
};

let editWorkout = (e) => {

	document.getElementById('submit').style.display = "none";
	document.getElementById('editButton').style.display = "";
	document.getElementById('formLabel').textContent = "Edit Your Workout";



	let selectedWorkout = e.parentElement.parentElement.parentElement.parentElement;
	let selectedWorkoutDay = e.parentElement.parentElement.parentElement.parentElement.parentElement.id;
	let itemID = e.parentElement.parentElement.parentElement.parentElement.id;

	day.value = selectedWorkoutDay;
	workoutTitle.value = selectedWorkout.children[0].innerHTML;
	workout.value = selectedWorkout.children[1].innerHTML;
	time.value = selectedWorkout.children[2].innerHTML;

	document.getElementById("editButton").addEventListener("click", function() {
		//e.preventDefault();
		formInput();
		let workOutList = JSON.parse(localStorage.getItem("data"));
		for (let i = 0; i < workOutList.length; i++) {
			if (workOutList[i].id === itemID) {
				workOutList.splice(i, 1);
			}
		}
		localStorage.setItem("data", JSON.stringify(workOutList));
		setTimeout(function (){		
			location.reload();
		}, 200);
	});
	

};

let resetNewForm = () => {
        document.getElementById("formLabel").textContent = "New Product Form";
        document.getElementById('editButton').style.display = "none";
        document.getElementById('submit').style.display = "";
        newLoadItems();

}

let resetForm = () => {
        day.value = "";
				workoutTitle.value = "";
        workout.value = "";
        time.value = "";
};

(() => {
        data = JSON.parse(localStorage.getItem("data")) || [];
        m = JSON.parse(localStorage.getItem("m")) || [];
        t = JSON.parse(localStorage.getItem("t")) || [];
        w = JSON.parse(localStorage.getItem("w")) || [];
				th = JSON.parse(localStorage.getItem("th")) || [];
				f = JSON.parse(localStorage.getItem("f")) || [];
				s = JSON.parse(localStorage.getItem("s")) || [];
				su = JSON.parse(localStorage.getItem("su")) || [];
				console.log(data);
				//myFunction();
        newLoadItems ();
})();


