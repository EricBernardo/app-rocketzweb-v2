(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0946d338"],{9406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Faturamento")])]),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{md:6,sm:24}},[a("el-form-item",{attrs:{label:"De"}},[a("el-date-picker",{attrs:{type:"date",format:"dd/MM/yyyy","value-format":"yyyy-MM-dd",placeholder:"Data inicial"},model:{value:t.start_date,callback:function(e){t.start_date=e},expression:"start_date"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:6,sm:24}},[a("el-form-item",{attrs:{label:"Até"}},[a("el-date-picker",{attrs:{type:"date",format:"dd/MM/yyyy","value-format":"yyyy-MM-dd",placeholder:"Data final"},model:{value:t.end_date,callback:function(e){t.end_date=e},expression:"end_date"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:6,sm:24}},["root"==t.profile.role?a("el-form-item",{attrs:{label:"Empresa",prop:"company_id"}},[a("el-select",{attrs:{clearable:"",filterable:"",disabled:!this.companies.length},on:{change:function(e){return t.getAllClients()}},model:{value:t.company_id,callback:function(e){t.company_id=e},expression:"company_id"}},t._l(t.companies,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1):t._e()],1),t._v(" "),a("el-col",{attrs:{md:6,sm:24}},["root"==t.profile.role||"administrator"==t.profile.role?a("el-form-item",{attrs:{label:"Cliente",prop:"company_id"}},[a("el-select",{attrs:{clearable:"",filterable:"",disabled:!this.clients.length},model:{value:t.client_id,callback:function(e){t.client_id=e},expression:"client_id"}},t._l(t.clients,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1):t._e()],1),t._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",[a("el-button",{attrs:{size:"small",loading:t.loading,type:"primary"},on:{click:t.get}},[t._v("Filtrar")])],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("ve-histogram",{attrs:{data:t.chartData,settings:t.chartSettings}})],1)],1)],1)},r=[],l=(a("456d"),a("ac6a"),a("db72")),o=a("2f62"),i=a("b775");function c(t){return Object(i["a"])({url:"/dashboard",method:"get",params:t})}var d=a("fcac"),s=a("b39f"),u=a("d768"),m=a.n(u),f={components:{VeHistogram:m.a},data:function(){return this.chartSettings={label:{normal:{show:!0,position:"top"}},legendName:{total:"Total"},labelMap:{total:"Total"}},{loading:!1,companies:[],clients:[],company_id:null,client_id:null,start_date:this.$moment().add(-7,"days").format("YYYY-MM-DD"),end_date:this.$moment().format("YYYY-MM-DD"),chartData:{columns:["date","total"],rows:[]}}},computed:Object(l["a"])({},Object(o["b"])(["profile"])),created:function(){var t=this;this.get(),"root"==this.profile.role&&Object(d["d"])().then((function(e){t.companies=e.data.data})),"administrator"==this.profile.role&&Object(s["c"])().then((function(e){t.clients=e.data.data}))},methods:{getAllClients:function(){var t=this;"root"==t.profile.role&&(t.clients=[],t.company_id&&Object(s["c"])({company_id:t.company_id}).then((function(e){t.client_id=null,t.clients=e.data.data})))},get:function(){var t=this;this.loading=!0;var e={start_date:this.start_date,end_date:this.end_date,client_id:this.client_id,company_id:this.company_id};c(e).then((function(e){t.chartData.rows=[],Object.keys(e.data.data.billings).forEach((function(a){t.chartData.rows.push({date:t.$moment(a).format("DD/MM/YYYY"),total:e.data.data.billings[a].paid+e.data.data.billings[a].paid_no})})),t.loading=!1}))}}},p=f,b=a("2877"),h=Object(b["a"])(p,n,r,!1,null,null,null);e["default"]=h.exports},b39f:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return d})),a.d(e,"a",(function(){return s}));var n=a("b775");function r(t){return Object(n["a"])({url:"/client",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/client/all",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/client/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/client",method:"post",data:t})}function c(t,e){return Object(n["a"])({url:"/client/"+e,method:"put",data:t})}function d(t,e){return e?c(t,e):i(t)}function s(t){return Object(n["a"])({url:"/client/"+t,method:"delete"})}},fcac:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return o})),a.d(e,"e",(function(){return d})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return u}));var n=a("b775");function r(t){return Object(n["a"])({url:"/company",method:"get",params:t})}function l(){return Object(n["a"])({url:"/company/all",method:"get"})}function o(t){return Object(n["a"])({url:"/company/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/company",method:"post",data:t})}function c(t,e){return Object(n["a"])({url:"/company/"+e,method:"put",data:t})}function d(t,e){return e?c(t,e):i(t)}function s(t){return Object(n["a"])({url:"/company/"+t,method:"delete"})}function u(t){return Object(n["a"])({url:"/company/file",method:"delete",data:{id:t}})}}}]);