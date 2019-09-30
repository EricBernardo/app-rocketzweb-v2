import Cookies from 'js-cookie'

const ChooseCompanyKey = 'choose_company'

export function getChooseCompany() {
  return Cookies.get(ChooseCompanyKey)
}

export function setChooseCompany(token) {
  return Cookies.set(ChooseCompanyKey, token)
}

export function removeChooseCompany() {
  return Cookies.remove(ChooseCompanyKey)
}
