import store from '@/store'

export default function certFileisValid() {
  
  const date = store.getters && store.getters.profile.cert_expiration_date

  if (date) {
    
    const date1 = new Date(date);
    const date2 = new Date();    
    const diffTime = Math.abs(date2 - date1);  
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if(diffDays > 0) {
      return true;
    }    

  } 
  
  return false

}
