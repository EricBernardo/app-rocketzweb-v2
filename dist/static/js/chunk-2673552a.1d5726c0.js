(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2673552a"],{"02f4":function(t,e,a){var r=a("4588"),n=a("be13");t.exports=function(t){return function(e,a){var o,i,l=String(n(e)),c=r(a),s=l.length;return c<0||c>=s?t?"":void 0:(o=l.charCodeAt(c),o<55296||o>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?t?l.charAt(c):o:t?l.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),n=a("32e9"),o=a("79e5"),i=a("be13"),l=a("2b4c"),c=a("520a"),s=l("species"),d=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=l(t),m=!o((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=m?!o((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[s]=function(){return a}),a[f](""),!e})):void 0;if(!m||!p||"replace"===t&&!d||"split"===t&&!u){var g=/./[f],b=a(i,f,""[t],(function(t,e,a,r,n){return e.exec===c?m&&!n?{done:!0,value:g.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}})),v=b[0],h=b[1];r(String.prototype,t,v),n(RegExp.prototype,f,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}}},"2ad9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-row",{attrs:{gutter:10}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Informações")])]),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Razão social/Nome",prop:"title"}},[a("el-input",{attrs:{disabled:t.loading},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Nome fantasia",prop:"fantasy"}},[a("el-input",{attrs:{disabled:t.loading},model:{value:t.form.fantasy,callback:function(e){t.$set(t.form,"fantasy",e)},expression:"form.fantasy"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{directives:[{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],attrs:{label:"CPF",prop:"cpf"}},[a("el-input",{attrs:{disabled:t.loading},model:{value:t.form.cpf,callback:function(e){t.$set(t.form,"cpf",e)},expression:"form.cpf"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",prop:"cnpj"}},[a("el-input",{attrs:{disabled:t.loading||t.loading_cnpj},model:{value:t.form.cnpj,callback:function(e){t.$set(t.form,"cnpj",e)},expression:"form.cnpj"}},[a("el-button",{attrs:{slot:"append",loading:t.loading_cnpj,icon:"el-icon-search",title:"Consultar CNPJ"},on:{click:function(e){return e.preventDefault(),t.infoCnpj(e)}},slot:"append"})],1)],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Inscrição estadual",prop:"ie"}},[a("el-input",{attrs:{disabled:t.loading},model:{value:t.form.ie,callback:function(e){t.$set(t.form,"ie",e)},expression:"form.ie"}})],1)],1)],1),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Endereço")])]),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"CEP",prop:"cep"}},[a("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{disabled:t.loading||t.loading_cep},model:{value:t.form.cep,callback:function(e){t.$set(t.form,"cep",e)},expression:"form.cep"}},[a("el-button",{attrs:{slot:"append",loading:t.loading_cep,icon:"el-icon-search",title:"Consultar CEP"},on:{click:function(e){return e.preventDefault(),t.getCep(!0)}},slot:"append"})],1)],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Estado",prop:"state_id"}},[a("el-select",{attrs:{filterable:"",disabled:t.loading||t.loading_cep||t.loading_cities},on:{change:function(e){return t.getCities(!0)}},model:{value:t.form.state_id,callback:function(e){t.$set(t.form,"state_id",e)},expression:"form.state_id"}},t._l(t.states,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Cidade",prop:"city_id"}},[a("el-select",{attrs:{filterable:"",disabled:t.loading||t.loading_cep||t.loading_cities},model:{value:t.form.city_id,callback:function(e){t.$set(t.form,"city_id",e)},expression:"form.city_id"}},t._l(t.cities,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Bairro",prop:"neighborhood"}},[a("el-input",{attrs:{disabled:t.loading||t.loading_cep},model:{value:t.form.neighborhood,callback:function(e){t.$set(t.form,"neighborhood",e)},expression:"form.neighborhood"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Endereço",prop:"address"}},[a("el-input",{attrs:{disabled:t.loading||t.loading_cep},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:12,sm:24}},[a("el-form-item",{attrs:{label:"Número",prop:"number"}},[a("el-input-number",{attrs:{disabled:t.loading,"controls-position":"right",min:1,max:99999},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",{attrs:{label:"Complemento",prop:"complement"}},[a("el-input",{attrs:{type:"textarea",disabled:t.loading,rows:5},model:{value:t.form.complement,callback:function(e){t.$set(t.form,"complement",e)},expression:"form.complement"}})],1)],1),t._v(" "),a("el-col",{attrs:{md:24,sm:24}},[a("el-form-item",[a("router-link",{staticClass:"pull-left",attrs:{to:"/shipping_company"}},[a("el-button",{attrs:{size:"mini"}},[t._v("Voltar")])],1),t._v(" "),a("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:t.loading,type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("Salvar")])],1)],1)],1)],1)],1)],1)},n=[],o=(a("7f7f"),a("a481"),a("456d"),a("ac6a"),a("4867")),i=a("c591"),l=a("c678"),c=a("e6dd"),s=a("8c52"),d={data:function(){var t=this,e=function(e,a,r){t.form.cnpj&&t.form.cpf||!t.form.cnpj&&!t.form.cpf?r(new Error("Preencha o campo CPF ou CNPJ")):r()};return{loading:!1,loading_cep:!1,loading_cities:!1,loading_cnpj:!1,states:[],cities:[],companies:[],form:{cnpj:null,cpf:null,company_id:null,title:null,address:null,number:null,neighborhood:null,state_id:null,city_id:null,cep:null,ie:null,fantasy:null,complement:null},rules:{company_id:[{required:!0,message:"Campo obrigatório"}],title:[{required:!0,message:"Campo obrigatório"}],address:[{required:!0,message:"Campo obrigatório"}],number:[{required:!0,message:"Campo obrigatório"}],neighborhood:[{required:!0,message:"Campo obrigatório"}],state_id:[{required:!0,message:"Campo obrigatório"}],city_id:[{required:!0,message:"Campo obrigatório"}],cep:[{required:!0,message:"Campo obrigatório"}],cpf:[{validator:e}],cnpj:[{validator:e}]}}},created:function(){var t=this;Object(o["a"])().then((function(e){t.states=e.data.data})),this.$route.params.id&&(this.loading=!0,Object(s["e"])(this.$route.params.id).then((function(e){Object.keys(t.form).forEach((function(a){t.form[a]=e.data.data[a],"state_id"===a&&t.getCities()})),t.loading=!1})))},methods:{infoCnpj:function(){var t=this;this.form.cnpj&&this.form.cnpj.length>=14?(this.loading_cnpj=!0,Object(c["a"])({cnpj:this.form.cnpj.replace(/\D/g,"")}).then((function(e){e.data.data.nome&&(t.form.title=e.data.data.nome),e.data.data.fantasia&&(t.form.fantasy=e.data.data.fantasia),e.data.data.cep&&(t.form.cep=e.data.data.cep),e.data.data.bairro&&(t.form.neighborhood=e.data.data.bairro),e.data.data.numero&&(t.form.number=e.data.data.numero.replace(/\D/g,"")),e.data.data.logradouro&&(t.form.address=e.data.data.logradouro),e.data.data.complemento&&(t.form.complement=e.data.data.complemento),t.form.cep&&t.getCep(!1)})).finally((function(e){t.loading_cnpj=!1}))):this.$message.warning("CNPJ inválido.")},onSubmit:function(t){var e=this;this.$refs[t].validate((function(a){a&&(e.loading=!0,Object(s["d"])(e.form,e.$route.params.id).then((function(a){e.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),e.$route.params.id||e.$refs[t].resetFields()})).finally((function(t){e.loading=!1})))}))},getCities:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this;r.loading_cities=!0,Object(i["a"])(this.form.state_id).then((function(n){t.cities=n.data.data;var o=t.form;e&&(o.city_id=null,a&&t.cities.map((function(t){t.name===a&&(o.city_id=t.id)}))),r.loading_cities=!1}))},getCep:function(t){var e=this;e.loading_cep=!0,e.cities=[],e.form.state_id=null,e.form.city_id=null,t&&(e.form.address=null,e.form.neighborhood=null),Object(l["a"])(this.form.cep).then((function(t){t.data.data&&(t.data.data.bairro&&(e.form.neighborhood=t.data.data.bairro),t.data.data.logradouro&&(e.form.address=t.data.data.logradouro),e.states.map((function(a){a.abbr===t.data.data.uf&&(e.form.state_id=a.id,e.getCities(e.form.state_id,t.data.data.localidade))})))})).finally((function(t){e.loading_cep=!1}))}}},u=d,f=a("2877"),m=Object(f["a"])(u,r,n,!1,null,null,null);e["default"]=m.exports},"456d":function(t,e,a){var r=a("4bf8"),n=a("0d58");a("5eda")("keys",(function(){return function(t){return n(r(t))}}))},4867:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("b775");function n(){return Object(r["a"])({url:"/state",method:"get"})}},"520a":function(t,e,a){"use strict";var r=a("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,i=n,l="lastIndex",c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[l]||0!==e[l]}(),s=void 0!==/()??/.exec("")[1],d=c||s;d&&(i=function(t){var e,a,i,d,u=this;return s&&(a=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),c&&(e=u[l]),i=n.call(u,t),c&&i&&(u[l]=u.global?i.index+i[0].length:e),s&&i&&i.length>1&&o.call(i[0],a,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(i[d]=void 0)})),i}),t.exports=i},"5eda":function(t,e,a){var r=a("5ca1"),n=a("8378"),o=a("79e5");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],i={};i[t]=e(a),r(r.S+r.F*o((function(){a(1)})),"Object",i)}},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var o=a.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"8c52":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return d}));var r=a("b775");function n(t){return Object(r["a"])({url:"/shipping_company",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/shipping_company/all",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/shipping_company/"+t,method:"get"})}function l(t){return Object(r["a"])({url:"/shipping_company",method:"post",data:t})}function c(t,e){return Object(r["a"])({url:"/shipping_company/"+e,method:"put",data:t})}function s(t,e){return e?c(t,e):l(t)}function d(t){return Object(r["a"])({url:"/shipping_company/"+t,method:"delete"})}},a481:function(t,e,a){"use strict";var r=a("cb7c"),n=a("4bf8"),o=a("9def"),i=a("4588"),l=a("0390"),c=a("5f1b"),s=Math.max,d=Math.min,u=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,(function(t,e,a,g){return[function(r,n){var o=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,o,n):a.call(String(o),r,n)},function(t,e){var n=g(a,t,this,e);if(n.done)return n.value;var u=r(t),f=String(this),m="function"===typeof e;m||(e=String(e));var v=u.global;if(v){var h=u.unicode;u.lastIndex=0}var _=[];while(1){var x=c(u,f);if(null===x)break;if(_.push(x),!v)break;var y=String(x[0]);""===y&&(u.lastIndex=l(f,o(u.lastIndex),h))}for(var j="",C=0,k=0;k<_.length;k++){x=_[k];for(var $=String(x[0]),O=s(d(i(x.index),f.length),0),w=[],E=1;E<x.length;E++)w.push(p(x[E]));var S=x.groups;if(m){var N=[$].concat(w,O,f);void 0!==S&&N.push(S);var P=String(e.apply(void 0,N))}else P=b($,f,O,w,S,e);O>=C&&(j+=f.slice(C,O)+P,C=O+$.length)}return j+f.slice(C)}];function b(t,e,r,o,i,l){var c=r+t.length,s=o.length,d=m;return void 0!==i&&(i=n(i),d=f),a.call(l,d,(function(a,n){var l;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":l=i[n.slice(1,-1)];break;default:var d=+n;if(0===d)return a;if(d>s){var f=u(d/10);return 0===f?a:f<=s?void 0===o[f-1]?n.charAt(1):o[f-1]+n.charAt(1):a}l=o[d-1]}return void 0===l?"":l}))}}))},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c591:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("b775");function n(t){return Object(r["a"])({url:"/city/"+t,method:"get"})}},c678:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("b775");function n(t){return Object(r["a"])({url:"/cep/"+t,method:"get"})}},e6dd:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var r=a("b775");function n(t){return Object(r["a"])({url:"/cnpj",method:"get",params:t})}}}]);