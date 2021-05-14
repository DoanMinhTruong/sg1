function onpre(){
    $('#pre-button').animate({
        opacity: 1,
    } ,500);    
}
$('.mimage').click(function(){
    $('#tourism').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#tourism').load('./02/02.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});



$('.mimage1').click(function(){
    $('#smartshowroom').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#smartshowroom').load('./01/01.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});



$('.mimage2').click(function(){
    $('#zone').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#zone').load('./08/08.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.mimage3').click(function(){
    console.log("Ok");
    $('#heritage').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#heritage').load('./04/04.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.mimage4').click(function(){
    console.log("Ok");
    $('#facility').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#facility').load('./06/06.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.mimage5').click(function(){
    console.log("Ok");
    $('#factory').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#factory').load('./05/05.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});




$('.mimage6').click(function(){
    console.log("Ok");
    $('#realestate').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#realestate').load('./07/07.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});
$('.mimage7').click(function(){
    console.log("Ok");
    $('#museum').animate({
        opacity: 1,
    } ,500);
    onpre();
    $('#museum').load('./03/03.html');
    $('#content').hide();
    // $('.background').css('background-image' , 'url(' + imageUrl + ')');
});
// console.log(document.getElementsByClassName('image7'))

$('#pre-button').click(function(){
    console.log('ok')
    location.reload();
})