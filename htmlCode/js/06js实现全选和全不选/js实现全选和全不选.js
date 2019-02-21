/*
全选和全不选步骤分析:
    1.确定事件: onclick 单机事件
    2.事件触发函数: checkAll()
    3.函数要去做一些事情:
    获得当前第一个checkbox的状态
    获得所有分类项的checkbox
    修改每一个checkbox的状态
*/
function checkAll() {
    //获取第一个checkbox的状态
    var check1 = document.getElementById("check1");
    var checked = check1.checked;
    //获取所有项的checkbox
    var checks = document.getElementsByName("checkone");
    //循环遍历每一个checkbox修改状态
    for (var i = 1; i < checks.length; i++) {
        var checkone = checks[i];
        checkone.checked = checked;
    }
}

/**
 * 隔行换色
 * 确定事件：onload
 * 事件触发函数：init（）
 * 函数：操作页面元素
 *      操作表格中的每一行
 *      动态修改行的背景颜色
 */
function init() {
    //获取表格
    var tab = document.getElementById("tab");
    //获取表格的每一行
    var rows = tab.rows;
    //循环表格
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        if(i%2 == 0) {
            row.bgColor = "red";
        }else {
            row.bgColor = "yellow";
        }
    }
}