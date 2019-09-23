import request from '@/utils/request'

export function getInfoCnpj(params) {
  return request({
    url: '/cnpj/',
    method: 'get',
    params
  })
}
