import { useSelector } from "react-redux";
import  traducciones  from "../src/languages/traducciones";


export const useLanguage = () => {
    const language = useSelector((state: any) => state.lang);
    
    return traducciones[language];
}
