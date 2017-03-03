
$(document).ready(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        var $window = $(window);
        $('section.pages').each(function(){ 
            var $obj = $(this); 
            $(window).scroll(function() { 
                var yPos = -(($(window).scrollTop() - $obj.offset().top) / $obj.data('speed')); 
                var bgpos = '50% '+ yPos + 'px'; 
                $obj.css('background-position', bgpos ); 
             }); 
       });

        $(document).on('click','#myNavbar li a',function(){ 
            var att = $(this).text();
            $('html, body').animate({
                scrollTop: $('#' + att).offset().top
            }, 2000);
        });

        $(".trigger").click(function() {
            $(".menu").toggleClass("active");
        });
    
        $('.clickTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 2000);
        });
    
        setTimeout(function(){
            $('.fallingLeaves').css('opacity','1');
        },4000);
    
        $(document).on('click','.menu-wrapper .menu-open',function(){ 
            $('.menu-container').addClass('menu-opening');
        });
    
        $(document).on('click','.menu-wrapper .menu-right .menu-close',function(){ 
            $('.menu-container').removeClass('menu-opening');
        });
    
        $(document).on('click','.submit',function(){ 
            validForm();
        });
    
        $(document).on('keyup','.form-item',function(){
            $(this).next('.error').hide();
        });
});

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function validForm(e)
{
    var nameReg = /^[A-Za-z]+$/;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    var names = $('#name').val();
    var pwd = $('#pwd').val();
    var cpwd = $('#cpwd').val();
    var email = $('#email').val();
    var cntct = $('#cntct').val();
    
    var inputVal = new Array(names, pwd, cpwd, email, cntct);
    var inputMessage = new Array("Name", "Password", "Confirm Password", "Email address", "Contact");
    $('.form-item').next('.error').hide();
    $('.form-item').each(function(){
        if(inputVal[0] == ""){
            $('#name').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
            return false;
        } 
        else if(!nameReg.test(names)){
            $('#name').after('<span class="error"> Letters only</span>');
            return false;
        }
        if(inputVal[1] == ""){
            $('#pwd').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            return false;
        }
        else if(pwd.length < 6){
            $('#pwd').after('<span class="error">' + inputMessage[1] + ' must be 6 characters long.</span>');
            return false;
        }
        if(inputVal[2] == ""){
            $('#cpwd').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
            return false;
        }
        else if(pwd !== cpwd){
            $('#cpwd').after('<span class="error">'+ inputMessage[1] + ' and ' + inputMessage[2] + ' must be same.</span>');
            return false;
        }
        if(inputVal[3] == ""){
            $('#email').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
            return false;
        } 
        else if(!emailReg.test(email)){
            $('#email').after('<span class="error"> Please enter a valid ' + inputMessage[3] + '</span>');
            return false;
        }
        if(inputVal[4] == ""){
            $('#cntct').after('<span class="error"> Invalid ' + inputMessage[4] + ' URL</span>');
            return false;
        }
        else if(cntct.length > 10){
            $('#cntct').after('<span class="error">' + inputMessage[4] + ' number must be 10 characters long.</span>');
            return false;
        }

    });	
}
