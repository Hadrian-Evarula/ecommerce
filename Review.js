function imgSlider(anything) {
    document.querySelector('.shoes1').src = anything;   
}
function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active'); 
}










function changeImage1(){
    
    let displayImage = document.getElementById('image1')   
    if (displayImage.src.match('./Img-20220428T084049Z-001/Img/customer1.jpg')){       
        displayImage.src = './Img-20220428T084049Z-001/Img/customer-1wearing.gif'
        document.getElementById("txt").innerHTML = ("White Nike shoes made to be useful for sports activities and also to provide a good looking style in what people wear")
        document.getElementById("txt").style.color = 'black'
    }else{
        displayImage.src = './Img-20220428T084049Z-001/Img/customer1.jpg'    
        document.getElementById("txt").innerHTML = "click my photo to see what i am wearing";
        document.getElementById("txt").style.color = 'rgb(73, 2, 2)'
    }   
}
function changeImage2(){
    let displayImage = document.getElementById('image2')
    if (displayImage.src.match('./Img-20220428T084049Z-001/Img/customer2.jpg')){
        displayImage.src = './Img-20220428T084049Z-001/Img/customer-2wearing.gif'
        document.getElementById("txt1").innerHTML = ("All-Stars Converse sneakers a simple yet classic, a highly durable and strongest sneakers in terms of wear and tear.")
        document.getElementById("txt1").style.color = 'black'
    }else{
        displayImage.src = './Img-20220428T084049Z-001/Img/customer2.jpg'
        document.getElementById("txt1").innerHTML = "click my photo to see what i am wearing";
        document.getElementById("txt1").style.color = 'rgb(73, 2, 2)'
    }
}
function changeImage3(){
    let displayImage = document.getElementById('image3')
    if (displayImage.src.match('./Img-20220428T084049Z-001/Img/customer3.jpg')){
        displayImage.src = './Img-20220428T084049Z-001/Img/customer-3wearing.gif'
        document.getElementById("txt2").innerHTML = ("A Nike Air Max Light offers decent comfort suitable for running and lifestyle use. ")
        document.getElementById("txt2").style.color = 'black'
    }else{
        displayImage.src = './Img-20220428T084049Z-001/Img/customer3.jpg'
        document.getElementById("txt2").innerHTML = "click my photo to see what i am wearing";
        document.getElementById("txt2").style.color = 'rgb(73, 2, 2)'
        
    }
}
function changeImage4(){
    let displayImage = document.getElementById('image4')
    if (displayImage.src.match('./Img-20220428T084049Z-001/Img/customer4.jpg')){
        displayImage.src = './Img-20220428T084049Z-001/Img/customer-4wearing.gif'
        document.getElementById("txt3").innerHTML = ("A Sneakers is a popular and comfortable shoes for exercise and sports activities.")
        document.getElementById("txt3").style.color = 'black'
    }else{
        displayImage.src = './Img-20220428T084049Z-001/Img/customer4.jpg'
        document.getElementById("txt3").innerHTML = "click my photo to see what i am wearing";
        document.getElementById("txt3").style.color = 'rgb(73, 2, 2)'
    }
}
function changeImage5(){
    let displayImage = document.getElementById('image5')
    if (displayImage.src.match('./Img-20220428T084049Z-001/Img/customer5.jpg')){
        displayImage.src = './Img-20220428T084049Z-001/Img/customer5-wearing.gif'
        document.getElementById("txt4").innerHTML = ("Catterpillar shoe footwear a very comfortable and well made.The best features is don't seem heavy and bog the feet down.")        
        document.getElementById("txt4").style.color = 'black'
    }else{
        displayImage.src = './Img-20220428T084049Z-001/Img/customer5.jpg'
        document.getElementById("txt4").innerHTML = "click my photo to see what i am wearing";
        document.getElementById("txt4").style.color = 'rgb(73, 2, 2)'
    }
}


















