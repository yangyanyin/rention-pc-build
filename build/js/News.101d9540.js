(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["News"],{"03e1":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-news"},[n("h2",[t._v("热门资讯")]),n("div",{staticClass:"list"},[n("ul",t._l(t.newsList,(function(e,s){return n("li",{key:s},[n("router-link",{attrs:{to:"/n/d/"+e.id}},[n("span",[t._v(" "+t._s(s+1)+" ")]),t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},i=[],a={data:function(){return{newsList:[]}},mounted:function(){var t=this,e={category_id:2};this.$httpApi.newsListApi(e).then((function(e){200===e.code&&(t.newsList=e.data.news_list)}))}},r=a,o=(n("75e8"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"1951526a",null);e["a"]=c.exports},"05f0":function(t,e,n){"use strict";n("be76")},"154e":function(t,e,n){},"277c":function(t,e,n){"use strict";n("6656")},2873:function(t,e,n){"use strict";n("154e")},"4e51":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("rentImg",{attrs:{url:t.item.img,alt:t.item.title}}),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id,tag:"h3"}},[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.description))]),n("span",[t._v(t._s(t.item.created_at?t.item.created_at.split(" ")[0]:""))]),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id}},[t._v("查看详情")])],1)},i=[],a={props:{item:Object,cUrl:String}},r=a,o=(n("51d1"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"32a2cc99",null);e["a"]=c.exports},"517c":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details-side"},[n("h3",[t._v(t._s(t.recommendType.title))]),n("div",{staticClass:"recommend"},t._l(t.recommendList,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{staticClass:"a-img",attrs:{to:t.recommendType.link+e._id}},[n("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.title}})],1),n("router-link",{attrs:{to:"/",tag:"strong"}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.price)+" "),n("em",[t._v(t._s(t.recommendType.unit))])])],1)})),0),n("Consultant"),t._m(0),n("div",{staticClass:"message"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?n("i",[t._v("请输入您的称呼")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?n("i",[t._v("请输入您的联系电话")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?n("i",[t._v("请输入您的邮箱地址")]):t._e(),n("p",[n("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),n("router-link",{attrs:{to:"/protocol"}},[t._v("《新加坡看公寓网用户协议》")])],1),t.fromErr.protocol?n("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),n("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("立即咨询")]],2)]),t.submitStatus?n("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("给TA留言"),n("i",[t._v("提交咨询请求，30分钟内回复")])])}],a=(n("b0c0"),n("a34f")),r=n("570b"),o={components:{Consultant:a["a"],SubmitSuccess:r["a"]},data:function(){return{recommendList:[],submitStatus:!1,submitLoad:!1,fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},computed:{recommendType:function(){var t={"second-hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/",unit:"万"},"new-house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/",unit:"万起"},renting:{title:"租房推荐",type:"renting",link:"/c/renting/"}};return t[this.$route.params.category]||{title:"房产推荐",type:"new_house",link:"/c/new-house/",unit:"万起"}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},submitInfo:function(){var t=this;for(var e in this.fromErr){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var n={message:this.fromInfo.message,name:this.fromInfo.name,tel:this.fromInfo.tel,email:this.fromInfo.email,protocol:this.fromInfo.protocol};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(n).then((function(e){if(200===e.code)for(var n in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[n]=""})))}},mounted:function(){var t=this,e={type:this.recommendType.type};this.$httpApi.categoryRecommendApi(e).then((function(e){200===e.code&&(t.recommendList=e.data.recommend)}))}},c=o,l=(n("277c"),n("2877")),u=Object(l["a"])(c,s,i,!1,null,"6fbee0cf",null);e["a"]=u.exports},"51d1":function(t,e,n){"use strict";n("91c7")},5884:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),n("div",{staticClass:"content clearfix w1200px"},[0===t.newsList.length?n("Loading"):t._e(),t.newsList.length>0?[n("div",{staticClass:"left"},[n("NewsBanner",{attrs:{newsBanner:t.bannerNewsList}}),n("div",{staticClass:"list"},[n("h2",[t._v(t._s(t.breadcrumb[0].name))]),t._l(t.newsList,(function(e,s){return n("NewsItem",{key:s,attrs:{item:e,cUrl:t.breadcrumb[0].url}})}))],2)],1),n("div",{staticClass:"right"},[n("HotNews"),n("DetailsRecommend")],1)]:t._e()],2)],1)},i=[],a=(n("fb6a"),n("b0c0"),n("8499")),r=n("517c"),o=n("03e1"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-banner"},[n("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.newsBanner,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{attrs:{to:"/n/d"+e.id}},[n("h3",[t._v(t._s(e.title))]),n("img",{staticClass:"img-object",attrs:{src:e.img,alt:e.title}})])],1)})),0)],1)},l=[],u=n("a7ab"),m=n.n(u),d=(n("7b8d"),n("6a2c"),{components:{VueSlickCarousel:m.a},props:{newsBanner:Array},data:function(){return{settings:{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0}}}}),f=d,p=(n("d2e0"),n("7eff"),n("2877")),v=Object(p["a"])(f,c,l,!1,null,"0ed96236",null),_=v.exports,h=n("4e51"),w=n("0e17"),b={components:{BreadcrumbList:a["a"],DetailsRecommend:r["a"],HotNews:o["a"],NewsBanner:_,NewsItem:h["a"],Loading:w["a"]},data:function(){return{newsList:[],bannerNewsList:[]}},computed:{breadcrumb:function(){var t={"must-see":{id:1,name:"买房必看",url:"/n/must-see"},property:{id:3,name:"产权交易",url:"/n/property"},faq:{id:4,name:"常见问题",url:"/n/faq"},guide:{id:5,name:"购房指南",url:"/n/guide"}};return[t[this.$route.params.name]]}},mounted:function(){var t=this,e={category_id:this.breadcrumb[0].id};this.$httpApi.newsListApi(e).then((function(e){200===e.code&&(0===t.bannerNewsList.length&&(t.bannerNewsList=e.data.news_list.slice(0,4)),t.newsList=e.data.news_list)}))}},g=b,C=(n("05f0"),Object(p["a"])(g,s,i,!1,null,"ffad4d2c",null));e["default"]=C.exports},6656:function(t,e,n){},7479:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),n("div",{staticClass:"content clearfix w1200px"},[t.newsData.title?[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.newsData.title))]),n("p",[t._v("发布时间："+t._s(t.newsData.created_at.split(" ")[0])+" 阅读次数："+t._s(t.newsData.read_count)+"次")])]),n("div",{staticClass:"new-html",domProps:{innerHTML:t._s(t.newsData.content)}}),n("div",{staticClass:"context mt80"},[t.prevNews.title?n("p",[t._v("上一篇："),n("router-link",{attrs:{to:"/n/d/"+t.prevNews.id}},[t._v(t._s(t.prevNews.title))])],1):t._e(),t.nextNews.title?n("p",[t._v("下一篇："),n("router-link",{attrs:{to:"/n/d/"+t.nextNews.id}},[t._v(t._s(t.nextNews.title))])],1):t._e()]),n("div",{staticClass:"related"},[n("h2",[t._v("相关推荐")]),t._l(t.recommendNews,(function(t,e){return n("NewsItem",{key:e,attrs:{item:t}})}))],2)]),n("div",{staticClass:"right"},[n("HotNews"),n("DetailsRecommend")],1)]:n("Loading")],2)],1)},i=[],a=(n("b0c0"),n("8499")),r=n("517c"),o=n("03e1"),c=n("4e51"),l=n("0e17"),u={components:{BreadcrumbList:a["a"],DetailsRecommend:r["a"],HotNews:o["a"],NewsItem:c["a"],Loading:l["a"]},data:function(){return{newsData:{},prevNews:{},nextNews:{},recommendNews:[]}},computed:{breadcrumb:function(){var t={"must-see":{id:1,name:"买房必看",url:"/n/must-see"},property:{id:3,name:"产权交易",url:"/n/property"},faq:{id:4,name:"常见问题",url:"/n/faq"},guide:{id:5,name:"购房指南",url:"/n/guide"}};return[t[this.$route.params.name],{url:this.$route.path,name:this.newsData.title}]}},mounted:function(){var t=this,e={id:this.$route.params.id};this.$httpApi.newsDetailsApi(e).then((function(e){200===e.code&&(t.newsData=e.data.news,t.prevNews=e.data.prev_news||{},t.nextNews=e.data.next_news||{})})),this.$httpApi.recommendNewsApi().then((function(e){200===e.code&&(t.recommendNews=e.data.recommend_news_list)}))}},m=u,d=(n("2873"),n("2877")),f=Object(d["a"])(m,s,i,!1,null,"ccf4f992",null);e["default"]=f.exports},"75e8":function(t,e,n){"use strict";n("7643")},7643:function(t,e,n){},"7eff":function(t,e,n){"use strict";n("ce6d")},"91c7":function(t,e,n){},be76:function(t,e,n){},ce6d:function(t,e,n){},d1ec:function(t,e,n){},d2e0:function(t,e,n){"use strict";n("d1ec")},fb6a:function(t,e,n){"use strict";var s=n("23e7"),i=n("861d"),a=n("e8b5"),r=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),m=n("1dde"),d=n("ae40"),f=m("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),_=[].slice,h=Math.max;s({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var n,s,u,m=c(this),d=o(m.length),f=r(t,d),p=r(void 0===e?d:e,d);if(a(m)&&(n=m.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return _.call(m,f,p);for(s=new(void 0===n?Array:n)(h(p-f,0)),u=0;f<p;f++,u++)f in m&&l(s,u,m[f]);return s.length=u,s}})}}]);
//# sourceMappingURL=News.101d9540.js.map