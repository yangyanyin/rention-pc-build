(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["News"],{"03e1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-news"},[s("h2",[t._v("热门资讯")]),s("div",{staticClass:"list"},[s("ul",t._l(10,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:"/"}},[s("span",[t._v(" "+t._s(a+1)+" ")]),t._v(" 刷新历史纪录！疫情之下加拿大12月份的房屋成交量超过1 ")])],1)})),0)])])},r=[],n=(s("b8c9"),s("2877")),i={},o=Object(n["a"])(i,a,r,!1,null,"09f345f4",null);e["a"]=o.exports},"03e5":function(t,e,s){},"0968":function(t,e,s){},"14c0":function(t,e,s){"use strict";s("da47")},"1e7c":function(t,e,s){"use strict";s("f5ca")},"2d93":function(t,e,s){},3634:function(t,e,s){"use strict";s("8eab")},"4e51":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item"},[s("img",{attrs:{src:"https://cms.aicassets.com/images/default/6018abc3e6cbc.jpeg",alt:""}}),s("router-link",{attrs:{to:"/n/d/asd",tag:"h3"}},[t._v("刷新历史纪录！疫情之下加拿大12月份的房屋成交量超过1.2万宗")]),s("p",[t._v("根据加拿大房地产协会在1月15日所公布出来的的最新统计数据，截至2020年12月加拿大全国房屋销量超过1.2万宗及多项相关指标均刷新历史纪录")]),s("span",[t._v("2021-02-02")]),s("router-link",{attrs:{to:"/n/d/asd"}},[t._v("查看详情")])],1)},r=[],n=(s("1e7c"),s("2877")),i={},o=Object(n["a"])(i,a,r,!1,null,"738d5eae",null);e["a"]=o.exports},"517c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-side"},[s("h3",[t._v("新楼盘推荐")]),s("div",{staticClass:"recommend"},t._l(3,(function(e,a){return s("div",{key:a,staticClass:"item"},[s("router-link",{staticClass:"a-img",attrs:{to:"/"}},[s("img",{attrs:{src:"https://cms.aicassets.com/images/default/6013780af0d6d.jpeg",alt:"项目详情"}})]),s("router-link",{attrs:{to:"/",tag:"strong"}},[t._v("东景苑奢华卓越新地标，超大型东部私宅新楼盘")]),s("p",[t._v("2-5室 / 96-116㎡")]),t._m(0,!0)],1)})),0),s("Consultant"),t._m(1),s("div",{staticClass:"message"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?s("i",[t._v("请输入您的称呼")]):t._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?s("i",[t._v("请输入您的联系电话")]):t._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?s("i",[t._v("请输入您的邮箱地址")]):t._e(),s("p",[s("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),s("router-link",{attrs:{to:"/"}},[t._v("《新加坡看公寓网用户协议》")])],1),t.fromErr.protocol?s("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),s("button",{on:{click:t.submitInfo}},[t._v("立即咨询")])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v("$79 "),s("em",[t._v("万起")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[t._v("给TA留言"),s("i",[t._v("提交咨询请求，30分钟内回复")])])}],n=s("a34f"),i={components:{Consultant:n["a"]},data:function(){return{fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},submitInfo:function(){for(var t in this.fromErr){if(""===this.fromInfo[t])return this.fromErr[t]=!0,!1;this.fromErr[t]=!1}console.log(this.fromInfo,"fromInfo")}}},o=i,c=(s("8eb0"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,"1daa3537",null);e["a"]=l.exports},"51ee":function(t,e,s){"use strict";s("0968")},5884:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news"},[s("BreadcrumbList"),s("div",{staticClass:"content clearfix w1200px"},[s("div",{staticClass:"left"},[s("NewsBanner"),s("div",{staticClass:"list"},[s("h2",[t._v("新闻列表")]),t._l(10,(function(t,e){return s("NewsItem",{key:e})}))],2)],1),s("div",{staticClass:"right"},[s("HotNews"),s("DetailsRecommend")],1)])],1)},r=[],n=s("8499"),i=s("517c"),o=s("03e1"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-banner"},[s("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),[s("div",{staticClass:"item"},[s("h3",[t._v("新加坡侨水资本：建立家族信托，为财富传承布局")]),s("img",{attrs:{src:"https://cms.aicassets.com/images/default/6013780af0d6d.jpeg",alt:"新加坡侨水资本：建立家族信托，为财富传承布局"}})]),s("div",{staticClass:"item"},[s("h3",[t._v("加入全球最大自贸区RCEP 新加坡移民迎来新机遇")]),s("img",{attrs:{src:"https://cms.aicassets.com/images/default/5fd2d5ce978b1.jpeg",alt:"加入全球最大自贸区RCEP 新加坡移民迎来新机遇"}})]),s("div",{staticClass:"item"},[s("h3",[t._v("家族财富|带您了解新加坡单一家族办公室的最佳移民方案")]),s("img",{attrs:{src:"https://cms.aicassets.com/images/default/5fadfe33c2cb8.png",alt:"家族财富|带您了解新加坡单一家族办公室的最佳移民方案"}})]),s("div",{staticClass:"item"},[s("h3",[t._v("新加坡入境管制再放宽，同时2021年起包括公民在内所有人入境自行承担隔离费用")]),s("img",{attrs:{src:"https://cms.aicassets.com/images/default/5f9bb20aa5981.jpeg",alt:"新加坡入境管制再放宽，同时2021年起包括公民在内所有人入境自行承担隔离费用"}})])])],1)},l=[],m=s("a7ab"),u=s.n(m),f=(s("7b8d"),s("6a2c"),{components:{VueSlickCarousel:u.a},data:function(){return{settings:{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0}}}}),d=f,v=(s("c439"),s("7eff"),s("2877")),p=Object(v["a"])(d,c,l,!1,null,"0410e51a",null),_=p.exports,b=s("4e51"),g={components:{BreadcrumbList:n["a"],DetailsRecommend:i["a"],HotNews:o["a"],NewsBanner:_,NewsItem:b["a"]}},h=g,C=(s("51ee"),Object(v["a"])(h,a,r,!1,null,"44000446",null));e["default"]=C.exports},7479:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[s("BreadcrumbList"),s("div",{staticClass:"content clearfix w1200px"},[s("div",{staticClass:"left"},[t._m(0),s("div",{staticClass:"new-html",domProps:{innerHTML:t._s(t.newHtml)}}),s("div",{staticClass:"context mt80"},[s("p",[t._v("上一篇："),s("router-link",{attrs:{to:"/"}},[t._v("重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者")])],1),s("p",[t._v("下一篇："),s("router-link",{attrs:{to:"/"}},[t._v("重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者")])],1)]),s("div",{staticClass:"related"},[s("h2",[t._v("相关推荐")]),t._l(10,(function(t,e){return s("NewsItem",{key:e})}))],2)]),s("div",{staticClass:"right"},[s("HotNews"),s("DetailsRecommend")],1)])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h3",[t._v("重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者")]),s("p",[t._v("发布时间：2020-11-23 11:17:46 阅读次数：1887次")])])}],n=s("8499"),i=s("517c"),o=s("03e1"),c=s("4e51"),l={components:{BreadcrumbList:n["a"],DetailsRecommend:i["a"],HotNews:o["a"],NewsItem:c["a"]},data:function(){return{newHtml:'美国当地时间1月8日，美国公民和移民服务局修正了H-1B工作签证的申请制度，新规将取消现有的抽签制度，以优先考量候选人的薪资水平和技能，而不是现行的抽签制度来选择希望在美国工作的候选人。<br /><br />H-1B工作签证是美国最主要的工作签证类别，允许外籍专业的技术人员受雇在美国境内工作。新规将在2021年3月9日正式生效。<br /><img src="https://cms.aicassets.com/images/default/60125a51c7bd8.png" alt="" /><br /><br />新政的主要目的就是要吸引真正优秀的人才，来填补美国国内劳动力市场所不能弥补的空白。<br />按照新规，美国政府将以入职的年限和工作经验为标准，划分出4档薪资水平用以分配H-1B签证。在每年85000份的签证配额不变的情况下，优先考虑向各档中薪资较高的申请者发放签证。<br /><p>\t所有在线登记的申请者的信息将按照 OES (Occupational Employment Statistics)薪酬调查数据进行排序，然后按Level4、Level3、Level2和Level1的顺序向下依次分配签证。官方给出的信息，Level确定条件会涉及到工资、工作经验、学历等综合方面，对于H-1B申请者在多个工作地点工作的情况，移民局将选择该申请者达到或超过的较低工资水平来分配准证名额。</p><p>\t<br /></p><img src="https://cms.aicassets.com/images/default/60125a6c020be.png" alt="" /><br /><br />新加坡侨水资本认为，由于美国每年的H-1B申请数量均超限额，此项改革将有效地鼓励H1B雇主向外国雇员提供更高的工资，或申请要求更高技能和更专业的职位，从而起到遏制雇主滥用H1B职位来雇用低工资、低技能的外国雇员的作用，最终达到保护美国人的就业机会。<br /><div>\t<br /></div>'}}},m=l,u=(s("3634"),s("2877")),f=Object(u["a"])(m,a,r,!1,null,"450e0430",null);e["default"]=f.exports},"7eff":function(t,e,s){"use strict";s("ce6d")},8499:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb-list"},[s("div",{staticClass:"w1200px"},[s("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v(" > "),t.breadcrumb.name?s("router-link",{attrs:{to:t.breadcrumb.url}},[t._v(" "+t._s(t.breadcrumb.name)+" ")]):t._e()],1)])},r=[],n={props:{breadcrumb:{type:Object,default:function(){return{}}}}},i=n,o=(s("14c0"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"d1b16682",null);e["a"]=c.exports},"8eab":function(t,e,s){},"8eb0":function(t,e,s){"use strict";s("e6e0")},b8c9:function(t,e,s){"use strict";s("2d93")},c439:function(t,e,s){"use strict";s("03e5")},ce6d:function(t,e,s){},da47:function(t,e,s){},e6e0:function(t,e,s){},f5ca:function(t,e,s){}}]);
//# sourceMappingURL=News.ce4bb51c.js.map