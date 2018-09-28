//当滑动至购物车上时，显示下拉菜单
$('.father-num').on('mouseenter',function(){
    cartChange($(this));
});
function cartChange(elem){
	var goodsNum=parseInt(elem.text());
	if (goodsNum==0) {
		$(".section-shopcar-dropdown-No").show();
	}else{
		$(".section-shopcar-dropdown").show();
		var $unitPrice=$('.unit-price'),
		    $unitPriceNum=$('.unit-price-num'),
		    $allGoodsNum=0,
		    $goodsNum=0;
		for (let i = $unitPriceNum.length - 1; i >= 0; i--) {
		    $allGoodsNum+=parseInt($unitPriceNum[i].innerText);
            $goodsNum+=parseInt($unitPriceNum[i].innerText)*parseInt($unitPrice[i].innerText);
		}    
		$('.goods-sum').text($goodsNum);
		$('.goods-num').text($allGoodsNum);
		elem.text($('.goods-num').text());
	}
}

//鼠标滑出时,隐藏购物车下拉
$('.section-shopcar').on('mouseleave',function(){
	$(".section-shopcar-dropdown-No").hide();
	$(".section-shopcar-dropdown").hide();
});

//点击删除按钮，商品取消，购物车内容发生变化
$('.delgoods').on('click',function(){
	$(this).parent().remove();
	//购物车内容改变
	shopCartChanged();
});
//购物车内容改变具体函数
function shopCartChanged(){
	var $unitPrice=$('.unit-price'),
	    $unitPriceNum=$('.unit-price-num'),
	    $allGoodsNum=0,
	    $goodsNum=0;
	for (let i = $unitPriceNum.length - 1; i >= 0; i--) {
	    $allGoodsNum+=parseInt($unitPriceNum[i].innerText);
        $goodsNum+=parseInt($unitPriceNum[i].innerText)*parseInt($unitPrice[i].innerText);
	}    
	$('.goods-sum').text($goodsNum);
	$('.goods-num').text($allGoodsNum);
	$('.father-num').text($('.goods-num').text());
	if ($allGoodsNum==0) {
		$(".section-shopcar-dropdown").hide();
		$(".section-shopcar-dropdown-No").show();
	}
};