/**
 * Created by Adam on 15/8/5.
 */
function showAbout(){
    document.getElementById("about").style.display = "block";
    document.getElementById("recruit").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("feedback").style.display = "none";
}
function showRecruit(){
    document.getElementById("about").style.display = "none";
    document.getElementById("recruit").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("feedback").style.display = "none";
}
function showContact(){
    document.getElementById("about").style.display = "none";
    document.getElementById("recruit").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("feedback").style.display = "none";
}
function showFeedback(){
    document.getElementById("about").style.display = "none";
    document.getElementById("recruit").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("feedback").style.display = "block";
}

function checkFeedback(){
    var theme = document.getElementById("theme").value;
    var object = document.getElementById("object").value;
    var detials = document.getElementById("detials").value;
    var advise = document.getElementById("advise").value;
    if(theme == ""){
        alert("请填写意见主题");
        return 0;
    }
    if(object == ""){
        alert("请填写意见对象");
        return 0;
    }
    if(detials == ""){
        alert("请填写意见详细内容");
        return 0;
    }
    if(advise == ""){
        alert("请填写建议方案");
        return 0;
    }
    else{
        alert("谢谢您的反馈，您的支持是我们前进最大的动力！");
        window.location.href = "Tpl/index/index.html";
    }
}