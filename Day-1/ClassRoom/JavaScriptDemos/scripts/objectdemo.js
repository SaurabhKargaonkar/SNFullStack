function show(){
    const userdata={
        unmae: document.data.uname.value, 
        email: document.data.email.value,
        city: document.data.city.value,
    }

    document.getElementById('show').innerHTML=userdata.unmae;
    document.getElementById('show1').innerHTML=userdata.email;
    document.getElementById('show2').innerHTML=userdata.city;
}