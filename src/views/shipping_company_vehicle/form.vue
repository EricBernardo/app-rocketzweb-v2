<template>
<div class="app-container">
	<el-card>
		<div slot="header" class="clearfix">
			<span>Informações</span>
		</div>
		<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
			<el-row :gutter="10">
				<el-col :md="12" :sm="24">
					<el-form-item label="Transportadora" prop="shipping_company_id">
						<el-select filterable v-model="form.shipping_company_id" :disabled="loading || !this.shipping_companies.length">
							<el-option v-for="item in shipping_companies"
							           :key="item.id"
							           :label="item.title"
							           :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Placa" prop="board">
						<el-input v-model="form.board" :disabled="loading" :maxlength="7"></el-input>
					</el-form-item>
				</el-col>
				<el-col :md="12" :sm="24">
					<el-form-item label="Estado" prop="state_id">
						<el-select filterable v-model="form.state_id" :disabled="loading">
							<el-option v-for="item in states" :key="item.id" :label="item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :md="24" :sm="24">
					<el-form-item>
						<router-link to="/shipping_company_vehicle" class="pull-left">
							<el-button size="mini">Voltar</el-button>
						</router-link>
						<el-button size="mini" :loading="loading" type="primary" class="pull-right" @click="onSubmit('form')">Salvar</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</el-card>
</div>
</template>

<script>

import { getStates } from '@/api/state'
import { show, save } from '@/api/shipping_company_vehicle'
import { getAllShippingCompany } from '@/api/shipping_company'

export default {
  data() {
    return {
      loading: false,
      states: [],
      companies: [],
      shipping_companies: [],
      form: {
        shipping_company_id: null,
        state_id: null,
        board: null
      },
      rules: {
        shipping_company_id: [
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
        board: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ]
      }
    }
  },
  created() {
    getStates().then(response => {
      this.states = response.data.data
    })
    getAllShippingCompany().then(response => {
      this.shipping_companies = response.data.data
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
                this.shipping_companies = []
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
