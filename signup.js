const submit=document.querySelector('.submit');
const Id=document.querySelector('.Id');
const error=document.querySelectorAll('.error');
const password=document.querySelector('.password');
const Confirm=document.querySelector('.confirm');
const req=document.querySelectorAll('.req');
const form=document.querySelector('form');
const Json=document.querySelector('.json')
let flag=0;
function clearError(){
    for(let e of error){
        e.style.display='none';
    }
}
function Error(i){
    error[i].style.display='block';
}
function Req(i){
    req[i].style.display='block';
}
function jud(i){
    let t;
    if(i==0)t=Id;
    else if(i==1)t=password;

    if(t.value.length<6){
        Req(i);
        flag=0;
    }else{
        req[i].style.display='none';
        flag=1;
    }
}
submit.addEventListener('click',function(){
    clearError();
    jud(0);
    jud(1);
    if(Id.value===''){
        Error(0);
    }
    else if(password.value===''){
        Error(1);
    }
    else if(Confirm.value===''){
        Error(2);
    }
    else if(Confirm.value!==password.value){
        Error(3);
    }
    else if(flag==1){
        localStorage.setItem(Id.value,password.value);
        alert('注册成功');
    }
})
Id.addEventListener('input',function(){
    jud(0);
})
password.addEventListener('input',function(){
    jud(1);
})
