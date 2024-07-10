

const login = ()=> {

    
    console.log( window.location.href = 'assest/Login/login.html');
} 
    // profile image  upload code 

let image = document.getElementById('profile-pic');
let showImage = document.getElementById('account-pic');


const uploadImage = () => {
    console.log(showImage)
    let img = image.files[0];
    let readFile = new FileReader();
    readFile.onload = () => {
        console.log(readFile.result);
        showImage.src = readFile.result;
    }
    readFile.readAsDataURL(img)
}













