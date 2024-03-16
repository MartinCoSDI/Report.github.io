
let name_1 ='user';
let pass_1 = 'user';

let username = "";
let password = "";

function nameChange(val){
    username = val;
}

function passChange(val2){
    password = val2;
}

function Click() {
    if(username != name_1 || password != pass_1){
        alert('Invalid Credential!')
    }
    else{
        location.assign('report.html');
    }
}