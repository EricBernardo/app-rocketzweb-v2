<template>
<div class="app-container">
	<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
		<el-row :gutter="10">
			<el-card>
				<div slot="header" class="clearfix">
					<span>Informações</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="Categoria" prop="product_category_id">
						<el-select v-model="form.product_category_id" :disabled="loading" filterable>
							<el-option v-for="item in categories"
							           :key="item.id"
							           :label="(profile.role == 'root' ? item.company.title + ' - ' : '') + item.title"
							           :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Título" prop="title">
						<el-input v-model="form.title" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Peso (KG)" prop="weigh">
						<el-input-number v-model="form.weigh" :disabled="loading" controls-position="right"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Preço" prop="price">
						<money v-model="form.price" :disabled="loading" class="el-input__inner"></money>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Unidade de medida comercial" prop="ucom">
						<el-select filterable v-model="form.ucom" :disabled="loading">
							<el-option v-for="item in ucoms" :key="item.id" :label="item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Tributos</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="(CFOP) - Código Fiscal de Operações e de Prestações" prop="cfop">
						<el-select filterable v-model="form.cfop" :disabled="loading">
							<el-option v-for="item in cfops" :key="item.id" :label="item.id + ' - ' + item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="(ICMS) - Situação tributária" prop="icms">
						<el-select filterable v-model="form.icms" :disabled="loading">
							<el-option v-for="item in icms_list" :key="item.id" :label="item.id + ' - ' + item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="(IPI) - Situação tributária" prop="ipi">
						<el-select filterable v-model="form.ipi" :disabled="loading">
							<el-option v-for="item in ipi_list" :key="item.id" :label="item.id + ' - ' + item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="(PIS) - Situação tributária" prop="pis">
						<el-select filterable v-model="form.pis" :disabled="loading">
							<el-option v-for="item in pis_list" :key="item.id" :label="item.id + ' - ' + item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="(COFINS) - Situação tributária" prop="cofins">
						<el-select filterable v-model="form.cofins" :disabled="loading">
							<el-option v-for="item in pis_list" :key="item.id" :label="item.id + ' - ' + item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item>
						<router-link :to="{ name: 'product' }" class="pull-left">
							<el-button size="mini">Voltar</el-button>
						</router-link>
						<el-button size="mini"
						           :loading="loading"
						           type="primary"
						           class="pull-right"
						           @click="onSubmit('form')">Salvar</el-button>
					</el-form-item>
				</el-col>
			</el-card>
		</el-row>
	</el-form>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { show, save } from '@/api/product'
import { getAllProductCategories } from '@/api/product_category'

export default {
  data() {
    return {
      loading: false,
      companies: [],
      categories: [],
      pis_list: [
        {
          id: '01',
          title: 'Operação Tributável com Alíquota Básica'
        },
        {
          id: '02',
          title: 'Operação Tributável com Alíquota por Unidade de Medida de Produto'
        },
        {
          id: '03',
          title: 'Operação Tributável com Alíquota por Unidade de Medida de Produto'
        },
        {
          id: '04',
          title: 'Operação Tributável Monofásica – Revenda a Alíquota Zero'
        },
        {
          id: '05',
          title: 'Operação Tributável por Substituição Tributária'
        },
        {
          id: '06',
          title: 'Operação Tributável a Alíquota Zero'
        },
        {
          id: '07',
          title: 'Operação Isenta da Contribuição'
        },
        {
          id: '08',
          title: 'Operação sem Incidência da Contribuição'
        },
        {
          id: '09',
          title: 'Operação com Suspensão da Contribuição'
        },
        {
          id: '49',
          title: 'Outras Operações de Saída'
        }
      ],
      ipi_list: [
        {
          id: '50',
          title: 'Saída Tributada'
        },
        {
          id: '51',
          title: 'Saída Tributável com Alíquota Zero'
        },
        {
          id: '52',
          title: 'Saída Isenta'
        },
        {
          id: '53',
          title: 'Saída Não-Tributada'
        },
        {
          id: '54',
          title: 'Saída Imune'
        },
        {
          id: '55',
          title: 'Saída com Suspensão'
        },
        {
          id: '99',
          title: 'Outras Saídas'
        }
      ],
      icms_list: [
        {
          id: '101',
          title: 'Tributada pelo Simples Nacional com permissão de crédito de ICMS'
        },
        {
          id: '102',
          title: 'Tributada pelo Simples Nacional sem permissão de crédito'
        },
        {
          id: '103',
          title: 'Isenção de ICMS no Simples Nacional na faixa de receita bruta'
        },
        {
          id: '201',
          title: 'Tributada pelo Simples Nacional com permissão de crédito e cobrança do ICMS por ST'
        },
        {
          id: '202',
          title: 'Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por ST'
        },
        {
          id: '203',
          title: 'Isenção do ICMS no Simples Nacional para faixa de receita bruta e cobrança de ICMS por ST'
        },
        {
          id: '300',
          title: 'Imune de ICMS'
        },
        {
          id: '400',
          title: 'Não tributada pelo Simples Nacional'
        },
        {
          id: '500',
          title: 'ICMS cobrado anteriormente por ST ou por antecipação'
        },
        {
          id: 900,
          title: 'Outros (operações que não se enquadram nos códigos anteriores'
        }
      ],
      cfops: [
        {
          id: '5101',
          title: 'Venda de produção do estabelecimento'
        }
      ],
      ucoms: [
        {
          id: 'AMPOLA',
          title: 'Ampola'
        },
        {
          id: 'BALDE',
          title: 'Balde'
        },
        {
          id: 'BANDEJ',
          title: 'Bandeja'
        },
        {
          id: 'BARRA',
          title: 'Barra'
        },
        {
          id: 'BISNAG',
          title: 'Bisnaga'
        },
        {
          id: 'BLOCO',
          title: 'Bloco'
        },
        {
          id: 'BOBINA',
          title: 'Bobina'
        },
        {
          id: 'BOMB',
          title: 'Bombona'
        },
        {
          id: 'CAPS',
          title: 'Capsula'
        },
        {
          id: 'CART',
          title: 'Cartela'
        },
        {
          id: 'CENTO',
          title: 'Cento'
        },
        {
          id: 'CJ',
          title: 'Conjunto'
        },
        {
          id: 'CM',
          title: 'Centimetro'
        },
        {
          id: 'CM2',
          title: 'Centimetro quadrado'
        },
        {
          id: 'CX',
          title: 'Caixa'
        },
        {
          id: 'CX2',
          title: 'Caixa com 2 unidades'
        },
        {
          id: 'CX3',
          title: 'Caixa com 3 unidades'
        },
        {
          id: 'CX5',
          title: 'Caixa com 5 unidades'
        },
        {
          id: 'CX10',
          title: 'Caixa com 10 unidades'
        },
        {
          id: 'CX15',
          title: 'Caixa com 15 unidades'
        },
        {
          id: 'CX20',
          title: 'Caixa com 20 unidades'
        },
        {
          id: 'CX25',
          title: 'Caixa com 25 unidades'
        },
        {
          id: 'CX50',
          title: 'Caixa com 50 unidades'
        },
        {
          id: 'CX100',
          title: 'Caixa com 100 unidades'
        },
        {
          id: 'DISP',
          title: 'Display'
        },
        {
          id: 'DUZIA',
          title: 'Duzia'
        },
        {
          id: 'EMBAL',
          title: 'Embalagem'
        },
        {
          id: 'FARDO',
          title: 'Fardo'
        },
        {
          id: 'FOLHA',
          title: 'Folha'
        },
        {
          id: 'FRASCO',
          title: 'Frasco'
        },
        {
          id: 'GALAO',
          title: 'Galão'
        },
        {
          id: 'GF',
          title: 'Garrafa'
        },
        {
          id: 'GRAMAS',
          title: 'Gramas'
        },
        {
          id: 'JOGO',
          title: 'Jogo'
        },
        {
          id: 'KG',
          title: 'Quilograma'
        },
        {
          id: 'KIT',
          title: 'Kit'
        },
        {
          id: 'LATA',
          title: 'Lata'
        },
        {
          id: 'LITRO',
          title: 'Litro'
        },
        {
          id: 'M',
          title: 'Metro'
        },
        {
          id: 'M2',
          title: 'Metro quadrado'
        },
        {
          id: 'M3',
          title: 'Metro cúbico'
        },
        {
          id: 'MILHEI',
          title: 'Milheiro'
        },
        {
          id: 'ML',
          title: 'Mililitro'
        },
        {
          id: 'MWH',
          title: 'Megawatt hora'
        },
        {
          id: 'PACOTE',
          title: 'Pacote'
        },
        {
          id: 'PALETE',
          title: 'Palete'
        },
        {
          id: 'PARES',
          title: 'Pares'
        },
        {
          id: 'PC',
          title: 'Peça'
        },
        {
          id: 'POTE',
          title: 'Pote'
        },
        {
          id: 'K',
          title: 'Quilate'
        },
        {
          id: 'RESMA',
          title: 'Resma'
        },
        {
          id: 'ROLO',
          title: 'Rolo'
        },
        {
          id: 'SACO',
          title: 'Saco'
        },
        {
          id: 'SACOLA',
          title: 'Sacola'
        },
        {
          id: 'TAMBOR',
          title: 'Tambor'
        },
        {
          id: 'TANQUE',
          title: 'Tanque'
        },
        {
          id: 'TON',
          title: 'Tonelada'
        },
        {
          id: 'TUBO',
          title: 'Tubo'
        },
        {
          id: 'UNID',
          title: 'Unidade'
        },
        {
          id: 'VASIL',
          title: 'Vasilhame'
        },
        {
          id: 'VIDRO',
          title: 'Vidro'
        }
      ],
      form: {
        product_category_id: null,
        title: null,
        price: 0,
        weigh: 0,
        cfop: '5101',
        ucom: 'PC',
        icms: '103',
        ipi: '53',
        pis: '07',
        cofins: '07'
      },
      rules: {
        company_id: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        product_category_id: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        title: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        price: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        weigh: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],

        cfop: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        ucom: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        icms: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        ipi: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        pis: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        cofins: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  created() {
    getAllProductCategories().then(response => {
      this.categories = response.data.data
    })

    if (this.$route.params.id) {
      this.loading = true
      show(this.$route.params.id).then(response => {
        Object.keys(this.form).forEach(key => {
          this.form[key] = response.data.data[key]
        })
        this.loading = false
      })
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          save(this.form, this.$route.params.id)
            .then(response => {
              this.$message({
                message: 'Salvo com sucesso',
                type: 'success',
                duration: 5 * 1000
              })
              if (!this.$route.params.id) {
                this.$refs[formName].resetFields()
              }
            })
            .finally(responde => {
              this.loading = false
            })
        }
      })
    }
  }
}
</script>
<style>
.el-card {
	margin-bottom: 15px;
}
</style>
