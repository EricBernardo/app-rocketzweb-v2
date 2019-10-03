<template>
  <div class="app-container">
    <el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
      <el-row :gutter="10">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Informações</span>
          </div>
          <el-col :md="12" :sm="24">
            <el-form-item label="CNPJ" prop="cnpj" v-mask="'##.###.###/####-##'">
              <el-input v-model="form.cnpj" :disabled="loading || loading_cnpj">
                <el-button
                  :loading="loading_cnpj"
                  slot="append"
                  icon="el-icon-search"
                  @click.prevent="infoCnpj"
                  title="Consultar CNPJ"
                ></el-button>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Razão social" prop="title">
              <el-input v-model="form.title" :disabled="loading"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Nome Fantasia" prop="fantasy">
              <el-input v-model="form.fantasy" :disabled="loading"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Telefone" prop="phone">
              <el-input v-model="form.phone" :disabled="loading"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Inscrição estadual" prop="ie">
              <el-input v-model="form.ie" :disabled="loading"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Logo">
              <el-upload
                class="company-image-uploader"
                :action="`${base_api}/company/image`"
                :headers="{'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="form.image_url" :src="form.image_url" class="company-image" />
                <i v-else class="el-icon-plus company-image-uploader-icon"></i>
              </el-upload>
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
                <el-button
                  :loading="loading_cep"
                  slot="append"
                  icon="el-icon-search"
                  @click.prevent="getCep(true)"
                  title="Consultar CEP"
                ></el-button>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Estado" prop="state_id">
              <el-select
                filterable
                v-model="form.state_id"
                @change="getCities(true)"
                :disabled="loading || loading_cep || loading_cities"
              >
                <el-option
                  v-for="item in states"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="Cidade" prop="city_id">
              <el-select
                filterable
                v-model="form.city_id"
                :disabled="loading || loading_cep || loading_cities"
              >
                <el-option
                  v-for="item in cities"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
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
              <el-input-number
                v-model="form.number"
                :disabled="loading"
                controls-position="right"
                :min="1"
                :max="99999"
              ></el-input-number>
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
            <el-form-item label="CRT (Código regime tributário)" prop="crt">
              <el-select filterable v-model="form.crt" :disabled="loading">
                <el-option v-for="item in crts" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-card>
        <el-card>
          <div slot="header" class="clearfix">
            <span>Certificado Dígital (A1)</span>
          </div>
          <el-col :md="12" :sm="24">
            <el-form-item label="Arquivo (.PFX)" prop="cert_file">
              <el-upload
                class="cert_file"
                :action="`${base_api}/company/file`"
                :headers="{'Authorization': 'Bearer ' + token, 'Accept': 'application/json' }"
                :file-list="fileList"
                :on-change="handleChange"
                :on-error="handleUploadError"
                :on-success="handleSuccess"
                :on-exceed="handleExceed"
                :before-remove="beforeRemove"
                :on-progress="handleProgress"
                :limit="1"
              >
                <el-button size="small" type="default" :disabled="loading">Arquivo</el-button>
              </el-upload>
            </el-form-item>
          </el-col>              
          <el-col :md="12" :sm="24">
            <el-form-item label="Senha do arquivo" prop="cert_password">
              <el-input v-model="form.cert_password" :disabled="loading"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="24" :sm="24" v-if="form.cert_expiration_date">
            <p><b><font color="#f0c78a">válido até: {{ form.cert_expiration_date | moment("DD/MM/YYYY") }}</font></b></p>
          </el-col>
        </el-card>
        <el-card>
          <div slot="header" class="clearfix">
            <span>Impostos (%)</span>
          </div>
          <el-col :md="12" :sm="24">
            <el-form-item label="(IRPJ) Imposto de Renda de Pessoa Jurídica​" prop="irpj">
              <el-input-number
                v-model="form.irpj"
                :disabled="loading"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item
              label="COFINS (Contribuição pa​ra Financiamento de Seguridade Social)"
              prop="cofins"
            >
              <el-input-number
                v-model="form.cofins"
                :disabled="loading"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="(PIS) Programa de Integração Social" prop="pis">
              <el-input-number
                v-model="form.pis"
                :disabled="loading"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="(CSLL) Contribuição Social sobre Lucro Líquido" prop="csll">
              <el-input-number
                v-model="form.csll"
                :disabled="loading"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="(ISS) Imposto sobre Serviço de Qualquer Natureza" prop="iss">
              <el-input-number
                v-model="form.iss"
                :disabled="loading"
                controls-position="right"
                :min="0"
                :max="100"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :md="24" :sm="24">
            <el-form-item>
              <router-link :to="{ name: 'company' }" class="pull-left">
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
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { getProfile } from '@/api/user'
import { show, save, destroyFile } from '@/api/company'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
import { getStates } from '@/api/state'
import { getCities } from '@/api/city'
import { getCEP } from '@/api/cep'
import { getInfoCnpj } from '@/api/cnpj'
import checkPermission from '@/utils/permission'

export default {
  data() {
    return {
      fileList: [],
      token: getToken(),
      base_api: process.env.VUE_APP_BASE_API,
      loading: false,
      loading_cep: false,
      loading_cities: false,
      loading_cnpj: false,
      states: [],
      cities: [],
      crts: [
        {
          id: 1,
          name: 'Simples Nacional'
        },
        {
          id: 2,
          name: 'Simples Nacional – excesso de sublimite da receita bruta'
        },
        {
          id: 3,
          name: 'Regime Normal NOTAS EXPLICATIVAS'
        }
      ],
      form: {
        title: null,
        fantasy: null,
        cert_password: null,
        cert_file: null,
        ie: null,
        crt: 1,
        cnpj: null,
        address: null,
        number: null,
        neighborhood: null,
        state_id: null,
        city_id: null,
        cep: null,
        irpj: 0,
        cofins: 0,
        pis: 0,
        csll: 0,
        iss: 0,
        phone: null,
        complement: null,
        image: null,
        image_url: null,
        cert_expiration_date: null
      },
      rules: {
        title: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        fantasy: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        crt: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        cnpj: [
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
        number: [
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
        cep: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        irpj: [
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
        ],
        pis: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        csll: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        iss: [
          {
            required: true,
            message: 'Campo obrigatório'
          }
        ],
        phone: [
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
    this.getCompany()
  },
  methods: {
    getCompany() {
      if (this.$route.params.id) {
        this.loading = true
        this.fileList = []
        show(this.$route.params.id).then(response => {
          Object.keys(this.form).forEach(key => {
            this.form[key] = response.data.data[key]
            if (key == 'state_id') {
              this.getCities()
            }
            if (key == 'cert_file' && response.data.data[key]) {
              this.fileList.push({ name: response.data.data[key] })
            }
          })
          this.loading = false
        })
      }
    },
    checkPermission,
    getProfile() {
      const __this = this
      __this.loading = true
      getProfile().then(response => {
        __this.$store.dispatch('user/setProfile', response.data.data)
        __this.loading = false
      })
    },
    handleAvatarSuccess(res, file) {
      this.form.image = res.data.image
      this.form.image_url = res.data.image_url
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpg'
      const isJPEG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG && !isJPEG && !isPNG) {
        this.$message.error('A imagem tem que ser do formato JPG, JPEG ou PNG!')
      }
      if (!isLt2M) {
        this.$message.error('A imagem tem que ter no máximo 2MB!')
      }
      return (isJPG || isJPEG || isPNG) && isLt2M
    },
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
            if (this.form.cep) this.getCep(false)
          })
          .finally(response => {
            this.loading_cnpj = false
          })
      } else {
        this.$message.warning(`CNPJ inválido.`)
      }
    },
    handleProgress(event, file, fileList) {
      this.loading = true
    },
    handleChange(event, file, fileList) {
      this.loading = false
    },
    handleExceed(files, fileList) {
      this.$message.warning(`Para atualizar o arquivo, apague o atual.`)
    },
    beforeRemove(file) {
      return this.$confirm(`Desejas realmente excluir esse arquivo?`).then(() => {
        if (!this.$route.params.id && this.form.cert_file) {
          this.loading = true
          destroyFile(file.name).then(response => {
            this.loading = false
          })
        }
        this.form.cert_file = null
      })
    },
    handleSuccess(file) {
      this.form.cert_file = file.data
      this.fileList = []
      this.fileList.push({ name: file.data })
    },
    handleUploadError(msg, file) {
      if (msg.status !== 404) {
        const obj = JSON.parse(msg.message)
        Message({
          message: obj.errors != undefined ? obj.errors.file[0] : obj.message,
          type: 'error',
          duration: 5 * 1000,
          dangerouslyUseHTMLString: true
        })
      } else {
        Message({
          message: 'Ocorreu algum erro. Tente novamente mais tarde.',
          type: 'error',
          duration: 5 * 1000,
          dangerouslyUseHTMLString: true
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
                this.fileList = []
                this.$refs[formName].resetFields()
              } else {
                this.getProfile()
                this.getCompany()
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
.el-radio,
.cert_file {
  width: 100%;
  float: left;
}
.el-radio {
  margin-top: 5px;
}
.company-image-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.company-image-uploader .el-upload:hover {
  border-color: #409eff;
}
.company-image-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.company-image {
  width: 178px;
  height: 178px;
  display: block;
}
font {
  font-size: 14px;
}
</style>
