(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"7acb":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search"},[e("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),e("SearchBox"),t.total<0||t.pageLoading?e("Loading"):e("ProductList",{attrs:{productData:t.productData,total:t.total,categoryLink:t.breadcrumb[0]?t.breadcrumb[1].url:""}}),t.total>10?e("Pagination",{attrs:{total:t.total},on:{clickPage:t.clickPage}}):t._e()],1)},o=[],u=(e("ac1f"),e("841c"),e("8499")),n=e("50b3"),s=e("828e"),i=e("3e64"),c=e("0e17"),h={name:"search",components:{BreadcrumbList:u["a"],SearchBox:n["a"],ProductList:s["a"],Pagination:i["a"],Loading:c["a"]},data:function(){return{productData:[],total:-1,page:1,pageLoading:!1}},computed:{breadcrumb:function(){var t={"new-house":{url:this.$route.fullPath,name:"新楼盘",type:"new_house"},renting:{url:this.$route.fullPath,name:"狮城租房",type:"rented_house"},"second-hand":{url:this.$route.fullPath,name:"二手公寓",type:"second_hand_house"}};return[{name:"搜索",url:this.$route.fullPath},t[this.$route.params.search]]}},methods:{clickPage:function(t){t+=1;var a=this.$route.path;this.$router.push({path:a,query:{page:t}}),this.getSearchList(t)},getSearchList:function(t){var a=this;this.page=t;var e=this.$route.query.keyword,r={page:this.page,size:10,type:this.breadcrumb[1].type,keyword:e};this.pageLoading=!0,this.$httpApi.search(r).then((function(t){a.productData=t.data.houses,a.total=t.data.total||t.data.houses.length,a.pageLoading=!1}))}},mounted:function(){var t=this.$route.query.page||1;this.getSearchList(t)}},d=h,l=e("2877"),p=Object(l["a"])(d,r,o,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=search.6cc29e9c.js.map