(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f786a78"],{"02f4":function(e,t,n){var r=n("4588"),a=n("be13");e.exports=function(e){return function(t,n){var o,i,l=String(a(t)),c=r(n),s=l.length;return c<0||c>=s?e?"":void 0:(o=l.charCodeAt(c),o<55296||o>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?e?l.charAt(c):o:e?l.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),a=n("32e9"),o=n("79e5"),i=n("be13"),l=n("2b4c"),c=n("520a"),s=l("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var f=l(e),m=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=m?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[s]=function(){return n}),n[f](""),!t})):void 0;if(!m||!p||"replace"===e&&!u||"split"===e&&!d){var b=/./[f],g=n(i,f,""[e],(function(e,t,n,r,a){return t.exec===c?m&&!a?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),v=g[0],h=g[1];r(String.prototype,e,v),a(RegExp.prototype,f,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}}},"456d":function(e,t,n){var r=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(e){return a(r(e))}}))},4867:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b775");function a(){return Object(r["a"])({url:"/state",method:"get"})}},"520a":function(e,t,n){"use strict";var r=n("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,l="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[l]||0!==t[l]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(i=function(e){var t,n,i,u,d=this;return s&&(n=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),c&&(t=d[l]),i=a.call(d,e),c&&i&&(d[l]=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&o.call(i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"5eda":function(e,t,n){var r=n("5ca1"),a=n("8378"),o=n("79e5");e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o((function(){n(1)})),"Object",i)}},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},a481:function(e,t,n){"use strict";var r=n("cb7c"),a=n("4bf8"),o=n("9def"),i=n("4588"),l=n("0390"),c=n("5f1b"),s=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};n("214f")("replace",2,(function(e,t,n,b){return[function(r,a){var o=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=b(n,e,this,t);if(a.done)return a.value;var d=r(e),f=String(this),m="function"===typeof t;m||(t=String(t));var v=d.global;if(v){var h=d.unicode;d.lastIndex=0}var _=[];while(1){var x=c(d,f);if(null===x)break;if(_.push(x),!v)break;var y=String(x[0]);""===y&&(d.lastIndex=l(f,o(d.lastIndex),h))}for(var j="",C=0,k=0;k<_.length;k++){x=_[k];for(var O=String(x[0]),$=s(u(i(x.index),f.length),0),E=[],I=1;I<x.length;I++)E.push(p(x[I]));var w=x.groups;if(m){var S=[O].concat(E,$,f);void 0!==w&&S.push(w);var D=String(t.apply(void 0,S))}else D=g(O,f,$,E,w,t);$>=C&&(j+=f.slice(C,$)+D,C=$+O.length)}return j+f.slice(C)}];function g(e,t,r,o,i,l){var c=r+e.length,s=o.length,u=m;return void 0!==i&&(i=a(i),u=f),n.call(l,u,(function(n,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":l=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>s){var f=d(u/10);return 0===f?n:f<=s?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):n}l=o[u-1]}return void 0===l?"":l}))}}))},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b39f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n("b775");function a(e){return Object(r["a"])({url:"/client",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/client/all",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/client/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/client",method:"post",data:e})}function c(e,t){return Object(r["a"])({url:"/client/"+t,method:"put",data:e})}function s(e,t){return t?c(e,t):l(e)}function u(e){return Object(r["a"])({url:"/client/"+e,method:"delete"})}},bfd3:function(e,t,n){},c591:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b775");function a(e){return Object(r["a"])({url:"/city/"+e,method:"get"})}},c678:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b775");function a(e){return Object(r["a"])({url:"/cep/"+e,method:"get"})}},e6dd:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b775");function a(e){return Object(r["a"])({url:"/cnpj/",method:"get",params:e})}},f43c:function(e,t,n){"use strict";var r=n("bfd3"),a=n.n(r);a.a},fca4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",{attrs:{gutter:10}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Informações")])]),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},["root"==e.profile.role?n("el-form-item",{attrs:{label:"Empresa",prop:"company_id"}},[n("el-select",{attrs:{filterable:"",disabled:e.loading},model:{value:e.form.company_id,callback:function(t){e.$set(e.form,"company_id",t)},expression:"form.company_id"}},e._l(e.companies,(function(e){return n("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",prop:"cnpj"}},[n("el-input",{attrs:{disabled:e.loading||e.loading_cnpj},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}},[n("el-button",{attrs:{slot:"append",loading:e.loading_cnpj,icon:"el-icon-search"},on:{click:function(t){return t.preventDefault(),e.infoCnpj(t)}},slot:"append"})],1)],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Título",prop:"title"}},[n("el-input",{attrs:{disabled:e.loading},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"E-mail",prop:"email"}},[n("el-input",{attrs:{disabled:e.loading},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Telefone",prop:"phone"}},[n("el-input",{attrs:{disabled:e.loading},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),e._v(" "),n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Endereço")])]),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"CEP",prop:"cep"}},[n("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{disabled:e.loading||e.loading_cep},on:{change:function(t){return e.getCep()}},model:{value:e.form.cep,callback:function(t){e.$set(e.form,"cep",t)},expression:"form.cep"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Estado",prop:"state_id"}},[n("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},on:{change:function(t){return e.getCities(!0)}},model:{value:e.form.state_id,callback:function(t){e.$set(e.form,"state_id",t)},expression:"form.state_id"}},e._l(e.states,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Cidade",prop:"city_id"}},[n("el-select",{attrs:{filterable:"",disabled:e.loading||e.loading_cep||e.loading_cities},model:{value:e.form.city_id,callback:function(t){e.$set(e.form,"city_id",t)},expression:"form.city_id"}},e._l(e.cities,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Bairro",prop:"neighborhood"}},[n("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.neighborhood,callback:function(t){e.$set(e.form,"neighborhood",t)},expression:"form.neighborhood"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Endereço",prop:"address"}},[n("el-input",{attrs:{disabled:e.loading||e.loading_cep},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Número",prop:"number"}},[n("el-input-number",{attrs:{disabled:e.loading,"controls-position":"right",min:1,max:99999},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:24,sm:24}},[n("el-form-item",{attrs:{label:"Complemento",prop:"complement"}},[n("el-input",{attrs:{type:"textarea",disabled:e.loading,rows:5},model:{value:e.form.complement,callback:function(t){e.$set(e.form,"complement",t)},expression:"form.complement"}})],1)],1)],1),e._v(" "),n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("Informações fiscais")])]),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Inscrição estadual",prop:"ie"}},[n("el-input",{attrs:{disabled:e.loading},model:{value:e.form.ie,callback:function(t){e.$set(e.form,"ie",t)},expression:"form.ie"}})],1)],1),e._v(" "),n("el-col",{attrs:{md:12,sm:24}},[n("el-form-item",{attrs:{label:"Indicador da IE do destinatário",prop:"indIEDest"}},[n("el-select",{attrs:{filterable:"",disabled:e.loading},model:{value:e.form.indIEDest,callback:function(t){e.$set(e.form,"indIEDest",t)},expression:"form.indIEDest"}},e._l(e.indIEDests,(function(e){return n("el-option",{key:e.id,attrs:{label:e.id+" - "+e.name,value:e.id}})})),1)],1)],1),e._v(" "),n("el-col",{attrs:{md:24,sm:24}},[n("el-form-item",[n("router-link",{staticClass:"pull-left",attrs:{to:"/client"}},[n("el-button",{attrs:{size:"mini"}},[e._v("Voltar")])],1),e._v(" "),n("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:e.loading,type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("Salvar")])],1)],1)],1)],1)],1)],1)},a=[],o=(n("7f7f"),n("a481"),n("456d"),n("ac6a"),n("db72")),i=n("2f62"),l=n("4867"),c=n("c591"),s=n("c678"),u=n("b39f"),d=n("fcac"),f=n("e6dd"),m={data:function(){return{loading:!1,loading_cep:!1,loading_cities:!1,loading_cnpj:!1,states:[],cities:[],companies:[],indIEDests:[{id:1,name:"Contribuinte ICMS (informar a IE do destinatário)"},{id:2,name:"Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS"},{id:9,name:"Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS"}],form:{company_id:null,title:null,address:null,cep:null,state_id:null,city_id:null,cnpj:null,neighborhood:null,number:null,phone:null,complement:null,ie:null,indIEDest:1,email:null},rules:{company_id:[{required:!0,message:"Campo obrigatório"}],title:[{required:!0,message:"Campo obrigatório"}],address:[{required:!0,message:"Campo obrigatório"}],cep:[{required:!0,message:"Campo obrigatório"}],state_id:[{required:!0,message:"Campo obrigatório"}],city_id:[{required:!0,message:"Campo obrigatório"}],neighborhood:[{required:!0,message:"Campo obrigatório"}],number:[{required:!0,message:"Campo obrigatório"}],email:[{message:"E-mail inválido",type:"email"}]}}},computed:Object(o["a"])({},Object(i["b"])(["profile"])),created:function(){var e=this;Object(l["a"])().then((function(t){e.states=t.data.data})),"root"==this.profile.role&&Object(d["d"])().then((function(t){e.companies=t.data.data})),this.$route.params.id&&(this.loading=!0,Object(u["e"])(this.$route.params.id).then((function(t){Object.keys(e.form).forEach((function(n){e.form[n]=t.data.data[n],"state_id"==n&&e.getCities()})),e.loading=!1})))},methods:{infoCnpj:function(){var e=this;this.form.cnpj&&this.form.cnpj.length>=14?(this.loading_cnpj=!0,Object(f["a"])({cnpj:this.form.cnpj.replace(/\D/g,"")}).then((function(t){e.form.title=t.data.data.nome,e.form.fantasy=t.data.data.fantasia,e.form.cep=t.data.data.cep,e.form.phone=t.data.data.telefone,e.form.number=t.data.data.numero,e.form.email=t.data.data.email,e.form.cep&&e.getCep()})).finally((function(t){e.loading_cnpj=!1}))):this.$message.warning("CNPJ inválido.")},onSubmit:function(e){var t=this;this.$refs[e].validate((function(n){n&&(t.loading=!0,Object(u["d"])(t.form,t.$route.params.id).then((function(n){t.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),t.$route.params.id||t.$refs[e].resetFields()})).finally((function(e){t.loading=!1})))}))},getCities:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this;r.loading_cities=!0,Object(c["a"])(this.form.state_id).then((function(a){e.cities=a.data.data;var o=e.form;t&&(o.city_id=null,n&&e.cities.map((function(e){e.name==n&&(o.city_id=e.id)}))),r.loading_cities=!1}))},getCep:function(){var e=this;e.loading_cep=!0,e.cities=[],e.form.neighborhood=null,e.form.address=null,e.form.state_id=null,e.form.city_id=null,Object(s["a"])(this.form.cep).then((function(t){t.data.data&&(e.form.neighborhood=t.data.data.bairro,e.form.address=t.data.data.logradouro,e.states.map((function(n){n.abbr==t.data.data.uf&&(e.form.state_id=n.id,e.getCities(e.form.state_id,t.data.data.localidade))})))})).finally((function(t){e.loading_cep=!1}))}}},p=m,b=(n("f43c"),n("2877")),g=Object(b["a"])(p,r,a,!1,null,null,null);t["default"]=g.exports},fcac:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n("b775");function a(e){return Object(r["a"])({url:"/company",method:"get",params:e})}function o(){return Object(r["a"])({url:"/company/all",method:"get"})}function i(e){return Object(r["a"])({url:"/company/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/company",method:"post",data:e})}function c(e,t){return Object(r["a"])({url:"/company/"+t,method:"put",data:e})}function s(e,t){return t?c(e,t):l(e)}function u(e){return Object(r["a"])({url:"/company/"+e,method:"delete"})}function d(e){return Object(r["a"])({url:"/company/file",method:"delete",data:{id:e}})}}}]);