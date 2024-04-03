import pt from '../lang/pt.json'
import en from '../lang/en.json'

const getLang = () =>{
    const lang = window.localStorage.getItem('language')
    const data = lang === 'pt' ? pt : en;
    return data
}
export default getLang