var $help=$('.help');
var $footer=$('footer');
//加载帮助
function loadHelp() {
	var b=isVisible($($help));
	if (b) {
		setTimeout(function(){
           $('.help').find('img').hide(); 
           $('.help').find('ul').show();
        },2000);
	}
};

function loadFooter() {
	var b=isVisible($($footer));
	if (b) {
		setTimeout(function(){
           $('footer').find('img').hide(); 
           $('footer').find('.footer-contanier').show();
        },2000);
	}
};