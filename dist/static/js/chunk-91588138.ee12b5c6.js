(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91588138"],{"2dbe":function(t,e,n){"use strict";var a=n("8a10"),o=n.n(a);o.a},3698:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("Listagem")])]),t._v(" "),n("router-link",{attrs:{to:{name:"order.create"}}},[n("el-button",{staticClass:"pull-right m-b-10",attrs:{type:"success",size:"mini"}},[t._v("Cadastrar")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list.data,"element-loading-text":"Carregando...",border:""}},[n("el-table-column",{attrs:{label:"Cliente"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.client.title))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Preço"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("R$ "+t._s(e.row.total))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Data de emissão"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("moment")(e.row.date,"DD/MM/YYYY")))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Ações fiscais",width:"125"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Gerar NFE",placement:"left"}},[n("el-button",{staticClass:"button-order-list",attrs:{type:"warning",plain:"",icon:"el-icon-setting",disabled:Boolean(e.row.receipt),loading:t.loading_generate_invoice},on:{click:function(n){return n.preventDefault(),t.generateInvoice(e)}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Consultar NFE",placement:"left"}},[n("el-button",{staticClass:"button-order-list",attrs:{type:"success",plain:"",icon:"el-icon-search",disabled:!Boolean(e.row.receipt),loading:t.loading_consult_protocol},on:{click:function(n){return n.preventDefault(),t.showProtocol(e.row.id)}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Baixar DANFE",placement:"left"}},[n("el-button",{staticClass:"button-order-list",attrs:{type:"primary",plain:"",icon:"el-icon-download",loading:t.loading_download_danfe,disabled:!Boolean(e.row.xml)},on:{click:function(n){return n.preventDefault(),t.downloadDanfe(e.row.id)}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Cancelar NFE",placement:"left"}},[n("el-button",{staticClass:"button-order-list",attrs:{type:"danger",plain:"",icon:"el-icon-delete",disabled:!Boolean(e.row.receipt)}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"-",width:"125"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{name:"order.edit",params:{id:e.row.id}}}},[n("el-button",{staticClass:"button-order-list",attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}},[t._v("Editar")])],1),t._v(" "),n("el-button",{staticClass:"button-order-list",attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return n.preventDefault(),t.destroyData(e.row.id)}}},[t._v("Excluir")])]}}])})],1),t._v(" "),n("pagination",{attrs:{data:t.list},on:{"pagination-change-page":t.fetchData}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("Anterior")]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Próximo")])])],1)],1)},o=[],r=n("f8b7"),i=(n("bc3a"),{filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:{},listLoading:!1,loading_generate_invoice:!1,loading_download_danfe:!1,loading_consult_protocol:!1}},created:function(){this.fetchData()},methods:{downloadDanfe:function(t){var e=this;this.loading_download_danfe=!0,Object(r["c"])(t).then((function(n){var a=window.URL.createObjectURL(new Blob([n.data])),o=document.createElement("a");o.href=a,o.setAttribute("download",t+"-danfe.pdf"),document.body.appendChild(o),o.click(),e.loading_download_danfe=!1})).catch((function(){e.loading_download_danfe=!1}))},generateInvoice:function(t){var e=this;this.loading_generate_invoice=!0,Object(r["a"])(t.row.id).then((function(n){t.row.xml=n.data.xml,t.row.receipt=n.data.receipt,n.data.receipt&&e.$alert("NFE Gerada com sucesso!","Atenção",{confirmButtonText:"OK",type:"success"}),e.loading_generate_invoice=!1})).catch((function(){e.loading_generate_invoice=!1}))},showProtocol:function(t){var e=this;this.loading_consult_protocol=!0,Object(r["g"])(t).then((function(t){e.$alert(t.data.data.protNFe.infProt.xMotivo,103!=t.data.data.protNFe.infProt.cStat?"Atenção":"Resultado",{confirmButtonText:"OK",type:103!=t.data.data.protNFe.infProt.cStat?"warning":"success"}),e.loading_consult_protocol=!1})).catch((function(t){e.$alert(t.message,"Atenção",{confirmButtonText:"OK",type:"warning"}),e.loading_consult_protocol=!1}))},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.listLoading=!0;var n={page:e};Object(r["d"])(n).then((function(e){t.list=e.data,t.listLoading=!1}))},destroyData:function(t){var e=this;this.$confirm("Desejas realmente excluir esse registro?","Atenção",{confirmButtonText:"Confirmar",cancelButtonText:"Cancelar",type:"warning"}).then((function(){Object(r["b"])(t).then((function(t){e.fetchData()}))})).catch((function(){}))}}}),l=i,c=(n("2dbe"),n("2877")),s=Object(c["a"])(l,a,o,!1,null,"72ce5d88",null);e["default"]=s.exports},"8a10":function(t,e,n){},f8b7:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return u})),n.d(e,"g",(function(){return f}));var a=n("b775");function o(t){return Object(a["a"])({url:"/order",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/order/"+t,method:"get"})}function i(t){return Object(a["a"])({url:"/order",method:"post",data:t})}function l(t,e){return Object(a["a"])({url:"/order/"+e,method:"put",data:t})}function c(t,e){return e?l(t,e):i(t)}function s(t){return Object(a["a"])({url:"/order/"+t,method:"delete"})}function d(t){return Object(a["a"])({url:"/nfe/"+t,method:"post"})}function u(t){return Object(a["a"])({url:"/nfe/"+t,method:"get",responseType:"arraybuffer"})}function f(t){return Object(a["a"])({url:"/nfe/"+t+"/protocol",method:"get"})}}}]);