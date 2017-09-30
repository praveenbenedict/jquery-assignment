$(document).ready(function() {

    var accessToken = "EAACEdEose0cBAPK3PSRXg5haTp8ip2TpqUrUrg7bJZAfHenV6tEI0V0gAZBwgUX9K1Gegpwj71pdQVZBrOEVOKn8ox0zf987Lk5IhNzLplPAs5vJ3h6HxsZBX6QYsbQ39NQw0P6kV6jfChjhaZB1yBfaBug8AZCwLZBg8jhkKAzjHvXZCpzYXYZA4rtZBwXxcJQjOfd1nNyBGE8QZDZD";
    $.ajax('https://graph.facebook.com/me?access_token='+accessToken+'&fields=id,name,email,age_range,gender,birthday,work', {

        success: printUserData
    });

});


function printUserData(response){
    console.log(response);
    $("#name").text(response.name);
    $("#work").text(response.work[0].position.name + " at " + response.work[0].employer.name );//Add for each later
    $("#age").text(response.age_range.min);
    $("#gender").text(response.gender);
    $("#email").text(response.email);   
    $("#birthday").text(response.birthday); 
        

}