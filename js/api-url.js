
common.checkFunction();
$(function() {
	//初始化rem
    common.initRecalc();

})
var baseUrl='https://wxdshop.com/wxd-fruit';
var wechatUrl='https://wxdshop.com/';
var wxUrl='https://wxdshop.com';
var baseProductHref = "/wxd-fruit/fruitshop/main/product/product.html?id=";
var baseCatagoryHref="category-detail.html?mainId=";
var baseGroupProductHref = "/wxd-fruit/fruitshop/main/groupbuy/group-product.html?id=";

var api={

    URL: {
        
        noparam: function () {
            return baseUrl+'/movie/top250';
        },
        hasparams: function (start,count) {
            return baseUrl+'/movie/top250?start='+start+'&count='+count;
        },

          getIndexData: function (start,count) {
            return  baseUrl+'api/index/';
        },
    },

}
