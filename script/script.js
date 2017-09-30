$(document).ready(function() {

    var accessToken = "";
    $.ajax('https://graph.facebook.com/me?access_token='+accessToken+'&fields=id,name,email,age_range,education,hometown,gender,birthday,work,about,relationship_status,religion,political', {

        success: printUserData
    });

});

console.log(response.hometown.town);
function printUserData(response){
    console.log(response);
    $("#name").text(response.name);
    $.each(response.work, function(index, value){
        $("#work").text(value.position.name + " at " + value.employer.name );
    });
    $.each(response.education, function(index, value){
        $(".education-container").append("<h3>"+value.type+"</h3>");
        $(".education-container").append("<h4>"+value.school.name+"</h3>");
        
        //$(".education-container").append("<h4>Class of "+value.year.name+"</h3>");
    });
    $("#relationship-status").text(response.relationship_status);
    $("#about").text(response.about);
    $("#hometown").text(response.hometown.name);
    $("#age").text(response.age_range.min);
    $("#gender").text(response.gender);
    $("#email").text(response.email);   
    $("#birthday").text(response.birthday);       
}