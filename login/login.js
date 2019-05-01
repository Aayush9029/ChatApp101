let username;
let email;
let password;



var config = {
  apiKey: "AIzaSyBim0epGKuRzZxMgWbrBlTnfNMNtXxLZJE",
  authDomain: "a29-duhdwj.firebaseapp.com",
  databaseURL: "https://a29-duhdwj.firebaseio.com",
  projectId: "a29-duhdwj",
  storageBucket: "a29-duhdwj.appspot.com",
  messagingSenderId: "545188817973"
};
firebase.initializeApp(config);



function login(){
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, password);

  promise.catch(e => alert(e.message));

}



// Add a realtime Listner for user data
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    window.location.assign("https://aayush9029.github.io/Chatapp101/");
    document.getElementById('youin').style.display = 'block'
    document.getElementById('info').style.display = 'none'
  }
  else{
    console.log('not logged in');
  }
})


function logoOut(){
  firebase.auth().signOut();
  location.reload();
}





