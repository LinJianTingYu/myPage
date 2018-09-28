// var ele={
// 	toTop:document.getElementById('to-top'),
// 	choiced:document.getElementsByClassName('choiced'),
// }

// //返回顶部
// function toTop() {
// 	ele.toTop.addEventListener('click',function(){
// 		scrollTo(0,0);
// 	});
// }
// toTop();
function toTop(){
	
	var timer;
	var NewscrollTop;
	$('#to-top').on('click',function(){
		var $scrollTop=$(window).scrollTop();
		if ($scrollTop==0) {
			return;
		}else{
			timer=setInterval(function(){
				NewscrollTop=$win.scrollTop()-10;
				if (NewscrollTop<0) {
					clearInterval(timer);
				}
				$win.scrollTop(NewscrollTop);
			},10);
		}
	});
}
toTop();


var $floorLeft=$('.floor').offset().left;
$('.elevator').css('left',$floorLeft-50);
$(window).resize(function(){
	$floorLeft=$('.floor').offset().left;
	$('.elevator').css('left',$floorLeft-50);
});
var $elevatorItem=$('.elevator li a');
$elevatorItem.each(function(index,elem){
	$(elem).on('click',function(){
		$('.floor')
	});
});

//电梯变化
//电梯显示
function showElevator(){
	if($(window).scrollTop()>=$('.floor')[0].offsetTop-1){
	    $('.elevator').show();
	}else{
		$('.elevator').hide();
    }
}

var isClick=false;
//电梯楼层的切换
function changeElevatorFloor(){
	$('.floor').each(function(index,elem){
        if ($(window).scrollTop()<$('.floor')[index].offsetTop) {
            if (!isClick) {
            	if (index==0) return;
            	$('.elevator li a').find('.elevator-num').show();
            	$('.elevator li a').find('.elevator-text').hide();
            	$('.elevator li a').removeAttr('id');
            	$('.elevator li a')[index-1].id='choice';
            	$('.elevator li a')[index-1].children[0].style.display="none";
            	$('.elevator li a')[index-1].children[1].style.display="block";
            	return false;
            }else{
            	isClick=false;
        	  	$('.elevator li a').find('.elevator-num').show();
            	$('.elevator li a').find('.elevator-text').hide();
            	$('.elevator li a').removeAttr('id');
            	$('.elevator li a')[index-1].id='choice';
            	$('.elevator li a')[index-1].children[0].style.display="none";
            	$('.elevator li a')[index-1].children[1].style.display="block";
            	return false;
            }
        }
    });
}
$('.elevator li a').each(function(index,elem){
    $(elem).on('click',function(){
    	isClick=true;
    	//点击跳转到对应楼层
    	$(window).scrollTop($('.floor')[index].offsetTop);
        //点击电梯样式更改
    	// $('.elevator li a').find('.elevator-num').show();
    	// $('.elevator li a').find('.elevator-text').hide();
    	// $('.elevator li a').removeAttr('id');
    	// $(this).attr('id','choice');
    	// $(this).find('.elevator-num').hide();
    	// $(this).find('.elevator-text').show();
    });
});
// function isVisible_1($ele){
//     return $(window).scrollTop()<$ele.offset().top;
// };

// function loadelevator(){
//     $('.floor').each(function(index,elem){
//         var b=isVisible_1($(elem));

//         	// console.log(b);
//         if (b) {
//         	// $($elevatorItem[index]).find('.elevator-num').hide();
//         	// $($elevatorItem[index]).find('.elevator-text').show();
//         }
//     });
// }

