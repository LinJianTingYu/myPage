var html=document.getElementById('html');
var css=document.getElementById('css');
var JS=document.getElementById('JS');
var less=document.getElementById('less');
var ajax=document.getElementById('ajax');
var vue=document.getElementById('vue');
var jquery=document.getElementById('jquery');
var regexp=document.getElementById('regexp');
var vue=document.getElementById('vue');
var deg=Math.PI*2;

//画圆函数
function drawCircle(ele,elseDeg,str){
	var cxt=ele.getContext('2d');
	ele.width=200;
	ele.height=200;
	cxt.lineWidth=10;
	cxt.beginPath();  
	cxt.arc(100,100,80,0,deg,false);
	cxt.strokeStyle="darkcyan";
	cxt.stroke();  
	cxt.beginPath();  
	cxt.arc(100,100,80,elseDeg,deg/4*3,false);
	cxt.strokeStyle="white";
	cxt.stroke();
	cxt.beginPath(); 
	cxt.textAlign="center";
	cxt.textBaseline="middle";
	cxt.font="bold 3em 华文行楷";
	cxt.fillStyle="red";
	cxt.fillText(str,100,100);
}

//计算角度
function lastDeg(health){
	return deg*parseInt(health)/100-deg/4;
}

//开始绘制
drawCircle(html,lastDeg("80%"),"80%");
drawCircle(css,lastDeg("80%"),"80%");
drawCircle(JS,lastDeg("75%"),"75%");
// drawCircle(less,lastDeg("90%"),"90%");
// drawCircle(ajax,lastDeg("80%"),"80%");
// drawCircle(jquery,lastDeg("75%"),"75%");
drawCircle(vue,lastDeg("60%"),"60%");


//画进度条
function drawHealth(ele,healthNum){
	ele.style.width=ele.parentElement.offsetWidth*healthNum+"px";
   ele.style.backgroundImage='linear-gradient(45deg,#766e04,#8a8329,#766e04)';
}

drawHealth(less,0.8);
drawHealth(ajax,0.75);
drawHealth(jquery,0.7);
drawHealth(regexp,0.8);











