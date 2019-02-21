/*提示代码 */
function showTips(spanID,msg) {
    var span = document.getElementById(spanID);
    span.innerHTML = msg;
}
/*检测用户名 */
function checkUsername() {
    var username = document.getElementById("username").value;
    var span = document.getElementById("span_username");
    if(username.length < 6) {
        span.innerHTML="<font size='2' color='red'>用户名太短</font>";
        return false;
    }else {
        span.innerHTML="<font size='2' color='green'>用户名可用</font>";
        return true;
    }
}
/*检测密码 */
function checkPassword() {
    var password = document.getElementById("password").value;
    var span = document.getElementById("span_password");
    if(password.length < 6) {
        span.innerHTML="<font size='2' color='red'>密码太短</font>";
        return false;
    }else {
        span.innerHTML="<font size='2' color='green'>密码可用</font>";
        return true;
    }
}
/**检测再次确认密码 */
function checkRePassword() {
    //获取密码
    var password = document.getElementById("password").value;
    //获取确认密码
    var re_password = document.getElementById("re_password").value;
    var span = document.getElementById("span_re_password");
    if(password != re_password) {
        span.innerHTML="<font size='2' color='red'>两次密码输入不一致</font>";
        return false;
    }else {
        span.innerHTML="";
        return true;
    }
}
//表单函数
function checkForm() {
    var flag = checkUsername() && checkPassword() && checkRePassword();
    return flag;
}