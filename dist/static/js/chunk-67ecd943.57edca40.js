(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67ecd943"],{"8c52":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"e",(function(){return o})),e.d(n,"d",(function(){return u})),e.d(n,"a",(function(){return l}));var a=e("b775");function r(t){return Object(a["a"])({url:"/shipping_company",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/shipping_company/all",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/shipping_company/"+t,method:"get"})}function s(t){return Object(a["a"])({url:"/shipping_company",method:"post",data:t})}function c(t,n){return Object(a["a"])({url:"/shipping_company/"+n,method:"put",data:t})}function u(t,n){return n?c(t,n):s(t)}function l(t){return Object(a["a"])({url:"/shipping_company/"+t,method:"delete"})}},"97f6":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("el-card",[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("Listagem")])]),t._v(" "),e("router-link",{attrs:{to:{name:"shipping_company.create"}}},[e("el-button",{staticClass:"pull-right m-b-10",attrs:{type:"success",size:"mini"}},[t._v("Cadastrar")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list.data,"element-loading-text":"Carregando...",border:""}},[e("el-table-column",{attrs:{label:"Título"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v(t._s(n.row.title))]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"-"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("router-link",{attrs:{to:{name:"shipping_company.edit",params:{id:n.row.id}}}},[e("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("Editar")])],1),t._v(" "),e("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return e.preventDefault(),t.destroyData(n.row.id)}}},[t._v("Excluir")])]}}])})],1),t._v(" "),e("pagination",{attrs:{data:t.list},on:{"pagination-change-page":t.fetchData}},[e("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("Anterior")]),t._v(" "),e("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Próximo")])])],1)],1)},r=[],i=e("8c52"),o={filters:{statusFilter:function(t){var n={published:"success",draft:"gray",deleted:"danger"};return n[t]}},data:function(){return{list:{},listLoading:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.listLoading=!0;var e={page:n};Object(i["b"])(e).then((function(n){t.list=n.data,t.listLoading=!1}))},destroyData:function(t){var n=this;this.$confirm("Desejas realmente excluir esse registro?","Atenção",{confirmButtonText:"Confirmar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){Object(i["a"])(t).then((function(t){n.fetchData()}))})).catch((function(){}))}}},s=o,c=e("2877"),u=Object(c["a"])(s,a,r,!1,null,null,null);n["default"]=u.exports}}]);