(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0d19":function(t,A,e){t.exports=e.p+"img/vr_icon.1a28b5dc.gif"},"0e17":function(t,A,e){"use strict";var s=function(){var t=this,A=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"loading"},[e("div",{staticClass:"ball-pulse"},[e("div"),e("div"),e("div")])])}],n=(e("8db3"),e("2877")),o={},a=Object(n["a"])(o,s,i,!1,null,"6b6b707a",null);A["a"]=a.exports},1148:function(t,A,e){"use strict";var s=e("a691"),i=e("1d80");t.exports="".repeat||function(t){var A=String(i(this)),e="",n=s(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(A+=A))1&n&&(e+=A);return e}},"11e6":function(t,A,e){t.exports=e.p+"img/home-other-icon4.c1435d43.png"},"129f":function(t,A){t.exports=Object.is||function(t,A){return t===A?0!==t||1/t===1/A:t!=t&&A!=A}},1511:function(t,A,e){},"1b81":function(t,A,e){},"26ab":function(t,A,e){},"2b66":function(t,A,e){"use strict";var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"mortgage clearfix"},[e("h3",{staticClass:"other-t"},[t._v("房贷计算")]),e("div",{staticClass:"left count clearfix"},[e("div",{staticClass:"input-box"},[t._v(" 房产价格 ($) "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.roomTotalPrice,expression:"roomTotalPrice"}],staticClass:"inp",attrs:{type:"text",placeholder:"输入价格"},domProps:{value:t.roomTotalPrice},on:{input:function(A){A.target.composing||(t.roomTotalPrice=A.target.value)}}})]),e("div",{staticClass:"input-box"},[t._v(" 贷款比例 "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.loanScale,expression:"loanScale"}],staticClass:"inp",on:{change:function(A){var e=Array.prototype.filter.call(A.target.options,(function(t){return t.selected})).map((function(t){var A="_value"in t?t._value:t.value;return A}));t.loanScale=A.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"25"}},[t._v("25%")]),e("option",{attrs:{value:"30"}},[t._v("30%")]),e("option",{attrs:{value:"40"}},[t._v("40%")]),e("option",{attrs:{value:"50"}},[t._v("50%")]),e("option",{attrs:{value:"70"}},[t._v("70%")])])]),e("div",{staticClass:"input-box"},[t._v(" 贷款总额 ($) "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.countLoanPrice,expression:"countLoanPrice"}],staticClass:"inp ban",attrs:{type:"text",disabled:"disabled"},domProps:{value:t.countLoanPrice},on:{input:function(A){A.target.composing||(t.countLoanPrice=A.target.value)}}})]),e("div",{staticClass:"input-box"},[t._v(" 贷款年利率 "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.interestRate,expression:"interestRate"}],staticClass:"inp",on:{change:function(A){var e=Array.prototype.filter.call(A.target.options,(function(t){return t.selected})).map((function(t){var A="_value"in t?t._value:t.value;return A}));t.interestRate=A.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"2.5"}},[t._v("2.5%")]),e("option",{attrs:{value:"3"}},[t._v("3%")]),e("option",{attrs:{value:"4"}},[t._v("4%")])])]),e("div",{staticClass:"input-box"},[t._v(" 偿还年限 "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.years,expression:"years"}],staticClass:"inp",on:{change:function(A){var e=Array.prototype.filter.call(A.target.options,(function(t){return t.selected})).map((function(t){var A="_value"in t?t._value:t.value;return A}));t.years=A.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"10"}},[t._v("10")]),e("option",{attrs:{value:"20"}},[t._v("20")]),e("option",{attrs:{value:"30"}},[t._v("30")])])]),e("button",{on:{click:t.startCount}},[t._v("开始计算")])]),e("div",{staticClass:"right result"},[e("h3",[t._v("计算结果")]),e("ul",[e("li",[t._v("首付合计"),e("span",[t._v(t._s(t.countResult.down_payment))])]),e("li",[t._v("贷款金额"),e("span",[t._v(t._s(t.countResult.loan_price))])]),e("li",[t._v("支付利息"),e("span",[t._v(t._s(t.countResult.interest))])]),e("li",[t._v("月均还款"),e("span",[t._v(t._s(t.countResult.repayment))])])]),t.countResult.down_payment&&t.countResult.loan_price&&t.countResult.interest&&t.countResult.repayment?e("p",[t._v(" 本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议"),e("a",{on:{click:t.showAdvisory}},[t._v("咨询置业顾问")])]):t._e()]),t.showAdvisoryType?e("AdvisoryPopup",{on:{closePopuo:t.showAdvisory}}):t._e()],1)},i=[],n=(e("b680"),e("7761")),o={components:{AdvisoryPopup:n["a"]},data:function(){return{roomTotalPrice:"",loanScale:"25",interestRate:"2.5",years:10,countResult:{down_payment:"",loan_price:"",interest:"",repayment:""},showAdvisoryType:!1}},computed:{countLoanPrice:function(){return this.roomTotalPrice>0?1*this.roomTotalPrice*(this.loanScale/100).toFixed(2):""},monthlyPayment:function(){var t=this.interestRate/100,A=12*this.years;return this.countLoanPrice*(t/12)/(1-Math.pow(1+t/12,-A))}},methods:{startCount:function(){this.countResult={down_payment:"$".concat((1*this.roomTotalPrice-this.countLoanPrice).toFixed(2)),loan_price:"$".concat(this.countLoanPrice.toFixed(2)),interest:"$".concat((this.monthlyPayment*this.years*12-this.countLoanPrice).toFixed(2)),repayment:"$".concat(this.monthlyPayment.toFixed(2))}},showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType}},mounted:function(){}},a=o,r=(e("e682"),e("2877")),u=Object(r["a"])(a,s,i,!1,null,"202eeb8b",null);A["a"]=u.exports},"314e":function(t,A,e){t.exports=e.p+"img/logo-white.fcd92198.png"},3419:function(t,A,e){},"3a60":function(t,A,e){"use strict";e("3cdb")},"3b78":function(t,A,e){"use strict";e("98f0")},"3cdb":function(t,A,e){},"3f03":function(t,A,e){"use strict";e("b6c1")},"408a":function(t,A,e){var s=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"414f":function(t,A,e){t.exports=e.p+"img/home-other-icon2.9d4ccc76.png"},"456f":function(t,A,e){},4817:function(t,A,e){},"4c52":function(t,A,e){},"4c91":function(t,A,e){"use strict";e("1511")},"4dab":function(t,A,e){"use strict";e("4c52")},"570b":function(t,A,e){"use strict";var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"success"},[e("div",{staticClass:"content popup-animat"},[e("div",{staticClass:"close",on:{click:t.closeSuccess}}),t._m(0),e("div",{staticClass:"c"},[e("p",[t._v("您也可以拨打我们的服务热线，直接与我们取得联系")]),t._m(1),e("button",{on:{click:t.closeSuccess}},[t._v("确定")])])])])},i=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"t"},[e("h3",[t._v("提交成功")]),e("p",[t._v("请耐心等待，我们稍后将会有工作人员与您取得联系！")])])},function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("span",[t._v("客服热线 "),e("strong",[t._v("+65 8813 9139")])])}],n={methods:{closeSuccess:function(){this.$emit("close")}}},o=n,a=(e("3f03"),e("2877")),r=Object(a["a"])(o,s,i,!1,null,"0d9de449",null);A["a"]=r.exports},6579:function(t,A,e){},"67d1":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAABZLkSWAAAC+0lEQVRYCcWXTY7TQBCFEzR7gjjAdC4AOcAssmBPbhAfYVZsYw6ACCdIEAeY4QQJKxCbmdmyiTesCQiBkIDwveC2PJHdP7EnKemp2l1Vr19Xx47d7expm81mQOlTIG9yjyvsmlEG5N92u135uzVEGfASrECsrShQrWldJaQ9MANt2QyiXitCIRqBL6BtE+eokUgIZm2rquCbRYuEREd6UUF2V1NaK/zIDyzObvoiqJNkz2zFEbz7uBGUHEHU7pK3bpyubStZ+g2sQPhvwRa369fQ9Xmwy3fulbinjBuJg1QbfgBelXhjh9KQ2qJtB+meYULd89lzVwL6UsXhG+KEOpvUBUrzffiy7TWEU+C1UnGjoXeh/wk60Y7toLpnNOGx1BF/x46XisPv61CqPI9l8PVPIBuQaDzJNpzmg9f4LB9Xue3GdwKG6/HOnOtSLyYD7TYFsTZ0MVfFWGAYuwj55yeQqYN7GQRnFL7xFJ9xVJ89OXXhoQSe1kUD5t+T88iT990Td4VPG3UQZgMS4LIXBNeuBEdsIIFN7BvFHz0EvzxxZ7ipwL+w/3au0DDYVOBD1n/i0fCB+E9PTm1YAm/A49oMR4C78xN38jNHSoecP664J3ajl4XMk1QbRpy698MFcpo8JbKYB3VaqzQygOjQP4dzdfAykv+Q6cvtYuwoA7GmGnViAJYVxYnImddn6xysK3JcU5nqt0ZW0OtWznaJT/JSW99j7iqPyy2AKedozFwCliDEpkU92Sag4qooyAd53QSvj/Aqk+gx6JVruV4An5lyjXY391UQnwFtZgz0LRtq2sAEqHYBfFZ0r3hvo0K7zMD9W8oPf/GVJQ3Pz7WWLj6a8olEk0e2xIqr1EEnQ47ad0T7xoujrRRnJ2HXnXpom9v1vR5lemwcUqROTfdAnFF0iOMOO9Y66YgcgTVo28Q5qls3ah6iHmizm1NxRokISYbUAJFnINZUo1oTspbNKR7UdiLUs9CA3GEOg9996dWLcAaWAs+2a3y0/QORlZouO63UaQAAAABJRU5ErkJggg=="},"69d4":function(t,A,e){"use strict";e("456f")},"6b79":function(t,A,e){"use strict";e("4817")},"6bd6":function(t,A){t.exports="data:image/png;base64,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uiFgZoylQ6QZOJ4iQKCbgIDp5mdtAgRmCAiYGTieIkCgm4CA6eZnbQIEZggImBk4niJAoJuAgOnmZ20CBGYICJgZOJ4iQKCbgIDp5mdtAgRmCAiYGTieIkCgm4CA6eZnbQIEZgh4q8AMnNunTuOS8OalLEGAwD0BezD3SMwgQCCVgIBJJakOAQL3BARMjWRjY+M83oL/V22WSQKLCJwtsvAQlnVP3qlRHo/Hm1dXV3tTsz0kMFPg5ubmIu7HezJzIU8SIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgkAL/ByDGtIvw0xERAAAAAElFTkSuQmCC"},"6f3c":function(t,A,e){t.exports=e.p+"img/home-other-icon6.4f89ba99.png"},7761:function(t,A,e){"use strict";var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"advisory-pop"},[e("div",{staticClass:"content popup-animat"},[e("h3",[t._v("咨询方向")]),e("div",{staticClass:"close",on:{click:t.closePopup}}),e("div",{staticClass:"type"},t._l(t.typeList,(function(A,s){return e("span",{key:s,class:{active:A===t.fromInfo.advisoryType},on:{click:function(e){return t.selectType(A)}}},[t._v(t._s(A))])})),0),t.fromError.advisoryType?e("i",[t._v("请选择咨询方向。")]):t._e(),e("p",[t._v("留下您的联系方式，我们会及时对您的问题进行一对一的解答！")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryName,expression:"fromInfo.advisoryName"}],attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.advisoryName},on:{input:function(A){A.target.composing||t.$set(t.fromInfo,"advisoryName",A.target.value)}}}),t.fromError.advisoryName?e("i",[t._v("请输入您的称呼。")]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryContact,expression:"fromInfo.advisoryContact"}],attrs:{type:"text",placeholder:"您的联系方式（必填）"},domProps:{value:t.fromInfo.advisoryContact},on:{input:function(A){A.target.composing||t.$set(t.fromInfo,"advisoryContact",A.target.value)}}}),t.fromError.advisoryContact?e("i",[t._v("请输入您的联系方式。")]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryEmail,expression:"fromInfo.advisoryEmail"}],attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.advisoryEmail},on:{input:function(A){A.target.composing||t.$set(t.fromInfo,"advisoryEmail",A.target.value)}}}),t.fromError.advisoryEmail?e("i",[t._v("请输入您的邮箱地址。")]):t._e(),e("button",{on:{click:t.submitForm}},[t.submitLoad?[t._v("...")]:[t._v("确定")]],2)]),t.submitStatus?e("SubmitSuccess",{on:{close:function(A){t.submitStatus=!1}}}):t._e()],1)},i=[],n=e("570b"),o={components:{SubmitSuccess:n["a"]},props:{page:String,type:String,proTitle:String},data:function(){return{typeList:["购买新楼盘","二手公寓","出售房源","租房","商业地产买卖","银行借贷","其他"],fromInfo:{advisoryType:"购买新楼盘",advisoryName:"",advisoryContact:"",advisoryEmail:""},fromError:{advisoryType:"",advisoryName:"",advisoryContact:"",advisoryEmail:""},submitStatus:!1,submitLoad:!1}},methods:{closePopup:function(){this.$emit("closePopuo")},selectType:function(t){this.fromInfo.advisoryType=t},submitForm:function(){var t=this;for(var A in this.fromInfo){if(""===this.fromInfo[A])return this.fromError[A]=!0,!1;this.fromError[A]=!1}var e={type:this.fromInfo.advisoryType,name:this.fromInfo.advisoryName,contact:this.fromInfo.advisoryContact,email:this.fromInfo.advisoryEmail};"home"===this.page&&(e.email_title="房产咨询"),"product_details"===this.page&&(e.email_title="新楼盘咨询",e.advisory_source=this.proTitle),"estate"===this.page&&(e.email_title="商业地产咨询",e.advisory_source=this.proTitle),this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(e).then((function(A){if(200===A.code)for(var e in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[e]=""})))}},mounted:function(){this.type&&(this.fromInfo.advisoryType=this.type)}},a=o,r=(e("4dab"),e("2877")),u=Object(r["a"])(a,s,i,!1,null,"c5865aec",null);A["a"]=u.exports},7851:function(t,A,e){},"841c":function(t,A,e){"use strict";var s=e("d784"),i=e("825a"),n=e("1d80"),o=e("129f"),a=e("14c3");s("search",1,(function(t,A,e){return[function(A){var e=n(this),s=void 0==A?void 0:A[t];return void 0!==s?s.call(A,e):new RegExp(A)[t](String(e))},function(t){var s=e(A,t,this);if(s.done)return s.value;var n=i(t),r=String(this),u=n.lastIndex;o(u,0)||(n.lastIndex=0);var c=a(n,r);return o(n.lastIndex,u)||(n.lastIndex=u),null===c?-1:c.index}]}))},"8db3":function(t,A,e){"use strict";e("7851")},"8e88":function(t,A,e){t.exports=e.p+"img/home-banner.cf7e94d2.jpg"},9631:function(t,A,e){},"98f0":function(t,A,e){},"9af6":function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAD6CAYAAAB6dVixAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABGKADAAQAAAABAAAA+gAAAAB8u3XJAAANn0lEQVR4Ae3dz27bRh4A4MZ2gr1V+wSrPEG9t0WBAuoTrHvbW53b3uq9BWmBqkAT5BbnCeLcdk9xbrunNO0DNH6Cum+QnB2n+xuXSSWS+j+0ROoTYFgcDocz39A/Dyly9NFHXgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQITBG4MWWdVQ0LDIfD3uXl5ScN72ari9/d3T0L59dbjbDGxu+tcd9bv+uLi4ufb9y40d96iAYBwvg8ir/d4C4UPUVgZ8o6qxoWEFwaBo7iGTdvPG0PRjDTdBpe9+7duzs7OzuHDe9mq4sP45OtBtB4AgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwPQIeFWiwr+/evdvf29v7ssFdKHpFgbdv3z59+PDh+YrF2HyCgAAzAWbV5CK4/LJqObZvXiCCzG1Bphlnjwo04/pR3KHba6hoxWYW0FeZQUeKM4IZwcj99t69e4ceBcitmre89CjBgwcPTvKWqjQCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCYL+Jh6ss1Ca+Ij6f2YYPrjhTaSeSMFYiL2N/HR9auNrFzLKiXArNBhX3/99Zcx5+tBFJF+vLoncPrbb7+d3r9//2n3mnY9LRJg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AFMhkUCAQC4BASaXpHIIEKgICDAVEgkECOQSEGBySSqHAIGKgABTIZFAgEAuAQEml2SHyylmrktTZL5/nZnN7j2F39METJk5Tce6DwJ7e3uDi4uLw5Rw8+bNk/Tbi8AsAQFmlpD1VwLD4TBN8H2Mg8AiAk6RFtGSlwCBhQQEmIW4ZCZAYBEBAWaGVnwHczo18CJQEYhj47ySKGFMQIAZ46guxHcwvyqnFt//XE623GGBuj6PY+O8w03O0jQBZgZjfJ1p5SDa3d09mLGZ1R0TqOvzumOjY81euTkCzAzCW7dundZk+So+VenVpEvqoEDq6xitfFtu2oRjo5xtq5cFmBndX3w8+3I0Wxxs/bgn5NFomvfdFXj79u2TaN3YP5S4/vK8ODa62/AMLXMfzHyIw8g29t3MEWQO4zube3ED2h0H2nyIbcuVRi5FcKmcEkeASceE1wyBGzPWW10IRDA5jrdf1YC8joPtZGdn5/Ty8vLNgwcPXtXkkdQSgXv37u3H9ZaP4/rKQfonEtUeG7kUzXgcj0octaRJa62mALMAfwSZFDw+WWATWbsnkJ7D2u9es5ppkWswC7im53Ei+9j1mAU2l7X9Ai+LY6D9LbmmFhjBLAE95XRpidJs0hIBp0VLdNTuEtts/SY//vjjfz/99NOncY7+58C4Hb//tPUoHQSIa2tvoln/iWtrX8S1tX93sImNN8kIJgNxjGgGcVGwHxd6+xmKU8SaBdINdNGX5+a8WXNH2D0BAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApsn8H8G0tASVkoEyQAAAABJRU5ErkJggg=="},"9fc4":function(t,A,e){"use strict";e("bd61")},a380:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAABZLkSWAAADhklEQVRYCcWW61XbQBCFbU7+o1TApgLcAUoFOBWgVBDogFRgd2B1AFQQpYKYCqxUgFMB+e5aUsaK5F2BMHPO9ezMzuNqJK08nbxQnp+fZ6ReAmlXaVQja1YlkH6YTqfSbyuQcmABNmCobEhQrhudJUUTsAJjyYpCyShEKTQHT2BsUc35q0hSYDU2q456q8EkKaJbetdR7K1c6hV/y49Mrr7ou6hJEr2qM95BH77dEMregVS75d6LM63HSpSegQ2Ifxbq5HH1lnKfONilJyem9pJ1iNwfYm6AdIx8ppGG8B18BR9BKFccxMWLJ8j0HNbVztX7q8Ip/ZScglAjQvaF3C2e+b6307qqODUTvO4M23eeYurbO6HRGuXAI4iVRdX0jAQRDck/TiRuQKw0bxoJ+jYXoU7tfXLSiGZ6HyYnCkY7ECt601cgISHu7IqtvB+ni599wJfu+6OsjKgUOPATeKHgksV5ZUrd6HFQI9YL49fFxUgqgkoOyW8C8lZQiu1aPtW6MD7Za5CAFAwVT1APbUhKJnFrg5iKbEtG2yJjxVmD9Rcgshlo5+L6T85iJ/hfZpeDi7i2/uoirKsgZovf4YwhODux2QfWFxStJe2LI2AmmH1NS8dSgXoUOdmIP652y8O/muCYsqyKpZW2ZHP5uACHsn65eyV2gr0FWhuuZZ8aO6/WmfEFlyI45GvQVbA0zuaFY1IJ/mZS5vZemfjQ8lEEy1DUgX19j/vyPTn7TLLOiHcgVkoRXMdGt+KUJxKF/NWzpUM7l20k0bqaqA7rB7MXWhZK1Js3RNKuqhSYA09G+6yvQV7HsnZAklbwRuBHA/DFykCg3bYknC+wq7EkSM0vwCUo6r1a41uDVDY6JKXivBCp4jFyb3JmJOTG/mUKWL/iUsWh/USkTWzfcqkcL0S4vqiW/1YJ+DLwBPwfALTN32D7KaNFRHE/fKPqB3sJQuJsjprmoYxqf9GKW2G3G2qa31pxd9iXYNHyd5nN9KY1S6J01SWwh2u9fUyto8vV52bzJakc2TGZ9PTKanKd+0wy9lZ33ZrX+ppb20mudtLl/rWdXpCf1/2DmuLJkUlqIP7ND5KzASS1305co0vcbbXE7Bo6c7Adndau5tz2evEacgkY8+XRnRl+S0NXQFEHVLwEQ0U5ynWhPna/OaitM2ZNoxlxaQWHPgdW9Ee4BIXA2bZGD5a/6aZr8QesoewAAAAASUVORK5CYII="},a434:function(t,A,e){"use strict";var s=e("23e7"),i=e("23cb"),n=e("a691"),o=e("50c4"),a=e("7b0b"),r=e("65f0"),u=e("8418"),c=e("1dde"),l=e("ae40"),g=c("splice"),d=l("splice",{ACCESSORS:!0,0:0,1:2}),C=Math.max,m=Math.min,B=9007199254740991,p="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!g||!d},{splice:function(t,A){var e,s,c,l,g,d,v=a(this),f=o(v.length),E=i(t,f),Q=arguments.length;if(0===Q?e=s=0:1===Q?(e=0,s=f-E):(e=Q-2,s=m(C(n(A),0),f-E)),f+e-s>B)throw TypeError(p);for(c=r(v,s),l=0;l<s;l++)g=E+l,g in v&&u(c,l,v[g]);if(c.length=s,e<s){for(l=E;l<f-s;l++)g=l+s,d=l+e,g in v?v[d]=v[g]:delete v[d];for(l=f;l>f-s+e;l--)delete v[l-1]}else if(e>s)for(l=f-s;l>E;l--)g=l+s-1,d=l+e-1,g in v?v[d]=v[g]:delete v[d];for(l=0;l<e;l++)v[l+E]=arguments[l+2];return v.length=f-s+e,c}})},a90d:function(t,A,e){"use strict";e("3419")},ae40:function(t,A,e){var s=e("83ab"),i=e("d039"),n=e("5135"),o=Object.defineProperty,a={},r=function(t){throw t};t.exports=function(t,A){if(n(a,t))return a[t];A||(A={});var e=[][t],u=!!n(A,"ACCESSORS")&&A.ACCESSORS,c=n(A,0)?A[0]:r,l=n(A,1)?A[1]:void 0;return a[t]=!!e&&!i((function(){if(u&&!s)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:r}):t[1]=1,e.call(t,c,l)}))}},b3d7:function(t,A,e){"use strict";e.r(A);var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home"},[e("HomeHeader"),e("HomeBanner"),t.homeApiStatus?[e("NewHouse"),e("Other"),e("HouseList",{attrs:{housesData:t.newHouses,type:"new house"}}),e("BuyHouseAdvisory",{attrs:{buyHouseAdvisory:t.buyHouseAdvisory1}}),e("HouseList",{attrs:{housesData:t.secondHandedHouses,type:"second hand"}}),e("BuyHouseAdvisory",{attrs:{buyHouseAdvisory:t.buyHouseAdvisory2}}),e("HouseList",{attrs:{housesData:t.rentedHouses,type:"renting"}}),e("BuyHouseAdvisory",{attrs:{buyHouseAdvisory:t.buyHouseAdvisory3}}),e("Estate",{attrs:{businessData:t.business}})]:e("Loading")],2)},i=[],n=(e("a434"),function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("header",{staticClass:"home-header"},[s("div",{staticClass:"w1200px clearfix"},[s("div",{staticClass:"logo left"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:e("314e"),alt:"新加坡看房网"}})])],1),t._m(0),s("div",{staticClass:"nav right"},t._l(t.navDate,(function(A,e){return s("router-link",{key:e,attrs:{to:A.url}},[t._v(" "+t._s(A.name)+" ")])})),1)])])}),o=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"hotline right"},[t._v(" 客服热线 "),e("strong",[t._v("+65 88 139 139")])])}],a=e("7989"),r={data:function(){return{navDate:a["a"]}}},u=r,c=(e("d768"),e("2877")),l=Object(c["a"])(u,n,o,!1,null,"7c9c30d1",null),g=l.exports,d=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",{staticClass:"banner"},[s("img",{staticClass:"b-img",attrs:{src:e("8e88"),alt:"新加坡看公寓网"}}),s("h3",[t._v("好房直通车，就在新加坡看公寓网")]),s("SearchBar",{staticClass:"search-banner"}),t._m(0)],1)},C=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",{staticClass:"integrity"},[s("span",[s("img",{attrs:{src:e("a380"),alt:"诚信为本"}}),t._v(" 诚信为本 ")]),s("span",[s("img",{attrs:{src:e("ce8a"),alt:"实力铸造"}}),t._v(" 实力铸造 ")]),s("span",[s("img",{attrs:{src:e("d165"),alt:"真诚服务"}}),t._v(" 真诚服务 ")]),s("span",[s("img",{attrs:{src:e("67d1"),alt:"100%真实房源"}}),t._v(" 100%真实房源 ")])])}],m=e("efa1"),B={components:{SearchBar:m["a"]}},p=B,v=(e("69d4"),Object(c["a"])(p,d,C,!1,null,"4e23f493",null)),f=v.exports,E=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home-new-house w1200px mt80"},[e("Title",{attrs:{title:"新加坡最新房产资讯",more:t.titleMore}}),e("div",{staticClass:"list clearfix"},t._l(t.newsList,(function(A,s){return e("router-link",{key:s,attrs:{to:"/n/must-see/"+A.id}},[e("rentImg",{attrs:{url:A.img,alt:A.title}}),e("h3",[t._v(t._s(A.title))]),e("p",[t._v(t._s(A.description))]),e("span",[t._v(t._s(A.created_at?A.created_at.split(" ")[0]:"")+" ")])],1)})),1)],1)},Q=[],I=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home-title clearfix"},[t._v(" "+t._s(t.title)+" "),t.more.length>0?e("div",{staticClass:"more right"},t._l(t.more,(function(A,s){return e("router-link",{key:s,attrs:{to:(t.housesType.url||A.url)+"?region="+A.id}},[t._v(t._s(A.text))])})),1):t._e()])},h=[],y={props:{title:String,housesType:{type:Object,default:function(){return{}}},more:{type:Array,default:function(){return[]}}}},b=y,w=(e("3a60"),Object(c["a"])(b,I,h,!1,null,"64711c30",null)),x=w.exports,k={components:{Title:x},data:function(){return{newsList:[],titleMore:[{text:"查看更多",url:"/n/must-see"}]}},mounted:function(){var t=this,A={page:1,size:2,category_id:1};this.$httpApi.newsListApi(A).then((function(A){200===A.code&&(t.newsList=A.data.news_list)}))}},S=k,T=(e("a90d"),Object(c["a"])(S,E,Q,!1,null,"f8d64222",null)),R=T.exports,H=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home-other mt80"},[e("div",{staticClass:"w1200px"},[e("div",{staticClass:"content"},t._l(t.list,(function(A,s){return e("router-link",{key:s,attrs:{to:A.link},nativeOn:{click:function(e){return t.loanPopup(A.link)}}},[e("img",{attrs:{src:A.img,alt:A.name}}),t._v(" "+t._s(A.name)+" ")])})),1)]),t.showMortgage?e("div",{staticClass:"home-mortgage"},[e("div",{staticClass:"b popup-animat"},[e("div",{staticClass:"close",on:{click:function(A){t.showMortgage=!1}}}),e("DetailsMortgage")],1)]):t._e()])},Y=[],N=e("2b66"),F={components:{DetailsMortgage:N["a"]},data:function(){return{showMortgage:!1,list:[{name:"买房必看",img:e("6bd6"),link:"/n/must-see"},{name:"买房贷款",img:e("414f"),link:"/"},{name:"产权交易",img:e("9af6"),link:"/n/property"},{name:"常见问题",img:e("11e6"),link:"/n/faq"},{name:"业主委托",img:e("c1a7"),link:"/owner"},{name:"购房指南",img:e("6f3c"),link:"/n/guide"}]}},methods:{loanPopup:function(t){"/"===t&&(this.showMortgage=!0)}}},J=F,D=(e("ee0d"),e("3b78"),Object(c["a"])(J,H,Y,!1,null,"2e2188c4",null)),_=D.exports,L=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("div",{staticClass:"home-house-list w1200px mt80"},[s("Title",{attrs:{title:t.housesType.name,housesType:t.housesType,more:t.titleMore}}),t.housesData.length>0?s("div",{staticClass:"product-list clearfix"},t._l(t.housesData,(function(A,i){return s("div",{key:i,staticClass:"item left"},[s("router-link",{staticClass:"a-img",attrs:{to:t.housesType.url+"/"+A._id}},[s("rentImg",{staticClass:"img-object",attrs:{url:A.image,alt:A.title}})],1),s("router-link",{attrs:{to:t.housesType.url+"/"+A._id,tag:"h3"}},[t._v(" "+t._s(A.title)+" ")]),A.house_types&&A.house_types.length>0?s("p",[t._v(" "+t._s(A.house_types[0].type)+" / "+t._s(A.house_types[0].area)+" ")]):t._e(),s("span",{staticClass:"price"},[t._v(" "+t._s(A.price)+" "),s("i",[t._v(t._s(t.housesType.unit))])]),A.vr_link?s("a",{staticClass:"vr",attrs:{href:A.vr_link,target:"_blank"}},[s("img",{attrs:{src:e("0d19")}}),t._v(" VR看房 ")]):t._e()],1)})),0):t._e(),s("router-link",{staticClass:"view-all",attrs:{to:t.housesType.url}},[t._v("查看全部")])],1)},O=[],X={components:{Title:x},props:{housesData:Array,type:String},data:function(){return{titleMore:[{text:"东部",id:"east"},{text:"西部",id:"west"},{text:"市区",id:"urban"},{text:"中部",id:"middle"},{text:"南部",id:"east"},{text:"北部",id:"north"},{text:"东北部",id:"east_north"},{text:"其他地区",id:"other"}]}},computed:{housesType:function(){var t={"new house":{url:"/c/new-house",name:"精选优质新房",unit:"万起"},"second hand":{url:"/c/second-hand",name:"新加坡二手好房",unit:"万"},renting:{url:"/c/renting",name:"狮城租房",unit:"/月"}};return t[this.type]||{}}}},U=X,P=(e("6b79"),Object(c["a"])(U,L,O,!1,null,"7eb63b76",null)),j=P.exports,K=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home-advisory mt80"},[e("div",{staticClass:"w1200px"},[e("router-link",{attrs:{to:t.buyHouseAdvisory.more},nativeOn:{click:function(A){return t.btnClick(t.buyHouseAdvisory.more)}}},[t._v(t._s(t.buyHouseAdvisory.btn))]),e("h3",{domProps:{innerHTML:t._s(t.buyHouseAdvisory.title)}}),e("p",[t._v(t._s(t.buyHouseAdvisory.des))])],1),t.showAdvisoryType?e("AdvisoryPopup",{attrs:{page:"home"},on:{closePopuo:function(A){return t.btnClick("/")}}}):t._e()],1)},W=[],Z=e("7761"),q={components:{AdvisoryPopup:Z["a"]},props:{buyHouseAdvisory:Object},data:function(){return{showAdvisoryType:!1}},methods:{btnClick:function(t){"/"===t&&(this.showAdvisoryType=!this.showAdvisoryType)}}},G=q,V=(e("ffdd"),Object(c["a"])(G,K,W,!1,null,"7bdf5bee",null)),M=V.exports,z=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"home-estate w1200px mt80"},[e("Title",{attrs:{title:"商业地产"}}),e("div",{staticClass:"estate-list clearfix"},t._l(t.businessData,(function(A,s){return e("div",{key:s,staticClass:"item left"},[e("router-link",{staticClass:"a-img",attrs:{to:"/estate/building/"+A._id}},[e("rentImg",{staticClass:"img-object",attrs:{url:A.image,alt:A.title}})],1),e("router-link",{attrs:{to:"/estate/building/"+A._id,tag:"h3"}},[t._v(t._s(A.title))]),e("p",[t._v(t._s(A.addr))])],1)})),0),e("router-link",{staticClass:"view-all",attrs:{to:"/estate/building"}},[t._v("查看全部")])],1)},$=[],tt={components:{Title:x},props:{businessData:Array},data:function(){return{}}},At=tt,et=(e("9fc4"),Object(c["a"])(At,z,$,!1,null,"46a3f417",null)),st=et.exports,it=e("0e17"),nt={name:"home",components:{HomeHeader:g,HomeBanner:f,NewHouse:R,Other:_,HouseList:j,BuyHouseAdvisory:M,Estate:st,Loading:it["a"]},data:function(){return{buyHouseAdvisory1:{title:'<i style="color: #BF3F3F;">新加坡买房交易</i>流程常见问题汇总',des:"让您从购屋新手秒变购房达人！让您直观了解买房如何汇款以及其它常见买房疑问信息汇总，置业疑惑，认真看好这一篇文章就够啦。",btn:"买房必看",more:"/n/must-see"},buyHouseAdvisory2:{title:'<i style="color: #BF3F3F;">卖房/租房</i>众多潜在买家/租户',des:"以专业、精准、高效的服务为您争取最大利益",btn:"立即咨询",more:"/"},buyHouseAdvisory3:{title:'<i style="color: #BF3F3F;">优质的商业地产</i>买卖及租赁',des:"为企业、业主提供专业的服务",btn:"立即查看",more:"/estate"},newHouses:[],rentedHouses:[],secondHandedHouses:[],business:[],homeApiStatus:!1}},mounted:function(){var t=this;this.$httpApi.indexApi().then((function(A){200===A.code&&(t.newHouses=A.data.newHouses,t.rentedHouses=A.data.rentedHouses,t.secondHandedHouses=A.data.secondHandedHouses,t.business=A.data.business.splice(0,3),t.homeApiStatus=!0)}))}},ot=nt,at=Object(c["a"])(ot,s,i,!1,null,null,null);A["default"]=at.exports},b680:function(t,A,e){"use strict";var s=e("23e7"),i=e("a691"),n=e("408a"),o=e("1148"),a=e("d039"),r=1..toFixed,u=Math.floor,c=function(t,A,e){return 0===A?e:A%2===1?c(t,A-1,e*t):c(t*t,A/2,e)},l=function(t){var A=0,e=t;while(e>=4096)A+=12,e/=4096;while(e>=2)A+=1,e/=2;return A},g=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){r.call({})}));s({target:"Number",proto:!0,forced:g},{toFixed:function(t){var A,e,s,a,r=n(this),g=i(t),d=[0,0,0,0,0,0],C="",m="0",B=function(t,A){var e=-1,s=A;while(++e<6)s+=t*d[e],d[e]=s%1e7,s=u(s/1e7)},p=function(t){var A=6,e=0;while(--A>=0)e+=d[A],d[A]=u(e/t),e=e%t*1e7},v=function(){var t=6,A="";while(--t>=0)if(""!==A||0===t||0!==d[t]){var e=String(d[t]);A=""===A?e:A+o.call("0",7-e.length)+e}return A};if(g<0||g>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(C="-",r=-r),r>1e-21)if(A=l(r*c(2,69,1))-69,e=A<0?r*c(2,-A,1):r/c(2,A,1),e*=4503599627370496,A=52-A,A>0){B(0,e),s=g;while(s>=7)B(1e7,0),s-=7;B(c(10,s,1),0),s=A-1;while(s>=23)p(1<<23),s-=23;p(1<<s),B(1,1),p(2),m=v()}else B(0,e),B(1<<-A,0),m=v()+o.call("0",g);return g>0?(a=m.length,m=C+(a<=g?"0."+o.call("0",g-a)+m:m.slice(0,a-g)+"."+m.slice(a-g))):m=C+m,m}})},b6c1:function(t,A,e){},bd61:function(t,A,e){},c1a7:function(t,A,e){t.exports=e.p+"img/home-other-icon5.f0297594.png"},ce8a:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAABZLkSWAAACoUlEQVRYCcWX/XGbQBDFJU/+DyXgCqIS6CDqIJTgTqIOjg6sVBB1YFKBSAVWKpB/j3D6QMdxhw9pZ54XuN23T7t3DF4uJtrxeFyR+h3I553HnazmqgHyv5bLpfy8hqgc/AR7EGt7EpSbJ1cJaQYMSGUGoiyJUIjW4B2kNnGuPyUSApNalYPPRIuERCN9dZDN9Ui1wkd+Z3H2R78GdZJoYzMe4P3jRpAOxKPt6uAsbVtRpT2wB+F7wSan9Qfonnmxyy+eLrg3XD9anORIg7S01naQ7uXcqXtz2l/Iq67AC/5rdz3k1MWmXUTgZuaNV3dbyNbTa6wZqXnq4oLA/UjwZ5avxNl2QfgyQtpO9ImgFUm5TUzs/8BX2A3f4z707vu3+jBZ6ZCs+yuJ7n3iVOJHQJ1CAtXB1OYVR2cMBYuAooX23xsIsR1BRYetJ8G556wY8ownt7/0JoEhtrMFrCepciSmFNfShwosrbBL3xOZXJwUfrks6LnOXGuczhIOLWkfD51WNUF7rgTxJpUBtifGKVIVR9YM65NN5BpNiOkwDYp0tYZ4E0Lsian1mmlc5I5nGuNvyIJEEjd9rOfijQTW5/vRqyCRicRJzE4jXoFYGxw3RCaWzBOvhrSbvPEEDS3diCTQDAVPeN5Im0Ys2/53UX+vxi1xZJdRDP7gVlOKD9aaOkLprxe9ev5gVSodqCaMYa6Ujf05bQc7gRm+AWOf4gqf0/5BnttvSLsHF92Dcs7KgdylFeeMf/CoT6N1irMPEbmda3N5eCtbf9RDkt1ZpBqiMxBnJN3jZFdxqnrRiFyDA0ht4lz3yk27hSgDKbu5Eec0NZ4sSHMg8gbEmnKUm3tK3CydXtQ3KyMPKLQipOiQ47+BS9O/ng3YCbzbany0fQC7THuEyfEQrwAAAABJRU5ErkJggg=="},d165:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAABZLkSWAAAClElEQVRYCc2XgXWbMBCGTRcoG0SZoGwQj+ANyggewRuEDUgmiLuBR3AnMBvUncD9fsfiCSKoBIrJvfc/Sae7/35OICfZaqJdLpcnUtegAOY2MrR2ZNYAjb+yLNP4uYYoA57BCcTaiQTlmuQqIc1BDVJZDVGeRChEJfgDUps4N7NEQlCnVuXhe44WCYmO9M1D9lku1Qo/8juLsw/9FtRJomubscBYjYpE0GYBUf2SnQ8ns4qJ0jtwAuHvgk1OO56he+Ri17j65nBXzJcWJznSsNNEdu0g3TPM1b2vZOpiYzu4/UrKblqummwH1T0TIfKV2D04AwPW4CdwzY2RvwT9GPmHrKGDjyuOt+h/RiPrs+J9jPjXQPtjMaql/VArJHAXGk3c2ifO+tiXAO8D9GJCS24lcB8YfbBF5o4RNff6SB4CCx4C40LCjiFBxDxI4OiROEShpE7K4LQZ3OluFPaa6br9q9AH8Wd3vaa7HF5lev+Gtzs77599xzVtQckTmSYkO6aDBuJtCOlYDBw79s1YTGePhCOIsbJDELGgSBlTiNijOthE1FBorUKRObrOlFNH5l1/i6d8nVEiJ4rTsxz0ZLr9p1r5v45AHHusrpb3mwNP43oj54Mi4ZkjrmkfHqIqUlQ//IPImeLEX7kCTb/ihHUrktw5nbOlTStQE7wvdmfGKGEpxLXdy6xKiHPmDfhufQuNf6lrPvzTdHOUC4lyy5ZWnOts53QyxVFPfUvao20F+Sawh/4RO1WIL+/Fp8XrIzu/s0g1RN9AnJF0j+MOO9Yh6YjcgDNIbeLcDNWN8kOUg5TdrMQZJSIkGFIDRN6AWFOOck1ILRvTXtTWETpSqCBWR6TRgB/Atd8sGnAQuNuOjNH2D7bmnin5qocnAAAAAElFTkSuQmCC"},d768:function(t,A,e){"use strict";e("26ab")},e682:function(t,A,e){"use strict";e("6579")},ee0d:function(t,A,e){"use strict";e("1b81")},efa1:function(t,A,e){"use strict";var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"search-Keyword"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectType,expression:"selectType"}],on:{change:function(A){var e=Array.prototype.filter.call(A.target.options,(function(t){return t.selected})).map((function(t){var A="_value"in t?t._value:t.value;return A}));t.selectType=A.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"新楼盘"}},[t._v("新楼盘")]),e("option",{attrs:{value:"二手房"}},[t._v("二手房")]),e("option",{attrs:{value:"租房"}},[t._v("租房")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.Keyword,expression:"Keyword"}],attrs:{type:"text",placeholder:"输入MRT、小区名、地区名称"},domProps:{value:t.Keyword},on:{input:function(A){A.target.composing||(t.Keyword=A.target.value)}}}),e("button",{on:{click:t.searchClick}},[t._v("搜索")])])},i=[],n=(e("ac1f"),e("841c"),{"新楼盘":"new-house","二手房":"second-hand","租房":"renting"}),o={data:function(){return{selectType:"新楼盘",Keyword:""}},methods:{searchClick:function(){this.$router.push({path:"/search/".concat(n[this.selectType]),query:{keyword:this.Keyword}})}},mounted:function(){for(var t in n)this.$route.params.search===n[t]&&(this.selectType=t)}},a=o,r=(e("4c91"),e("2877")),u=Object(r["a"])(a,s,i,!1,null,"f2efad4e",null);A["a"]=u.exports},ffdd:function(t,A,e){"use strict";e("9631")}}]);
//# sourceMappingURL=home.2ee04367.js.map