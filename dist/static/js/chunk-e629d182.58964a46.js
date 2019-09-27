(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e629d182"],{"0d7a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("Informações")])]),t._v(" "),e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{md:12,sm:24}},[t.checkPermission(["root"])?e("el-form-item",{attrs:{label:"Empresa",prop:"company_id"}},[e("el-select",{attrs:{filterable:"",disabled:t.loading},on:{change:function(n){return t.setShippingCompany()}},model:{value:t.company_id,callback:function(n){t.company_id=n},expression:"company_id"}},t._l(t.companies,(function(t){return e("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1):t._e()],1),t._v(" "),e("el-col",{attrs:{md:12,sm:24}},[e("el-form-item",{attrs:{label:"Transportadora",prop:"shipping_company_id"}},[e("el-select",{attrs:{filterable:"",disabled:t.loading||!this.shipping_companies.length},model:{value:t.form.shipping_company_id,callback:function(n){t.$set(t.form,"shipping_company_id",n)},expression:"form.shipping_company_id"}},t._l(t.shipping_companies,(function(t){return e("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),t._v(" "),e("el-col",{attrs:{md:12,sm:24}},[e("el-form-item",{attrs:{label:"Placa",prop:"board"}},[e("el-input",{attrs:{disabled:t.loading,maxlength:7},model:{value:t.form.board,callback:function(n){t.$set(t.form,"board",n)},expression:"form.board"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12,sm:24}},[e("el-form-item",{attrs:{label:"Estado",prop:"state_id"}},[e("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.state_id,callback:function(n){t.$set(t.form,"state_id",n)},expression:"form.state_id"}},t._l(t.states,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t._v(" "),e("el-col",{attrs:{md:24,sm:24}},[e("el-form-item",[e("router-link",{staticClass:"pull-left",attrs:{to:"/shipping_company_vehicle"}},[e("el-button",{attrs:{size:"mini"}},[t._v("Voltar")])],1),t._v(" "),e("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:t.loading,type:"primary"},on:{click:function(n){return t.onSubmit("form")}}},[t._v("Salvar")])],1)],1)],1)],1)],1)],1)},i=[],o=(e("456d"),e("ac6a"),e("e350")),r=e("4867"),c=e("3459"),u=e("fcac"),s=e("8c52"),l={data:function(){return{loading:!1,states:[],companies:[],shipping_companies:[],company_id:null,form:{shipping_company_id:null,state_id:null,board:null},rules:{shipping_company_id:[{required:!0,message:"Campo obrigatório"}],state_id:[{required:!0,message:"Campo obrigatório"}],board:[{required:!0,message:"Campo obrigatório"}]}}},created:function(){var t=this;Object(r["a"])().then((function(n){t.states=n.data.data})),Object(o["a"])(["root"])?Object(u["d"])().then((function(n){t.companies=n.data.data})):Object(s["c"])().then((function(n){t.shipping_companies=n.data.data})),this.$route.params.id&&(this.loading=!0,Object(c["e"])(this.$route.params.id).then((function(n){Object.keys(t.form).forEach((function(e){t.form[e]=n.data.data[e]})),t.company_id=n.data.data.shipping_company.company.id,t.setShippingCompany(!1),t.loading=!1})))},methods:{checkPermission:o["a"],setShippingCompany:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Object(o["a"])(["root"])){var n=this;t&&(n.shipping_companies=[],n.form.shipping_company_id=null),Object(s["c"])({company_id:n.company_id}).then((function(t){n.shipping_companies=t.data.data}))}},onSubmit:function(t){var n=this;this.$refs[t].validate((function(e){e&&(n.loading=!0,Object(c["d"])(n.form,n.$route.params.id).then((function(e){n.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),n.$route.params.id||(n.company_id=null,n.shipping_companies=[],n.$refs[t].resetFields())})).finally((function(t){n.loading=!1})))}))}}},p=l,d=e("2877"),m=Object(d["a"])(p,a,i,!1,null,null,null);n["default"]=m.exports},3459:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return l}));var a=e("b775");function i(t){return Object(a["a"])({url:"/shipping_company_vehicle",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/shipping_company_vehicle/all",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/shipping_company_vehicle/"+t,method:"get"})}function c(t){return Object(a["a"])({url:"/shipping_company_vehicle",method:"post",data:t})}function u(t,n){return Object(a["a"])({url:"/shipping_company_vehicle/"+n,method:"put",data:t})}function s(t,n){return n?u(t,n):c(t)}function l(t){return Object(a["a"])({url:"/shipping_company_vehicle/"+t,method:"delete"})}},"456d":function(t,n,e){var a=e("4bf8"),i=e("0d58");e("5eda")("keys",(function(){return function(t){return i(a(t))}}))},4867:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e("b775");function i(){return Object(a["a"])({url:"/state",method:"get"})}},"5eda":function(t,n,e){var a=e("5ca1"),i=e("8378"),o=e("79e5");t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],r={};r[t]=n(e),a(a.S+a.F*o((function(){e(1)})),"Object",r)}},"8c52":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return l}));var a=e("b775");function i(t){return Object(a["a"])({url:"/shipping_company",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/shipping_company/all",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/shipping_company/"+t,method:"get"})}function c(t){return Object(a["a"])({url:"/shipping_company",method:"post",data:t})}function u(t,n){return Object(a["a"])({url:"/shipping_company/"+n,method:"put",data:t})}function s(t,n){return n?u(t,n):c(t)}function l(t){return Object(a["a"])({url:"/shipping_company/"+t,method:"delete"})}},fcac:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return o})),e.d(n,"f",(function(){return r})),e.d(n,"e",(function(){return s})),e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return p}));var a=e("b775");function i(t){return Object(a["a"])({url:"/company",method:"get",params:t})}function o(){return Object(a["a"])({url:"/company/all",method:"get"})}function r(t){return Object(a["a"])({url:"/company/"+t,method:"get"})}function c(t){return Object(a["a"])({url:"/company",method:"post",data:t})}function u(t,n){return Object(a["a"])({url:"/company/"+n,method:"put",data:t})}function s(t,n){return n?u(t,n):c(t)}function l(t){return Object(a["a"])({url:"/company/"+t,method:"delete"})}function p(t){return Object(a["a"])({url:"/company/file",method:"delete",data:{id:t}})}}}]);