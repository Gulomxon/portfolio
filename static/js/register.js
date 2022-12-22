window.addEventListener('DOMContentLoaded',()=>{

    const RegAndLog = document.querySelector('.reg_and_log'),
    registerBTN = document.querySelector('.registration_btn'),
    backgrounRed = document.querySelector('.backgroundred')
    loginBTN = document.querySelector('.login_btn'),
    logregbtn = document.querySelectorAll('.control-btn'),
    runner = document.querySelector('.runner')
    ;

    
    loginBTN.addEventListener('click', function(){
        backgrounRed.style.left= '49.5%';
        logregbtn[0].classList.toggle('active');
        logregbtn[1].classList.toggle('active');
        runner.style.transform = 'translateX(-50%)';
    })
    registerBTN.addEventListener('click', function(){
        backgrounRed.style.left= '0.5%'
        logregbtn[0].classList.toggle('active');
        logregbtn[1].classList.toggle('active');
        runner.style.transform = '';
    })
    let inputs=[], labels = [], indexLab = 0;

    const firstname = document.querySelector('#id_first_name'),
    lastname = document.querySelector('#id_last_name'),
    username = document.querySelector('#id_username'),
    logUsername = document.querySelector('#id_logusername'),
    email = document.querySelector('#id_email'),
    password1 = document.querySelector('#id_password1'),
    password2 = document.querySelector('#id_password2'),
    password = document.querySelector('#id_logpassword'),
    firstname_lab = document.querySelector('.firstname_lab'),
    lastname_lab = document.querySelector('.lastname_lab'),
    username_lab = document.querySelector('.username_lab'),
    logUsername_lab = document.querySelector('.log_username_lab'),
    email_lab = document.querySelector('.email_lab'),
    password1_lab = document.querySelector('.password1_lab'),
    password2_lab = document.querySelector('.password2_lab'),
    passwordLab = document.querySelector('.log_password_lab'),
    submit = document.querySelector('.registrate'),
    emailChech = document.querySelector('.email_check');
    inputs.push(firstname);
    labels.push(firstname_lab);
    inputs.push(lastname);
    labels.push(lastname_lab);
    inputs.push(username);
    labels.push(username_lab);
    inputs.push(email);
    labels.push(email_lab);
    inputs.push(password1);
    labels.push(password1_lab);
    inputs.push(password2);
    labels.push(password2_lab);
    inputs.push(logUsername);
    labels.push(logUsername_lab);
    inputs.push(password);
    labels.push(passwordLab);
    
    console.log(logUsername_lab);
    
    
    inputs.forEach(input => {
        if(input.value != ''){
            labels[inputs.indexOf(input)].classList.add('active_lab');
        }
        input.addEventListener('focus', function(){
            if(inputs[indexLab].value == ''){
                labels[indexLab].classList.remove('active_lab');
            }
            indexLab = inputs.indexOf(input);
            labels[indexLab].classList.add('active_lab');
        })
    })
    submit.addEventListener('click', function(){
        labels[indexLab].classList.remove('active_lab');
    })
    submit.addEventListener('focus', function(){
        labels[indexLab].classList.remove('active_lab');
    })
    let string, width=90;
    
    
    
    check()
    email.addEventListener('input', check);
    function check(){
        if(email.value != ''){
            emailChech.style.width = `${width/4}%`;
        }
        else{
            emailChech.style.width = `0%`;
        }
        string =String(email.value)
        if(string.indexOf(' ') < 0){
            if (string.includes('@')){
                emailChech.style.width = `${width/2}%`;
                emailChech.style.background = `linear-gradient( #d3c454, #968c24)`;
            }
            else{
                emailChech.style.background = ``;
            }
            if(string.includes('@') && string.indexOf('@')<string.indexOf('.')-1 && string.includes('.')){
                emailChech.style.width = `${width*3/4}%`;
                emailChech.style.background = `linear-gradient( #54afd3, #1a6c99)`;
            }
            if(string.includes('@') && string.indexOf('@')<string.indexOf('.')-1 && string.includes('.') && string.indexOf('.') < string.length-1){
                emailChech.style.width = `${width}%`;
                emailChech.style.background = `linear-gradient( #54d374, #18801d)`;
            }
        }
        else{
            emailChech.style.background = ``;
        }}


    

})