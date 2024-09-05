const firebaseConfig = {
    apiKey: "AIzaSyCMfPp7ZD74HtSf7K3vdkTZDYFaq3aTkTQ",
    authDomain: "auth-441a4.firebaseapp.com",
    projectId: "auth-441a4",
    storageBucket: "auth-441a4.appspot.com",
    messagingSenderId: "394692895307",
    appId: "1:394692895307:web:e5d3173265c3a6574463ce"
};

firebase.initializeApp(firebaseConfig);

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("con-password");
const buttonSubmit = document.getElementById("submit");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

const provider = new firebase.auth.GoogleAuthProvider();

buttonSubmit.addEventListener('click', function (e) {
    e.preventDefault(); 

    const email = inputEmail.value;
    const password = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;


    errorMessage.textContent = '';
    successMessage.textContent = '';


    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            successMessage.textContent = "Sign-up successful!";
        })
        .catch((error) => {
            const errorText = error.message;
            errorMessage.textContent = errorText;
        });
});


document.getElementById('googleSignInBtn').addEventListener('click', function() {
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const user = result.user;
            successMessage.textContent = "Signed in with Google successfully!";
        })
        .catch(function(error) {
            const errorText = error.message;
            errorMessage.textContent = errorText;
        });
});