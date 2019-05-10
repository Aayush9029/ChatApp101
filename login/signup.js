
let username;
let email;
let password;
let confirm_password;


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBim0epGKuRzZxMgWbrBlTnfNMNtXxLZJE",
  authDomain: "a29-duhdwj.firebaseapp.com",
    databaseURL: "https://a29-duhdwj.firebaseio.com",
    projectId: "a29-duhdwj",
    storageBucket: "a29-duhdwj.appspot.com",
    messagingSenderId: "545188817973"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  


function signup(){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    confirm_password = document.getElementById('confirm_password').value;
    checkpass(email, password, confirm_password);
}



function checkpass(email, password, confirm_password){
    if (password == confirm_password){
        auth.createUserWithEmailAndPassword(email, password);
        alert('done');
        
    }
    else{
        alert("password didn't match")
    }
}


function createObj(username, email, password){
    let obj = {
        username: username,
        email: email,
        password: password

    }
}