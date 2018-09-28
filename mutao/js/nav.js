var $navLi=$('.align-nav li a');
$navLi.on('mouseenter',function () {
	for (let i = $navLi.length - 1; i >= 0; i--) {
	    if ($navLi[i].id=='choice') {
		    $navLi[i].id='';
	    }
    } 	
	this.id='choice';
})

var $verticalNav=$('.vertical-nav');
$verticalNav.on('mouseenter','li',function(){
	var $ele=$(this);
	$ele.css("backgroundColor","white");
	$ele.find('a').css('color','black');

	//按需加载二级菜单
	if ($ele.find('.dropdown-layer').html()) {
		$ele.find('.dropdown-layer').show();
	};
	var url='../json/'+$ele.attr('value')+".json";
	$.ajax({
       url:url,
       dataType:"json",
	}).done(function(data){
		createDropdown(data,$ele);
	});
    // $ele.find('.dropdown-layer').show();
}).on('mouseleave','li',function(){
	$(this).css("backgroundColor",'rgba(240,20,20)');
	$(this).find('a').css('color','white');
	$(this).find('.dropdown-layer').hide();
});

function createDropdown(responseData,$element){
	var html='';
	for (var i = 0 ; i < responseData.length ; i++) {
		html+='<dl class="dropdown-list"><dt class="fl dropdown-list-tittle"><a href="#" target="_blank" class="link">'+responseData[i].title+'</a></dt><dd class="fr dropdown-list-item">';
	    for (var j = responseData[i].items.length - 1; j >= 0; j--) {
	    	html+='<a href="#" target="_blank" class="link">'+responseData[i].items[j]+'</a>';
	    }
	    html+='</dd></dl>';
	}
	$element.find('.dropdown-layer').css('paddingBottom','20px');
    $element.find('.dropdown-layer').html(html);
};
