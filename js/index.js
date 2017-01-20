function numFormat(num) {    
    var str = num.toString();//将数字转换为字符串
    var strLength = str.length;//获取字符串的长度
    var array = [];//存储新数组

    var yu = strLength % 3;//获取多余的位数的长度
    if (yu > 0) {
        array.push(str.slice(0, yu));//将首位的数字存入数组
    }

    var newStr = str.slice(yu, strLength);//截取去除首位的剩余字符串

    for (var i = 0; i < newStr.length / 3; i++) {//循环，每3位存入数组
        array.push(newStr.slice(3 * i, 3 * (i + 1)));
    }
    return array.join(',');//将数组拼接成字符串

}
$('#num').keyup(function(){
	$('#num-formated').val(numFormat($('#num').val()));
});

