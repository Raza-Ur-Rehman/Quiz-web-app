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

const signUp = () => {
  event.preventDefault();
  if (
    signupUsername.value.trim() === "" ||
    signupEmail.value.trim() === "" ||
    signupPassword.value.trim() === "" ||
    signupConfirmPassword.value.trim() === ""
  ) {
    error.innerText = "Invalid Input(s)*";
    setTimeout(() => {
      error.innerText = "";
    }, 2000);
  } else {
    error.innerHTML = "";
    if (
      emailRegex.test(signupEmail.value) &&
      passwordRegex.test(signupPassword.value)
    ) {
      if (signupPassword.value === signupConfirmPassword.value) {
        loader.classList.add("d-flex");
        let obj = {
          signupUsername: signupUsername.value,
          signupEmail: signupEmail.value,
          signupPassword: signupPassword.value,
          profilePic: imageUrl,
        };
        localStorage.setItem("userData", JSON.stringify(obj));
        setTimeout(() => {
          loader.classList.remove("d-flex");
          window.location.href = "../Login/login.html";
        }, 3000);
      } else {
        error.innerText = "Password Do Not Match *";
        setTimeout(() => {
          error.innerText = "";
        }, 3000);
      }
    } else {
      error.innerText = "Invalid Email OR Password *";
      setTimeout(() => {
        error.innerText = "";
      }, 3000);
    }
  }
};
const uploadImage = () => {
  let img = profilePic.files[0];
  let readFile = new FileReader();
  readFile.onload = () => {
    imageUrl = readFile.result;
  };
  readFile.readAsDataURL(img);
};
//   login function
const loginError = document.getElementById("login-error");
let loginFormFields = document.querySelectorAll(".input-box input");
const [loginEmail, loginPassword] = loginFormFields;

let getData = JSON.parse(localStorage.getItem("userData"));

if (!getData === null) {
  function isLoginAlready() {
    let isLoginHai = getData.find((item) => {
      return item.isLogin === true;
    });
    if (isLoginHai) {
      window.location.href = "../Dashboard/dashboard.html";
    }
  }
  isLoginAlready();
}
const login = () => {
  event.preventDefault();
  if (loginEmail.value !== "" && loginPassword.value !== "") {
    // loginError.innerText = "";
    if (getData.signupEmail === loginEmail.value) {
      //   loginError.innerText = "";
      if (getData.signupPassword === loginPassword.value) {
        loader.classList.add("d-flex");
        setTimeout(() => {
          window.location.href = "../Dashboard/dashboard.html";
          loader.classList.remove("d-flex");
        }, 2000);
      } else {
        loginError.innerText = "Invalid Password !";
      }
    } else {
      loginError.innerText = "Invalid Email !";
    }
  } else {
    loginError.innerText = "Enter Email & Password !";
  }
};

let accountName = document.getElementById("account-name");
let accountImage = document.getElementById("account-pic");

const showData = () => {
  accountName.innerText = getData.signupUsername;
  accountImage.src = getData.profilePic;
};
showData();

// logout 
const logout = () => {
    document.body.style.overflow = "hidden";
    // loader.classList.add("d-flex");
    setTimeout(() => {
        // loader.classList.remove("d-flex");
        window.location.href = "../../index.html";
    }, 2000);
    localStorage.clear();
  };
//   side bar function
let sideBar = document.querySelector(".sidebar");
function openModal() {
  sideBar.style.display = "flex";
}
function closeModal() {
  sideBar.style.display = "none";
}

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
