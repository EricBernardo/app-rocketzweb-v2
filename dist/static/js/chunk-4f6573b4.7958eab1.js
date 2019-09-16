(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f6573b4"],{1489:function(e,t,a){"use strict";var r=a("9f1f"),o=a.n(r);o.a},"2dcf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-row",{attrs:{gutter:10}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Informações")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Título",prop:"title"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Nome Fantasia",prop:"title"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.fantasy,callback:function(t){e.$set(e.form,"fantasy",t)},expression:"form.fantasy"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"IE",prop:"title"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.ie,callback:function(t){e.$set(e.form,"ie",t)},expression:"form.ie"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",prop:"cnpj"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"CEP",prop:"cep"}},[a("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{disabled:e.loading||e.loading_cep},on:{change:function(t){return e.getCep()}},model:{value:e.form.cep,callback:function(t){e.$set(e.form,"cep",t)},expression:"form.cep"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Estado",prop:"state_id"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},on:{change:function(t){return e.getCities(!0)}},model:{value:e.form.state_id,callback:function(t){e.$set(e.form,"state_id",t)},expression:"form.state_id"}},e._l(e.states,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Cidade",prop:"city_id"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},model:{value:e.form.city_id,callback:function(t){e.$set(e.form,"city_id",t)},expression:"form.city_id"}},e._l(e.cities,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Bairro",prop:"neighborhood"}},[a("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.neighborhood,callback:function(t){e.$set(e.form,"neighborhood",t)},expression:"form.neighborhood"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Endereço",prop:"address"}},[a("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Número",prop:"number"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:1,max:99999},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Informações fiscais")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"CRT (Código regime tributário)",prop:"crt"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading},model:{value:e.form.crt,callback:function(t){e.$set(e.form,"crt",t)},expression:"form.crt"}},e._l(e.crts,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Certificando NFE")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Arquivo (.PFX)",prop:"cert_file"}},[a("el-upload",{staticClass:"cert_file",attrs:{action:e.base_api+"/company/file",headers:{Authorization:"Bearer "+e.token,Accept:"application/json"},"file-list":e.fileList,"on-change":e.handleChange,"on-error":e.handleUploadError,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"before-remove":e.beforeRemove,"on-progress":e.handleProgress,limit:1}},[a("el-button",{attrs:{size:"small",type:"default",disabled:e.loading}},[e._v("Arquivo")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Senha do arquivo",prop:"cert_password"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.cert_password,callback:function(t){e.$set(e.form,"cert_password",t)},expression:"form.cert_password"}})],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Impostos (%)")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(IRPJ) Imposto de Renda de Pessoa Jurídica​",prop:"irpj"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.irpj,callback:function(t){e.$set(e.form,"irpj",t)},expression:"form.irpj"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"COFINS (Contribuição pa​ra Financiamento de Seguridade Social)",prop:"cofins"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.cofins,callback:function(t){e.$set(e.form,"cofins",t)},expression:"form.cofins"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(PIS) Programa de Integração Social",prop:"pis"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.pis,callback:function(t){e.$set(e.form,"pis",t)},expression:"form.pis"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(CSLL) Contribuição Social sobre Lucro Líquido",prop:"csll"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.csll,callback:function(t){e.$set(e.form,"csll",t)},expression:"form.csll"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(ISS) Imposto sobre Serviço de Qualquer Natureza",prop:"iss"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.iss,callback:function(t){e.$set(e.form,"iss",t)},expression:"form.iss"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",[a("router-link",{staticClass:"pull-left",attrs:{to:{name:"company"}}},[a("el-button",{attrs:{size:"mini"}},[e._v("Voltar")])],1),e._v(" "),a("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:e.loading,type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("Salvar")])],1)],1)],1)],1)],1)],1)],1)},o=[],i=(a("7f7f"),a("456d"),a("ac6a"),a("fcac")),s=a("5f87"),n=a("5c96"),l=a("4867"),c=a("c591"),d=a("c678"),m={data:function(){return{fileList:[],token:Object(s["a"])(),base_api:"http://api.rocketzweb.kinghost.net/api",loading:!1,loading_cep:!1,loading_cities:!1,states:[],cities:[],crts:[{id:1,name:"Simples Nacional"},{id:2,name:"Simples Nacional – excesso de sublimite da receita bruta"},{id:3,name:"Regime Normal NOTAS EXPLICATIVAS"}],form:{title:null,fantasy:null,cert_password:null,cert_file:null,ie:null,crt:1,cnpj:null,address:null,number:null,neighborhood:null,state_id:null,city_id:null,cep:null,irpj:0,cofins:0,pis:0,csll:0,iss:0},rules:{title:[{required:!0,message:"Campo obrigatório"}],fantasy:[{required:!0,message:"Campo obrigatório"}],ie:[{required:!0,message:"Campo obrigatório"}],crt:[{required:!0,message:"Campo obrigatório"}],cnpj:[{required:!0,message:"Campo obrigatório"}],address:[{required:!0,message:"Campo obrigatório"}],number:[{required:!0,message:"Campo obrigatório"}],neighborhood:[{required:!0,message:"Campo obrigatório"}],state_id:[{required:!0,message:"Campo obrigatório"}],city_id:[{required:!0,message:"Campo obrigatório"}],cep:[{required:!0,message:"Campo obrigatório"}],irpj:[{required:!0,message:"Campo obrigatório"}],cofins:[{required:!0,message:"Campo obrigatório"}],pis:[{required:!0,message:"Campo obrigatório"}],csll:[{required:!0,message:"Campo obrigatório"}],iss:[{required:!0,message:"Campo obrigatório"}]}}},created:function(){var e=this;Object(l["a"])().then((function(t){e.states=t.data.data})),this.$route.params.id&&(this.loading=!0,this.fileList=[],Object(i["f"])(this.$route.params.id).then((function(t){Object.keys(e.form).forEach((function(a){e.form[a]=t.data.data[a],"state_id"==a&&e.getCities(),"cert_file"==a&&t.data.data[a]&&e.fileList.push({name:t.data.data[a]})})),e.loading=!1})))},methods:{handleProgress:function(e,t,a){this.loading=!0},handleChange:function(e,t,a){this.loading=!1},handleExceed:function(e,t){this.$message.warning("Para atualizar o arquivo, apague o atual.")},beforeRemove:function(e){var t=this;return this.$confirm("Desejas realmente excluir esse arquivo?").then((function(){!t.$route.params.id&&t.form.cert_file&&(t.loading=!0,Object(i["b"])(e.name).then((function(e){t.loading=!1}))),t.form.cert_file=null}))},handleSuccess:function(e){this.form.cert_file=e.data,this.fileList=[],this.fileList.push({name:e.data})},handleUploadError:function(e,t){if(404!==e.status){var a=JSON.parse(e.message);Object(n["Message"])({message:void 0!=a.errors?a.errors.file[0]:a.message,type:"error",duration:5e3,dangerouslyUseHTMLString:!0})}else Object(n["Message"])({message:"Ocorreu algum erro. Tente novamente mais tarde.",type:"error",duration:5e3,dangerouslyUseHTMLString:!0})},onSubmit:function(e){var t=this;this.$refs[e].validate((function(a){a&&(t.loading=!0,Object(i["e"])(t.form,t.$route.params.id).then((function(a){t.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),t.$route.params.id||(t.fileList=[],t.$refs[e].resetFields())})).finally((function(e){t.loading=!1})))}))},getCities:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this;r.loading_cities=!0,Object(c["a"])(this.form.state_id).then((function(o){e.cities=o.data.data;var i=e.form;t&&(i.city_id=null,a&&e.cities.map((function(e){e.name==a&&(i.city_id=e.id)}))),r.loading_cities=!1}))},getCep:function(){var e=this;e.loading_cep=!0,e.cities=[],e.form.neighborhood=null,e.form.address=null,e.form.state_id=null,e.form.city_id=null,Object(d["a"])(this.form.cep).then((function(t){t.data.data&&(e.form.neighborhood=t.data.data.bairro,e.form.address=t.data.data.logradouro,e.states.map((function(a){a.abbr==t.data.data.uf&&(e.form.state_id=a.id,e.getCities(e.form.state_id,t.data.data.localidade))})))})).finally((function(t){e.loading_cep=!1}))}}},u=m,f=(a("1489"),a("2877")),p=Object(f["a"])(u,r,o,!1,null,"5a2860d6",null);t["default"]=p.exports},"456d":function(e,t,a){var r=a("4bf8"),o=a("0d58");a("5eda")("keys",(function(){return function(e){return o(r(e))}}))},4867:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(){return Object(r["a"])({url:"/state",method:"get"})}},"5eda":function(e,t,a){var r=a("5ca1"),o=a("8378"),i=a("79e5");e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],s={};s[e]=t(a),r(r.S+r.F*i((function(){a(1)})),"Object",s)}},"9f1f":function(e,t,a){},c591:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["a"])({url:"/city/"+e,method:"get"})}},c678:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["a"])({url:"/cep/"+e,method:"get"})}},fcac:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a("b775");function o(e){return Object(r["a"])({url:"/company",method:"get",params:e})}function i(){return Object(r["a"])({url:"/company/all",method:"get"})}function s(e){return Object(r["a"])({url:"/company/"+e,method:"get"})}function n(e){return Object(r["a"])({url:"/company",method:"post",data:e})}function l(e,t){return Object(r["a"])({url:"/company/"+t,method:"put",data:e})}function c(e,t){return t?l(e,t):n(e)}function d(e){return Object(r["a"])({url:"/company/"+e,method:"delete"})}function m(e){return Object(r["a"])({url:"/company/file",method:"delete",data:{id:e}})}}}]);