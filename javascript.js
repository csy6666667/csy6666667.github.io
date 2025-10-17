const Id=document.querySelector('.Id');
const password=document.querySelector('.password');
const error=document.querySelectorAll('.error');
const form=document.querySelector('form');
const Json=document.querySelector('.json');
const remember=document.querySelector('.remember');
function clearError(){
    for(let e of error)
        e.style.display='none';
}
function Error(i){
    error[i].style.display='block';
}
remember.checked=localStorage.getItem('remember')==='true';
if(localStorage.getItem('remember')){
    Id.value=localStorage.getItem('storageId');
    password.value=localStorage.getItem('storagePassword')
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    clearError();
    if(Id.value===''){
        Error(0);
    }
    else if(!localStorage.getItem(Id.value)){
        Error(1)
    }
    else if(password.value===''){
        Error(2);
    }
    else if(password.value!==localStorage.getItem(Id.value)){
        Error(3);
    }
    else{
        alert('用户'+Id.value+'登录成功');
        if(remember.checked){
            localStorage.setItem('storageId',Id.value);
            localStorage.setItem('storagePassword',password.value)
            localStorage.setItem('remember',true);
        }else{
            localStorage.removeItem('storageId');
            localStorage.removeItem('storagePassword');
            localStorage.setItem('remember',false);
        }
            const formData=new FormData(form);
        const data=Object.fromEntries(formData.entries());
        data.remember=remember.checked?'true':'false';
        const json=JSON.stringify(data,null,2);
        console.log(json);
        Json.textContent=json;
    }
})
