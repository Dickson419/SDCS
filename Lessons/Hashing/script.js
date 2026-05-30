
function verify(){
  password = document.getElementById('password').value;
  if(password) == 'password123'){
    window.location.href='levelTwo.html';
  }
  else{
    document.getElementById('message').className = 'error';
    document.getElementById('message').innerHTML = 'WRONG PASSWORD! Try again'
  }
}
