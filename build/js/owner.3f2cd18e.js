(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["owner"],{"16f9":function(t,e,o){},1711:function(t,e,o){t.exports=o.p+"img/consultant.c5cceb0c.jpg"},1740:function(t,e,o){},"2f15":function(t,e,o){"use strict";o("4fb2")},"3f03":function(t,e,o){"use strict";o("b6c1")},"4fb2":function(t,e,o){},"523e":function(t,e,o){"use strict";o("1740")},"53a4":function(t,e,o){"use strict";o("16f9")},"570b":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"success"},[o("div",{staticClass:"content popup-animat"},[o("div",{staticClass:"close",on:{click:t.closeSuccess}}),t._m(0),o("div",{staticClass:"c"},[o("p",[t._v("您也可以拨打我们的服务热线，直接与我们取得联系")]),t._m(1),o("button",{on:{click:t.closeSuccess}},[t._v("确定")])])])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"t"},[o("h3",[t._v("提交成功")]),o("p",[t._v("请耐心等待，我们稍后将会有工作人员与您取得联系！")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t._v("客服热线 "),o("strong",[t._v("+65 8813 9139")])])}],r={methods:{closeSuccess:function(){this.$emit("close")}}},n=r,a=(o("3f03"),o("2877")),c=Object(a["a"])(n,s,i,!1,null,"0d9de449",null);e["a"]=c.exports},"5c72":function(t,e,o){},7761:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"advisory-pop"},[o("div",{staticClass:"content popup-animat"},[o("h3",[t._v("咨询方向")]),o("div",{staticClass:"close",on:{click:t.closePopup}}),o("div",{staticClass:"type"},t._l(t.typeList,(function(e,s){return o("span",{key:s,class:{active:e===t.fromInfo.advisoryType},on:{click:function(o){return t.selectType(e)}}},[t._v(t._s(e))])})),0),t.fromError.advisoryType?o("i",[t._v("请选择咨询方向。")]):t._e(),o("p",[t._v("留下您的联系方式，我们会及时对您的问题进行一对一的解答！")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryName,expression:"fromInfo.advisoryName"}],attrs:{type:"text",placeholder:"您的称呼（必填）"},domProps:{value:t.fromInfo.advisoryName},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"advisoryName",e.target.value)}}}),t.fromError.advisoryName?o("i",[t._v("请输入您的称呼。")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryContact,expression:"fromInfo.advisoryContact"}],attrs:{type:"text",placeholder:"您的联系方式（必填）"},domProps:{value:t.fromInfo.advisoryContact},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"advisoryContact",e.target.value)}}}),t.fromError.advisoryContact?o("i",[t._v("请输入您的联系方式。")]):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.advisoryEmail,expression:"fromInfo.advisoryEmail"}],attrs:{type:"text",placeholder:"您的邮箱地址（必填）"},domProps:{value:t.fromInfo.advisoryEmail},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"advisoryEmail",e.target.value)}}}),t.fromError.advisoryEmail?o("i",[t._v("请输入您的邮箱地址。")]):t._e(),o("button",{on:{click:t.submitForm}},[t.submitLoad?[t._v("...")]:[t._v("确定")]],2)]),t.submitStatus?o("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e()],1)},i=[],r=o("570b"),n={components:{SubmitSuccess:r["a"]},props:{page:String,type:String,proTitle:String},data:function(){return{typeList:["购买新楼盘","二手公寓","出售房源","租房","商业地产买卖","银行借贷","其他"],fromInfo:{advisoryType:"购买新楼盘",advisoryName:"",advisoryContact:"",advisoryEmail:""},fromError:{advisoryType:"",advisoryName:"",advisoryContact:"",advisoryEmail:""},submitStatus:!1,submitLoad:!1}},methods:{closePopup:function(){this.$emit("closePopuo")},selectType:function(t){this.fromInfo.advisoryType=t},submitForm:function(){var t=this;for(var e in this.fromInfo){if(""===this.fromInfo[e])return this.fromError[e]=!0,!1;this.fromError[e]=!1}var o={type:this.fromInfo.advisoryType,name:this.fromInfo.advisoryName,contact:this.fromInfo.advisoryContact,email:this.fromInfo.advisoryEmail};"home"===this.page&&(o.email_title="房产咨询"),"product_details"===this.page&&(o.email_title="新楼盘咨询",o.advisory_source=this.proTitle),this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(o).then((function(e){if(200===e.code)for(var o in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[o]=""})))}},mounted:function(){this.type&&(this.fromInfo.advisoryType=this.type)}},a=n,c=(o("b1e7"),o("2877")),u=Object(c["a"])(a,s,i,!1,null,"5386611a",null);e["a"]=u.exports},"7b47":function(t,e,o){"use strict";o("902d")},"7ce1":function(t,e,o){},"807c":function(t,e,o){t.exports=o.p+"img/process-icon4.d78b07a6.png"},8499:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"breadcrumb-list"},[o("div",{staticClass:"w1200px"},[o("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._l(t.breadcrumb,(function(e,s){return[e&&e.url&&e.name?o("router-link",{key:s,attrs:{to:e.url}},[t._v(t._s(e.name))]):t._e()]}))],2)])},i=[],r={props:{breadcrumb:{type:Array,default:function(){return[]}}}},n=r,a=(o("b13c"),o("2877")),c=Object(a["a"])(n,s,i,!1,null,"5c117f2f",null);e["a"]=c.exports},"902d":function(t,e,o){},a34f:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"consultant"},[s("h3",[t._v("联系顾问")]),s("div",{staticClass:"content"},[s("img",{attrs:{src:o("1711")}}),s("strong",[t._v("吴洲 / Peter Wu "),s("span",[t._v("金牌销售")])]),s("p",{staticClass:"tel"},[t._v("+65 8813 9139")]),s("p",[t._v("任职于新交所上市企业，新加坡最大的国际性产业集团ERA担任高级营销董事，金牌房产经纪人")]),s("ul",[s("li"),s("li")])])])}],r=(o("7b47"),o("2877")),n={},a=Object(r["a"])(n,s,i,!1,null,"2c49ee01",null);e["a"]=a.exports},a901:function(t,e,o){t.exports=o.p+"img/owner-banner.5eba4c4a.jpg"},b13c:function(t,e,o){"use strict";o("7ce1")},b1e7:function(t,e,o){"use strict";o("5c72")},b6c1:function(t,e,o){},c318:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAADCCAYAAADD7bk7AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAApqADAAQAAAABAAAAwgAAAADA4qiWAAAOwklEQVR4Ae2ce4wdVR3H2SfbZWuwpbZFIVm1Iq60urTb7SPCmlSQVwqlgP4BjYkCPkIg1ASJ0D8QEZvwUomAQQPxRbVQngGxvNrdbRcWow3EjalItC8WU9ptS/fl59RtoNvec2bunZk798d3ksl9/H7nnN/v8/vOmTMzd/eoo7SJgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAhUFIGqPEQ7Ojpa3dXVNae6uvok4pnK56lVVVXT3Kv7zPt6Xrexbx17PfAe+79GRkZemj9//l6+12aIQNmEuX79+kk1NTVnIK6zEN6ZMD2uGK60d6Jcy/4E7x+fN2/eP4vp54PQpru7+yswug3eNYXyxfa1tra2RwvZs/o+U2ECpXrDhg2X8PpNEmz3ASoWAH2/RtsHJkyYcOesWbMGiu3HWjtEeT053RTKC35L29vbV4X80rZnJkwEeS6n3ZsQ48y0k3L9A3gbY/2gqanp5y0tLfuzGDOPY/T09NQNDQ3dA4tlUeLLizCrowRbis/GjRtP52hdT8JrshKli5ex3Pr0zl27dv2dg2IZ4xc8fZWSX57b9vb2Hjs8PPxUVFHmKZfUZkx3pALlLpK9PA8JI8x1nN4v4PS+PQ/xpB0Dk0EzOT+OKE+OMxZtcnEqT2XGBMpkRPkMQHIhSlcYCrRg3759G4ltVpxCVaJvZ2fnXATWFVeUecq1NulgOG22AGUN/X68iL4HaNsL0C203cr7A6/cRnJrxGmsUadjm8b76dhaeO9O13G2E3FeR4yXcuX5xzgNK8WX225LiPUB2EyolJiPFGeiwgTKlxDPKqBMPNJgBb57C5E9ivhWT5ky5Znm5uZ9BfwO+Zo21axf23ldzH4+Y37yEIfCH47BfxUz53Vz5879UWG3yrOQ03KidjmltkTLikpiCXD6OBlxdMcQ5T9I8lp3z4w2w6UmzEFxKn2spK/TY/T1VcT5mxj+uXRdu3ZtLevnn5L7N0oNkIPWzhoTUXyIGe/hiKJ09xavnzRpUguicG1KFqUrBvfeXmbvoL+L+fim+y7Cdl+lrzkd+8bGxsfIO4oo3WTgnp7lfiv54ocjDCZVD5LppyJk28lF0UkI8uYZM2a8G8E/tgsz8O95ovRp4ro3QuNGfFa7p1ARfHPnwlr5BIJ6if2MCMFtbGhomI9ffwTfsruULEzg3EAW50bI5FnALOK59r8j+JbkMnv27D3Mnm4G+XGEjpqZ7X+LkEtmEWGsxFzc0oWY3dLplAidPgb7jkq6VVZSMcZOgzeGwABwDafus7N+RMjM/F0K9/1QfPgs4kLqipBfXuzEeh4xP08800Mxwf4eziKLs2YfiitkL0mYdL6C3XsBBZjn9u7duyStU3coQYpyEzH8MOTH3YTvbd68uSHkV247M+VVxLqaOI4JxeIOSs4cl/OayDo+NF6S9qKFyZOdVgJZ7AsGQeyqr69f1tHRMeTzS9tWW1vrZvVe3zgU76M7duyIcgHh6yY1GyxrOEPdRZy3M0ioboP4LHMHZWoBpdxxKMGCw3MRs6KgccwAxKtbW1vfCPmlbWfNOcgF0WWM4/0xB8W/jguh3N2Y3rRpUxNr+YeJ/9shVm4yYD+HZcyvQr55thclTCDNISnvBQ9wngDOL/KSPOL8KzGtCMQzDQFfGfDJ1PzKK68cv3v37hcY9JwIA2/hQu4LnL6fjuCba5eihMka55oIWbmr9VxtxH074nzbFxT2KLn5ukjMxgTQMjg42E2Hnw91Styv1dXVzeP0/WrItxLssYUJAPfzsdB9s06O2pfzBsD9CQbLi/t8cbm1JhcYmfxm1BfHmM2dlT4Wwe9FbrIvyMOyKUKskVxiC5OjuI3ifTjQ+08C9rKZmVV+xsHlvUolP/enHpWyPcStuEUzZ878b6UEHCXO2MKk09BsuZV12kNRBi+Hz9is8phvbIRbKcK8jVP3xeW6FedjWKottjBDRcP+pLsKLjWwlNs/4uufGXOBuxL2+ZTZNgLnq7m4vIZYR8scSyrDxxIm99EmA8JdkRfcsK8raMyPwT1f9m31AwMDHT6HMtrcbwwuYQ3v7mea3WIJk6PU3VT3tuE0nnthUtQ+8tjhqypX8N4D0Nc2LRv83TpyETNlbpdKSeXuFdn4QbhH9pHx34373M9p/PVx3+X1Y+gAivvr+FTzRJRvsC9AlC+mOlBOOo8lTMCEitWTk7yihOGNlSVJ6CCMMkZSPr08VuV/Ocx7LakO895PLGGSjLdYCLeS/gJxW6A4oYMw0Dwx89PcZD+NM9GWxHqsgI5iCTM0Y3Kq76+AnA+EyIzofQKEk/cgzCJPeD+5Z8+esxcuXLgri/HyNEZtzGC8xeKCIVTsmMOl5+6ESeELDhA6CAs2TNDAevIvCXZXUV3FmjHJLPSPrypJmN7ZHeE29fX1HV1R1TQUbFxhuufkvu0dnzFPNpYdwVh37twZyjdPKZmKJa4wvclT7MLnRm/L7I0sOyom1uzplH/ERIVZ/nQUgRUCEqaVShrLQ8I0VlAr6UiYVippLA8J01hBraQjYVqppLE8JExjBbWSjoRppZLG8pAwjRXUSjoSppVKGstDwjRWUCvpSJhWKmksDwnTWEGtpCNhWqmksTwkTGMFtZKOhGmlksbykDCNFdRKOhKmlUoay0PCNFZQK+lImFYqaSwPCdNYQa2kI2FaqaSxPCRMYwW1ko6EaaWSxvKQMI0V1Eo6EqaVShrLQ8I0VlAr6UiYVippLA8J01hBraQjYVqppLE8JExjBbWSjoRppZLG8pAwjRXUSjoSppVKGstDwjRWUCvpSJhWKmksDwnTWEGtpCNhWqmksTwkTGMFtZKOhGmlksbykDCNFdRKOhKmlUoay0PCNFZQK+lImFYqaSwPCdNYQa2kI2FaqaSxPCRMYwW1ko6EaaWSxvKQMI0V1Eo6EqaVShrLQ8I0VlAr6XxghVldXV1lpYgW84glzKqqqpEAhIkBe27Mw8PDwVgnT54cyjc3+VgLJJYwSb4/AGBywJ4b8+jo6KRAMAPNzc37Aj4yp0QgrjC3++KIUGxf80xtxBo6iLy5ZhrsB3CwuMLcFmAUmoUCzTM1e2NFuBJmpuU4dLBYwgwVC/uUQ7vP7yfWy6FYQwdhfpMzEFksYZJvqFinVgoTDqJWX6wIVzOmD1DKtljCDBUL+9Senp5PpBxzIt0jzAWBjkIHYaC5zKUQiCVMivkqg436BuQ2TKjgvuaZ2Lq7u5s5iI73DUauvT67bOkSiCXM9vZ2N4s4cRbcIsxEBdtmZUCU3oOHHIZra2v/lFU8GudwArGE6ZpTtKcO7+a9byj6l/Gpee+b/L0bGRk5JxBV1+zZs3cGfGROkUBsYfIozytMYj1hw4YN56UYc0ldswaezsFzga+TCDn6msuWAIFihNnJjLjLNzb27/js5bSxBr6c8et8MYTOCr62siVDILYwOcUNMuN411/YO5g1W5IJMblemC2dIJ0wC26IcntbW9vLBR1kyIRAbGG6qBDeHaHoKPANIZ+s7WOz5TTfuJzG7yI/750HX3vZkiFQlDCZUZ5n+D8HQriI2zJLAz6Zmcfur97iG5CD6e39+/cHDzpfH7IlQ6AoYbqhmVmizIh3d3V1TU0m1OJ7QXDVQ0NDv6SHYwK9rFy4cKF3/RxoL3NCBIoW5pw5c9YRw9OBOCZzWrwXYZT1R7msd68ljoWBWN+aOHHiXQEfmTMiULQwXXwI7sYIcZ6LMO7Htyz3NllOXEGM3lP4WA63trS07I6Qj1wyIFCSMHkS1MVMdHuEOC9DIL/btGlTfQTfxFwYczmd3c0emrE7m5qatLZMjHzpHZUkTDf8wMDAcmbD50KhIOAlu3fvfqS3t/fYkG+p9rVr19aytr2Zfm6N0NfWurq6C5kt90fwlUtGBEoWZkdHx1B9ff1FxPtmhJjP5Kq3j1P71xFzyWMfaTxmyS82Njb2ciBcdyT7uO8GuYi7sLW19T/jvtfHMhNIRBwUdgd5XIDYovyNzHH43YOANjKrhS5IIuOhv2b2h2jwLPtnozREvFeNXcRFcZdPhgRqkxpr7ty5PQjjUvp7gP3oUL+Iwv1Q90XE2cf71bx/mPujbs0a+eY2bWfgfz5tF7O3s4fWkrj8f+PgWEnMbv2pLYcEIhcyauyIcx5FX41girl/uYVxuti30scWTrMHXvk8yO6e2Ezj++nulf5P4fUz7HE390j1WxwE98ZtaMGf+vyNPAo+LobvUi5qV5U718RmzIOJMAt1soacQ4Jr+O5zB7+P+OpE52ZA99jT3Y46rJn7voTtLdovQZQvlNCHmmZAIJE15vg4KfybNTU1CxDWH8bbyvjZzRSEJlGWsQaRh05FmG50foW0h9lzqTs1sL8eOaLkHfsZfzk/4Ggjns3Jd68e0yCQ+Kn8/UFy2nTn4lUIY7W7MOLzCj6f+H6ftN4zpnuKcxv7StZM76Q1jvpNh0CqwjwYMoIc5v39fX19v+7v77+Cz1fy+aSD9iRfEeR2+n+Qe6u3jN3GSrJ79ZURgUyEeTCXGTNmvMt79+jvDvczNE6vZ/H+bMR0GmJqOOgX85Xmoxtp/4TbWUP28Hr4VVPMTuVeXgIlXeImFToibUSkHfTnZlF3m8ndGnKvB9+7X55vQ4DbEN1WdvfXmu7zGw0NDc/OmjVL/5wAINpEQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREIDKB/wHGNRpB7xhv6QAAAABJRU5ErkJggg=="},c4bd:function(t,e,o){t.exports=o.p+"img/process-icon3.38811e11.png"},d076:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"owner"},[o("BreadcrumbList",{attrs:{breadcrumb:t.breadcrumb}}),t._m(0),o("div",{staticClass:"w1200px content clearfix"},[o("div",{staticClass:"left"},[o("div",{staticClass:"tab"},[o("button",{class:{active:"委托卖房"===t.tabType},on:{click:function(e){return t.changeType("委托卖房")}}},[t._v("委托卖房")]),o("button",{class:{active:"委托出租"===t.tabType},on:{click:function(e){return t.changeType("委托出租")}}},[t._v("委托出租")])]),o("FormSubmit",{attrs:{tabType:t.tabType}})],1),o("div",{staticClass:"right"},[o("Consultant")],1)]),o("Process",{attrs:{tabType:t.tabType}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"owner-banner w1200px"},[s("img",{attrs:{src:o("a901"),alt:"我是业主"}})])}],r=o("8499"),n=o("a34f"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form clearfix"},[o("div",{staticClass:"input-box"},[o("span",[t._v("物业所在位置")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.position,expression:"fromInfo.position"}],attrs:{type:"text",placeholder:"请输入物业所在的位置"},domProps:{value:t.fromInfo.position},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"position",e.target.value)}}}),t.fromErr.position?o("em",[t._v("请输入物业所在的位置")]):t._e()]),o("div",{staticClass:"input-box"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.housesType,expression:"fromInfo.housesType"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.fromInfo,"housesType",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"私人公寓"}},[t._v("私人公寓")]),o("option",{attrs:{value:"政府组屋（HDB)"}},[t._v("政府组屋 (HDB)")]),o("option",{attrs:{value:"执行共管公寓"}},[t._v("执行共管公寓")]),o("option",{attrs:{value:"有地私宅"}},[t._v("有地私宅")]),o("option",{attrs:{value:"商业地产"}},[t._v("商业地产")])]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.address,expression:"fromInfo.address"}],attrs:{type:"text",placeholder:"请输入物业地址"},domProps:{value:t.fromInfo.address},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"address",e.target.value)}}}),t.fromErr.address?o("em",[t._v("请输入物业地址")]):t._e()]),o("div",{staticClass:"clearfix"},[o("div",{staticClass:"input-box w50 first"},[o("span",[t._v("大牌 block")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.bigHouseNumber,expression:"fromInfo.bigHouseNumber"}],attrs:{type:"text",placeholder:"请输入大牌"},domProps:{value:t.fromInfo.bigHouseNumber},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"bigHouseNumber",e.target.value)}}}),t.fromErr.bigHouseNumber?o("em",[t._v("请输入大牌")]):t._e()]),o("div",{staticClass:"input-box w50"},[o("span",[t._v("门牌 unit")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.houseNumber,expression:"fromInfo.houseNumber"}],attrs:{type:"text",placeholder:"请输入门牌"},domProps:{value:t.fromInfo.houseNumber},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"houseNumber",e.target.value)}}}),t.fromErr.houseNumber?o("em",[t._v("请输入门牌")]):t._e()])]),o("div",{staticClass:"input-box"},[o("span",[t._v(t._s("委托卖房"===t.tabType?"期望售价":"期望租金"))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.sellingPrice,expression:"fromInfo.sellingPrice"}],attrs:{type:"text",placeholder:"委托卖房"===t.tabType?"请输入您的期望售价":"请输入您的期望租金"},domProps:{value:t.fromInfo.sellingPrice},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"sellingPrice",e.target.value)}}}),o("i",{on:{click:t.showAdvisory}},[t._v("或者咨询专业经纪人，做免费估价")]),t.fromErr.sellingPrice?o("em",[t._v(t._s("委托卖房"===t.tabType?"请输入您的期望售价":"请输入您的期望租金"))]):t._e()]),o("div",{staticClass:"clearfix"},[o("div",{staticClass:"input-box w50 first"},[o("span",[t._v("姓名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.name,expression:"fromInfo.name"}],attrs:{type:"text",placeholder:"请输入您的姓名"},domProps:{value:t.fromInfo.name},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"name",e.target.value)}}}),t.fromErr.name?o("em",[t._v("请输入您的姓名")]):t._e()]),o("div",{staticClass:"input-box w50"},[o("span",[t._v("联系方式")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fromInfo.contact,expression:"fromInfo.contact"}],attrs:{type:"text",placeholder:"请输入您的联系方式"},domProps:{value:t.fromInfo.contact},on:{input:function(e){e.target.composing||t.$set(t.fromInfo,"contact",e.target.value)}}}),t.fromErr.contact?o("em",[t._v("请输入您的联系方式")]):t._e()])]),o("p",[t._v(" 点击递交之后，房源核验、确认信息无误，我们将与您联系，签订服务合同，新加坡看公寓网仅提供免费房产信息展示和网络技术服务。 ")]),o("button",{on:{click:t.submitInfo}},[t.submitLoad?[t._v("...")]:[t._v("递交")]],2),t.submitStatus?o("SubmitSuccess",{on:{close:function(e){t.submitStatus=!1}}}):t._e(),t.showAdvisoryType?o("AdvisoryPopup",{on:{closePopuo:t.showAdvisory}}):t._e()],1)},c=[],u=(o("b0c0"),o("570b")),m=o("7761"),f={components:{SubmitSuccess:u["a"],AdvisoryPopup:m["a"]},props:{tabType:String},data:function(){return{fromInfo:{position:"",address:"",housesType:"私人公寓",bigHouseNumber:"",houseNumber:"",sellingPrice:"",name:"",contact:""},fromErr:{position:!1,address:!1,bigHouseNumber:!1,houseNumber:!1,sellingPrice:!1,name:!1,contact:!1},submitStatus:!1,submitLoad:!1,showAdvisoryType:!1}},methods:{showAdvisory:function(){this.showAdvisoryType=!this.showAdvisoryType},submitInfo:function(){var t=this;for(var e in this.fromInfo){if(""===this.fromInfo[e])return this.fromErr[e]=!0,!1;this.fromErr[e]=!1}var o={email_title:"来自看公寓网的业主反馈",type:this.tabType,property_location:this.fromInfo.position,address_type:this.fromInfo.housesType,address:this.fromInfo.address,big_house_number:this.fromInfo.bigHouseNumber,house_number:this.fromInfo.houseNumber,expected_price:this.fromInfo.sellingPrice,name:this.fromInfo.name,contact:this.fromInfo.contact};this.submitLoad||(this.submitLoad=!0,this.$httpApi.messageApi(o).then((function(e){if(200===e.code)for(var o in t.submitLoad=!1,t.submitStatus=!0,t.fromInfo)t.fromInfo[o]="","housesType"===o&&(t.fromInfo[o]="私人公寓")})))}}},l=f,p=(o("53a4"),o("2877")),v=Object(p["a"])(l,a,c,!1,null,"d5f96090",null),d=v.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"process mt80 w1200px"},[t._m(0),s("ul",[t._m(1),t._m(2),s("li",[s("img",{attrs:{src:o("c4bd"),alt:"多元销售"}}),s("div",[s("span",[t._v(t._s("委托卖房"===t.tabType?"多元销售":"在线挂租"))]),t._v(" "+t._s("委托卖房"===t.tabType?"线上线下多方渠道同步推广":"全网快速挂租展示")+" ")])]),s("li",[s("img",{attrs:{src:o("807c"),alt:"签约出售"}}),s("div",[s("span",[t._v(t._s("委托卖房"===t.tabType?"签约出售":"签约租凭"))]),t._v(" 签约过户全程专业服务 ")])])])])},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[o("i",[t._v("发布房源全流程")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("img",{attrs:{src:o("c318"),alt:"发布房源"}}),s("div",[s("span",[t._v("发布房源")]),t._v(" 线上免费发布房源 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("img",{attrs:{src:o("e9e6"),alt:"核对房源"}}),s("div",[s("span",[t._v("核对房源")]),t._v(" 专业经纪人核对房源 ")])])}],b={props:{tabType:String}},g=b,y=(o("523e"),Object(p["a"])(g,A,I,!1,null,"78ac0f58",null)),h=y.exports,E={components:{BreadcrumbList:r["a"],Consultant:n["a"],FormSubmit:d,Process:h},data:function(){return{tabType:"委托卖房",breadcrumb:[{name:"我是业主",url:"/owner"}]}},methods:{changeType:function(t){this.tabType=t}}},x=E,_=(o("2f15"),Object(p["a"])(x,s,i,!1,null,"3f7fe01b",null));e["default"]=_.exports},e9e6:function(t,e,o){t.exports=o.p+"img/process-icon2.412574a8.png"}}]);
//# sourceMappingURL=owner.3f2cd18e.js.map