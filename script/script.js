$(document).ready(function() {

    var accessToken = "EAACEdEose0cBAIg8vbFWUqdjRPCGypqwpWXYkBl3bWLtKM8zHEDZChKcGG9Yfh3arxDh1Kj3P59L6ZCpHzZCBZAFKoEoq41uG3T5Ghk0PI56RiJeBkkkWgIZAJyQ2YSXxscpOIEDNcsLYDaeRwlVtYloJWvFw9yYrTEYrSyPNPJkwBIjcAZCtMiUU09UU5nGB1f9bFqB0ckwZDZD";
    $.ajax('https://graph.facebook.com/me?access_token='+accessToken+'&fields=id,name,email,website,age_range,location,education,hometown,gender,birthday,work,about,family,relationship_status,religion,political,cover,favorite_athletes,favorite_teams', {

        success: printUserData
    });

});
function printUserData(response){
    console.log(response);
    // if(response.hasOwnProperty('cover')){
    //     $('#cover').css('background-image', 'url(' + cover.source +')' );  
    //     $('#cover').css('width', '100%');
    //     $('cover').css('height', '40vh');
    //     $('cover').css('background-repeat','no-repeat');
    //     $('cover').css('background-position', 'center');
    // }
    if(response.hasOwnProperty('name')){
        $('#name').text(response.name);
    }
    if(response.hasOwnProperty('work')){

        $.each(response.work, function(index, value){
            $('#work').text(value.position.name + " at " + value.employer.name );
        });
    }
    if(response.hasOwnProperty('education')){
        $.each(response.education, function(index, value){
            if(value.hasOwnProperty('type')){
                $('.education-container').append('<h3>'+value.type+'</h3>');
            }
            if(value.hasOwnProperty('school')){
                $('.education-container').append('<h4>'+value.school.name+'</h3>');
            }
            if(value.hasOwnProperty('year')){
                $(".education-container").append("<h4>Class of "+value.year.name+"</h3>");
            }
        });
    }
    if(response.hasOwnProperty('relationship_status')){
        $('#relationship-status').text(response.relationship_status);
    }
    if(response.hasOwnProperty('about')){
        $('#about').text(response.about);
    }
    if(response.hasOwnProperty('location')){
        $('#location').text(response.location.name);
    }
    if(response.hasOwnProperty('hometown')){
        $('#hometown').text(response.hometown.name);
    }
    if(response.hasOwnProperty('education')){
        $('#age').text(response.age_range.min);
    }
    if(response.hasOwnProperty('gender')){
        $('#gender').text(response.gender);
    }
    if(response.hasOwnProperty('email')){
        $('#email').text(response.email);
    }
    if(response.hasOwnProperty('birthday')){   
        $('#birthday').text(response.birthday);    
    }   
    if(response.hasOwnProperty('family')){
        $.each(response.family.data, function(index, value){
            $('#family').append('<h4>Name: ' + value.name + '</h4>');
            $('#family').append('<h5>'+value.relationship+'</h5>');
        });
    }
    if(response.hasOwnProperty('favorite_athletes')){
        $.each(response.favorite_athletes, function(index, value){
            $('#favorite-athletes').append('<h4>' + value.name + '</h4>');
        });
    }
    if(response.hasOwnProperty('favorite_teams')){
        $.each(response.favorite_teams, function(index, value){
            $('#favorite-teams').append('<h4>' + value.name + '</h4>');
        });
    }
    if(response.hasOwnProperty('website')){
        $('#websites').text(response.website);
    }
}