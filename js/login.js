const $=document.querySelector.bind(document)
const login=$('.form-login');
const signUp=$('.form-sign-up');
const btnSignUp=$('.btn-sign-up')

let checkLogin='login';
btnSignUp.onclick=(()=>{
    if(checkLogin=='login'){
        signUp.style.display='flex'
        login.style.display='none'
        btnSignUp.innerText='Login'
        checkLogin='signUP'
        $('.container-sign-up .content').innerText=`If you have account would you like to login right now ?`
    }
    else{
        login.style.display='flex'
        signUp.style.display='none'
        btnSignUp.innerText='Sign Up'
        $('.container-sign-up .content').innerText=`If you don't have account would you like to register right now ?`
        checkLogin='login'
    }
})
