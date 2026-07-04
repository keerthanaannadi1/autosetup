//console.log("Hello from js");
//alert("Hello from js");


const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "./images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "./images/john.png"
  },
]
let curUserId = 0;
function toggle(){

  console.log("frontend");
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  // image
  document.getElementById("img").src=users[curUserId].image;
  // name
  document.getElementById("card-name").innerText=users[curUserId].name;
}

console.log("Hello from JS");

function getRandomUser(){
  fetch("https://randomuser.me/api")
  .then(function(data){
    return data.json();
  })
  .then(function(parsedData){
    //console.log(parsedData);
    let gender = parsedData.results[0].gender;
    //console.log(gender);
    let first = parsedData.results[0].name.first;
    let last = parsedData.results[0].name.last;
    console.log(first,last);
    let name = first + " " + last;
    let imageurl = parsedData.results[0].picture.large;
    
      document.getElementById("card-gender").innerText=gender;
      // name
      document.getElementById("card-name").innerText=name;
      // img
      document.getElementById("img").src = imageurl;

  })
  
}  