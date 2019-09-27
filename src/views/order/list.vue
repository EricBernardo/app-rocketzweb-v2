<template>
  <div class="app-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>Listagem</span>
      </div>
      <router-link :to="{ name: 'order.create' }">
        <el-button type="success" class="pull-right m-b-10" size="mini">Cadastrar</el-button>
      </router-link>
      <el-table
        v-loading="listLoading"
        :data="list.data"
        element-loading-text="Carregando..."
        border
      >
        <el-table-column label="Empresa" v-if="checkPermission(['root'])">
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
        <el-table-column label="Ações fiscais" width="125">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="Gerar NFE" placement="left">
              <el-button
                class="button-order-list"
                type="warning"
                plain
                icon="el-icon-setting"
                :disabled="Boolean(scope.row.receipt)"
                :loading="loading_generate_invoice"
                @click.prevent="generateInvoice(scope)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Consultar NFE" placement="left">
              <el-button
                class="button-order-list"
                type="success"
                plain
                icon="el-icon-search"
                :disabled="!Boolean(scope.row.receipt)"
                :loading="loading_consult_protocol"
                @click.prevent="showProtocol(scope.row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Baixar DANFE" placement="left">
              <el-button
                class="button-order-list"
                type="primary"
                plain
                icon="el-icon-download"
                @click.prevent="downloadDanfe(scope.row.id)"
                :loading="loading_download_danfe"
                :disabled="!Boolean(scope.row.xml)"
              ></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Cancelar NFE" placement="left">
              <el-button
                class="button-order-list"
                type="danger"
                plain
                icon="el-icon-delete"
                :disabled="!Boolean(scope.row.receipt)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="-" width="125">
          <template slot-scope="scope">
            <router-link :to="{ name: 'order.edit', params: { id: scope.row.id } }">
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-edit"
                class="button-order-list"
              >Editar</el-button>
            </router-link>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click.prevent="destroyData(scope.row.id)"
              class="button-order-list"
            >Excluir</el-button>
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
import checkPermission from '@/utils/permission'
import { get, destroy, createInvoice, showProtocol, downloadDanfe } from '@/api/order'
import axios from 'axios'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: {},
      listLoading: false,
      loading_generate_invoice: false,
      loading_download_danfe: false,
      loading_consult_protocol: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    checkPermission,
    downloadDanfe(id) {
      this.loading_download_danfe = true
      downloadDanfe(id)
        .then(response => {
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
    generateInvoice(scope) {
      this.loading_generate_invoice = true
      createInvoice(scope.row.id)
        .then(response => {
          scope.row.xml = response.data.xml
          scope.row.receipt = response.data.receipt
          if (response.data.receipt) {
            this.$alert('NFE Gerada com sucesso!', 'Atenção', {
              confirmButtonText: 'OK',
              type: 'success'
            })
          }
          this.loading_generate_invoice = false
        })
        .catch(() => {
          this.loading_generate_invoice = false
        })
    },
    showProtocol(id) {
      this.loading_consult_protocol = true
      showProtocol(id)
        .then(response => {
          this.$alert(
            response.data.data.protNFe.infProt.xMotivo,
            response.data.data.protNFe.infProt.cStat != 103 ? 'Atenção' : 'Resultado',
            {
              confirmButtonText: 'OK',
              type: response.data.data.protNFe.infProt.cStat != 103 ? 'warning' : 'success'
            }
          )
          this.loading_consult_protocol = false
        })
        .catch(error => {
          this.$alert(error.message, 'Atenção', {
            confirmButtonText: 'OK',
            type: 'warning'
          })
          this.loading_consult_protocol = false
        })
    },
    fetchData(page = 1) {
      this.listLoading = true
      var params = { page: page }
      get(params).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    destroyData(id) {
      this.$confirm('Desejas realmente excluir esse registro?', 'Atenção', {
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      })
        .then(() => {
          destroy(id).then(response => {
            this.fetchData()
          })
        })
        .catch(() => { })
    }
  }
}
</script>
<style scoped>
.button-order-list {
  width: 100%;
  float: left;
  margin-bottom: 5px;
  margin-left: 0px;
}
</style>
