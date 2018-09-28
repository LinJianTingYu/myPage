
function slider(){
    //获取元素
  var next=document.getElementsByClassName('next')[0];
  var preous=document.getElementsByClassName('preous')[0];
  var count=document.getElementsByClassName("count");
  var imges=document.getElementsByClassName("img-list")[0];
  var index=1; //初始为第一张图片
  var btn=document.getElementsByClassName('btn')[0];
  var wrap=document.getElementsByClassName('content-silder')[0];
  var isNext=true;
  var animated;
  var Timer;
  var imgWidth=$('.content-silder').width();

  //滑动动画
  function animate(offset){
    animated=true;
    var nowLeft=parseInt(imges.offsetLeft)+offset;
    var time=2000;//位移总时间
    var interval=10;//位移间隔时间
    var speed=offset/(time/interval);//每次位移量
    //开始动画
    function go(){
      if ((speed<0&&parseInt(imges.offsetLeft)>nowLeft)||speed>0&&parseInt(imges.offsetLeft)<nowLeft) {
        imges.style.left=parseInt(imges.offsetLeft)+speed+"px";
        setTimeout(go,interval);
      }else{   
        animated=false;
        imges.style.left=nowLeft+"px";
        if (nowLeft<-imgWidth*4) {
          imges.style.left=-imgWidth+"px";
        }
        if (nowLeft>-imgWidth) {
          imges.style.left=-imgWidth*4+"px";
        }
      }
    }
    go();
  }

  //点击向后按钮
  next.onclick=function(){
    if (animated) {
        return;
    }
    if (index == 4) {
        index = 1;
    }else {
        index += 1;
    }
    animate(-imgWidth);
    changeCount();
  }
  //点击向前按钮
  preous.onclick=function(){
    if (animated) {
        return;
    }
    if (index == 1) {
        index = 5;
    }else {
        index -= 1;
    }
    animate(imgWidth);
    changeCount();
  }

  //圆点随着图片切换而切换
  function changeCount(){
    for (var i = count.length - 1; i >= 0; i--) {
      if (count[i].id=="active") {
        count[i].id="";
      }
    }
    count[index-1].id='active';
  }

  //点击原点时跳转
  for (let i = count.length - 1; i >= 0; i--) {
    count[i].onclick=function(){
      if (animated) {
        return;
      }
      if(this.id=="active") {
        return;
      }
      var num=parseInt(this.getAttribute('value'))-index;
      index=parseInt(this.getAttribute('value'));
      animate(-imgWidth*num);
      changeCount();
    }
  }

  //自动轮播
  function play(){
    Timer=setInterval(function(){
      next.onclick();
    },2000);
  }
  play();

  function stop(){
    btn.style.display='block';
    clearInterval(Timer);
  };
  wrap.onmouseenter=stop;
  //鼠标移动上去时，停止轮播
  wrap.onmouseleave=function(){
    play();
    btn.style.display='none';
  };
}
slider();




var cheapBox=document.getElementsByClassName('goods-cheap')[0];
var cheapImgBox=document.getElementsByClassName('img-list_1')[0];
var goodsCheapItem=document.getElementsByClassName('goods-cheap-item');
var clickBtnLeft=document.getElementsByClassName('click-btn-left')[0];
var clickBtn=document.getElementsByClassName('click-btn')[0];
var clickBtnRight=document.getElementsByClassName('click-btn-right')[0];
var index_1=0;
var Timer_1;

clickBtnRight.onclick=function(){
  index_1+=1;
  if (index_1>2) {
    index_1=0;
  }
  changeImg();
}
function changeImg(){
  for (var i = goodsCheapItem.length - 1; i >= 0; i--) {
    if (goodsCheapItem[i].id=='goods-cheap-active') {
      goodsCheapItem[i].removeAttribute('id');
    }
  }
  goodsCheapItem[index_1].id='goods-cheap-active';
};
cheapBox.onmouseenter=function(){
  clickBtn.style.display='block';
}
cheapBox.onmouseleave=function(){
  clickBtn.style.display='none';
}
//滑动动画
// function animate_1(offset){
//   // animated_1=true;
//   var nowLeft=parseInt(cheapImgBox.offsetLeft)+offset;
//   var time=2000;//位移总时间
//   var interval=15;//位移间隔时间
//   var speed=offset/(time/interval);//每次位移量
//   //开始动画

//   function go(){
//     if (speed<0&&parseInt(cheapImgBox.offsetLeft)>nowLeft) {
//       cheapImgBox.style.left=parseInt(cheapImgBox.offsetLeft)+speed+"px";
//       setTimeout(go,interval);
//     }else{   
//       // animated=false;
//       cheapImgBox.style.left=nowLeft+"px";
//       if (nowLeft<-240*11) {
//         cheapImgBox.style.left=0+"px";
//       }
//     }
//   }
//   go();
// }

// function nextImg(){
//   // if (animated_1) {
//   //     return;
//   // }
//   if (index_1 == 10) {
//       index_1 = 1;
//   }else {
//       index_1 += 1;
//   }
//   animate_1(-240);
// }

// //自动轮播
//   Timer_1=setInterval(function(){
//     nextImg();
//   },2000);

  // //取消轮播
  // cheapBox.onmouseenter=function(){
  //   clearInterval(Timer_1);
  // }
  // //恢复轮播
  // cheapBox.onmouseleave=function(){
  //   Timer_1=setInterval(function(){
  //     nextImg();
  //   },2000);
  // }