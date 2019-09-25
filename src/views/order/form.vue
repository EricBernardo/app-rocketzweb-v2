<template>
	<div class="app-container">
		<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Informações</span>
				</div>
				<el-button
					type="success"
					class="pull-right m-b-10"
					size="mini"
					@click="addProduct()"
					:disabled="!this.products.length"
				>Adicionar produto</el-button>

				<el-col :md="6" :sm="24">
					<el-form-item label="Empresas" prop="company_id" v-if="companies.length">
						<el-select
							v-model="form.company_id"
							:disabled="loading"
							filterable
							@change="setClientsCompanies()"
						>
							<el-option v-for="item in companies" :key="item.id" :label="item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="6" :sm="24">
					<el-form-item
						label="Cliente"
						prop="client_id"
						v-if="this.profile.role == 'root' || this.profile.role == 'administrator'"
					>
						<el-select v-model="form.client_id" :disabled="loading || !this.clients.length" filterable>
							<el-option v-for="item in clients" :key="item.id" :label="item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Produtos</span>
				</div>
				<el-col :span="24">
					<el-table
						:data="form.products"
						row-key="id"
						element-loading-text="Carregando..."
						border
						width="100%"
					>
						<el-table-column label="Produto" min-width="150">
							<template slot-scope="scope">
								<el-select
									v-model="scope.row.product_id"
									@change="calculateProduct(scope.row)"
									filterable
									:disabled="scope.row.block"
								>
									<el-option
										v-for="item in products"
										:key="item.id"
										:label="(item.title.indexOf(item.category.title) === -1 ? (item.category.title + ' - ') : '') + item.title"
										:value="item.id"
									></el-option>
								</el-select>
							</template>
						</el-table-column>
						<el-table-column label="Quantidade" min-width="150">
							<template slot-scope="scope">
								<el-input-number
									v-model="scope.row.quantity"
									:change="calculateProduct(scope.row)"
									:min="1"
									:max="100"
									:disabled="scope.row.block"
								></el-input-number>
							</template>
						</el-table-column>
						<el-table-column label="Preço" min-width="150">
							<template slot-scope="scope">
								<money
									v-model="scope.row.total"
									:disabled="scope.row.block"
									:readonly="true"
									class="el-input__inner"
								></money>
							</template>
						</el-table-column>
						<el-table-column label="-" width="120" fixed="right">
							<template slot-scope="scope">
								<el-button type="danger" size="mini" @click="removeProduct(scope.row)">Remover</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Frete</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="Transportadora" prop="shipping_company_id">
						<el-select
							@change="setClientsCompanyVehicles(true)"
							v-model="form.shipping_company_id"
							:disabled="loading || !this.shipping_companies.length"
							filterable
						>
							<el-option
								v-for="item in shipping_companies"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Veículo" prop="shipping_company_vehicle_id">
						<el-select
							v-model="form.shipping_company_vehicle_id"
							:disabled="loading || !this.shipping_company_vehicles.length"
							filterable
						>
							<el-option
								v-for="item in shipping_company_vehicles"
								:key="item.id"
								:label="item.board"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Valor" prop="freight_value">
						<el-col :md="20" :sm="24">
							<money v-model="form.freight_value" :disabled="loading" class="el-input__inner"></money>
						</el-col>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Informações fiscais</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="Finalidade de emissão da NF-e" prop="finNFe">
						<el-select
							v-model="form.finNFe"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in finnfe_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Tipo de Operação" prop="tpNF">
						<el-select
							v-model="form.tpNF"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in tpnf_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Indicador de local de destino da operação" prop="idDest">
						<el-select
							v-model="form.idDest"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in iddest_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Formato de impressão do DANFE" prop="tpImp">
						<el-select
							v-model="form.tpImp"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in tpimp_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Tipo de emissão" prop="tpEmis">
						<el-select
							v-model="form.tpEmis"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in tpemis_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Indica operação com consumidor final" prop="indFinal">
						<el-select
							v-model="form.indFinal"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in indfinal_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Indicador de presença do comprador no estabelecimento" prop="indPres">
						<el-select
							v-model="form.indPres"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in indpres_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Indicador da forma de pagamento" prop="indPag">
						<el-select
							v-model="form.indPag"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in indPag_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Forma de Pagamento" prop="tPag">
						<el-select
							v-model="form.tPag"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in tPag_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Modalidade do frete" prop="modFrete">
						<el-select
							v-model="form.modFrete"
							:disabled="loading"
							filterable
						>
							<el-option
								v-for="item in modFrete_list"
								:key="item.id"
								:label="item.title"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Totais</span>
				</div>
				<el-col :md="6" :sm="24">
					<el-form-item label="Desconto" prop="discount">
						<el-col :md="20" :sm="24">
							<money v-model="form.discount" :disabled="loading" class="el-input__inner"></money>
						</el-col>
					</el-form-item>
					<el-form-item label="Pago?" prop="paid">
						<el-switch v-model="form.paid" :disabled="loading"></el-switch>
					</el-form-item>
					<el-form-item label="Data de emissão" prop="date">
						<el-date-picker
							:disabled="loading"
							format="dd/MM/yyyy"
							value-format="yyyy-MM-dd"
							v-model="form.date"
							type="date"
							placeholder="Data de emissão"
						></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col :md="6" :sm="24" class="pull-right">
					<el-form-item label="Subtotal" prop="subtotal">
						<money v-model="form.subtotal" :readonly="true" class="el-input__inner"></money>
					</el-form-item>
					<el-form-item label="Total" prop="total">
						<money v-model="form.total" :readonly="true" class="el-input__inner"></money>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item label="Observação" prop="observation">
						<el-input type="textarea" v-model="form.observation" :disabled="loading" :rows="5"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item>
						<router-link :to="{ name: 'order' }" class="pull-left">
							<el-button size="mini">Voltar</el-button>
						</router-link>
						<el-button
							size="mini"
							:loading="loading"
							type="primary"
							class="pull-right"
							@click="onSubmit('form')"
						>Salvar</el-button>
					</el-form-item>
				</el-col>
			</el-card>
		</el-form>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import { show, save } from "@/api/order";
	import { getAllProducts } from "@/api/product";
	import { getAllClients } from "@/api/client";
	import { getAllCompany } from "@/api/company";
	import { getAllShippingCompany } from "@/api/shipping_company";
	import { getAllShippingCompanyVehicle } from "@/api/shipping_company_vehicle";

	export default {
		data() {
			return {
				loading: false,
				products: [],
				clients: [],
				companies: [],
				shipping_companies: [],
				shipping_company_vehicles: [],
				form: {
					client_id: null,
					discount: 0,
					products: [],
					paid: false,
					subtotal: 0,
					total: 0,
					date: null,
					observation: null,
					shipping_company_id: null,
					shipping_company_vehicle_id: null,
					freight_value: 0,
					finNFe: 1,
					tpNF: 1,
					idDest: 1,
					tpImp: 1,
					tpEmis: 1,
					indFinal: 0,
					indPres: 1,
					indPag: 0,
					tPag: '01',
					modFrete: 0,
				},
				rules: {
					client_id: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					date: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					products: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					shipping_company_id: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					shipping_company_vehicle_id: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					finNFe: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					tpNF: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					idDest: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					tpImp: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					tpEmis: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					indFinal: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					],
					indPres: [
						{
							required: true,
							message: "Campo obrigatório"
						}
					]
				},
				finnfe_list: [
					{
						id: 1,
						title: 'NF-e normal'
					},
					{
						id: 2,
						title: 'NF-e complementar'
					},
					{
						id: 3,
						title: 'NF-e de ajuste'
					},
					{
						id: 4,
						title: 'Devolução / Retorno'
					},
				],
				tpnf_list: [
					{
						id: 0,
						title: 'Entrada'
					},
					{
						id: 1,
						title: 'Saída'
					},
				],
				iddest_list: [
					{
					id: 1,
					title: 'Interna'
					},
					{
					id: 2,
					title: 'Interestadual'
					},
					{
					id: 3,
					title: 'Exterior'
					},
				],
				tpimp_list: [
					{
						id: 0,
						title: 'Sem DANFe'
						},
					{
						id: 1,
						title: 'DANFe Retrato'
						},
					{
						id: 2,
						title: 'DANFe Paisagem'
						},
					{
						id: 3,
						title: 'DANFe Simplificado'
						},
					{
						id: 4,
						title: 'DANFe NFC-e'
						},
					{
						id: 5,
						title: 'DANFe NFc-e resumido'
						},
					{
						id: 6,
						title: 'DANFe NFC-e em mesagem eletrônica'
						},
				],
				tpemis_list: [
					{
						id: 1,
						title: 'Normal - emissão normal'
					},
					{
						id: 2,
						title: 'Contingência FS - emissão em contingência com impressão do DANFE em Formulário de Segurança'
					},
					{
						id: 4,
						title: 'Contingência DPEC - emissão em contingência com envio da Declaração Prévia de Emissão em Contingência - DPEC'
					},
					{
						id: 5,
						title: 'Contingência FS-DA - emissão em contingência com impressão do DANFE em Formulário de Segurança para Impressão de Documento Auxiliar  de Documento Fiscal Eletrônico (FS-DA)'
					},
					{
						id: 6,
						title: 'Contingência SVC - AN'
					},
					{
						id: 7,
						title: 'Contingência SVC - RS'
					},
					{
						id: 9,
						title: 'Contingência off-line NFC-e'
					}
				],
				indfinal_list: [
					{
						id: 0,
						title: 'Normal'
					},
					{
						id: 1,
						title: 'Consumidor final'
					},
				],
				indpres_list: [
					{
						id: 0,
						title: 'Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)',
					},
					{
						id: 1,
						title: 'Operação presencial',
					},
					{
						id: 2,
						title: 'Operação não presencial, pela Internet',
					},
					{
						id: 3,
						title: 'Operação não presencial, tele atendimento',
					},
					{
						id: 4,
						title: 'NFC-e em operação com entrega a domicílio',
					},
					{
						id: 5,
						title: 'Operação presencial, fora do estabelecimento',
					},
					{
						id: 9,
						title: 'Operação não presencial, outros',
					},
				],
				indPag_list: [
					{
						id: 0,
						title: 'Pagamento à vista'
					},
					{
						id: 1,
						title: 'Pagamento à prazo'
					},
					{
						id: 2,
						title: 'Outros'
					},
				],
				tPag_list: [
					{
						id: '01',
						title: 'Dinheiro'
					},
					{
						id: '02',
						title: 'Cheque'
					},
					{
						id: '03',
						title: 'Cartão de Crédito'
					},
					{
						id: '04',
						title: 'Cartão de Débito'
					},
					{
						id: '05',
						title: 'Crédito Loja'
					},
					{
						id: '10',
						title: 'Vale Alimentação'
					},
					{
						id: '11',
						title: 'Vale Refeição'
					},
					{
						id: '12',
						title: 'Vale Presente'
					},
					{
						id: '13',
						title: 'Vale Combustível'
					},
					{
						id: '99',
						title: 'Outros'
					},
				],
				modFrete_list: [
					{
						id: 0,
						title: 'Contratação do Frete por conta do Remetente (CIF)'
					},
					{
						id: 1,
						title: 'Contratação do Frete por conta do Destinatário (FOB)'
					},
				]
			};
		},
		computed: {
			...mapGetters(["profile"])
		},
		created() {
			let form = this.form;

			if (this.profile.role == "administrator") {
				getAllClients().then(response => {
					this.clients = response.data.data;
				});
			}

			if (this.profile.role == "root") {
				getAllCompany().then(response => {
					this.companies = response.data.data;
				});
			}

			if (
				this.profile.role == "administrator" ||
				this.profile.role == "client"
			) {
				getAllProducts().then(response => {
					this.products = response.data.data;
				});
				getAllShippingCompany().then(response => {
					this.shipping_companies = response.data.data;
				});
			}

			this.getOrder();
		},
		methods: {
			setClientsCompanies(clear = true) {
				if (this.profile.role == "root") {
					let __this = this;
					if (clear) {
						__this.form.total = 0;
						__this.form.subtotal = 0;
						__this.form.shipping_company_id = null;
						__this.form.shipping_company_vehicle_id = null;
						__this.form.products = [];
						__this.clients = [];
						__this.products = [];
						__this.shipping_company_vehicles = [];
						__this.shipping_companies = [];
					}
					getAllClients({ company_id: __this.form.company_id }).then(
						response => {
							if (clear) {
								__this.form.client_id = null;
							}
							__this.clients = response.data.data;
						}
					);
					getAllProducts({ company_id: __this.form.company_id }).then(
						response => {
							__this.products = response.data.data;
						}
					);
					getAllShippingCompany({
						company_id: __this.form.company_id
					}).then(response => {
						this.shipping_companies = response.data.data;
					});
				}
			},
			setClientsCompanyVehicles(clear = false) {
				this.shipping_company_vehicles = [];
				if (clear) {
					this.form.shipping_company_vehicle_id = null;
				}
				if (this.form.shipping_company_id) {
					getAllShippingCompanyVehicle({
						company_id: this.form.company_id,
						shipping_company_id: this.form.shipping_company_id
					}).then(response => {
						this.shipping_company_vehicles = response.data.data;
					});
				}
			},
			getOrder() {
				let __this = this;
				if (__this.$route.params.id) {
					__this.loading = true;
					show(__this.$route.params.id).then(response => {
						__this.form.products = [];
						response.data.data.products.map(product => {
							__this.form.products.push({
								id: product.pivot.id,
								product_id: product.id,
								quantity: product.pivot.quantity,
								price: product.pivot.price,
								total: product.pivot.price * product.pivot.quantity,
								block: true
							});
						});
						__this.form.client_id = response.data.data.client.id;
						__this.form.company_id =
							response.data.data.client.company.id;
						__this.form.discount = response.data.data.discount;
						__this.form.paid = response.data.data.paid ? true : false;
						__this.form.subtotal = response.data.data.subtotal;
						__this.form.total = response.data.data.total;
						__this.form.date = response.data.data.date;
						__this.form.observation = response.data.data.observation;
						__this.form.shipping_company_id =
							response.data.data.shipping_company_id;
						__this.form.shipping_company_vehicle_id =
							response.data.data.shipping_company_vehicle_id;
						__this.form.freight_value =
							response.data.data.freight_value;
						__this.form.finNFe = response.data.data.finNFe;
						__this.form.tpNF = response.data.data.tpNF;
						__this.form.idDest = response.data.data.idDest;
						__this.form.tpImp = response.data.data.tpImp;
						__this.form.tpEmis = response.data.data.tpEmis;
						__this.form.indFinal = response.data.data.indFinal;
						__this.form.indPres = response.data.data.indPres;
						__this.form.indPag = response.data.data.indPag;
						__this.form.tPag = response.data.data.tPag;
						__this.form.modFrete = response.data.data.modFrete;
						__this.setClientsCompanies(false);
						__this.setClientsCompanyVehicles();
						__this.loading = false;
					});
				} else {
					__this.form.date = __this.$moment().format("YYYY-MM-DD");
				}
			},
			calculateProduct(row) {
				if (!row.block) {
					let price = 0;
					this.products.map(function(value) {
						if (value.id == row.product_id) {
							price = value.price;
						}
					});
					row.price = price;
					row.total = row.quantity * row.price;
				}
				this.calculateOrder();
			},
			calculateOrder() {
				let total = 0;
				let form = this.form;
				form.subtotal = 0;
				form.total = 0;
				form.products.map(function(value) {
					total += value.total;
				});
				form.discount = Math.abs(form.discount);
				form.subtotal = total;
				form.total = total - form.discount;
			},
			addProduct() {
				if (this.products.length) {
					let product = this.products[0];
					this.form.products.push({
						product_id: product.id,
						quantity: 1,
						price: product.price,
						total: product.price,
						block: false
					});
				} else {
					this.$message({
						message: "Produto não encontrado",
						type: "error",
						duration: 5 * 1000
					});
				}
			},
			removeProduct(row) {
				var index = this.form.products.indexOf(row);
				if (index > -1) {
					this.form.total -= this.form.products.price;
					this.form.subtotal -= this.form.products.price;
					this.form.products.splice(index, 1);
				}
			},
			onSubmit(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.loading = true;
						var form = this.form;
						save(form, this.$route.params.id)
							.then(response => {
								this.$message({
									message: "Salvo com sucesso",
									type: "success",
									duration: 5 * 1000
								});
								if (!this.$route.params.id) {
									this.$refs[formName].resetFields();
									this.form.products = [];
								}
								this.getOrder();
							})
							.finally(responde => {
								this.loading = false;
							});
					}
				});
			}
		}
	};
</script>
<style>
	.el-form-item__content {
		margin-right: 15px;
	}
</style>
