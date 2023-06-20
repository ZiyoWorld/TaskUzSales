const modal = document.getElementById("modal");
const shadow = document.getElementById("shadow");
function openModal(){
    modal.classList.add('show');
    shadow.classList.add('shadow');
};

const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", ()=>{
    modal.classList.remove('show');
    shadow.classList.remove('shadow');
});
shadow.addEventListener("click", ()=>{
    modal.classList.remove('show');
    shadow.classList.remove('shadow');
});

let form = document.getElementById("form");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let jobType = document.getElementById("job-type");
let jobSource = document.querySelector("#job-source");
let description = document.getElementById("description");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zipCode = document.querySelector("#zip-code");
let area = document.querySelector("#area");
let datetimes = document.querySelector("#datetimes");
let startTime = document.querySelector("#startTime");
let endTime = document.querySelector("#endTime");
let testSelect = document.querySelector("#test-select");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    
    formValidation();
});





const formValidation = ()=>{
    
    if(firstname.value === "" && lastname.value === "" && phone.value === "" && 
    email.value === "", jobType.value === "", jobSource.value === "", description === "", 
    address.value === "", city.value === "", state.value === "", zipCode.value === "",
    area.value === "", datetimes.value === "", startTime.value === "", endTime.value === "", 
    testSelect.value === ""
    ){
        console.log("failure");
    }else{
        console.log("success");
        acceptData();
    }
};

let data = [];

let acceptData = () => {
     
    data.push({
        id: (prev)=> prev + 1,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        jobType: jobType.value,
        jobSource: jobSource.value,
        description: description.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        area: area.value,
        datetimes: datetimes.value,
        startTime: startTime.value,
        endTime: endTime.value,
        testSelect: testSelect.value,
    });
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
};
  let createPost = () => {
    result.innerHTML = "";
    data.map((data, y)=>{
      return(result.innerHTML += `
      <div class="result-container" id=${y}>
      <ul class="list">
      <li><h3>Client details</h3></li>
      <li> FirstName - ${data.firstname}</li>
      <li> LastName - ${data.lastname}</li>
      <li> Email - ${data.email}</li>
      <li> Phone - ${data.phone}</li>
      <li><h3>Job details</h3></li>
      <li> Job Type - ${data.jobType}</li>
      <li> Job Source - ${data.jobSource}</li>
      <li> Description - ${data.description}</li>
      <li><h3>Service location</h3></li>
      <li>Address - ${data.address}, ${data.state}, ${data.city}, ${data.zipCode}, ${data.area}    </li>
      <li><h3>Scheduled</h3></li>
      <li>Job Date - ${data.datetimes} </li>
      <li>Job Start Date - ${data.startTime} </li>
      <li>Job End Date - ${data.endTime} </li>
      <li>Test Select - ${data.testSelect} </li>
      <li></li>
      </ul>
      <span class="options">
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `)});
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phone.value = "";
    jobType.value = "";
    jobSource.value = "";
    description.value = "";
    address.value = ""; 
    city.value = " ";
    state.value = " ";
    zipCode.value = "";
    area.value = "";
    datetimes.value = "";
    startTime.value = "";
    endTime.value = "";
    testSelect.value = "";
    modal.classList.remove('show');
    shadow.classList.remove('shadow');
  };

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };
  
  