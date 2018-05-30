/*popupflash 
copryright redwoodwebdesign rewdwoodweb@naver.com
*/
$(function(){
$.fn.popUpSet = function(){
    var ctnWrap = this 
	var mbCtnLilength = ctnWrap.find("ul.mb_ctn > li").length;
	//console.log(ctnWrap.css("height"))
	if(mbCtnLilength < 4){
	ctnWrap.find(".mb_tab").css("height","125px");
	ctnWrap.css("height","500px")
	}
	var tabNum = 1;
	var ctnNum = 1;
	var tabNumHeight = 0;
	var elementItem = ctnWrap;
	var ctnLi = ctnWrap.find(" ul.mb_ctn > li").width();
	var tabLi = ctnWrap.find(".mb_tab > ul > li").width();
	var tabOver = 120;
	elementItem.find(".mb_ctn > li").each(function(i){
	$(this).wrapInner("<a href=''></a>");
	});
	ctnWrap.find(".mb_ctn").css("width",(ctnLi*mbCtnLilength)+"px")
	elementItem.find(".mb_ctn > li > a").attr("target","_parent");
	elementItem.find(".mb_tab > ul > li > a").attr("target","_parent");
	elementItem.find(".mb_tab").prepend("<div class='overTab'></div>");
	elementItem.find(".mb_tab > ul > li").each(function(i){
	$(this).index();
	elementItem.find(".mb_ctn > li:nth-child("+($(this).index()+1)+") a").attr("href",$(this).find("a").attr("href"))
	});


	function mmbTRoll(){
		if(tabNum > mbCtnLilength-1){
		 tabNum = 0;
		}
		if(tabNum > 2 ){
		tabNumHeight = 1;
		ctnNum = tabNum - 3;
		}else{
		tabNumHeight = 0;
		ctnNum = tabNum;
		}
		tabNum = tabNum;
		movingCtn(ctnLi,tabLi,tabNum,ctnNum,tabNumHeight)
		tabNum ++;
		ctnNum ++;
    }


	function setTimerMMTR(){
	 i = setInterval(mmbTRoll,3000);
	 return i;
	}


	var MMTRIv = setTimerMMTR();


	elementItem.find(".mb_tab ul li").mouseenter(function(){
		var indexNum = $(this).index();
		if(indexNum > 2 ){
		tabNumHeight = 1;
		ctnNum = indexNum - 3;
		}else{
		tabNumHeight = 0;
		ctnNum = indexNum;
		}
		tabNum = indexNum;

		elementItem.find(".mb_ctn").clearQueue();
		elementItem.find(".mb_tab").find(".overTab").clearQueue();
		clearInterval(MMTRIv);
		movingCtn(ctnLi,tabLi,tabNum,ctnNum,tabNumHeight);
		/*tab location acition 2016-02-13 start*/
		var hrefTab = $(this).find("a").attr("href");
		elementItem.find(".mb_tab").find(".overTab").click(function(){
				parent.document.location.href = hrefTab;
		})
		elementItem.find(".mb_tab").find(".overTab").css("cursor","pointer");
		/*tab location acition 2016-02-13 end*/
	}).mouseleave(function(){

		mbrINum = $(this).index();
		MMTRIv = setTimerMMTR();

	});



	function movingCtn(mCtn1,mCtn2,mNum1,mNum2,mCtn2Height){
		elementItem.find(".mb_ctn").animate({left:"-"+mCtn1*mNum1+"px"},150,"swing");
		elementItem.find(".mb_tab").find(".overTab").animate({left:mCtn2*mNum2+"px",top:125*mCtn2Height+"px"},150,"swing");
	}


}

/*popupflash*/
$(function(){
$.fn.bigPopUpSet = function(){
    var ctnWrap = this 
	var mbCtnLilength = ctnWrap.find("ul.mb_ctn > li").length;
	//console.log(ctnWrap.css("height"))
	if(mbCtnLilength < 4){
	ctnWrap.find(".mb_tab").css("height","400px");
	ctnWrap.css("height","375px")
	}
	var tabNum = 1;
	var ctnNum = 1;
	var tabNumHeight = 0;
	var elementItem = ctnWrap;
	var ctnLi = ctnWrap.find(" ul.mb_ctn > li").width();
	var tabLi = ctnWrap.find(".mb_tab > ul > li").height();
	var tabOver = 120;
	elementItem.find(".mb_ctn > li").each(function(i){
	$(this).wrapInner("<a href=''></a>");
	});
	ctnWrap.find(".mb_ctn").css("width",(ctnLi*mbCtnLilength)+"px")
	elementItem.find(".mb_ctn > li > a").attr("target","_parent");
	elementItem.find(".mb_tab > ul > li > a").attr("target","_parent");
	elementItem.find(".mb_tab").prepend("<div class='overTab'></div>");
	elementItem.find(".mb_tab > ul > li").each(function(i){
	$(this).index();
	elementItem.find(".mb_ctn > li:nth-child("+($(this).index()+1)+") a").attr("href",$(this).find("a").attr("href"))
	});


	function mmbTRoll(){
		if(tabNum > mbCtnLilength-1){
		 tabNum = 0;
		}
		if(tabNum > 2 ){
		tabNumHeight = 1;
		ctnNum = tabNum - 3;
		}else{
		tabNumHeight = 0;
		ctnNum = tabNum;
		}
		tabNum = tabNum;
		movingCtn(ctnLi,tabLi,tabNum,ctnNum,tabNumHeight)
		tabNum ++;
		ctnNum ++;
    }


	function setTimerMMTR(){
	 i = setInterval(mmbTRoll,3000);
	 return i;
	}


	var MMTRIv = setTimerMMTR();


	elementItem.find(".mb_tab ul li").mouseenter(function(){
		var indexNum = $(this).index();
		if(indexNum > 2 ){
		tabNumHeight = 1;
		ctnNum = indexNum - 3;
		}else{
		tabNumHeight = 0;
		ctnNum = indexNum;
		}
		tabNum = indexNum;

		elementItem.find(".mb_ctn").clearQueue();
		elementItem.find(".mb_tab").find(".overTab").clearQueue();
		clearInterval(MMTRIv);
		movingCtn(ctnLi,tabLi,tabNum,ctnNum,tabNumHeight)
		/*tab location acition 2016-02-13 start*/
		var hrefTab = $(this).find("a").attr("href");
		elementItem.find(".mb_tab").find(".overTab").click(function(){
				parent.document.location.href = hrefTab;
		})
		elementItem.find(".mb_tab").find(".overTab").css("cursor","pointer");
		/*tab location acition 2016-02-13 end*/
	}).mouseleave(function(){

		mbrINum = $(this).index();
		MMTRIv = setTimerMMTR();

	});



	function movingCtn(mCtn1,mCtn2,mNum1,mNum2,mCtn2Height){
		elementItem.find(".mb_ctn").animate({left:"-"+mCtn1*mNum1+"px"},150,"swing");
		elementItem.find(".mb_tab").find(".overTab").animate({top:mCtn2*mNum2+"px"},150,"swing");
	}


}

});
});