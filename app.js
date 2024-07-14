let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;

let loader = document.querySelector(".loading");
let error = document.querySelector(".error");
let signUpFormFields = document.querySelectorAll("form input");

const [
    signupUsername,
    signupEmail,
    signupPassword,
    signupConfirmPassword,
    signupMale,
    signupFemale,
    profilePic,
  ] = signUpFormFields;
  let imageUrl;
  
  const signUp = ()=> {
    event.preventDefault();
    if (signupUsername.value.trim() === "" ||
    signupEmail.value.trim() === "" ||
    signupPassword.value.trim() === "" ||
    signupConfirmPassword.value.trim() === "") {   
        error.innerText = "Invalid Input(s)*"
        setTimeout(() => {
            error.innerText = ""
        }, 2000);
    }
    else {
        error.innerHTML = ""
        if ( emailRegex.test(signupEmail.value) &&
        passwordRegex.test(signupPassword.value)){
            if (signupPassword.value === signupConfirmPassword.value) {
                loader.classList.add("d-grid");
                let obj = {
                    signupUsername: signupUsername.value,
                    signupEmail : signupEmail.value,
                    signupPassword: signupPassword.value,
                    profilePic: imageUrl, 
                };
                localStorage.setItem("userData",JSON.stringify(obj))
                setTimeout(() =>{
                    loader.classList.remove("d-grid")
                    window.location.href = "../Login/login.html"
                },3000)
            }
            else {
                error.innerText = "Password Do Not Match *"
                setTimeout(() => {
                    error.innerText = ""
                }, 3000);
            }
        }
        else {
            error.innerText = "Invalid Email OR Password *"
            setTimeout(() => {
                error.innerText = ""
            }, 3000);
        }
    }
};
const uploadImage = () => {
    let img = profilePic.files[0];
    let readFile = new FileReader();
    readFile.onload = () => {
        imageUrl = readFile.result;
    }
    readFile.readAsDataURL(img)
};

const loginError = document.getElementById("login-error")
let loginFormFields = document.querySelectorAll(".input-box input");
const [loginEmail, loginPassword] = loginFormFields;

let getData = JSON.parse(localStorage.getItem("userData"))










// let eyeIcon = document.querySelector('eye-icon');
// let isOpen = false;
// function showMenu() {
//     isOpen = !isOpen;
//     if (isOpen) {
//         signupPassword.style.type = "text"
//     }
//     else {
//         menu.style.height = '0px';
//     }
// }

// const login = ()=> {

    
//     console.log( window.location.href = 'assest/Signup/signup.html');
// } 
//     // profile image  upload code 

// let image = document.getElementById('profile-pic');
// let showImage = document.getElementById('account-pic');















