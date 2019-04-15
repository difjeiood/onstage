//主页左边链接跳转
var newSrc = null;

$(function () {
    console.log($("#frameContentRight").attr("src"))
    // 主页跳转页面功能
    $('.addUser').click(function(e){
        $("#frameContentRight").attr("src",'login.html')
        e.preventDefault();
        let newSrc = $(this).attr('data-href');
        console.log(newSrc);
        $("#frameContentRight").attr("src",newSrc)
    })

    // // 表格全选和不全选
    $("#checkAll").click(function() {
        $("td > input").prop("checked",this.checked);
    });
});

