// console.log('welcome to js');
// document.write('welcome to js');
// alert('welcome to js');


function callme(){
    console.log('welcome to js');
    document.write('welcome to js');
    alert('welcome to js');
}

function myfunction(){
    document.getElementById('show').innerHTML='welcome to js'
}

function showReplace(){
    let newdata = document.data.uname.value
    document.getElementById('show').innerHTML=newdata
    //alert(newdata)
    console.log(newdata);
}