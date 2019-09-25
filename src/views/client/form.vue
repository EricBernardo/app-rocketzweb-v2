<template>
<div class="app-container">
	<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
		<el-row :gutter="10">
			<el-card>
				<div slot="header" class="clearfix">
					<span>Informações</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="Empresa" prop="company_id" v-if="profile.role=='root'">
						<el-select filterable v-model="form.company_id" :disabled="loading">
							<el-option v-for="item in companies" :key="item.id" :label="item.title" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Razão social/Nome" prop="title">
						<el-input v-model="form.title" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Nome fantasia" prop="fantasy">
						<el-input v-model="form.fantasy" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="CPF" prop="cpf" v-mask="'###.###.###-##'">
						<el-input v-model="form.cpf" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="CNPJ" prop="cnpj" v-mask="'##.###.###/####-##'">
						<el-input v-model="form.cnpj" :disabled="loading || loading_cnpj">
							<el-button :loading="loading_cnpj" slot="append" icon="el-icon-search" @click.prevent="infoCnpj" title="Consultar CNPJ"></el-button>
						</el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="E-mail" prop="email">
						<el-input v-model="form.email" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Telefone" prop="phone">
						<el-input v-model="form.phone" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Endereço</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="CEP" prop="cep">
						<el-input v-model="form.cep" :disabled="loading || loading_cep" v-mask="'#####-###'">
							<el-button :loading="loading_cep" slot="append" icon="el-icon-search" @click.prevent="getCep(true)" title="Consultar CEP"></el-button>
						</el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Estado" prop="state_id">
						<el-select filterable v-model="form.state_id" @change="getCities(true)" :disabled="loading || loading_cep || loading_cities">
							<el-option v-for="item in states" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Cidade" prop="city_id">
						<el-select filterable v-model="form.city_id" :disabled="loading || loading_cep || loading_cities">
							<el-option v-for="item in cities" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Bairro" prop="neighborhood">
						<el-input v-model="form.neighborhood" :disabled="loading || loading_cep"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Endereço" prop="address">
						<el-input v-model="form.address" :disabled="loading || loading_cep"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Número" prop="number">
						<el-input-number v-model="form.number" :disabled="loading" controls-position="right" :min="1" :max="99999"></el-input-number>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item label="Complemento" prop="complement">
						<el-input type="textarea" v-model="form.complement" :disabled="loading" :rows="5"></el-input>
					</el-form-item>
				</el-col>
			</el-card>
			<el-card>
				<div slot="header" class="clearfix">
					<span>Informações fiscais</span>
				</div>
				<el-col :md="12" :sm="24">
					<el-form-item label="Inscrição estadual" prop="ie">
						<el-input v-model="form.ie" :disabled="loading"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Indicador da IE do destinatário" prop="indIEDest">
						<el-select filterable v-model="form.indIEDest" :disabled="loading">
							<el-option v-for="item in indIEDests" :key="item.id" :label="item.id + ' - ' + item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item>
						<router-link to="/client" class="pull-left">
							<el-button size="mini">Voltar</el-button>
						</router-link>
						<el-button size="mini" :loading="loading" type="primary" class="pull-right" @click="onSubmit('form')">Salvar</el-button>
					</el-form-item>
				</el-col>
			</el-card>
		</el-row>
	</el-form>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getStates } from '@/api/state'
import { getCities } from '@/api/city'
import { getCEP } from '@/api/cep'
import { show, save } from '@/api/client'
import { getAllCompany } from '@/api/company'
import { getInfoCnpj } from '@/api/cnpj'

export default {
  data() {
    const validCnpjCpf = (rule, value, callback) => {
      if ((this.form.cnpj && this.form.cpf) || (!this.form.cnpj && !this.form.cpf)) {
        callback(new Error('Preencha o campo CPF ou CNPJ'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loading_cep: false,
      loading_cities: false,
      loading_cnpj: false,
      states: [],
      cities: [],
      companies: [],
      indIEDests: [
        {
          id: 1,
          name: 'Contribuinte ICMS (informar a IE do destinatário)'
        },
        {
          id: 2,
          name: 'Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS'
        },
        {
          id: 9,
          name: 'Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS'
        }
      ],
      form: {
        company_id: null,
        title: null,
        address: null,
        cep: null,
        state_id: null,
        city_id: null,
        cnpj: null,
        neighborhood: null,
        number: null,
        phone: null,
        complement: null,
        fantasy: null,
        cpf: null,
        ie: null,
        indIEDest: 1,
        email: null
      },
      rules: {
        company_id: [
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
        address: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        cep: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        state_id: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        city_id: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        neighborhood: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        number: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        email: [
          {
            message: 'E-mail inválido',
            type: 'email'
          }
        ],
        cpf: [
          {
            validator: validCnpjCpf
          }
        ],
        cnpj: [
          {
            validator: validCnpjCpf
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  created() {
    getStates().then(response => {
      this.states = response.data.data
    })

    if (this.profile.role == 'root') {
      getAllCompany().then(response => {
        this.companies = response.data.data
      })
    }

    if (this.$route.params.id) {
      this.loading = true
      show(this.$route.params.id).then(response => {
        Object.keys(this.form).forEach(key => {
          this.form[key] = response.data.data[key]
          if (key == 'state_id') {
            this.getCities()
          }
        })
        this.loading = false
      })
    }
  },
  methods: {
    infoCnpj() {
      if (this.form.cnpj && this.form.cnpj.length >= 14) {
        this.loading_cnpj = true
        getInfoCnpj({ cnpj: this.form.cnpj.replace(/\D/g, '') })
          .then(response => {
            if (response.data.data.nome) this.form.title = response.data.data.nome
            if (response.data.data.fantasia) this.form.fantasy = response.data.data.fantasia
            if (response.data.data.cep) this.form.cep = response.data.data.cep
            if (response.data.data.bairro) this.form.neighborhood = response.data.data.bairro
            if (response.data.data.numero) this.form.number = response.data.data.numero.replace(/\D/g, '')
            if (response.data.data.logradouro) this.form.address = response.data.data.logradouro
            if (response.data.data.complemento) this.form.complement = response.data.data.complemento
            if (response.data.data.telefone) this.form.phone = response.data.data.telefone
            if (response.data.data.fantasia) this.form.fantasy = response.data.data.fantasia
            if (this.form.cep) this.getCep(false)
          })
          .finally(response => {
            this.loading_cnpj = false
          })
      } else {
        this.$message.warning(`CNPJ inválido.`)
      }
    },
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
    },
    getCities(change = false, city = null) {
      const __this = this
      __this.loading_cities = true
      getCities(this.form.state_id).then(response => {
        this.cities = response.data.data
        const form = this.form
        if (change) {
          form.city_id = null
          if (city) {
            this.cities.map(function(item) {
              if (item.name === city) {
                form.city_id = item.id
              }
            })
          }
        }
        __this.loading_cities = false
      })
    },
    getCep(clear) {
      const __this = this
      __this.loading_cep = true
      __this.cities = []
      __this.form.state_id = null
      __this.form.city_id = null
      if (clear) {
        __this.form.address = null
        __this.form.neighborhood = null
      }
      getCEP(this.form.cep)
        .then(response => {
          if (response.data.data) {
            if (response.data.data.bairro) __this.form.neighborhood = response.data.data.bairro
            if (response.data.data.logradouro) __this.form.address = response.data.data.logradouro
            __this.states.map(function(state) {
              if (state.abbr === response.data.data.uf) {
                __this.form.state_id = state.id
                __this.getCities(__this.form.state_id, response.data.data.localidade)
              }
            })
          }
        })
        .finally(response => {
          __this.loading_cep = false
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
