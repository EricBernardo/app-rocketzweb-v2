(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7ad9dc"],{"02f4":function(e,t,a){var r=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var i,n,l=String(o(t)),s=r(a),c=l.length;return s<0||s>=c?e?"":void 0:(i=l.charCodeAt(s),i<55296||i>56319||s+1===c||(n=l.charCodeAt(s+1))<56320||n>57343?e?l.charAt(s):i:e?l.slice(s,s+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"185d":function(e,t,a){"use strict";var r=a("874f"),o=a.n(r);o.a},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),o=a("32e9"),i=a("79e5"),n=a("be13"),l=a("2b4c"),s=a("520a"),c=l("species"),d=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var m=l(e),f=!i((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),p=f?!i((function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[m](""),!t})):void 0;if(!f||!p||"replace"===e&&!d||"split"===e&&!u){var g=/./[m],b=a(n,m,""[e],(function(e,t,a,r,o){return t.exec===s?f&&!o?{done:!0,value:g.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}})),v=b[0],h=b[1];r(String.prototype,e,v),o(RegExp.prototype,m,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},"2dcf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-row",{attrs:{gutter:10}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Informações")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",prop:"cnpj"}},[a("el-input",{attrs:{disabled:e.loading||e.loading_cnpj},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}},[a("el-button",{attrs:{slot:"append",loading:e.loading_cnpj,icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.infoCnpj(t)}},slot:"append"})],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Título",prop:"title"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Nome Fantasia",prop:"fantasy"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.fantasy,callback:function(t){e.$set(e.form,"fantasy",t)},expression:"form.fantasy"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Telefone",prop:"phone"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Inscrição estadual",prop:"ie"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.ie,callback:function(t){e.$set(e.form,"ie",t)},expression:"form.ie"}})],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Endereço")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"CEP",prop:"cep"}},[a("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.cep,callback:function(t){e.$set(e.form,"cep",t)},expression:"form.cep"}},[a("el-button",{attrs:{slot:"append",loading:e.loading_cep,icon:"el-icon-search",title:"Consultar CEP"},on:{click:function(t){return t.preventDefault(),e.getCep(!0)}},slot:"append"})],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Estado",prop:"state_id"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},on:{change:function(t){return e.getCities(!0)}},model:{value:e.form.state_id,callback:function(t){e.$set(e.form,"state_id",t)},expression:"form.state_id"}},e._l(e.states,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Cidade",prop:"city_id"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},model:{value:e.form.city_id,callback:function(t){e.$set(e.form,"city_id",t)},expression:"form.city_id"}},e._l(e.cities,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Bairro",prop:"neighborhood"}},[a("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.neighborhood,callback:function(t){e.$set(e.form,"neighborhood",t)},expression:"form.neighborhood"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Endereço",prop:"address"}},[a("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Número",prop:"number"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:1,max:99999},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",{attrs:{label:"Complemento",prop:"complement"}},[a("el-input",{attrs:{type:"textarea",disabled:e.loading,rows:5},model:{value:e.form.complement,callback:function(t){e.$set(e.form,"complement",t)},expression:"form.complement"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",[a("router-link",{staticClass:"pull-left",attrs:{to:"/shipping_company"}},[a("el-button",{attrs:{size:"mini"}},[e._v("Voltar")])],1),e._v(" "),a("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:e.loading,type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("Salvar")])],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Informações fiscais")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"CRT (Código regime tributário)",prop:"crt"}},[a("el-select",{attrs:{filterable:"",disabled:e.loading},model:{value:e.form.crt,callback:function(t){e.$set(e.form,"crt",t)},expression:"form.crt"}},e._l(e.crts,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Certificando NFE")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Arquivo (.PFX)",prop:"cert_file"}},[a("el-upload",{staticClass:"cert_file",attrs:{action:e.base_api+"/company/file",headers:{Authorization:"Bearer "+e.token,Accept:"application/json"},"file-list":e.fileList,"on-change":e.handleChange,"on-error":e.handleUploadError,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"before-remove":e.beforeRemove,"on-progress":e.handleProgress,limit:1}},[a("el-button",{attrs:{size:"small",type:"default",disabled:e.loading}},[e._v("Arquivo")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Senha do arquivo",prop:"cert_password"}},[a("el-input",{attrs:{disabled:e.loading},model:{value:e.form.cert_password,callback:function(t){e.$set(e.form,"cert_password",t)},expression:"form.cert_password"}})],1)],1)],1),e._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Impostos (%)")])]),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(IRPJ) Imposto de Renda de Pessoa Jurídica​",prop:"irpj"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.irpj,callback:function(t){e.$set(e.form,"irpj",t)},expression:"form.irpj"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"COFINS (Contribuição pa​ra Financiamento de Seguridade Social)",prop:"cofins"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.cofins,callback:function(t){e.$set(e.form,"cofins",t)},expression:"form.cofins"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(PIS) Programa de Integração Social",prop:"pis"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.pis,callback:function(t){e.$set(e.form,"pis",t)},expression:"form.pis"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(CSLL) Contribuição Social sobre Lucro Líquido",prop:"csll"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.csll,callback:function(t){e.$set(e.form,"csll",t)},expression:"form.csll"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"(ISS) Imposto sobre Serviço de Qualquer Natureza",prop:"iss"}},[a("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:0,max:100},model:{value:e.form.iss,callback:function(t){e.$set(e.form,"iss",t)},expression:"form.iss"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",[a("router-link",{staticClass:"pull-left",attrs:{to:{name:"company"}}},[a("el-button",{attrs:{size:"mini"}},[e._v("Voltar")])],1),e._v(" "),a("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:e.loading,type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("Salvar")])],1)],1)],1)],1)],1)],1)},o=[],i=(a("7f7f"),a("a481"),a("456d"),a("ac6a"),a("fcac")),n=a("5f87"),l=a("5c96"),s=a("4867"),c=a("c591"),d=a("c678"),u=a("e6dd"),m={data:function(){return{fileList:[],token:Object(n["a"])(),base_api:"http://api.rocketzweb.kinghost.net/api",loading:!1,loading_cep:!1,loading_cities:!1,loading_cnpj:!1,states:[],cities:[],crts:[{id:1,name:"Simples Nacional"},{id:2,name:"Simples Nacional – excesso de sublimite da receita bruta"},{id:3,name:"Regime Normal NOTAS EXPLICATIVAS"}],form:{title:null,fantasy:null,cert_password:null,cert_file:null,ie:null,crt:1,cnpj:null,address:null,number:null,neighborhood:null,state_id:null,city_id:null,cep:null,irpj:0,cofins:0,pis:0,csll:0,iss:0,phone:null,complement:null},rules:{title:[{required:!0,message:"Campo obrigatório"}],fantasy:[{required:!0,message:"Campo obrigatório"}],ie:[{required:!0,message:"Campo obrigatório"}],crt:[{required:!0,message:"Campo obrigatório"}],cnpj:[{required:!0,message:"Campo obrigatório"}],address:[{required:!0,message:"Campo obrigatório"}],number:[{required:!0,message:"Campo obrigatório"}],neighborhood:[{required:!0,message:"Campo obrigatório"}],state_id:[{required:!0,message:"Campo obrigatório"}],city_id:[{required:!0,message:"Campo obrigatório"}],cep:[{required:!0,message:"Campo obrigatório"}],irpj:[{required:!0,message:"Campo obrigatório"}],cofins:[{required:!0,message:"Campo obrigatório"}],pis:[{required:!0,message:"Campo obrigatório"}],csll:[{required:!0,message:"Campo obrigatório"}],iss:[{required:!0,message:"Campo obrigatório"}],phone:[{required:!0,message:"Campo obrigatório"}]}}},created:function(){var e=this;Object(s["a"])().then((function(t){e.states=t.data.data})),this.$route.params.id&&(this.loading=!0,this.fileList=[],Object(i["f"])(this.$route.params.id).then((function(t){Object.keys(e.form).forEach((function(a){e.form[a]=t.data.data[a],"state_id"==a&&e.getCities(),"cert_file"==a&&t.data.data[a]&&e.fileList.push({name:t.data.data[a]})})),e.loading=!1})))},methods:{infoCnpj:function(){var e=this;this.form.cnpj&&this.form.cnpj.length>=14?(this.loading_cnpj=!0,Object(u["a"])({cnpj:this.form.cnpj.replace(/\D/g,"")}).then((function(t){t.data.data.nome&&(e.form.title=t.data.data.nome),t.data.data.fantasia&&(e.form.fantasy=t.data.data.fantasia),t.data.data.cep&&(e.form.cep=t.data.data.cep),t.data.data.bairro&&(e.form.neighborhood=t.data.data.bairro),t.data.data.numero&&(e.form.number=t.data.data.numero.replace(/\D/g,"")),t.data.data.logradouro&&(e.form.address=t.data.data.logradouro),t.data.data.complemento&&(e.form.complement=t.data.data.complemento),t.data.data.telefone&&(e.form.phone=t.data.data.telefone),e.form.cep&&e.getCep(!1)})).finally((function(t){e.loading_cnpj=!1}))):this.$message.warning("CNPJ inválido.")},handleProgress:function(e,t,a){this.loading=!0},handleChange:function(e,t,a){this.loading=!1},handleExceed:function(e,t){this.$message.warning("Para atualizar o arquivo, apague o atual.")},beforeRemove:function(e){var t=this;return this.$confirm("Desejas realmente excluir esse arquivo?").then((function(){!t.$route.params.id&&t.form.cert_file&&(t.loading=!0,Object(i["b"])(e.name).then((function(e){t.loading=!1}))),t.form.cert_file=null}))},handleSuccess:function(e){this.form.cert_file=e.data,this.fileList=[],this.fileList.push({name:e.data})},handleUploadError:function(e,t){if(404!==e.status){var a=JSON.parse(e.message);Object(l["Message"])({message:void 0!=a.errors?a.errors.file[0]:a.message,type:"error",duration:5e3,dangerouslyUseHTMLString:!0})}else Object(l["Message"])({message:"Ocorreu algum erro. Tente novamente mais tarde.",type:"error",duration:5e3,dangerouslyUseHTMLString:!0})},onSubmit:function(e){var t=this;this.$refs[e].validate((function(a){a&&(t.loading=!0,Object(i["e"])(t.form,t.$route.params.id).then((function(a){t.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),t.$route.params.id||(t.fileList=[],t.$refs[e].resetFields())})).finally((function(e){t.loading=!1})))}))},getCities:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this;r.loading_cities=!0,Object(c["a"])(this.form.state_id).then((function(o){e.cities=o.data.data;var i=e.form;t&&(i.city_id=null,a&&e.cities.map((function(e){e.name===a&&(i.city_id=e.id)}))),r.loading_cities=!1}))},getCep:function(e){var t=this;t.loading_cep=!0,t.cities=[],t.form.state_id=null,t.form.city_id=null,e&&(t.form.address=null,t.form.neighborhood=null),Object(d["a"])(this.form.cep).then((function(e){e.data.data&&(e.data.data.bairro&&(t.form.neighborhood=e.data.data.bairro),e.data.data.logradouro&&(t.form.address=e.data.data.logradouro),t.states.map((function(a){a.abbr===e.data.data.uf&&(t.form.state_id=a.id,t.getCities(t.form.state_id,e.data.data.localidade))})))})).finally((function(e){t.loading_cep=!1}))}}},f=m,p=(a("185d"),a("2877")),g=Object(p["a"])(f,r,o,!1,null,"375fc9a2",null);t["default"]=g.exports},"456d":function(e,t,a){var r=a("4bf8"),o=a("0d58");a("5eda")("keys",(function(){return function(e){return o(r(e))}}))},4867:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(){return Object(r["a"])({url:"/state",method:"get"})}},"520a":function(e,t,a){"use strict";var r=a("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,n=o,l="lastIndex",s=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[l]||0!==t[l]}(),c=void 0!==/()??/.exec("")[1],d=s||c;d&&(n=function(e){var t,a,n,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),s&&(t=u[l]),n=o.call(u,e),s&&n&&(u[l]=u.global?n.index+n[0].length:t),c&&n&&n.length>1&&i.call(n[0],a,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(n[d]=void 0)})),n}),e.exports=n},"5eda":function(e,t,a){var r=a("5ca1"),o=a("8378"),i=a("79e5");e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],n={};n[e]=t(a),r(r.S+r.F*i((function(){a(1)})),"Object",n)}},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"874f":function(e,t,a){},a481:function(e,t,a){"use strict";var r=a("cb7c"),o=a("4bf8"),i=a("9def"),n=a("4588"),l=a("0390"),s=a("5f1b"),c=Math.max,d=Math.min,u=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,g){return[function(r,o){var i=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,i,o):a.call(String(i),r,o)},function(e,t){var o=g(a,e,this,t);if(o.done)return o.value;var u=r(e),m=String(this),f="function"===typeof t;f||(t=String(t));var v=u.global;if(v){var h=u.unicode;u.lastIndex=0}var _=[];while(1){var x=s(u,m);if(null===x)break;if(_.push(x),!v)break;var y=String(x[0]);""===y&&(u.lastIndex=l(m,i(u.lastIndex),h))}for(var C="",j=0,k=0;k<_.length;k++){x=_[k];for(var $=String(x[0]),S=c(d(n(x.index),m.length),0),O=[],w=1;w<x.length;w++)O.push(p(x[w]));var q=x.groups;if(f){var E=[$].concat(O,S,m);void 0!==q&&E.push(q);var I=String(t.apply(void 0,E))}else I=b($,m,S,O,q,t);S>=j&&(C+=m.slice(j,S)+I,j=S+$.length)}return C+m.slice(j)}];function b(e,t,r,i,n,l){var s=r+e.length,c=i.length,d=f;return void 0!==n&&(n=o(n),d=m),a.call(l,d,(function(a,o){var l;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":l=n[o.slice(1,-1)];break;default:var d=+o;if(0===d)return a;if(d>c){var m=u(d/10);return 0===m?a:m<=c?void 0===i[m-1]?o.charAt(1):i[m-1]+o.charAt(1):a}l=i[d-1]}return void 0===l?"":l}))}}))},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c591:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["a"])({url:"/city/"+e,method:"get"})}},c678:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["a"])({url:"/cep/"+e,method:"get"})}},e6dd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("b775");function o(e){return Object(r["a"])({url:"/cnpj",method:"get",params:e})}},fcac:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var r=a("b775");function o(e){return Object(r["a"])({url:"/company",method:"get",params:e})}function i(){return Object(r["a"])({url:"/company/all",method:"get"})}function n(e){return Object(r["a"])({url:"/company/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/company",method:"post",data:e})}function s(e,t){return Object(r["a"])({url:"/company/"+t,method:"put",data:e})}function c(e,t){return t?s(e,t):l(e)}function d(e){return Object(r["a"])({url:"/company/"+e,method:"delete"})}function u(e){return Object(r["a"])({url:"/company/file",method:"delete",data:{id:e}})}}}]);