let reference;
let message;
let user;
let database;
let num;
let holder;




user = prompt('select user 1, 2 or 3');
// user = '0'

 // Initialize Firebase
var config = {
   apiKey: "AIzaSyBtsior_IVgmnrEhheVr42jfyxbjaMK5ek",
   authDomain: "newdataset-f1233.firebaseapp.com",
   databaseURL: "https://newdataset-f1233.firebaseio.com",
   projectId: "newdataset-f1233",
   storageBucket: "newdataset-f1233.appspot.com",
   messagingSenderId: "536828636058"
};
firebase.initializeApp(config);
database = firebase.database();
reference = database.ref('messages');
reference.on('value', gotData, errData);


function gotData(data){
    clearStuff();
    let datas = data.val(); 
    let keys = Object.keys(datas)

    for (key of keys){
        let k = key;
        let users = datas[key].user;
        let msg = datas[key].message;
        // console.log(users, msg +':  '+ k);
         var li = document.createElement("li");
         if (users == '1'){
            li.setAttribute("id", "one");
         }else if (users =='2') {
            li.setAttribute("id", "two");
         }else{
            li.setAttribute("id", "three");
         }
         li.innerHTML = msg;
        document.getElementById('message_holder').appendChild(li);
    }
}


function errData(error){
    console.log('error');
    console.error(error);
}


function send(){
    message = document.getElementById('message').value;
    // alert(message);
    generateObj(message, user);
    document.getElementById('message').value = ''  //this removes the text in the box
}




function generateObj(message, user){
    let obj = {
        message: message,
        user: user
    }
    reference.push(obj)
}



function clearStuff(){
    let myStuff = document.getElementsByTagName('li');
    for (let i = 0; i < myStuff.length; i++){
        myStuff[i].style.display= 'none';
    }
}


document.addEventListener('keydown', logKey);

function logKey(e) {
    if (e.code === 'Enter'){
        send();
    }
  }