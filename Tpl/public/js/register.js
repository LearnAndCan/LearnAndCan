/**
 * Created by Adam on 15/8/3.
 */

function checkRegister(){
    var name = document.getElementById("name").value;
    var idCard = document.getElementById("idCard").value;
    var school = document.getElementById("school").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var keyword = document.getElementById("keyword").value;
    var keyword_1= hex_md5(keyword);
    var regKeyword = document.getElementById("regKeyword").value;
    var command = document.getElementById("command").value;
    var telReg = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);//如果手机号码不能通过验证
    var REidurl;
    var REstdurl;
    if(name == ""){
        alert("请输入您的真实姓名");
        return 0;
    }
    if(idCard == ""){
        alert("请输入您的身份证号码");
        return 0;
    }
    if(school == ""){
        alert("请输入您所在的学校");
        return 0;
    }
    if(phone == ""){
        alert("请输入您的联系电话");
        return 0;
    }
    if(email == ""){
        alert("请输入您的电子邮件地址");
        return 0;
    }
    if(keyword == "" || regKeyword == ""){
        alert("请输入完整的密码");
        return 0;
    }
    if(idCard.length != 18){
        alert("请输入真实有效的身份证号码");
        return 0;
    }
    if(telReg == false){
        alert("请输入正确的手机号码!");
        return 0;
    }
    if(keyword != regKeyword){
        alert("请确认两次密码输入一致");
        return 0;
    }
    else{
        var valueStr = "{\"type\":\"10001\",\"RequestData\":{\"username\":\""+name+"\",\"password\":\""+keyword_1+"\",\"idcard\":\""+idCard+"\",\"school\":\""+school+"\",\"email\":\""+email+"\",\"account\":\""+phone+"\",\"invitationCode\":\""+command+"\"}}";
        alert(valueStr);

        $.ajax({
            data:{
                jsonStr:"{\"type\":\"10001\",\"requestData\":{\"username\":\""+name+"\",\"password\":\""+keyword_1+"\",\"idcard\":\""+idCard+"\",\"email\":\""+email+"\",\"school\":\""+school+"\",\"account\":\""+phone+"\",\"IDCardPicture\":\""+REidurl+"\",\"studentCardPicture\":\""+REstdurl+"\",\"invitationCode\":\""+command+"\"}}"
            },
            url:'../databaseAccessInterface.do',
            type:'post',
            dataType:'json',
            error:function(){alert('提交数据失败!');},
            success:function(data){
            	var code = data.ResultCode;
                //var statu = data.ResultData;
                if(code == 1){
                    alert("注册成功!");
                    window.location.href="../../../../../Desktop/www/registerSuccess.html";
                }
                else if(code == 0) {
                    alert(data['ResultData']);
                }  
            }
        });

    }
}
function ajaxFileUploadidCard() {
    $.ajaxFileUpload
    (
        {
            url: '../upload.do', //用于文件上传的服务器端请求地址
            secureuri: false, //一般设置为false
            fileElementId: 'idCardPic', //文件上传空间的id属性  <input type="file" id="file" name="file" />
            dataType: 'json', //返回值类型 一般设置为json
            success: function (data)  //服务器成功响应处理函数
            {
                alert("返回的数据"+data);
//                $("#img1").attr("src", data);
                alert(data.pictureurl);
                REidurl = pictureurl;
                if (typeof (data.error) != 'undefined') {
                    if (data.error != '') {
                        alert(data.error);
                    } else {
                        alert(data.msg);
                    }
                }
            },
            error: function (data, status, e)//服务器响应失败处理函数
            {
                alert(e);
            }
        }
    );
    return false;
}

function ajaxFileUploadstuCard() {
    $.ajaxFileUpload
    (
        {
            url: '../upload.do', //用于文件上传的服务器端请求地址
            secureuri: false, //一般设置为false
            fileElementId: 'studentCardPic', //文件上传空间的id属性  <input type="file" id="file" name="file" />
            dataType: 'json', //返回值类型 一般设置为json
            success: function (data)  //服务器成功响应处理函数
            {
                alert("返回的数据是"+data);
//                $("#img1").attr("src", data);
                alert(data.pictureurl);
                REstdurl = pictureurl;
                if (typeof (data.error) != 'undefined') {
                    if (data.error != '') {
                        alert(data.error);
                    } else {
                        alert(data.msg);
                    }
                }
            },
            error: function (data, status, e)//服务器响应失败处理函数
            {
                alert(e);
            }
        }
    );
    return false;
}
function onMouse(){
    $(".example").slideDown("normal");
}
function outMouse(){
    $(".example").slideUp("normal");
}