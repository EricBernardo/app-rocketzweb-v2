<template>
  <div class="choose-company-container" v-loading="loading" element-loading-text="Aguarde...">
    <el-form class="choose-company-form"label-position="left" v-if="companies.length >= 2">
      <div class="title-container">
        <h3 class="title">Selecione uma empresa</h3>
      </div>
      <el-form-item prop="company_id">
        <el-select
          v-model="company_id"
          filterable
          @change="setCompany(company_id)"
        >
          <el-option
            v-for="item in companies"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { getAllCompany } from '@/api/company'
import { setChooseCompany } from '@/api/profile'

export default {
  data() {
    return {
      company_id: null,
      companies: [],
      loading: false,
      redirect: undefined
    }
  },
  created() {
    this.loading = true
    getAllCompany().then(response => {
      this.companies = response.data.data
      if(this.companies.length == 0) {
        this.$alert('Você não tem empresa', 'Atenção', {
          confirmButtonText: 'OK',          
          type: 'error'
        }).finally(() => {
          this.$store.dispatch('user/logout')
          this.$router.push(`/login`)    
        })
      } else if(this.companies.length == 1) {
        this.setCompany(this.companies[0].id)  
      } else {
        this.loading = false
      }
    })
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    setCompany(company_id) {
      this.loading = true
      setChooseCompany({company_id: company_id}).then(response => {
        this.$store.dispatch("user/setProfile", response.data.data)
        this.$router.push({ path: this.redirect || '/' })
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$bg:#fff;
$dark_gray:#889aa4;
$light_gray:#000;

.choose-company-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .choose-company-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

}
</style>
