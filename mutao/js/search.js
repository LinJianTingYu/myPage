//获取元素、
var searchBox=document.getElementsByClassName('section-serch')[0];
var searchInput=document.getElementsByClassName('searchInput')[0];
var searchBtn=document.getElementsByClassName('searchbtn')[0];
var searchList=document.getElementsByClassName('section-serch-list')[0];

//验证输入是否有效
// searchBtn.onclick=function () {
// 	var newValue=searchInput.value.replace(/(^\s+)|(\s+$)/g,"");//去掉输入值中的空格
// 	if (!newValue) {
// 		alert("请输入有效值");
// 		return false;
// 	}
// }

//在form上绑定提交，且判断是否输入有误，避免了选择空时也可以提交
$('.form').on('submit',function(){
	var newValue=searchInput.value.replace(/(^\s+)|(\s+$)/g,"");//去掉输入值中的空格
	if (!newValue) {
		alert("请输入有效值");
		return false;
	}
});

//当input内内容改变时发生的一些交互
searchInput.oninput=function(){
	var newValue=searchInput.value.replace(/(^\s+)|(\s+$)/g,"");
	var url="https://suggest.taobao.com/sug?code=utf-8&_ksTS=1531131644287_877&callback=jsonp878&k=1&area=c2c&bucketid=2&q="+newValue;
	$.ajax({
		url:url,
		dataType:"jsonp",
		// success: function (data){
		// 	console.log(data);
		// },
		// error:function(error){
		// 	console.log(error);
		// }
	}).done(function(data){//相当于success
		var maxName=5;
		var html;
		var dataNum=data["result"].length

		//没有匹配的内容时，隐藏下拉层
		if (dataNum===0) {
			$(".section-serch-list").hide().html('');
		}

		//给下拉层添加子元素
		for (var i = dataNum - 1; i >= 0; i--) {
			if (i<maxName) {
				break;
			}
			html+="<li>"+data["result"][i][0]+"</li>";
		}
        $(".section-serch-list").html(html).show();

        

	}).fail(function(){//相当于error
		$(".section-serch-list").hide().html('');
	}).always(function(){//无论成功与否都执行
		console.log("why always me!!!");
	});
}


//下拉层的小时和隐藏                  
$(searchInput).on('focus',function(){
	$(".section-serch-list").show();
}).on('click',function(event){
	event.stopPropagation();
});
$(document).on('click',function(){
	$(".section-serch-list").hide();  
});

//点击下拉层子元素时更新input内的内容，并提交
// searchList.onclick=function(event){
// 	searchInput.value=event.target.innerText;
// 	searchBtn.onclick();
// }
$(".section-serch-list").on('click','li',function(){
	$('.searchInput').val($(this).html());
	$('.searchInput').parent().submit();
})