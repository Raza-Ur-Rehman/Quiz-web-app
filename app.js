let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;

let loader = document.querySelector(".loading");
let error = document.getElementById("error");
let signUpFormFields = document.querySelectorAll("form input");

const [
    signUpName,
    signUpEmail,
    signUpPass,
    confirmSignUpPass,
    signUpMale,
    signUpFemale,
    signUpPicture,
  ] = signUpFormFields;
  let imageUrl;
  
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













