var COOKIEKEY = 'COOKIEKEY';
var APPID = 'wx84abb0b47a14c3fb';
var RETURNPAGE = "RETURNPAGE";
var common = {

	//动态改变根元素的字体大小
	//rem
	recalc: function() {
		var clientWidth = document.documentElement.clientWidth;
		if(!clientWidth) return;
		document.documentElement.style.fontSize = 20 * (clientWidth / 640) + "px";
	},

	initRecalc: function() {
		this.recalc();
		var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
		if(!document.addEventListener) return;
		window.addEventListener(resizeEvt, this.recalc, false);
		document.addEventListener('DOMContentLoaded', this.recalc, false);
	},
	loadSlide: function() {
		var mySwiper = new Swiper('.swiper-container', { //轮播图方法
			direction: 'horizontal',
			loop: true,
			autoplay: 5000, //

			// 如果需要分页器
			pagination: '.swiper-pagination',
			//
			//          // 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			//
			//          // 如果需要滚动条
			//          scrollbar: '.swiper-scrollbar',
		})
	},
	addtoShopCart: function(val) {
		$(".shopcart").on('click', function(e) {

			$("#add-shopcart").popup();
		});
	},
	jianClick: function() {
		$("#jian").on('click', function(e) {
			let amount = Number($("#amount").text());
			let val = Number($("#count").text());
			if(val == 1) {
				return;
			}
			if(val <= amount) {
				$("#jia").removeClass('noneactive');
			}
			if(val == 1) {
				$("#jian").addClass('noneactive');
			}
			$("#count").text(val - 1);
		});
	},

	jiaClick: function() {
		$("#jia").on('click', function(e) {
			let amount = Number($("#amount").text());
			let val = Number($("#count").text());
			if(val == amount) {
				return;
			}
			if(val == amount - 1) {
				$("#jia").addClass('noneactive');
			}
			$("#count").text(val + 1);
			$("#jian").removeClass('noneactive');
		});
	},
	closeClick: function() {
		$(".close").on('click', function(e) {
			$.closePopup()
		});
	},
	//得到页面URL参数
	getUrlParam: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象  
		var r = window.location.search.substr(1).match(reg); // 匹配目标参数  
		if(r != null) return unescape(r[2]);
		return null; // 返回参数值  
	},
	//获取openid
	getOpenId: function() {
		//return "osCI90cXzUyKJXk11UihtaVdZR5Q";
		let arr, reg = new RegExp("(^| )" + COOKIEKEY + "=([^;]*)(;|$)");　　
		return(arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
	},
	setCookie: function(name, value) {
		let Days = 1;
		let exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},
	setAuthCookie: function(value) {
		let Days = 1;
		let exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = COOKIEKEY + "=" + escape(value) + ";expires=" + exp.toGMTString();
	},
	/**
	 * 检查用户是否登陆
	 */
	checkFunction: function() {
		let key = this.getOpenId();
		if(key == null || key.trim().length == 0) {
			window.location = 'http://wxdshop.com/fruitshop/loginCheck.html?' + RETURNPAGE + "=" + window.location.href; 
			//window.location = 'http://wxdshop.com/wxd-fruit/wechat/oauth/authorize?returnUrl=' + window.location.href;
			
		}
	},
	phoneUtil: function(phone) {
		//手机号正则
		let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
		if(!phoneReg.test(phone)) {

			return false;

		} else {
			return true;
		}
	},
	countDown: function(intDiff) {
		let day = 0,
			hour = 0,
			minute = 0,
			second = 0; //时间默认值        
		if(intDiff > 0) {
			day = Math.floor(intDiff / (60 * 60 * 24));
			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		if(minute <= 9) minute = '0' + minute;
		if(second <= 9) second = '0' + second;
		
		return day+'天'+hour+"小时"+minute+"分"+second+"秒"
	},
	timestampToDate:function(nS){
		return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
	}
}
