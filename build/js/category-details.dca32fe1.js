(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category-details"],{1148:function(t,e,i){"use strict";var s=i("a691"),a=i("1d80");t.exports="".repeat||function(t){var e=String(a(this)),i="",o=s(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},"12d9":function(t,e,i){},1689:function(t,e,i){"use strict";i("5783")},"179b":function(t,e,i){"use strict";i("d594")},"26da":function(t,e,i){"use strict";i("802a")},"2b66":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mortgage clearfix"},[i("h3",{staticClass:"other-t"},[t._v("房贷计算")]),i("div",{staticClass:"left count clearfix"},[i("div",{staticClass:"input-box"},[t._v(" 房产价格 ($) "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.roomTotalPrice,expression:"roomTotalPrice"}],staticClass:"inp",attrs:{type:"text",placeholder:"输入价格"},domProps:{value:t.roomTotalPrice},on:{input:function(e){e.target.composing||(t.roomTotalPrice=e.target.value)}}})]),i("div",{staticClass:"input-box"},[t._v(" 贷款比例 "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.loanScale,expression:"loanScale"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.loanScale=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"25"}},[t._v("25%")]),i("option",{attrs:{value:"30"}},[t._v("30%")]),i("option",{attrs:{value:"40"}},[t._v("40%")]),i("option",{attrs:{value:"50"}},[t._v("50%")]),i("option",{attrs:{value:"70"}},[t._v("70%")])])]),i("div",{staticClass:"input-box"},[t._v(" 贷款总额 ($) "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.countLoanPrice,expression:"countLoanPrice"}],staticClass:"inp ban",attrs:{type:"text",disabled:"disabled"},domProps:{value:t.countLoanPrice},on:{input:function(e){e.target.composing||(t.countLoanPrice=e.target.value)}}})]),i("div",{staticClass:"input-box"},[t._v(" 贷款年利率 "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.interestRate,expression:"interestRate"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.interestRate=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"2.5"}},[t._v("2.5%")]),i("option",{attrs:{value:"3"}},[t._v("3%")]),i("option",{attrs:{value:"4"}},[t._v("4%")])])]),i("div",{staticClass:"input-box"},[t._v(" 偿还年限 "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.years,expression:"years"}],staticClass:"inp",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.years=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"10"}},[t._v("10")]),i("option",{attrs:{value:"20"}},[t._v("20")]),i("option",{attrs:{value:"30"}},[t._v("30")])])]),i("button",{on:{click:t.startCount}},[t._v("开始计算")])]),i("div",{staticClass:"right result"},[i("h3",[t._v("计算结果")]),i("ul",[i("li",[t._v("首付合计"),i("span",[t._v(t._s(t.countResult.down_payment))])]),i("li",[t._v("贷款金额"),i("span",[t._v(t._s(t.countResult.loan_price))])]),i("li",[t._v("支付利息"),i("span",[t._v(t._s(t.countResult.interest))])]),i("li",[t._v("月均还款"),i("span",[t._v(t._s(t.countResult.repayment))])])]),t.countResult.down_payment&&t.countResult.loan_price&&t.countResult.interest&&t.countResult.repayment?i("p",[t._v(" 本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议"),i("a",{on:{click:t.showAdvisory}},[t._v("咨询置业顾问")])]):t._e()]),t.showAdvisoryType?i("AdvisoryPopup",{on:{closePopuo:t.showAdvisory}}):t._e()],1)},a=[],o=(i("b680"),i("7761")),n={components:{AdvisoryPopup:o["a"]},data:function(){return{roomTotalPrice:"",loanScale:"25",interestRate:"2.5",years:10,countResult:{down_payment:"",loan_price:"",interest:"",repayment:""},showAdvisoryType:!1}},computed:{countLoanPrice:function(){return this.roomTotalPrice>0?1*this.roomTotalPrice*(this.loanScale/100).toFixed(2):""},monthlyPayment:function(){var t=this.interestRate/100,e=12*this.years;return this.countLoanPrice*(t/12)/(1-Math.pow(1+t/12,-e))}},methods:{startCount:function(){this.countResult={down_payment:"$".concat((1*this.roomTotalPrice-this.countLoanPrice).toFixed(2)),loan_price:"$".concat(this.countLoanPrice.toFixed(2)),interest:"$".concat((this.monthlyPayment*this.years*12-this.countLoanPrice).toFixed(2)),repayment:"$".concat(this.monthlyPayment.toFixed(2))}},showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}},mounted:function(){}},r=n,c=(i("e682"),i("2877")),l=Object(c["a"])(r,s,a,!1,null,"202eeb8b",null);e["a"]=l.exports},"324a":function(t,e,i){"use strict";i("56b7")},"363b":function(t,e,i){t.exports=i.p+"img/integrity-image.ca7e4134.png"},"3bd3":function(t,e,i){"use strict";i("ce40")},"3d3e":function(t,e,i){},"408a":function(t,e,i){var s=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"50b3":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category-search"},[i("div",{staticClass:"search-box w1200px clearfix"},[t._m(0),i("SearchBar",{staticClass:"right"})],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"left"},[s("img",{attrs:{src:i("363b"),alt:"诚信为本，实力铸造"}})])}],o=i("efa1"),n={components:{SearchBar:o["a"]},computed:{}},r=n,c=(i("ad28"),i("2877")),l=Object(c["a"])(r,s,a,!1,null,"6907d3c6",null);e["a"]=l.exports},"517c":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details-side"},[i("h3",[t._v(t._s(t.recommendType.title))]),i("div",{staticClass:"recommend"},t._l(t.recommendList,(function(e,s){return i("div",{key:s,staticClass:"item"},[i("router-link",{staticClass:"a-img",attrs:{to:t.recommendType.link+e._id}},[i("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.title}})],1),i("router-link",{attrs:{to:"/",tag:"strong"}},[t._v(t._s(e.title))]),i("span",[t._v(t._s(e.price)+" "),i("em",[t._v(t._s(t.recommendType.unit))])])],1)})),0),i("Consultant"),t._m(0),i("div",{staticClass:"message"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.message,expression:"fromInfo.message"}],staticClass:"inp text",attrs:{placeholder:"我对这个物业感兴趣，希望得到更多信息"},domProps:{value:t.fromInfo.message},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"message",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?i("i",[t._v("请输入您的称呼")]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.tel,expression:"fromInfo.tel"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的联系电话（必填）"},domProps:{value:t.fromInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"tel",e.target.value)}}}),t.fromErr.tel?i("i",[t._v("请输入您的联系电话")]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.email,expression:"fromInfo.email"}],staticClass:"inp",attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.email},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"email",e.target.value)}}}),t.fromErr.email?i("i",[t._v("请输入您的邮箱地址")]):t._e(),i("p",[i("span",{class:{check:t.fromInfo.protocol},on:{click:t.protocolClick}}),t._v(" 已阅读并同意"),i("a",{on:{click:t.agreementClick}},[t._v("《新加坡看公寓网用户协议》")])]),t.fromErr.protocol?i("i",{staticClass:"protocol-err"},[t._v("请勾选《新加坡看公寓网用户协议》")]):t._e(),i("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("立即咨询")]],2)]),t.submitStatus?i("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e(),t.agreementStatus?i("Agreement",{on:{close:function(e){t.agreementStatus=!1}}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._v("给TA留言"),i("i",[t._v("提交咨询请求，30分钟内回复")])])}],o=(i("b0c0"),i("a34f")),n=i("570b"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agreement"},[i("div",{staticClass:"content popup-animat"},[i("span",{staticClass:"close",on:{click:t.closeSuccess}}),i("h1",[t._v("新加坡看公寓网用户协议")]),t._m(0)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sc"},[i("h2",[t._v("任何使用新加坡看公寓网服务的用户均应仔细阅读本协议：")]),i("h3",[t._v("1、使用规则")]),i("p",[t._v("用户在使用新加坡看公寓网网络服务过程中，必须遵循以下原则：")]),i("p",[t._v("(a) 遵守所有的法律和法规；")]),i("p",[t._v("(b) 不得为任何非法目的而使用网络服务系统；")]),i("p",[t._v("(c) 遵守所有与网络服务有关的网络协议、规定和程序；")]),i("p",[t._v("(d) 不得利用新加坡看公寓网网络服务系统进行任何可能对互联网的正常运转造成不利影响的行为；")]),i("p",[t._v("(e) 不得利用新加坡看公寓网网络服务系统传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；")]),i("p",[t._v("(f) 不得利用新加坡看公寓网网络服务系统进行任何不利于新加坡看公寓网的行为；")]),i("p",[t._v("(g) 如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告新加坡看公寓网。")]),i("p",[t._v("(h)用户必须保证其发布信息的真实性，并承担相关责任，该等法律责任与新加坡看公寓网无关。用户应承担任何有可能产生的民事侵权或刑事法律责任，本网站之法律声明的修改权、更新权及最终解释权均属于新加坡看公寓网所有。")]),i("h3",[t._v("2、内容所有权")]),i("p",[t._v("(a)新加坡看公寓网提供的网络服务内容可能包括：文字、图片、图表等。所有这些内容受版权、商标和其它财产所有权法律的保护。")]),i("p",[t._v("(b) 用户只有在获得新加坡看公寓网或其他相关权利人的授权之后才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。")]),i("h3",[t._v("3、隐私保护")]),i("p",[t._v("3.1 保护用户隐私是新加坡看公寓网的一项基本政策，新加坡看公寓网保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在新加坡看公寓网的非公开内容，但下列情况除外：")]),i("p",[t._v("(a) 事先获得用户的明确授权；")]),i("p",[t._v("(b) 根据有关的法律法规要求；")]),i("p",[t._v("(c) 按照相关政府主管部门的要求；")]),i("p",[t._v("(d) 为维护社会公众的利益；")]),i("p",[t._v("(e) 为维护新加坡看公寓网的合法权益")])])}],l={methods:{closeSuccess:function(){this.$emit("close")}}},u=l,p=(i("8281"),i("2877")),m=Object(p["a"])(u,r,c,!1,null,"9a86cb10",null),v=m.exports,_={components:{Consultant:o["a"],SubmitSuccess:n["a"],Agreement:v},data:function(){return{recommendList:[],submitStatus:!1,submitLoad:!1,agreementStatus:!1,fromInfo:{message:"",name:"",tel:"",email:"",protocol:""},fromErr:{name:!1,tel:!1,email:!1,protocol:!1}}},computed:{recommendType:function(){var t={"second-hand":{title:"二手房推荐",type:"second_hand_house",link:"/c/second-hand/",unit:"万"},"new-house":{title:"新楼盘推荐",type:"new_house",link:"/c/new-house/",unit:"万起"},renting:{title:"租房推荐",type:"renting",link:"/c/renting/"}};return t[this.$route.params.category]||{title:"房产推荐",type:"new_house",link:"/c/new-house/",unit:"万起"}}},methods:{protocolClick:function(){this.fromInfo.protocol=!this.fromInfo.protocol},agreementClick:function(){this.agreementStatus=!this.agreementStatus},submitInfo:function(){var t=this;for(var e in this.fromErr){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var i={message:this.fromInfo.message,name:this.fromInfo.name,tel:this.fromInfo.tel,email:this.fromInfo.email,protocol:this.fromInfo.protocol};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(i).then((function(e){if(200===e.code)for(var i in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[i]=""})))}},mounted:function(){var t=this,e={type:this.recommendType.type};this.$httpApi.categoryRecommendApi(e).then((function(e){200===e.code&&(t.recommendList=e.data.recommend)}))}},f=_,d=(i("6dcb"),Object(p["a"])(f,s,a,!1,null,"cab08aa4",null));e["a"]=d.exports},"56b7":function(t,e,i){},5783:function(t,e,i){},"58db":function(t,e,i){},"5a40":function(t,e,i){},"64af":function(t,e,i){},6579:function(t,e,i){},"658a":function(t,e,i){"use strict";i("3d3e")},"65cc":function(t,e,i){"use strict";i("64af")},"6b74":function(t,e,i){"use strict";i("12d9")},"6dcb":function(t,e,i){"use strict";i("c693")},"7a3d":function(t,e,i){},"802a":function(t,e,i){},8281:function(t,e,i){"use strict";i("58db")},"909c":function(t,e,i){},9281:function(t,e,i){"use strict";i("bc89")},"970e":function(t,e,i){"use strict";i("909c")},a0d4:function(t,e,i){"use strict";i("7a3d")},ad28:function(t,e,i){"use strict";i("5a40")},aeea:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[t.breadcrumb.length>0?i("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}):t._e(),i("SearchBox"),t.proTitle?i("div",{staticClass:"content clearfix w1200px mt80"},[i("div",{staticClass:"name"},[i("h3",[t._v(t._s(t.proTitle))]),t._l(t.houseTags,(function(e,s){return i("span",{key:s},[t._v(t._s(e))])})),i("button",{on:{click:t.showAdvisory}},[t._v("立即预约看房")])],2),i("div",{staticClass:"left"},[t.proBigImages?i("DetailsViewImg",{attrs:{imagesArr:t.proBigImages,vrLink:t.vrLink}}):t._e(),"狮城租房"!==t.breadcrumb[0].name?[i("DetalsIntroduction",{attrs:{introduction:t.introduction}}),i("DetailsPhoto",{attrs:{photoAll:t.photoAll}}),i("DetailsDetailed",{attrs:{projectDetails:t.projectDetails}}),i("DetailsMortgage"),i("DetailsUnitType",{attrs:{houseTypes:t.houseTypes}})]:[i("DetailsHousingInfo",{attrs:{infoBase:t.infoBase}}),i("DetailsHousingDescribe",{attrs:{facilities:t.surroundingFacilities,community:t.community,introduction:t.introduction,payType:t.payType,price:t.infoBase.price}})]],2),i("div",{staticClass:"right"},[i("DetailsInfoBase",{attrs:{infoBase:t.infoBase,type:t.breadcrumb[0].name},on:{priceChange:t.showAdvisory}}),i("DetailsRecommend")],1)]):i("Loading"),t.coordinate?i("BaiduMap",{staticClass:"content w1200px mt80",attrs:{coordinate:t.coordinate,addr:t.infoBase.addr,title:t.proTitle,mapData:t.mapData}}):t._e(),t.showAdvisoryType?i("AdvisoryPopup",{on:{closePopuo:t.showAdvisory}}):t._e()],1)},a=[],o=(i("a4d3"),i("e01a"),i("d81d"),i("b0c0"),i("8499")),n=i("50b3"),r=i("2772"),c=i("5315"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"photo"},[i("h3",{staticClass:"other-t"},[t._v("房源相册")]),i("div",{staticClass:"list"},[i("strong",[t._v("效果图")]),i("HousePhoto",{attrs:{imagesArr:t.photoAll.effect_picture},on:{viewBigImg:t.viewBigImg}}),i("strong",[t._v("样板间")]),i("HousePhoto",{attrs:{imagesArr:t.photoAll.sample_room},on:{viewBigImg:t.viewBigImg}}),i("strong",[t._v("周边配套")]),i("HousePhoto",{attrs:{imagesArr:t.photoAll.matching},on:{viewBigImg:t.viewBigImg}})],1),t.bigImgUrl?i("div",{staticClass:"big-img"},[i("div",{staticClass:"content"},[i("span",{staticClass:"close",on:{click:function(e){return t.viewBigImg("")}}}),i("img",{attrs:{src:t.bigImgUrl,alt:""}})])]):t._e()])},u=[],p=i("7163"),m={components:{HousePhoto:p["a"]},props:{photoAll:Object},data:function(){return{bigImgUrl:""}},methods:{viewBigImg:function(t){this.bigImgUrl=t}}},v=m,_=(i("179b"),i("2877")),f=Object(_["a"])(v,l,u,!1,null,"dee15d52",null),d=f.exports,h=i("2b66"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detailed"},[i("h3",{staticClass:"other-t"},[t._v("项目详情")]),i("ul",{staticClass:"clearfix"},[i("li",[i("i",[t._v("楼盘名称")]),t._v(" "+t._s(t.projectDetails.name))]),i("li",[i("i",[t._v("房产类型 ")]),t._v(" "+t._s(t.projectDetails.type)+" ")]),i("li",[i("i",[t._v("开发商 ")]),t._v(" "+t._s(t.projectDetails.developer)+" ")]),i("li",[i("i",[t._v("产权 ")]),t._v(" "+t._s(t.projectDetails.property)+" ")]),i("li",[i("i",[t._v("开盘日期 ")]),t._v(" "+t._s(t.projectDetails.start_time.substring(0,7))+" ")]),i("li",[i("i",[t._v("预计落成日期 ")]),t._v(" "+t._s(t.projectDetails.finish.substring(0,7))+" ")]),i("li",[i("i",[t._v("公共设施 ")]),i("div",t._l(t.projectDetails.facility,(function(e,s){return i("span",{key:s},[t._v(t._s(e))])})),0)])])])},y=[],b={props:{projectDetails:Object}},C=b,w=(i("970e"),Object(_["a"])(C,g,y,!1,null,"48465eff",null)),I=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"unit-type"},[s("h3",{staticClass:"other-t"},[t._v("户型介绍")]),t._l(t.houseTypes,(function(e,a){return s("div",{key:a,staticClass:"item"},[s("i",{staticClass:"a-img"},[s("rentImg",{staticClass:"img-object",attrs:{url:e.image,alt:e.type},nativeOn:{click:function(i){return t.viewBigImg(e.image)}}}),e.vr_link?s("a",{attrs:{href:e.vr_link,target:"_blank"}},[s("img",{attrs:{src:i("0d19")}}),t._v(" VR看房 ")]):t._e()],1),s("i",{attrs:{tag:"h3"}},[t._v(t._s(e.type))]),s("p",[t._v("参考均价："),s("i",[t._v(t._s(e.average_price))]),t._v("/㎡")]),s("p",[t._v("参考总价："),s("i",[t._v(" "+t._s(e.price)+" ")]),t._v("/套")]),s("span",[t._v(t._s(e.area))])])})),s("strong",[t._v("免责声明")]),s("em",[t._v("页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。")]),t.bigImgUrl?s("ImagePopup",{attrs:{bigImgUrl:t.bigImgUrl},on:{closeBigImg:t.viewBigImg}}):t._e()],2)},B=[],T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"big-img"},[i("div",{staticClass:"content"},[i("span",{staticClass:"close",on:{click:function(e){return t.closeBigImg("")}}}),i("img",{attrs:{src:t.bigImgUrl,alt:""}})])])},k=[],A={props:{bigImgUrl:String},methods:{closeBigImg:function(){this.$emit("closeBigImg","")}}},D=A,P=(i("6b74"),Object(_["a"])(D,T,k,!1,null,"3760d804",null)),$=P.exports,S={components:{ImagePopup:$},props:{houseTypes:Array},data:function(){return{bigImgUrl:""}},methods:{viewBigImg:function(t){this.bigImgUrl=t}}},j=S,E=(i("9281"),Object(_["a"])(j,x,B,!1,null,"79e02786",null)),L=E.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info-base"},[i("div",{staticClass:"price"},[t._v(" "+t._s(t.infoBase.price)),i("i",[t._v(t._s(t.priceType))]),i("a",{on:{click:t.priceChange}},[t._v("变价提醒")])]),"狮城租房"===t.type?[i("p",[t._v("租凭方式："),i("i",[t._v(t._s(t.infoBase.rent_type))])]),i("p",[t._v("房屋类型："),i("i",[t._v(t._s(t.infoBase.house_type))])]),i("p",[t._v("楼层："),i("i",[t._v(t._s(t.infoBase.floor))])])]:[i("p",[t._v("地区位置："),i("i",[t._v(t._s(t.infoBase.region))])]),i("p",[t._v("建筑面积："),i("i",[t._v(t._s(t.infoBase.area))])]),"二手公寓"!==t.type?i("p",[t._v("预计落成日期："),i("i",[t._v(t._s(t.infoBase.completion_date))])]):t._e(),i("p",[t._v("房产地址："),i("i",[t._v(t._s(t.infoBase.addr))])])],i("p",{staticClass:"traffic"},[t._v(" 交通： "),t._l(t.infoBase.traffic,(function(e,s){return i("span",{key:s,style:{background:e.color}},[t._v(t._s(e.name))])})),i("i",[t._v(t._s(t.infoBase.traffic_tips))])],2),t.houseTypes?i("div",{staticClass:"rule clearfix"},t._l(t.houseTypes,(function(e,s,a){return i("ul",{key:a},[i("li",{staticClass:"t"},[t._v(t._s(s))]),t._l(e,(function(e,a){return i("li",{key:a,class:{p:"售价"===s}},[t._v(t._s(e))])}))],2)})),0):t._e()],2)},O=[],F={props:{infoBase:Object,type:String},computed:{houseTypes:function(){var t=!1,e=this.infoBase.house_types;if(e){for(var i={"户型":[],"面积㎡":[],"套数":[],"售价":[]},s=0;s<e.length;s++)i["户型"].push(e[s].type),i["面积㎡"].push(e[s].area),i["套数"].push(e[s].total),i["售价"].push(e[s].price);return i}return t},priceType:function(){return"new-house"===this.$route.params.category?"万起":"second-hand"===this.$route.params.category?"万":"/月"}},methods:{priceChange:function(){this.$emit("priceChange")}}},N=F,U=(i("a0d4"),Object(_["a"])(N,R,O,!1,null,"b6af374c",null)),H=U.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"housing-info"},[i("h3",{staticClass:"other-t"},[t._v("房屋信息")]),i("strong",[t._v("基本信息")]),i("ul",[i("li",[t._v("面积 "),i("i",[t._v(t._s(t.infoBase.area))])]),i("li",[t._v("入住 "),i("i",[t._v(t._s(t.infoBase.live_time>0?"随时入住":"无"))])]),i("li",[t._v("楼层 "),i("i",[t._v(t._s(t.infoBase.floor))])]),i("li",[t._v("电梯 "),i("i",[t._v(t._s(t.infoBase.has_elevator>0?"有":"无"))])]),i("li",[t._v("车位 "),i("i",[t._v(t._s(t.infoBase.has_parking>0?"有":"无"))])]),i("li",[t._v("用水 "),i("i",[t._v(t._s(t.infoBase.water>0?"民水":"商业用水"))])]),i("li",[t._v("用电 "),i("i",[t._v(t._s(t.infoBase.electricity>0?"民电":"商业用电"))])]),i("li",[t._v("燃气 "),i("i",[t._v(t._s(t.infoBase.has_gas>0?"有":"无"))])]),i("li",[t._v("租期 "),i("i",[t._v(t._s(t.lease[t.infoBase.lease]))])]),i("li",[t._v("看房 "),i("i",[t._v(t._s(t.infoBase.checking_house>0?"随时看房":"无"))])])]),i("strong",[t._v("配套设施")]),i("Conveniences",{attrs:{facilities:t.infoBase.facilities}})],1)},V=[],J=i("61ca"),K={components:{Conveniences:J["a"]},props:{infoBase:Object},data:function(){return{lease:["半年","一年以上","两年以上","三年以上"]}}},W=K,q=(i("658a"),i("3bd3"),Object(_["a"])(W,M,V,!1,null,"38b6b33d",null)),z=q.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"housing-info"},[i("h3",{staticClass:"other-t"},[t._v("房屋描述")]),i("strong",[t._v("户型介绍")]),i("p",[t._v(t._s(t.introduction))]),i("strong",[t._v("周边配套")]),i("p",{domProps:{innerHTML:t._s(t.facilities)}}),i("strong",[t._v("小区介绍")]),t._l(t.community,(function(e,s){return i("span",{key:s},[t._v(t._s(e))])})),i("strong",[t._v("租金")]),i("p",[t._v("付款方式："+t._s(t.payType))]),i("p",[t._v("租金（新元/月）："+t._s(t.price))]),i("h4",[t._v("免责声明")]),i("em",[t._v("页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。")])],2)},Q=[],X={props:{facilities:Array,community:Array,introduction:String,payType:String,price:String}},Y=X,Z=(i("65cc"),Object(_["a"])(Y,G,Q,!1,null,"79404362",null)),tt=Z.exports,et=i("517c"),it=i("d913"),st=i("0e17"),at=i("7761"),ot={name:"category-detail",components:{BreadcrumbList:o["a"],SearchBox:n["a"],DetailsViewImg:r["a"],DetailsPhoto:d,DetailsMortgage:h["a"],DetailsDetailed:I,DetailsUnitType:L,DetalsIntroduction:c["a"],DetailsInfoBase:H,DetailsHousingInfo:z,DetailsHousingDescribe:tt,DetailsRecommend:et["a"],BaiduMap:it["a"],Loading:st["a"],AdvisoryPopup:at["a"]},data:function(){return{proTitle:"",proBigImages:"",infoBase:{},introduction:"",photoAll:{},projectDetails:{},houseTypes:"",houseTags:[],vrLink:"",mapData:"",surroundingFacilities:"",community:"",payType:"",showAdvisoryType:!1,coordinate:""}},computed:{breadcrumb:function(){var t={"new-house":{url:"/c/new-house",name:"新楼盘",api:"new_house"},renting:{url:"/c/renting",name:"狮城租房",api:"rented_house"},"second-hand":{url:"/c/second-hand",name:"二手公寓",api:"second_hand_house"}};return[t[this.$route.params.category],{url:this.$route.path,name:this.proTitle}]}},methods:{showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}},mounted:function(){var t=this,e={id:this.$route.params.id,api_url:this.breadcrumb[0].api};this.$httpApi.productDetailApi(e).then((function(e){if(200===e.code){var i=e.data.new_house||e.data.second_hand_house;t.proTitle=i.title,t.proBigImages=i.images||i.effect_images,t.introduction=i.description,t.houseTypes=i.house_types,t.houseTags=i.house_tags,t.vrLink=i.vr_link,t.surroundingFacilities=i.surrounding_facilities,t.community=i.community,t.payType=i.pay_type,t.mapData=i.map,t.coordinate=i.coordinate,t.infoBase={region:i.region_ch[0],area:i.area,completion_date:i.finish_at,traffic:i.traffic,traffic_tips:i.traffic_tips,price:i.price,addr:i.addr,house_type:i.house_type,house_types:i.house_types,rent_type:i.rent_type,floor:i.floor,checking_house:i.checking_house,live_time:i.live_time,facilities:i.facilities,electricity:i.electricity,water:i.water,lease:i.lease,has_elevator:i.has_elevator,has_parking:i.has_parking,has_gas:i.has_gas},t.photoAll={effect_picture:i.effect_images,sample_room:i.demo_images,matching:i.surrounding_images},t.projectDetails={name:i.name,type:i.type,developer:i.developer,property:i.property,start_time:i.start_at,finish:i.finish_at,facility:i.facilities},console.log(e.data)}}))}},nt=ot,rt=(i("324a"),i("26da"),Object(_["a"])(nt,s,a,!1,null,"93df2acc",null));e["default"]=rt.exports},b680:function(t,e,i){"use strict";var s=i("23e7"),a=i("a691"),o=i("408a"),n=i("1148"),r=i("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},p=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));s({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,i,s,r,c=o(this),m=a(t),v=[0,0,0,0,0,0],_="",f="0",d=function(t,e){var i=-1,s=e;while(++i<6)s+=t*v[i],v[i]=s%1e7,s=l(s/1e7)},h=function(t){var e=6,i=0;while(--e>=0)i+=v[e],v[e]=l(i/t),i=i%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==v[t]){var i=String(v[t]);e=""===e?i:e+n.call("0",7-i.length)+i}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(_="-",c=-c),c>1e-21)if(e=p(c*u(2,69,1))-69,i=e<0?c*u(2,-e,1):c/u(2,e,1),i*=4503599627370496,e=52-e,e>0){d(0,i),s=m;while(s>=7)d(1e7,0),s-=7;d(u(10,s,1),0),s=e-1;while(s>=23)h(1<<23),s-=23;h(1<<s),d(1,1),h(2),f=g()}else d(0,i),d(1<<-e,0),f=g()+n.call("0",m);return m>0?(r=f.length,f=_+(r<=m?"0."+n.call("0",m-r)+f:f.slice(0,r-m)+"."+f.slice(r-m))):f=_+f,f}})},bc89:function(t,e,i){},c693:function(t,e,i){},ce40:function(t,e,i){},d594:function(t,e,i){},e682:function(t,e,i){"use strict";i("6579")},efa1:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-Keyword"},[i("select",[i("option",{attrs:{value:"新楼盘"}},[t._v("新楼盘")]),i("option",{attrs:{value:"新楼盘"}},[t._v("二手房")]),i("option",{attrs:{value:"新楼盘"}},[t._v("租房")])]),i("input",{attrs:{type:"text",placeholder:"输入MRT、小区名、地区名称"}}),i("button",[t._v("搜索")])])}],o=(i("1689"),i("2877")),n={},r=Object(o["a"])(n,s,a,!1,null,"089f391a",null);e["a"]=r.exports}}]);
//# sourceMappingURL=category-details.dca32fe1.js.map