(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["News"],{"03e1":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-news"},[n("h2",[t._v("热门资讯")]),n("div",{staticClass:"list"},[n("ul",t._l(t.newsList,(function(e,s){return n("li",{key:s},[n("router-link",{attrs:{to:"/n/d/"+e.id}},[n("span",[t._v(" "+t._s(s+1)+" ")]),t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},i=[],a={data:function(){return{newsList:[]}},mounted:function(){var t=this,e={category_id:2};this.$httpApi.newsListApi(e).then((function(e){200===e.code&&(t.newsList=e.data.news_list)}))}},r=a,o=(n("75e8"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"1951526a",null);e["a"]=c.exports},"48a8":function(t,e,n){},"4a14":function(t,e,n){"use strict";n("48a8")},"4d5b":function(t,e,n){},"4e51":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("rentImg",{attrs:{url:t.item.img,alt:t.item.title}}),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id,tag:"h3"}},[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.description))]),n("span",[t._v(t._s(t.item.created_at?t.item.created_at.split(" ")[0]:""))]),n("router-link",{attrs:{to:t.cUrl+"/"+t.item.id}},[t._v("查看详情")])],1)},i=[],a={props:{item:Object,cUrl:String}},r=a,o=(n("51d1"),n("2877")),c=Object(o["a"])(r,s,i,!1,null,"32a2cc99",null);e["a"]=c.exports},"517c":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details-side"},[n("h3",[t._v(t._s(t.recommendType.title))]),n("div",{staticClass:"recommend"},t._l(t.recommendList,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{staticClass:"a-img",attrs:{to:t.recommendType.link+e._id}},[n("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.title}})],1),n("router-link",{attrs:{to:"/",tag:"strong"}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.price)+" "),n("em",[t._v(t._s(t.recommendType.unit))])])],1)})),0),n("Consultant"),t._m(0),n("div",{staticClass:"message"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?n("i",[t._v("请输入您的称呼")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?n("i",[t._v("请输入您的联系电话")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?n("i",[t._v("请输入您的邮箱地址")]):t._e(),n("p",[n("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),n("a",{on:{click:t.agreementClick}},[t._v("《新加坡看公寓网用户协议》")])]),t.fromErr.protocol?n("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),n("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("立即咨询")]],2)]),t.submitStatus?n("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e(),t.agreementStatus?n("Agreement",{on:{close:function(e){t.agreementStatus=!1}}}):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("给TA留言"),n("i",[t._v("提交咨询请求，30分钟内回复")])])}],a=(n("b0c0"),n("a34f")),r=n("570b"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agreement"},[n("div",{staticClass:"content popup-animat"},[n("span",{staticClass:"close",on:{click:t.closeSuccess}}),n("h1",[t._v("新加坡看公寓网用户协议")]),t._m(0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sc"},[n("h2",[t._v("任何使用新加坡看公寓网服务的用户均应仔细阅读本协议：")]),n("h3",[t._v("1、使用规则")]),n("p",[t._v("用户在使用新加坡看公寓网网络服务过程中，必须遵循以下原则：")]),n("p",[t._v("(a) 遵守所有的法律和法规；")]),n("p",[t._v("(b) 不得为任何非法目的而使用网络服务系统；")]),n("p",[t._v("(c) 遵守所有与网络服务有关的网络协议、规定和程序；")]),n("p",[t._v("(d) 不得利用新加坡看公寓网网络服务系统进行任何可能对互联网的正常运转造成不利影响的行为；")]),n("p",[t._v("(e) 不得利用新加坡看公寓网网络服务系统传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；")]),n("p",[t._v("(f) 不得利用新加坡看公寓网网络服务系统进行任何不利于新加坡看公寓网的行为；")]),n("p",[t._v("(g) 如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告新加坡看公寓网。")]),n("p",[t._v("(h)用户必须保证其发布信息的真实性，并承担相关责任，该等法律责任与新加坡看公寓网无关。用户应承担任何有可能产生的民事侵权或刑事法律责任，本网站之法律声明的修改权、更新权及最终解释权均属于新加坡看公寓网所有。")]),n("h3",[t._v("2、内容所有权")]),n("p",[t._v("(a)新加坡看公寓网提供的网络服务内容可能包括：文字、图片、图表等。所有这些内容受版权、商标和其它财产所有权法律的保护。")]),n("p",[t._v("(b) 用户只有在获得新加坡看公寓网或其他相关权利人的授权之后才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。")]),n("h3",[t._v("3、隐私保护")]),n("p",[t._v("3.1 保护用户隐私是新加坡看公寓网的一项基本政策，新加坡看公寓网保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在新加坡看公寓网的非公开内容，但下列情况除外：")]),n("p",[t._v("(a) 事先获得用户的明确授权；")]),n("p",[t._v("(b) 根据有关的法律法规要求；")]),n("p",[t._v("(c) 按照相关政府主管部门的要求；")]),n("p",[t._v("(d) 为维护社会公众的利益；")]),n("p",[t._v("(e) 为维护新加坡看公寓网的合法权益")])])}],l={methods:{closeSuccess:function(){this.$emit("close")}}},u=l,m=(n("8281"),n("2877")),d=Object(m["a"])(u,o,c,!1,null,"9a86cb10",null),f=d.exports,p={components:{Consultant:a["a"],SubmitSuccess:r["a"],Agreement:f},props:{proTitle:String},data:function(){return{recommendList:[],submitStatus:!1,submitLoad:!1,agreementStatus:!1,fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},computed:{recommendType:function(){var t={"second-hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/",unit:"万"},"new-house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/",unit:"万起"},renting:{title:"租房推荐",type:"renting",link:"/c/renting/"}};return t[this.$route.params.category]||{title:"房产推荐",type:"new_house",link:"/c/new-house/",unit:"万起"}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},agreementClick:function(){this.agreementStatus=!this.agreementStatus},submitInfo:function(){var t=this;for(var e in this.fromErr){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var n={email_title:"房产咨询",advisory_source:this.proTitle,message:this.fromInfo.message,name:this.fromInfo.name,tel:this.fromInfo.tel,email:this.fromInfo.email,protocol:this.fromInfo.protocol};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(n).then((function(e){if(200===e.code)for(var n in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[n]=""})))}},mounted:function(){var t=this,e={type:this.recommendType.type};this.$httpApi.categoryRecommendApi(e).then((function(e){200===e.code&&(t.recommendList=e.data.recommend)}))}},v=p,_=(n("6cad"),Object(m["a"])(v,s,i,!1,null,"546f8a4b",null));e["a"]=_.exports},"51d1":function(t,e,n){"use strict";n("91c7")},"52de":function(t,e,n){},5884:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[n("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),n("div",{staticClass:"content clearfix w1200px"},[n("div",{staticClass:"nav-menu"},t._l(t.newsMenu,(function(e,s){return n("router-link",{key:s,attrs:{to:e.url}},[n("i",[t._v(t._s(e.name))])])})),1),0===t.newsList.length?n("Loading"):t._e(),t.newsList.length>0?[n("div",{staticClass:"left"},[n("NewsBanner",{attrs:{newsBanner:t.bannerNewsList}}),n("div",{staticClass:"list"},[n("h2",[t._v(t._s(t.breadcrumb[0].name))]),t._l(t.newsList,(function(e,s){return n("NewsItem",{key:s,attrs:{item:e,cUrl:t.breadcrumb[0].url}})}))],2)],1),n("div",{staticClass:"right"},[n("HotNews"),n("DetailsRecommend",{attrs:{proTitle:t.breadcrumb[0].name}})],1)]:t._e()],2)],1)},i=[],a=(n("fb6a"),n("b0c0"),n("8499")),r=n("517c"),o=n("03e1"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-banner"},[n("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.newsBanner,(function(e,s){return n("div",{key:s,staticClass:"item"},[n("router-link",{attrs:{to:"/n/d"+e.id}},[n("h3",[t._v(t._s(e.title))]),n("rentImg",{staticClass:"img-object",attrs:{url:e.img,alt:e.title}})],1)],1)})),0)],1)},l=[],u=n("a7ab"),m=n.n(u),d=(n("7b8d"),n("6a2c"),{components:{VueSlickCarousel:m.a},props:{newsBanner:Array},data:function(){return{settings:{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0}}}}),f=d,p=(n("de83"),n("7eff"),n("2877")),v=Object(p["a"])(f,c,l,!1,null,"4abe4748",null),_=v.exports,h=n("4e51"),w=n("0e17"),b={components:{BreadcrumbList:a["a"],DetailsRecommend:r["a"],HotNews:o["a"],NewsBanner:_,NewsItem:h["a"],Loading:w["a"]},data:function(){return{newsList:[],bannerNewsList:[],newsMenu:[{name:"买房必看",url:"/n/must-see",id:1},{name:"产权交易",url:"/n/property",id:3},{name:"常见问题",url:"/n/faq",id:4},{name:"购房指南",url:"/n/guide",id:5}]}},computed:{breadcrumb:function(){var t={"must-see":{id:1,name:"买房必看",url:"/n/must-see"},property:{id:3,name:"产权交易",url:"/n/property"},faq:{id:4,name:"常见问题",url:"/n/faq"},guide:{id:5,name:"购房指南",url:"/n/guide"}};return[t[this.$route.params.name]]}},mounted:function(){var t=this,e={category_id:this.breadcrumb[0].id};this.$httpApi.newsListApi(e).then((function(e){200===e.code&&(0===t.bannerNewsList.length&&(t.bannerNewsList=e.data.news_list.slice(0,4)),t.newsList=e.data.news_list)}))}},g=b,C=(n("9dee"),Object(p["a"])(g,s,i,!1,null,"00e6eacf",null));e["default"]=C.exports},"58db":function(t,e,n){},"6cad":function(t,e,n){"use strict";n("4d5b")},7479:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),n("div",{staticClass:"content clearfix w1200px"},[t.newsData.title?[n("div",{staticClass:"left"},[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.newsData.title))]),n("p",[t._v("发布时间："+t._s(t.newsData.created_at.split(" ")[0])+" 阅读次数："+t._s(t.newsData.read_count)+"次")])]),n("div",{staticClass:"new-html",domProps:{innerHTML:t._s(t.newsContent)}}),n("div",{staticClass:"context mt80"},[t.prevNews.title?n("p",[t._v("上一篇："),n("router-link",{attrs:{to:"/n/"+t.newsType+"/"+t.prevNews.id}},[t._v(t._s(t.prevNews.title))])],1):t._e(),t.nextNews.title?n("p",[t._v("下一篇："),n("router-link",{attrs:{to:"/n/"+t.newsType+"/"+t.nextNews.id}},[t._v(t._s(t.nextNews.title))])],1):t._e()]),n("div",{staticClass:"related"},[n("h2",[t._v("相关推荐")]),t._l(t.recommendNews,(function(e,s){return n("NewsItem",{key:s,attrs:{item:e,cUrl:"/n/"+t.newsType}})}))],2)]),n("div",{staticClass:"right"},[n("HotNews"),n("DetailsRecommend",{attrs:{proTitle:t.newsData.title}})],1)]:n("Loading")],2)],1)},i=[],a=(n("b0c0"),n("ac1f"),n("5319"),n("8499")),r=n("517c"),o=n("03e1"),c=n("4e51"),l=n("0e17"),u={components:{BreadcrumbList:a["a"],DetailsRecommend:r["a"],HotNews:o["a"],NewsItem:c["a"],Loading:l["a"]},data:function(){return{newsData:{},prevNews:{},nextNews:{},newsContent:"",recommendNews:[],newsType:this.$route.params.name}},computed:{breadcrumb:function(){var t={"must-see":{id:1,name:"买房必看",url:"/n/must-see"},property:{id:3,name:"产权交易",url:"/n/property"},faq:{id:4,name:"常见问题",url:"/n/faq"},guide:{id:5,name:"购房指南",url:"/n/guide"}};return[t[this.$route.params.name],{url:this.$route.path,name:this.newsData.title}]}},mounted:function(){var t=this,e={id:this.$route.params.id};this.$httpApi.newsDetailsApi(e).then((function(e){200===e.code&&(t.newsData=e.data.news,t.newsContent=e.data.news.content.replace(/\/images\/default/g,"https://cms.kangongyu.cn/images/default/"),t.prevNews=e.data.prev_news||{},t.nextNews=e.data.next_news||{})})),this.$httpApi.recommendNewsApi().then((function(e){200===e.code&&(t.recommendNews=e.data.recommend_news_list)}))}},m=u,d=(n("4a14"),n("2877")),f=Object(d["a"])(m,s,i,!1,null,"c3979232",null);e["default"]=f.exports},"75e8":function(t,e,n){"use strict";n("7643")},7643:function(t,e,n){},"7eff":function(t,e,n){"use strict";n("ce6d")},8281:function(t,e,n){"use strict";n("58db")},"91c7":function(t,e,n){},"9dee":function(t,e,n){"use strict";n("b61d")},b61d:function(t,e,n){},ce6d:function(t,e,n){},de83:function(t,e,n){"use strict";n("52de")},fb6a:function(t,e,n){"use strict";var s=n("23e7"),i=n("861d"),a=n("e8b5"),r=n("23cb"),o=n("50c4"),c=n("fc6a"),l=n("8418"),u=n("b622"),m=n("1dde"),d=n("ae40"),f=m("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),_=[].slice,h=Math.max;s({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var n,s,u,m=c(this),d=o(m.length),f=r(t,d),p=r(void 0===e?d:e,d);if(a(m)&&(n=m.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return _.call(m,f,p);for(s=new(void 0===n?Array:n)(h(p-f,0)),u=0;f<p;f++,u++)f in m&&l(s,u,m[f]);return s.length=u,s}})}}]);
//# sourceMappingURL=News.407e7a5f.js.map