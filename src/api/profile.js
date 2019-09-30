import request from '@/utils/request'

export function setChooseCompany(data) {
  return request({
    url: '/profile/choose-company',
    method: 'put',
    data
  })
}