<template>
  <div class="app-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>Informações</span>
      </div>
      <el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
        <el-row :gutter="10">
          <el-col :md="24" :sm="24">
            <el-form-item label="Papel" prop="role" v-if="rolesUser.length">
              <el-select
                filterable
                :disabled="loading"
                v-model="form.role"
                placeholder="Select"
              >
                <el-option
                  v-for="item in rolesUser"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="24" :sm="24" v-if="this.form.role == 'administrator' || this.form.role == 'client'">
            <el-form-item label="Empresas" prop="company">
              <el-transfer :titles="['Disponíveis', 'Vinculados']" v-model="form.companies" :data="companies" @change="handleChange"></el-transfer>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">            
            <el-form-item label="Cliente" prop="client_id" v-if="this.form.role == 'client'">
              <el-select filterable :disabled="loading || !clients.length" v-model="form.client_id">
                <el-option
                  v-for="item in clients"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Nome" prop="name">
              <el-input :disabled="loading" v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="E-mail" prop="email">
              <el-input :disabled="loading" v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Senha" prop="password">
              <el-input type="password" :disabled="loading" v-model="form.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Confirmar senha" prop="password_confirmation">
              <el-input type="password" :disabled="loading" v-model="form.password_confirmation"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="24" :sm="24">
            <el-form-item>
              <router-link :to="{ name: 'user' }" class="pull-left">
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
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>

import checkPermission from '@/utils/permission'
import { getAllClients } from '@/api/client'
import { show, save } from '@/api/user'
import { getAllCompany } from '@/api/company'

export default {
  data() {
    return {      
      companies: [],
      clients: [],
      rolesUser: [{ value: 'administrator', label: 'Administrador' }, { value: 'client', label: 'Cliente' }],
      loading: false,
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        role: null,
        client_id: null,
        companies: []
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        email: [
          {
            required: true,
            message: 'E-mail inválido',
            type: 'email'
          }
        ],
        password: [
          {
            required: !this.$route.params.id,
            min: 8,
            message: 'Campo deve conter no mínimo 8 caracteres'
          }
        ],
        role: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        password_confirmation: [
          {
            validator: (rule, value, callback) => {
              if (this.form.password && value !== this.form.password) {
                callback(new Error('As senhas não combinam!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        companies: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        client_id: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ]
      }
    }
  },
  created() {
    if (checkPermission(['root', 'administrator'])) {
      let __this = this
      getAllCompany().then(response => {
        response.data.data.map(function(value){
          __this.companies.push({
            key: value.id,
            label: value.title,
          })
        })
      })
    }
    if (checkPermission(['root'])) {
      this.rolesUser.push({ value: 'root', label: 'Root' })
    }
    this.getUser()
  },
  methods: {
    checkPermission,
     handleChange(value, direction, movedKeys) {
      const __this = this
      __this.clients = []      
      if (__this.form.companies.length) {
        getAllClients({ companies: __this.form.companies }).then(response => {
          __this.form.client_id = null
          __this.clients = response.data.data
        })
      }
    },
    getUser() {
      if (this.$route.params.id) {
        this.loading = true
        show(this.$route.params.id).then(response => {
          Object.keys(this.form).forEach(key => {
            if(key == 'companies') {
              Object.values(response.data.data[key]).forEach(value => {
                this.form[key].push(value.id);                              
              })
            } else {
              this.form[key] = response.data.data[key]
            }
          })
          getAllClients({companies: this.form.companies}).then(response => {
            this.clients = response.data.data
          })
          this.loading = false
        })
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
    }
  }
}
</script>
<style>
  .el-transfer-panel {
    width: 40%;
  }
  .el-transfer__buttons {
    padding: 0 7%;
  }
  .el-transfer__button:nth-child(2) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 764px) {
    .el-transfer-panel {
      width: 100%;
    }
    .el-transfer__buttons {
      padding: 0 50%;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
</style>