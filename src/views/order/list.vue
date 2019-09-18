<template>
  <div class="app-container">
    <el-card>
      <router-link :to="{ name: 'order.create' }">
        <el-button type="success" class="pull-right m-b-10" size="mini">Cadastrar</el-button>
      </router-link>
      <el-table v-loading="listLoading" :data="list.data" element-loading-text="Carregando..." border>
        <el-table-column label="Empresa" v-if="profile.role == 'root'">
          <template
            slot-scope="scope"
          >{{ scope.row.client.company ? scope.row.client.company.title : '' }}</template>
        </el-table-column>
        <el-table-column label="Cliente">
          <template slot-scope="scope">{{ scope.row.client.title }}</template>
        </el-table-column>
        <el-table-column label="Preço">
          <template slot-scope="scope">R$ {{ scope.row.total }}</template>
        </el-table-column>
        <el-table-column label="Data de emissão">
          <template slot-scope="scope">{{ scope.row.date | moment("DD/MM/YYYY") }}</template>
        </el-table-column>
        <el-table-column label="-">
          <template slot-scope="scope">            
              <el-tooltip class="item" effect="dark" content="Gerar NFE" placement="top-start">
                <el-button class="button-nfe" type="warning" icon="el-icon-setting" :disabled="Boolean(scope.row.receipt)" :loading="loading_generate_invoice" @click.prevent="generateInvoice(scope.row.id)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Baixar DANFE" placement="top-start">
                <el-button class="button-nfe" type="primary" icon="el-icon-download" @click.prevent="downloadDanfe(scope.row.id)" :loading="loading_download_danfe" :disabled="!Boolean(scope.row.receipt)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Cancelar NFE" placement="top-start">
                <el-button class="button-nfe" type="danger" icon="el-icon-delete" :disabled="!Boolean(scope.row.receipt)"></el-button>
              </el-tooltip>            
          </template>
        </el-table-column>
        <el-table-column label="-">
          <template slot-scope="scope">           
              <router-link :to="{ name: 'order.edit', params: { id: scope.row.id } }" class="pull-left">
                <el-button type="primary" size="mini" icon="el-icon-edit">Editar</el-button>
              </router-link>
              <el-button type="danger" size="mini" icon="el-icon-delete" @click.prevent="destroyData(scope.row.id)" class="pull-left">Excluir</el-button>            
          </template>
        </el-table-column>
      </el-table>
      <pagination :data="list" @pagination-change-page="fetchData">
        <span slot="prev-nav">Anterior</span>
        <span slot="next-nav">Próximo</span>
      </pagination>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { get, destroy, createInvoice, downloadDanfe } from "@/api/order";
import axios from 'axios';

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: {},
      listLoading: false,
      loading_generate_invoice: false,
      loading_download_danfe: false
    };
  },
  computed: {
    ...mapGetters(["profile"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    downloadDanfe(id) {
      this.loading_download_danfe = true
      downloadDanfe(id).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', id + '-danfe.pdf')
        document.body.appendChild(link)
        link.click()
        this.loading_download_danfe = false
      })
      .catch(() => {
        this.loading_download_danfe = false
      })
    },
    generateInvoice(id) {
      this.$confirm("Desejas realmente gerar o NFE?", "Atenção", {
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        type: "warning"
      })
      .then(() => {      
        this.loading_generate_invoice = true  
        createInvoice(id)
        .then(response => {
          this.loading_generate_invoice = false
        })
        .catch(() => {        
          this.loading_generate_invoice = false
        })

      })      
    },
    fetchData(page = 1) {
      this.listLoading = true
      var params = { page: page }
      get(params).then(response => {
        this.list = response.data
        this.listLoading = false
      });
    },
    destroyData(id) {
      this.$confirm("Desejas realmente excluir esse registro?", "Atenção", {
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        type: "warning"
      })
        .then(() => {
          destroy(id).then(response => {
            this.fetchData();
          });
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
  .el-button {
    margin-left: 5px;
  }
  .button-nfe {
    width: 100%;
    float: left;
    margin-bottom: 5px;
  }
</style>
