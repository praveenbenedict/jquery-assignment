$(document).ready(function() {

    var accessToken = "EAACEdEose0cBAF6oy73Xoes1AKLUvf6Sqdc52dN4qIgI5INsifnvqnLMAXaZB0vhY0gCcoc1FA1PPdnZBjTVXLA9n2TzPDPR3wWStyZBRxBU5sVYp2dNI2OJusg6ky64R1iRRm5hZC5WqdQeKjMsZBV9h9w2oLgLm3EgogwgIU66vnQncfAuZB6aBs6bZBQC6KKX7vEmTI8OgZDZD";
    // console.log(accessToken);
    $.ajax('https://graph.facebook.com/me?access_token='+accessToken+'&fields=id,name,email,website,location,hometown,age_range,gender,birthday,relationship_status,posts,religion,political,family,cover,work,education,favorite_athletes,favorite_teams,quotes', {
        success: printUserData
    });
    $.ajax('https://graph.facebook.com/me/feed? fields=picture,full_picture,message,link,description,story&access_token='+accessToken,{
        success: printUserFeed
    });
    // $.ajax('https://graph.facebook.com/me/feed?fields=picture,full_picture,message,link,description,story&access_token='+accessToken,{
    //     success: printUserFeed
    // });
});
function printUserData(response){
    console.log(response);
    console.log(response.feed);
    // console.log(response.about);
    // console.log(response.relationship_status);
    // console.log(response.age_range.min);
    // console.log(response.feed);
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
    else {
        $('#name').hide();
    }

    if(response.hasOwnProperty('work')){

        $.each(response.work, function(index, value){
            $('#work').text(value.position.name + " at " + value.employer.name );
        });
    } 
    else {
        $('#work').hide();
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
                $(".education-container").append("<h5>Class of "+value.year.name+"</h5>");
            }
        });
    }
    else {
        $('.education-container').hide();
    }

    if(response.hasOwnProperty('about')){
        $('#about').text(response.about);
    }
    else{
        $('.about-container').hide();
    }

    if(response.hasOwnProperty('relationship_status')){
        $('#relationship-status').text(response.relationship_status);
    }
    else{
        $('#relationship-status').hide();
    }

    if(response.hasOwnProperty('location')){
        $('#location').text(response.location.name);
    }
    else{
        $('#location').hide();
    }

    if(response.hasOwnProperty('hometown')){
        $('#hometown').text(response.hometown.name);
    }
    else{
        $('#hometown').hide();
    }

    if(response.hasOwnProperty('age_range')){
        $('#age').text(response.age_range.min);
    }
    else{
        $('#age').hide();
    }

    if(response.hasOwnProperty('gender')){
        $('#gender').text(response.gender);
    }
    else{
        $('#gender').hide();
    }

    if(response.hasOwnProperty('email')){
        $('#email').text(response.email);
    }
    else{
        $('#email').hide();
    }

    if(response.hasOwnProperty('birthday')){   
        $('#birthday').text(response.birthday);    
    }
    else{
        $('#birthday').hide();
    }

    if(response.hasOwnProperty('family')){
        $.each(response.family.data, function(index, value){
            if(value.hasOwnProperty('name')){
                $('#family').append('<h4>' + value.name + '</h4>');
            }
            if(value.hasOwnProperty('relationship')){
                $('#family').append('<h5>'+value.relationship+'</h5>');
            }
        });
    }
    else{
        $('#family').hide();
    }

    if(response.hasOwnProperty('favorite_athletes')){
        $.each(response.favorite_athletes, function(index, value){
            $('#favorite-athletes').append('<h5>' + value.name + '</h5>');
        });
    }
    else{
        $('#favorite-athletes').hide();
    }

    if(response.hasOwnProperty('favorite_teams')){
        $.each(response.favorite_teams, function(index, value){
            $('#favorite-teams').append('<h5>' + value.name + '</h5>');
        });
    }
    else{
        $('#favorite-teams').hide();
    }

    if(response.hasOwnProperty('website')){
        $('#websites').text(response.website);
    }
    else{
        $('#websites').hide();
    }

    if(response.hasOwnProperty('quotes')){
        $('#quotes').text(response.quotes);
    }
    else{
        $('#quotes').hide();
    }

}

function printUserFeed(response) {
    if(response.hasOwnProperty('data')){
        // console.log(response.feed.data);
        $.each(response.data, function(index,value){
            // console.log(value.story);
            $('#feed').append('<div class="feed-container feed-'+index+'"></div>');
            // // console.log(value.story);
            // $.get('https://graph.facebook.com/v2.2/#'+value.id+'?fields=attachments&fields=attachments&access_token=#'+accessToken,function(){
            
            // });
            if(value.hasOwnProperty("story")){
                $('.feed-'+index).append('<h3>' + value.story + '</h3>');
            }
            if(value.hasOwnProperty("message")){
                $('.feed-'+index).append('<h5>'+ value.message+'</h5>');
            }
            if(value.hasOwnProperty('full-picture')){
                $('.feed-'+index).append('<img src = "'+value.full-picture+'" width="500px" height="500px"></img');
            }
            
        });
    }
    else{
    }
    console.log(response);

}