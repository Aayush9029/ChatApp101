let refrence;
let message;
let user;
let database;
let num;


user = prompt('select user 1 or 2');

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
refrence = database.ref('messages');
refrence.on('value', gotData, errData);






function gotData(data){
    let datas = data.val(); 
    let keys = Object.keys(datas)

    for (key of keys){

        let k = key;
        let users = datas[key].user;
        let msg = datas[key].message;
        console.log(users, msg +':  '+ k);
         var btn = document.createElement("li");
         if (users == '1'){
            btn.setAttribute("id", "you");
         }else {
            btn.setAttribute("id", "him");
         }
         btn.innerHTML = msg;
        document.body.appendChild(btn);
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
    location.reload();                           // find a better way of removing element
}


function generateObj(message, user){
    let obj = {
        message: message,
        user: user
    }
    refrence.push(obj)
}

