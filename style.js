// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

async function callApi(){
  const res = await fetch('https://randomuser.me/api/?results=100');
  const users = await res.json();
  const userList = users.results;
  console.log(userList);
  
  //with forEach loop (only for array)
  // userList.forEach (function (user) {
  //   let ul = document.querySelector('ul');
  //   let li = document.createElement('li');  
  //   let firstName = user.name.first;
  //   let lastName = user.name.last
  //   let fullName = firstName + ' ' + lastName;
  //   li.innerHTML = fullName;
  //   ul.appendChild(li);
  //   console.log(fullName);
  // });

  //with for loop
  for (let i = 0; i < userList.length; i++) {

    let div = document.querySelector('div');
    
    //Creating tags inside div
    let img = document.createElement('img');
    let person = document.createElement('div');
    let name = document.createElement('h4');
    let nat = document.createElement('span');
    let br = document.createElement('br');
    let github = document.createElement('a');
    let fb = document.createElement('a');
    let twitter = document.createElement('a');
    
    //Image
    let image = userList[i].picture.large;
    img.setAttribute('src', image);

    //Name 
    let firstName = userList[i].name.first;
    let lastName = userList[i].name.last
    let fullName = firstName + ' ' + lastName;
    name.innerHTML = fullName;

    //nationality
    let nationality = userList[i].nat.toLowerCase();
    nat.classList.add('flag-icon', 'flag-icon-'+ nationality);

    //gender
    let gender =userList[i].gender

    if (gender === 'female') {
      github.classList.add('female');
      fb.classList.add('female');
      twitter.classList.add('female');
    } else {
      github.classList.add('male');
      fb.classList.add('male');
      twitter.classList.add('male');
    }

    //SNS logo <a>
    github.setAttribute('href', '#');
    fb.setAttribute('href', '#');
    twitter.setAttribute('href', '#');
    github.innerHTML = '<i class="fa-brands fa-github"></i>';
    fb.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
    
    //append
    person.append(img, name, nat, br, github, fb, twitter);
    div.appendChild(person);

    console.log(fullName);
  }
}
callApi();



  
  