"use strict";

(function(){

	var homeElem = document.getElementsByClassName('home')[0];
	var readMore = document.querySelectorAll('.home a')[0];
	
	function assignWindowHeight(){
		var windowHeight =  window.innerHeight + 'px';
		homeElem.style.height = windowHeight;
	}
	if(window.innerHeight < 768) {
		assignWindowHeight();
		window.onresize = function(){
			assignWindowHeight()
		};
	}

	var readMoreBtn = document.getElementsByClassName('show')[0];
	var desc = document.getElementsByClassName('desc')[0];

	readMoreBtn.onclick = function(){
		window.scrollTo(0, desc.offsetTop);
		return false;
	}

	var pan1 = document.getElementsByClassName('pan')[0];
	var pan2 = document.getElementsByClassName('pan')[1];
	var loadMore = document.getElementsByClassName('load')[0];
	//var imageSet = ['images/osm-residents-responsive.gif','images/projector-lamps.gif','images/sindhu-sadan.gif','images/gsk-mint.gif','images/pcfm-inner.gif','images/walls-basket.gif','images/walls-basket.gif']
	/*loadMore.onclick = function(){
		for(var i = 0;i < imageSet.length; i+=2) {
			pan1.innerHTML += "<figure><img src='"+imageSet[i]+"'></figure>";
			pan2.innerHTML += '<figure><img src="'+imageSet[i+1]+'"></figure>';
		}
		return false;
	};*/

})();