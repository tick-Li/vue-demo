(function($) { 
	//Check whether is ie 
	var browser = navigator.appName;
	if(browser == 'Microsoft Internet Explorer'){
		var bVersion = navigator.appVersion;
		var version = bVersion.split(';');
		var trimVersion = version[1].replace(/[ ]/g, '');
		//Check whether ie is less than 9
		if (trimVersion == 'MSIE8.0' || trimVersion == 'MSIE7.0' || trimVersion == 'MSIE6.0' || trimVersion == 'MSIE5.0') {
			document.title = '珍爱前端-远离IE';
			$('#app').css('display','none');
			$('.check-browser').css('display','block').append(
				'<div id="updateBrower">'+
			    '<h1>你的浏览器版本太低,请升级或更换</h1>'+
			    '<div class="updateBrower-box">'+
			      '<p>推荐浏览器：</p>'+
			      '<ul>'+
			        '<li class="chrome"><p></p><a style="outline:0" href="http://rj.baidu.com/soft/detail/14744.html" target="_blank">Chrome</a></li>'+
			        '<li class="firefox"><p></p><a style="outline:0" href="http://rj.baidu.com/soft/detail/11843.html" target="_blank">FireFox</a></li>'+
			        '<li class="ie"><p></p><a style="outline:0" href="https://www.microsoft.com/zh-cn" target="_blank">IE>=9</a></li>'+
			      '</ul>'+
			      '<p class="bottom">360/搜狗等浏览器建议使用极速模式</p>'+
			    '</div>'+
			  '</div>'
			);
		}else{
			updateBrower();
		}
	}else{
		updateBrower();
	}
})(jQuery);
//Set The Document Title need jquery
function updateBrower(){
	$(function(){
		document.title = $('.router-link-active').text();
		$('.main-content a').click(function(){
		   document.title = $(this).text();
		})
	})
}

