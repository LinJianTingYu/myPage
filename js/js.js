// 移动至项目单列时，显示打开项目
 var projects={
 	projectList : $(".project-list .project-item"),
    // projectItem
 }

 projects.projectList.each((index,ele)=>{
 	$(ele).on('mouseenter',function( ){
	 	var span=document.createElement("span");
	 	$(span).text("点击查看完整项目");
	 	$(span)[0].className="readMore";
	 	$(span).css({
	 		// "width":"100px",
	 		"position":"absolute",
	 		"top":"50%",
	 		"left":"50%",
	 		"font-size":"20px",
	 		"color":"red",
	 		"transform": "translate(-50%,-50%)"
	 	});
	 	$(ele).append($(span));
	}).on("mouseleave",function(){
        $(".readMore").remove();
	})
 })