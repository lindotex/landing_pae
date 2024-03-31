import { useEffect, useState} from 'react'
import pt from '../lang/pt.json'
import en from '../lang/en.json'

const useLanguageSwitcher = () => {

    const[lang,setLang] = useState('')

    // setting language
    useEffect(()=>{

        const language = window.localStorage.getItem('language')

        const handleChange = () => {
            if(language){
                let check = language == 'pt'? pt: en;
                setLang(check);
                if(check === 'pt'){
                    window.localStorage.setItem('language','pt')
                }
            }
        }

        handleChange();
        return 

    },[])

    // Filtering language
    useEffect(() =>{
        if(lang === 'pt'){
            window.localStorage.setItem('language','pt')
        }
        if(lang === 'en'){
            window.localStorage.setItem('language','en')
        }
    },[lang])

    useState(lang)
    return (
        [lang,setLang]
    )
}

export default useLanguageSwitcher