/**
 * Created by Adam on 15/8/4.
 */

function checkLogin(){
    var tel = document.getElementById("tel").value;
    var password = document.getElementById("password").value;
    var password_1 = hex_md5(password);
    if(tel == "" || password == ""){
        alert("请输入正确的号码和密码");
        return 0;
    }
    else{
        $.ajax({
            data:{
                jsonStr:"{\"type\":\"10000\",\"requestData\":{\"account\":\""+$("#tel").val()+"\",\"password\":\""+password_1+"\"}}",
            },
            url:'../databaseAccessInterface.do',
            type:'post',
            dataType:'json',
            error:function(){alert('登录失败，请重试!');
            },
            success:function(data){
                var code = data.ResultCode;
                var ApplicationDetails = data.ApplicationDetails;
                var statu = ApplicationDetails.status;
                if(code == 1){
                    alert("登录成功!");
                    window.location.href="status.html?id="+statu;
                }
                else if(code == 0) {
                    alert(data['ResultData']);
                }
            }
        });
    }
}