(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-297142d0"],{"0283":function(t,e,i){"use strict";var a=i("c912"),o=i.n(a);o.a},"452a":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"e",(function(){return l})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return c}));var a=i("b775");function o(t){return Object(a["a"])({url:"/product_category",method:"get",params:t})}function r(){return Object(a["a"])({url:"/product_category/all",method:"get"})}function l(t){return Object(a["a"])({url:"/product_category/"+t,method:"get"})}function d(t){return Object(a["a"])({url:"/product_category",method:"post",data:t})}function n(t,e){return Object(a["a"])({url:"/product_category/"+e,method:"put",data:t})}function s(t,e){return e?n(t,e):d(t)}function c(t){return Object(a["a"])({url:"/product_category/"+t,method:"delete"})}},"456d":function(t,e,i){var a=i("4bf8"),o=i("0d58");i("5eda")("keys",(function(){return function(t){return o(a(t))}}))},"483b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules},nativeOn:{submit:function(t){t.preventDefault()}}},[i("el-row",{attrs:{gutter:10}},[i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("Informações")])]),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"Categoria",prop:"product_category_id"}},[i("el-select",{attrs:{disabled:t.loading,filterable:""},model:{value:t.form.product_category_id,callback:function(e){t.$set(t.form,"product_category_id",e)},expression:"form.product_category_id"}},t._l(t.categories,(function(e){return i("el-option",{key:e.id,attrs:{label:("root"==t.profile.role?e.company.title+" - ":"")+e.title,value:e.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"Título",prop:"title"}},[i("el-input",{attrs:{disabled:t.loading},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"Peso (KG)",prop:"weigh"}},[i("el-input-number",{attrs:{disabled:t.loading,"controls-position":"right"},model:{value:t.form.weigh,callback:function(e){t.$set(t.form,"weigh",e)},expression:"form.weigh"}})],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"Preço",prop:"price"}},[i("money",{staticClass:"el-input__inner",attrs:{disabled:t.loading},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"Unidade de medida comercial",prop:"ucom"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.ucom,callback:function(e){t.$set(t.form,"ucom",e)},expression:"form.ucom"}},t._l(t.ucoms,(function(t){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1)],1),t._v(" "),i("el-card",[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("Informações fiscais")])]),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"(CFOP) - Código Fiscal de Operações e de Prestações",prop:"cfop"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.cfop,callback:function(e){t.$set(t.form,"cfop",e)},expression:"form.cfop"}},t._l(t.cfops,(function(t){return i("el-option",{key:t.id,attrs:{label:t.id+" - "+t.title,value:t.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"(ICMS) - Situação tributária",prop:"icms"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.icms,callback:function(e){t.$set(t.form,"icms",e)},expression:"form.icms"}},t._l(t.icms_list,(function(t){return i("el-option",{key:t.id,attrs:{label:t.id+" - "+t.title,value:t.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"(IPI) - Situação tributária",prop:"ipi"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.ipi,callback:function(e){t.$set(t.form,"ipi",e)},expression:"form.ipi"}},t._l(t.ipi_list,(function(t){return i("el-option",{key:t.id,attrs:{label:t.id+" - "+t.title,value:t.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"(PIS) - Situação tributária",prop:"pis"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.pis,callback:function(e){t.$set(t.form,"pis",e)},expression:"form.pis"}},t._l(t.pis_list,(function(t){return i("el-option",{key:t.id,attrs:{label:t.id+" - "+t.title,value:t.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:12,sm:24}},[i("el-form-item",{attrs:{label:"(COFINS) - Situação tributária",prop:"cofins"}},[i("el-select",{attrs:{filterable:"",disabled:t.loading},model:{value:t.form.cofins,callback:function(e){t.$set(t.form,"cofins",e)},expression:"form.cofins"}},t._l(t.pis_list,(function(t){return i("el-option",{key:t.id,attrs:{label:t.id+" - "+t.title,value:t.id}})})),1)],1)],1),t._v(" "),i("el-col",{attrs:{md:24,sm:24}},[i("el-form-item",[i("router-link",{staticClass:"pull-left",attrs:{to:{name:"product"}}},[i("el-button",{attrs:{size:"mini"}},[t._v("Voltar")])],1),t._v(" "),i("el-button",{staticClass:"pull-right",attrs:{size:"mini",loading:t.loading,type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("Salvar")])],1)],1)],1)],1)],1)],1)},o=[],r=(i("456d"),i("ac6a"),i("db72")),l=i("2f62"),d=i("c4c8"),n=i("452a"),s={data:function(){return{loading:!1,companies:[],categories:[],pis_list:[{id:"01",title:"Operação Tributável com Alíquota Básica"},{id:"02",title:"Operação Tributável com Alíquota por Unidade de Medida de Produto"},{id:"03",title:"Operação Tributável com Alíquota por Unidade de Medida de Produto"},{id:"04",title:"Operação Tributável Monofásica – Revenda a Alíquota Zero"},{id:"05",title:"Operação Tributável por Substituição Tributária"},{id:"06",title:"Operação Tributável a Alíquota Zero"},{id:"07",title:"Operação Isenta da Contribuição"},{id:"08",title:"Operação sem Incidência da Contribuição"},{id:"09",title:"Operação com Suspensão da Contribuição"},{id:"49",title:"Outras Operações de Saída"}],ipi_list:[{id:"50",title:"Saída Tributada"},{id:"51",title:"Saída Tributável com Alíquota Zero"},{id:"52",title:"Saída Isenta"},{id:"53",title:"Saída Não-Tributada"},{id:"54",title:"Saída Imune"},{id:"55",title:"Saída com Suspensão"},{id:"99",title:"Outras Saídas"}],icms_list:[{id:"101",title:"Tributada pelo Simples Nacional com permissão de crédito de ICMS"},{id:"102",title:"Tributada pelo Simples Nacional sem permissão de crédito"},{id:"103",title:"Isenção de ICMS no Simples Nacional na faixa de receita bruta"},{id:"201",title:"Tributada pelo Simples Nacional com permissão de crédito e cobrança do ICMS por ST"},{id:"202",title:"Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por ST"},{id:"203",title:"Isenção do ICMS no Simples Nacional para faixa de receita bruta e cobrança de ICMS por ST"},{id:"300",title:"Imune de ICMS"},{id:"400",title:"Não tributada pelo Simples Nacional"},{id:"500",title:"ICMS cobrado anteriormente por ST ou por antecipação"},{id:900,title:"Outros (operações que não se enquadram nos códigos anteriores"}],cfops:[{id:"5101",title:"Venda de produção do estabelecimento"}],ucoms:[{id:"AMPOLA",title:"Ampola"},{id:"BALDE",title:"Balde"},{id:"BANDEJ",title:"Bandeja"},{id:"BARRA",title:"Barra"},{id:"BISNAG",title:"Bisnaga"},{id:"BLOCO",title:"Bloco"},{id:"BOBINA",title:"Bobina"},{id:"BOMB",title:"Bombona"},{id:"CAPS",title:"Capsula"},{id:"CART",title:"Cartela"},{id:"CENTO",title:"Cento"},{id:"CJ",title:"Conjunto"},{id:"CM",title:"Centimetro"},{id:"CM2",title:"Centimetro quadrado"},{id:"CX",title:"Caixa"},{id:"CX2",title:"Caixa com 2 unidades"},{id:"CX3",title:"Caixa com 3 unidades"},{id:"CX5",title:"Caixa com 5 unidades"},{id:"CX10",title:"Caixa com 10 unidades"},{id:"CX15",title:"Caixa com 15 unidades"},{id:"CX20",title:"Caixa com 20 unidades"},{id:"CX25",title:"Caixa com 25 unidades"},{id:"CX50",title:"Caixa com 50 unidades"},{id:"CX100",title:"Caixa com 100 unidades"},{id:"DISP",title:"Display"},{id:"DUZIA",title:"Duzia"},{id:"EMBAL",title:"Embalagem"},{id:"FARDO",title:"Fardo"},{id:"FOLHA",title:"Folha"},{id:"FRASCO",title:"Frasco"},{id:"GALAO",title:"Galão"},{id:"GF",title:"Garrafa"},{id:"GRAMAS",title:"Gramas"},{id:"JOGO",title:"Jogo"},{id:"KG",title:"Quilograma"},{id:"KIT",title:"Kit"},{id:"LATA",title:"Lata"},{id:"LITRO",title:"Litro"},{id:"M",title:"Metro"},{id:"M2",title:"Metro quadrado"},{id:"M3",title:"Metro cúbico"},{id:"MILHEI",title:"Milheiro"},{id:"ML",title:"Mililitro"},{id:"MWH",title:"Megawatt hora"},{id:"PACOTE",title:"Pacote"},{id:"PALETE",title:"Palete"},{id:"PARES",title:"Pares"},{id:"PC",title:"Peça"},{id:"POTE",title:"Pote"},{id:"K",title:"Quilate"},{id:"RESMA",title:"Resma"},{id:"ROLO",title:"Rolo"},{id:"SACO",title:"Saco"},{id:"SACOLA",title:"Sacola"},{id:"TAMBOR",title:"Tambor"},{id:"TANQUE",title:"Tanque"},{id:"TON",title:"Tonelada"},{id:"TUBO",title:"Tubo"},{id:"UNID",title:"Unidade"},{id:"VASIL",title:"Vasilhame"},{id:"VIDRO",title:"Vidro"}],form:{product_category_id:null,title:null,price:0,weigh:0,cfop:"5101",ucom:"PC",icms:"103",ipi:"53",pis:"07",cofins:"07"},rules:{company_id:[{required:!0,message:"Campo obrigatório"}],product_category_id:[{required:!0,message:"Campo obrigatório"}],title:[{required:!0,message:"Campo obrigatório"}],price:[{required:!0,message:"Campo obrigatório"}],weigh:[{required:!0,message:"Campo obrigatório"}],cfop:[{required:!0,message:"Campo obrigatório"}],ucom:[{required:!0,message:"Campo obrigatório"}],icms:[{required:!0,message:"Campo obrigatório"}],ipi:[{required:!0,message:"Campo obrigatório"}],pis:[{required:!0,message:"Campo obrigatório"}],cofins:[{required:!0,message:"Campo obrigatório"}]}}},computed:Object(r["a"])({},Object(l["b"])(["profile"])),created:function(){var t=this;Object(n["c"])().then((function(e){t.categories=e.data.data})),this.$route.params.id&&(this.loading=!0,Object(d["e"])(this.$route.params.id).then((function(e){Object.keys(t.form).forEach((function(i){t.form[i]=e.data.data[i]})),t.loading=!1})))},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate((function(i){i&&(e.loading=!0,Object(d["d"])(e.form,e.$route.params.id).then((function(i){e.$message({message:"Salvo com sucesso",type:"success",duration:5e3}),e.$route.params.id||e.$refs[t].resetFields()})).finally((function(t){e.loading=!1})))}))}}},c=s,u=(i("0283"),i("2877")),m=Object(u["a"])(c,a,o,!1,null,null,null);e["default"]=m.exports},"5eda":function(t,e,i){var a=i("5ca1"),o=i("8378"),r=i("79e5");t.exports=function(t,e){var i=(o.Object||{})[t]||Object[t],l={};l[t]=e(i),a(a.S+a.F*r((function(){i(1)})),"Object",l)}},c4c8:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"e",(function(){return l})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return c}));var a=i("b775");function o(t){return Object(a["a"])({url:"/product",method:"get",params:t})}function r(t){return Object(a["a"])({url:"/product/all",method:"get",params:t})}function l(t){return Object(a["a"])({url:"/product/"+t,method:"get"})}function d(t){return Object(a["a"])({url:"/product",method:"post",data:t})}function n(t,e){return Object(a["a"])({url:"/product/"+e,method:"put",data:t})}function s(t,e){return e?n(t,e):d(t)}function c(t){return Object(a["a"])({url:"/product/"+t,method:"delete"})}},c912:function(t,e,i){}}]);