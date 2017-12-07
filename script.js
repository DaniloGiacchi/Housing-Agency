//set the initial array containing the images urls of the houses
function setWebInit(){

  var other_img_1 = [
      "https://aff.bstatic.com/images/hotel/840x460/579/57966930.jpg",
      "https://i.pinimg.com/736x/b7/b5/7b/b7b57b35e9eca89a3f2fb41da80a90ab--grey-blue-dining-room-dark-wood-dining-room.jpg",
      "https://images2.roomstogo.com/is/image/roomstogo/dr_rm_bedfordheights~Bedford-Heights-Cherry-5-Pc-Dining-Room.jpeg",
      "https://i.pinimg.com/736x/09/7d/b2/097db215002912936832eebbb0c3105d--wall-of-windows-the-window.jpg"];
    var other_img_2 = [
      "https://images2.roomstogo.com/is/image/roomstogo/br_rm_urbanplains_gray_uph~Urban-Plains-Gray-7-Pc-Queen-Upholstered-Bedroom.jpeg",
      "http://dafix.ru/wp-content/uploads/2016/05/2016-05-31-574d635a063a3.jpg",
      "http://bombadeagua.me/files/dining-room-pictures-within-images.jpg",
      "https://nellhills.com/nh/wp-content/post_photos/2010/08/MCs-LR-rugs.jpg"];
    var other_img_3 = [
      "https://aff.bstatic.com/images/hotel/840x460/579/57963518.jpg",
      "http://3.bp.blogspot.com/-xXLHyWjDQ-s/VqWRKO8gOTI/AAAAAAAAu_Y/004r2wuXOLQ/s1600/living+room.jpg",
      "https://images2.roomstogo.com/is/image/roomstogo/dr_rm_westerleigh1_uph~Westerleigh-Oak-5-Pc-Rectangle-Dining-Room.jpeg",
      "https://i.pinimg.com/736x/87/b4/eb/87b4eb1f5afd9a1c3d57f6c2cc93575e--minimalist-home-decorating-living-rooms-minimalist-apartment-living-room.jpg"];
    var other_img_4 = [
      "http://www.stinngoassets.com/uploads/images/52275dcc106a7f2187000015/image_file/91062013-2411-4004-9c5d-fdbed217dbb1.jpg",
      "http://www.ikea.com/ms/media/cho_room/20171/seating/20171_cols03a/20171_cols03a_01_PH137139.jpg",
      "https://i.pinimg.com/736x/6a/2a/c0/6a2ac08d78bcb762b1b13fae566ecdea--simple-chandelier-dining-room-industrial-decor-dining-room.jpg",
      "https://i.pinimg.com/736x/e5/fd/8a/e5fd8ac60846688d8a152f0e44940335--grey-living-rooms-bright-decor-living-room.jpg"];
    var other_img_5 = [
      "https://files.synapp.it/43638/foto/prodotti/B/prd_43638_0372_1429645436449_B.jpg",
      "http://ghk.h-cdn.co/assets/cm/15/11/54ff8225950aa-living-rooms-green-amy-de.jpg",
      "https://hips.hearstapps.com/hbu.h-cdn.co/assets/cm/15/04/54bf50d07cd65_-_7-dining-room-xlg-76059344.jpg",
      "http://krtmuseum.com/wp-content/uploads/2017/10/amazing-living-rooms-furniture-sets-pertaining-to-room.jpg"];
    var other_img_6 = [
      "http://static.budgetplaces.com/establishment/31/92/19231/2_thumb.jpg",
      "http://ghk.h-cdn.co/assets/cm/15/11/54ff822674a54-living-rooms-modern-de.jpg",
      "https://images2.roomstogo.com/is/image/roomstogo/dr_rm_savona_white~Sofia-Vergara-Savona-Ivory-5-Pc-Rectangle-Dining-Room.jpeg",
      "https://tjihome.com/wp-content/uploads/2016/08/Fantastic-country-living-room-decor-HD9I20.jpg"];
    var other_img_7 = [
      "https://bbimages.eu/images/users/17321/benb/rooms/572444_1_600_md.jpg?1452765517",
      "http://ghk.h-cdn.co/assets/cm/15/11/54ff82282ac26-living-room-green-window-de.jpg",
      "http://www.ikea.com/ms/media/cho_room/20171/dining/20171_codi01a/20171_codi01a_01_PH137047.jpg",
      "http://designexplora.com/wp-content/uploads/2016/06/Simple-Living-Room-About-Modern-Living-Room-Ideas.jpg"];
    var other_img_8 = [
      "https://www.pletna.com/wp-content/uploads/2016/10/Garni-penzion-Pletna-Bled-3.jpg",
      "https://i.pinimg.com/736x/b7/b5/7b/b7b57b35e9eca89a3f2fb41da80a90ab--grey-blue-dining-room-dark-wood-dining-room.jpg",
      "http://cdn.home-designing.com/wp-content/uploads/2012/05/1-country-chic-kitchen-diner-design.jpeg",
      "https://st.hzcdn.com/fimgs/8db1e66d010066b1_7542-w500-h400-b0-p0--.jpg"];
      /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

}
//setting item contained on localStorage showing bedroom-living-dining-living2 rooms
function setSrc(url){

    if (typeof(Storage) !== "undefined") {
        window.localStorage.setItem("img_url",url[0]);
        window.localStorage.setItem("img_url_living",url[1]);
        window.localStorage.setItem("img_url_dining",url[2]);
        window.localStorage.setItem("img_url_living_2",url[3]);
    }

}
//check if the text submitted is an email
function validateEmail(id_email) {
  var email = id_email;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
  }else{
    return true;
  }
}

//if the email submitted match so the email is send
function sendMessage(id_email){
    if(validateEmail(id_email)){
      alert("Message sent succesfully");

    }else{
      alert("Message not sent. Be sure to have typed an email address");

    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//check if the date submitted is like DD/MM/YY
function validateDate(input){
  var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
      return true;
    }else {
      alert("Please enter dd/mm/yyyy");
      return false;
    }
}
function action_page(){
  if (typeof(Storage) !== "undefined") {
    if(validateDate(document.getElementById("in").value) &&
      validateDate(document.getElementById("out").value) &&
      (document.getElementById("number_adults").value != "" || document.getElementById("number_kids").value != "")){
        window.localStorage.setItem("chek_in",document.getElementById("in").value);
        window.localStorage.setItem("chek_out",document.getElementById("out").value);
        window.localStorage.setItem("number_adults",document.getElementById("number_adults").value);
        window.localStorage.setItem("number_kids",document.getElementById("number_kids").value);
     }
  }else {
    document.getElementById("result").innerHTML = "web Storage non supportato";
    alert("not supported");
  }

}

function init(){

    if (typeof(Storage) !== "undefined") {
      // prendo valore salvato e assegno al campo src del tag img con id image
      document.getElementById('image').src = window.localStorage.getItem('img_url');
      document.getElementById('image_living').src = window.localStorage.getItem('img_url_living');
      document.getElementById('image_dining').src = window.localStorage.getItem('img_url_dining');
      document.getElementById('image_living_2').src = window.localStorage.getItem('img_url_living_2');
      document.getElementById('liv').src = window.localStorage.getItem('img_url_living');
      document.getElementById('bed').src = window.localStorage.getItem('img_url');
      document.getElementById('din').src = window.localStorage.getItem('img_url_dining');
      document.getElementById('2liv').src = window.localStorage.getItem('img_url_living_2');
    } else {
      document.getElementById("result").innerHTML = "web Storage non supportato";
    }

}



function Subscribe(email_in){
    if(validateEmail(email_in)){
        document.getElementById('subscribe').style.display='none';
    }else{

    }
}
// Script to open and close sidebar when on tablets and phones
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Slideshow Apartment Images

function slide_apart(){
  var slideIndex = 1;
  showDivs(slideIndex);
}
function plusDivs(n) {

  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

//check if the date submitted is like MM/YY
function validDate(dValue) {
    var result = false;
    dValue = dValue.split('/');
    var pattern = /^\d{2}$/;
    if (dValue[0] < 1 || dValue[0] > 12)
      result = true;
    if (!pattern.test(dValue[0]) || !pattern.test(dValue[1]))
      result = true;
    if (dValue[2])
      result = true;
    if (result){ alert("Please enter a valid date in MM/YY format."); return false;}else{return true;}

}

  function submitPay(){
    if(document.getElementById('card_owner').value != "" &&
      !isNaN(document.getElementById('number_card').value) &&
      document.getElementById('number_card').value.length == 16 &&
      !isNaN(document.getElementById('cvc_card').value) &&
      document.getElementById('cvc_card').value.length == 3 &&
      validDate(document.getElementById('expiration_date_card').value) &&
      validateEmail(document.getElementById('email_card').value)){
                window.localStorage.setItem("card_owner_ls",document.getElementById('card_owner').value);
                window.localStorage.setItem("number_card_ls",document.getElementById('number_card').value);
                window.localStorage.setItem("cvc_ls",document.getElementById('cvc_card').value);
                window.localStorage.setItem("expiration_date_card_ls",document.getElementById('expiration_date_card').value);
                window.localStorage.setItem("email_card_ls",document.getElementById('email_card').value);
                alert("payment submitted succesfully");
                document.getElementById('form_of_pay').action = "index.html";
    }else{
      document.getElementById('form_of_pay').action = "payment.html";
      alert("There are some missing field!");
    }
  }
