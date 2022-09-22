
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active'); 
}

$('.LoginBtn').click(function(){
  $('Login').show();
  $('SignUp').hide();

  $('LoginBtn').css({'border-botton': '2px solid #ff4141'});

})

$('.SignUpBtn').click(function(){
  $('Login').hide();
  $('SignUp').show();

  $('LoginBtn').css({'border-botton': '2px solid #ff4141'});
  
})
