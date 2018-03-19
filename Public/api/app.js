 (function() {

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDucEQtmYNbsckGQIPcyj9emrGVOZnQLFw",
    authDomain: "mariofunfinalproject.firebaseapp.com",
    databaseURL: "https://mariofunfinalproject.firebaseio.com",
    projectId: "mariofunfinalproject",
    storageBucket: "mariofunfinalproject.appspot.com",
    messagingSenderId: "253831252281"
  };
  firebase.initializeApp(config);

//get element
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//add logn
btnLogin.addEventListener('click', err=> {
 //get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
//sign in
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(err => console.log(e.message));

});

// add signup
btnSignup.addEventListener('click', err => {
//get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
//sign in
const promise = auth.CreateUserWithEmailAndPassword(email,pass);
promise
    .catch(err => console.log(e.message));

});

btnLogout.addEventListener('click', err => {
    firebase.auth().signOut();
});

// realtime listener
fire.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        btnLogOut.classList.add('hide');
    }
});

}());
