/**
 * Created by Adam on 15/7/31.
 */

function cancell(){
    document.getElementById("joinUs").style.display="none";
    document.getElementById("cancell").style.display="none";
    document.getElementById("register").style.display="none";
    document.getElementById("jionUsBack").style.display="none";
}
function mouseOver(){
    //document.bigQRcode.src="../public/img/QRcode.jpg";
    $("#phone").slideUp("fast");
    $("#showQRcode").slideDown("fast");
}
function mouseOut(){
    //document.bigQRcode.src="../public/img/iPhone.png"
    $("#phone").slideDown("fast");
    $("#showQRcode").slideUp("fast");
}
function onShield(temp){
    $(temp).slideUp("fast");

}
function outShield(){
    $(".shield").slideDown("fast");
}