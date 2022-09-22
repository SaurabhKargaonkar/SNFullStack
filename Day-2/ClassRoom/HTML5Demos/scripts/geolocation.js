var x = document.getElementById('demo') 

function getLocation(){
    navigator.geolocation.getCurrentPosition(showLocation)
}

function showLocation(position){
    x.innerHTML="Latitude "+ position.coords.latitude + " Longitude "+ position.coords.longitude
}