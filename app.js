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
    if (signupUsername.value.trim() === "" ||
    signupEmail.value.trim() === "" ||
    signupPassword.value.trim() === "" ||
    signupConfirmPassword.value.trim() === "") {   
        error.innerHTML = `<i class="fa-solid fa-circle-exclamation error"><span class="error">  Invalid Input(s)</span></i>`
    }
    else {
        error.innerHTML = ""
        if ( emailRegex.test(signupEmail.value) &&
        passwordRegex.test(signupPassword.value)){
            if (signupPassword.value === signupConfirmPassword.value) {
                
            }
        }
    }
  }
// const login = ()=> {

    
//     console.log( window.location.href = 'assest/Signup/signup.html');
// } 
//     // profile image  upload code 

// let image = document.getElementById('profile-pic');
// let showImage = document.getElementById('account-pic');


// const uploadImage = () => {
//     let img = image.files[0];
//     let readFile = new FileReader();
//     readFile.onload = () => {
//         showImage.src = readFile.result;
//     }
//     readFile.readAsDataURL(img)
// }













