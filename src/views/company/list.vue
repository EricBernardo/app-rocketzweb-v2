<template>
  <div class="app-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span>Listagem</span>
      </div>
      <router-link :to="{ name: 'company.create' }" v-if="checkPermission(['root'])">
        <el-button type="success" class="pull-right m-b-10" size="mini">Cadastrar</el-button>
      </router-link>

      <el-table
        v-loading="listLoading"
        :data="list.data"
        element-loading-text="Carregando..."
        border
      >
        <el-table-column label="Razão social">
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column label="-">
          <template slot-scope="scope">
            <router-link :to="{ name: 'company.edit', params: { id: scope.row.id } }">
              <el-button type="primary" size="mini">Editar</el-button>
            </router-link>
            <el-button
              type="danger"
              size="mini"
              @click.prevent="destroyData(scope.row.id)"
              v-if="checkPermission(['root'])"
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
import { get, destroy } from '@/api/company'
import checkPermission from '@/utils/permission'
import { getChooseCompany } from '@/utils/choose-company'
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
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    checkPermission,
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
